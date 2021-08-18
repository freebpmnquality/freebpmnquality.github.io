const attributeDomainsClassifier = {
    vocabulary: {
        'DateTime': ['birth_date', 'enrollment_date', 'completion_date', 'approval_date'],
        'Number': ['value', 'semester'],
        'Text': ['full_name', 'student_card_id', 'title'],
        'Boolean': []
    },

    suggestDomain: function(attributeTitle) {
        const dataTypes = ['DATETIME', 'DECIMAL(8,2)', 'VARCHAR(255)', 'TINYINT(1)'];
        const domains = [];

        if (this.vocabulary['DateTime'].includes(attributeTitle)) {
            domains[0]++;
        }

        if (this.vocabulary['Number'].includes(attributeTitle)) {
            domains[1]++;
        }

        if (this.vocabulary['Text'].includes(attributeTitle)) {
            domains[2]++;
        }

        if (this.vocabulary['Boolean'].includes(attributeTitle)) {
            domains[3]++;
        }

        return dataTypes[domains.map((x, i) => [x, i]).reduce((r, a) => (a[0] > r[0] ? a : r))[1]];
    }
};

const attributeUniqueClassifier = {
    vocabulary: ['student_card_id'],

    logit: function(x) {
        return 1 / (1 + Math.exp(-x));
    },

    suggestUnique: function(attributeTitle) {
        let x = 0;

        if (this.vocabulary.includes(attributeTitle)) {
            x++;
        }

        return this.logit(x) > 0.5;
    }
};

const brToSQLTranslator = {
    dbName: null,
    businessRulesText: null,
    businessRules: null,
    tables: null,
    script: null,

    extractBusinessRules: function() {
        this.businessRules = this.businessRulesText.split('.');

        this.businessRules = this.businessRules.filter(x => x.length > 0);
        this.businessRules.forEach((x, i) => this.businessRules[i] = x.trim());
    },

    businessRulesToTables: function() {
        const fact = function(rule) {
            const regex = /(each|some)\s+(.+)\s+((is).+)\s+(one|many)\s+(.+)/g;
            return regex.exec(rule.toLowerCase());
        };

        const definition = function(rule) {
            const regex = /(each)\s+(.+)(has)\s+(.+)/g;
            return regex.exec(rule.toLowerCase());
        }

        this.tables = [];

        for (const rule in this.businessRules) {
            let parsed = fact(this.businessRules[rule]);

            if (parsed !== null) {
                parsed.forEach((x, i) => parsed[i] = x.trim().replace(/\s+/g, '_'));

                const subject = parsed[2];
                const cardinality = parsed[5];
                const object = parsed[6];

                if (typeof this.tables[subject] === 'undefined') {
                    this.tables[subject] = {
                        primary: subject + '_id',
                        foreign: [],
                        fields: []
                    };
                }

                if (typeof this.tables[object] === 'undefined') {
                    this.tables[object] = {
                        primary: null,
                        foreign: [],
                        fields: []
                    };
                }

                if (cardinality === 'one') {
                    this.tables[object].primary = subject + '_id';
                    this.tables[object].foreign.push({
                        key: subject + '_id',
                        table: subject
                    });
                } else if (cardinality === 'many') {
                    this.tables[object].primary = object + '_id';
                    this.tables[object].foreign.push({
                        key: subject + '_id',
                        table: subject
                    });
                }
            } else {
                parsed = definition(this.businessRules[rule]);

                if (parsed !== null) {
                    parsed.forEach((x, i) => parsed[i] = x.trim());

                    const subject = parsed[2].replace(/\s+/g, '_');
                    const object = parsed[4];

                    const attributes = object.split(',');
                    attributes.forEach((x, i) => attributes[i] = x.trim().replace(/\s+/g, '_'));

                    if (typeof this.tables[subject] === 'undefined') {
                        this.tables[subject] = {
                            primary: subject + '_id',
                            foreign: [],
                            fields: attributes
                        };
                    } else {
                        this.tables[subject].fields = attributes;
                    }
                }
            }
        }
    },

    tablesToSQL: function(isDropDbIncluded, isCreateDbIncluded) {
        this.script = '';

        if (isDropDbIncluded) {
            this.script += `DROP DATABASE IF EXISTS \`${this.dbName}\`;`;
        }

        if (isCreateDbIncluded) {
            this.script += `CREATE DATABASE IF NOT EXISTS \`${this.dbName}\`;`;
        }

        this.script += `USE \`${this.dbName}\`;`;

        for (const table in this.tables) {
            if ($('#includeDropTables').is(':checked')) {
                this.script += `DROP TABLE IF EXISTS \`${table}\`;`;
            }

            let createTable = `CREATE TABLE \`${table}\` ( \`${this.tables[table].primary}\` INTEGER`;

            if (this.tables[table].foreign.length > 0) {
                for (const i in this.tables[table].foreign) {
                    if (this.tables[table].foreign[i].key !== this.tables[table].primary) {
                        createTable += `, \`${this.tables[table].foreign[i].key}\` INTEGER`;
                    }
                }
            }

            for (const i in this.tables[table].fields) {
                createTable += `, \`${this.tables[table].fields[i]}\` ${attributeDomainsClassifier.suggestDomain(this.tables[table].fields[i])}`;
            }

            createTable += ');';
            this.script += createTable;
        }

        for (const table in this.tables) {
            const alterPrimaryKey = `ALTER TABLE \`${table}\` MODIFY \`${this.tables[table].primary}\` INTEGER AUTO_INCREMENT PRIMARY KEY;`;

            this.script += alterPrimaryKey;
        }

        for (const table in this.tables) {
            if (this.tables[table].foreign.length > 0) {
                for (const i in this.tables[table].foreign) {
                    let alterForeignKey = `ALTER TABLE \`${table}\` MODIFY \`${this.tables[table].foreign[i].key}\` INTEGER NOT NULL;`;

                    this.script += alterForeignKey;

                    alterForeignKey = `ALTER TABLE \`${table}\` ADD FOREIGN KEY (\`${this.tables[table].foreign[i].key}\`) REFERENCES \`${this.tables[table].foreign[i].table}\`(\`${this.tables[table].foreign[i].key}\`);`;

                    this.script += alterForeignKey;
                }
            }
        }

        for (const table in this.tables) {
            for (const i in this.tables[table].fields) {
                if (attributeUniqueClassifier.suggestUnique(this.tables[table].fields[i])) {
                    const alterUniqueIndex = `ALTER TABLE \`${table}\` ADD UNIQUE (\`${this.tables[table].fields[i]}\`);`;

                    this.script += alterUniqueIndex;
                }
            }
        }

        this.script = this.script.replace(/\s+/g, ' ');
        this.script = this.script.split(';').join(';\n\n');
    }
};