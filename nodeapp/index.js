const fs = require('fs');
const parser = require('./app/bpmn/parser')
const measure = require('./app/bpmn/measure')
const suggestion = require('./app/bpmn/suggestion')

const folder = './input/dispatch/';

var stream = fs.createWriteStream('./out.txt');

stream.once('open', function(fd) {
    fs.readdirSync(folder).forEach(file => {
        let xmlModel = fs.readFileSync(folder + file, 'utf8');
        let structure = parser.parse(xmlModel);

        for (let process in structure) {
            console.log('File: ' + file);
            console.log('Process model:');
            console.log(structure[process]);
            let originalMM = measure.originalMismatch(structure[process]);
            let modifiedMM = measure.modifiedMismatch(structure[process]);
            console.log('Original MM:');
            console.log(originalMM);
            console.log('Modified MM:');
            console.log(modifiedMM);

            stream.write(
                file + '\t' +
                process + '\t' +
                originalMM + '\t' +
                modifiedMM + '\n'
            );

            if (modifiedMM > 0) {
                let suggestions = suggestion.suggestChanges(structure[process]);
                console.log('Suggestions:');
                console.log(suggestions);
            }
        }
    });

    stream.end();
});