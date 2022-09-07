function displayMessage(messageText, messageTitle = 'Message') {
    $('#message-title').html(messageTitle);
    $('#message-text').html(messageText);
    $('#messageModal').modal('show');
}

var isChecked = false;

$('#slider').change(async function() {
    var bpmnCode = $('#bpmn-input').text();

    $('#js-canvas').empty();

    var _height = Number.parseInt($('#slider').val());

    var viewer = new BpmnJS({
        container: $('#js-canvas'),
        height: _height
    });

    await viewer.importXML(bpmnCode);

    var canvas = viewer.get('canvas');
    canvas.zoom('fit-viewport');

    if (isChecked) await checkTowardRules();
});

var modelInWork = '01-tasks.bpmn';

var endowment = {
    address: '0xfB457d40ef1d3f774409d3e15C67aABD260F220C',
    tag: 'ethereum',
    ticker: 'ETH'
};

function clearQualityCostBlock() {
    $('#model-quality').text(0);
    $('#model-cost').text(0);
    $('#order-redesign').empty();
}

async function updateStats(stats) {
    var devMode = getURLParam('dev');

    if (devMode === null) {
        var resultStats = await fetch('https://cloudfreebpmnquality.herokuapp.com/api/updateFBPMNQStats.php?users=' + stats.users + '&models=' + stats.models + '&value=' + stats.value + '&guests=' + stats.guests, {
            method: 'GET'
        });

        var resultStatsJSON = await resultStats.json();
        var newStats = resultStatsJSON.result;

        var guests = Math.floor(newStats.guests);
        var users = Math.floor(newStats.users);
        var models = Math.floor(newStats.models);
        var value = newStats.value.toFixed(2);

        $('#stats-guests').text(guests);
        $('#stats-users').text(users);
        $('#stats-models').text(models);
        $('#stats-value').text(value);
    }
}

async function displayExample() {
    $('#file-input').val('');
    $('#file-name').text('01-tasks.bpmn');

    modelInWork = '01-tasks.bpmn';

    var url = 'https://raw.githubusercontent.com/freebpmnquality/freebpmnquality.github.io/master/samples/01-tasks.bpmn';

    var bpmnCode = $.ajax({
        type: this.GET_REQUEST,
        url: url,
        async: false
    }).responseText;

    $('#bpmn-input').text(bpmnCode);

    hljs.highlightAll();

    $('#js-canvas').empty();

    var _height = Number.parseInt($('#slider').val());

    var viewer = new BpmnJS({
        container: $('#js-canvas'),
        height: _height
    });

    await viewer.importXML(bpmnCode);

    var canvas = viewer.get('canvas');
    canvas.zoom('fit-viewport');

    $('#detected-mistakes').html(`<li class="list-group-item list-group-item-action"><small><span class="badge badge-pill badge-info">Info</span> Detected mistakes will be displayed here</small></li>`);
    $('#list-metrics').html(`<li class="list-group-item list-group-item-action"><small><span class="badge badge-pill badge-info">Info</span> Calculated metrics will be displayed here</small></li>`);

    clearQualityCostBlock();
}

var allEnglishVerbs = ['abandon', 'abase', 'abate', 'abbreviate', 'abdicate', 'abduct', 'abet', 'abhor', 'abide', 'abjure', 'abnegate', 'abolish', 'abominate', 'abort', 'abound', 'abrade', 'abridge', 'abrogate', 'abscond', 'abseil', 'absent', 'absolve', 'absorb', 'abstain', 'abstract', 'abuse', 'abut', 'accede', 'accelerate', 'accent', 'accentuate', 'accept', 'access', 'accessorise', 'accessorize', 'acclaim', 'acclimate', 'acclimatise', 'acclimatize', 'accommodate', 'accompany', 'accomplish', 'accord', 'accost', 'account', 'accouter', 'accoutre', 'accredit', 'accrue', 'acculturate', 'accumulate', 'accuse', 'accustom', 'ace', 'ache', 'achieve', 'acidify', 'acknowledge', 'acquaint', 'acquiesce', 'acquire', 'acquit', 'act', 'action', 'activate', 'actualise', 'actualize', 'actuate', 'adapt', 'add', 'addle', 'address', 'adduce', 'adhere', 'adjoin', 'adjourn', 'adjudge', 'adjudicate', 'adjure', 'adjust', 'administer', 'admire', 'admit', 'admonish', 'adopt', 'adore', 'adorn', 'adsorb', 'adulterate', 'adumbrate', 'advance', 'advantage', 'advertise', 'advise', 'advocate', 'aerate', 'affect', 'affiliate', 'affirm', 'affix', 'afflict', 'afford', 'afforest', 'affront', 'age', 'agglomerate', 'aggravate', 'aggregate', 'agitate', 'agonise', 'agonize', 'agree', 'aid', 'ail', 'aim', 'air', 'airbrush', 'airdrop', 'airfreight', 'airlift', 'alarm', 'alert', 'alienate', 'alight', 'align', 'allay', 'allege', 'alleviate', 'allocate', 'allot', 'allow', 'alloy', 'allude', 'ally', 'alphabetise', 'alphabetize', 'alter', 'alternate', 'amalgamate', 'amass', 'amaze', 'amble', 'ambush', 'ameliorate', 'amend', 'amortise', 'amortize', 'amount', 'amplify', 'amputate', 'amuse', 'anaesthetise', 'anaesthetize', 'analyse', 'anchor', 'anesthetize', 'anger', 'angle', 'anglicise', 'anglicize', 'animate', 'anneal', 'annex', 'annihilate', 'annotate', 'announce', 'annoy', 'annul', 'anodise', 'anodize', 'anoint', 'anonymise', 'anonymize', 'answer', 'antagonise', 'antagonize', 'antedate', 'anthologise', 'anthologize', 'anticipate', 'ape', 'apologise', 'apologize', 'apostrophise', 'apostrophize', 'appal', 'appall', 'appeal', 'appear', 'appease', 'append', 'appertain', 'applaud', 'apply', 'appoint', 'apportion', 'appraise', 'appreciate', 'apprehend', 'apprentice', 'apprise', 'approach', 'appropriate', 'approve', 'approximate', 'aquaplane', 'arbitrate', 'arc', 'arch', 'archive', 'argue', 'arise', 'arm', 'arouse', 'arraign', 'arrange', 'array', 'arrest', 'arrive', 'arrogate', 'arse', 'art', 'articulate', 'ascend', 'ascertain', 'ascribe', 'ask', 'asphyxiate', 'aspirate', 'aspire', 'assail', 'assassinate', 'assault', 'assay', 'assemble', 'assent', 'assert', 'assess', 'assign', 'assimilate', 'assist', 'associate', 'assuage', 'assume', 'assure', 'asterisk', 'astonish', 'astound', 'atomise', 'atomize', 'atone', 'atrophy', 'attach', 'attack', 'attain', 'attempt', 'attend', 'attenuate', 'attest', 'attract', 'attribute', 'auction', 'audit', 'audition', 'augment', 'augur', 'authenticate', 'author', 'authorise', 'authorize', 'autograph', 'automate', 'autosave', 'autowind', 'avail', 'avenge', 'aver', 'average', 'avert', 'avoid', 'avow', 'await', 'awake', 'awaken', 'award', 'awe', 'ax', 'axe', 'baa', 'babble', 'baby', 'babysit', 'back', 'backcomb', 'backdate', 'backfill', 'backfire', 'backlight', 'backpack', 'backspace', 'backtrack', 'badger', 'baffle', 'bag', 'bail', 'bait', 'bake', 'balance', 'bale', 'ball', 'balloon', 'ballot', 'balls', 'bamboozle', 'ban', 'band', 'bandage', 'bandy', 'bang', 'bangs', 'banish', 'bank', 'bankroll', 'bankrupt', 'banter', 'baptise', 'baptize', 'bar', 'barbecue', 'bare', 'barf', 'bargain', 'barge', 'bark', 'barnstorm', 'barrack', 'barrel', 'barricade', 'barter', 'base', 'bash', 'bask', 'bastardise', 'bastardize', 'baste', 'bat', 'batch', 'bath', 'bathe', 'batten', 'batter', 'battle', 'baulk', 'bawl', 'bay', 'bayonet', 'be', 'beach', 'beam', 'bean', 'bear', 'beard', 'beat', 'beatbox', 'beatboxer', 'beatify', 'beautify', 'beaver', 'beckon', 'become', 'bed', 'bedazzle', 'bedeck', 'bedevil', 'beef', 'beep', 'beetle', 'befall', 'befit', 'befog', 'befriend', 'beg', 'beget', 'beggar', 'begin', 'begrudge', 'beguile', 'behave', 'behead', 'behold', 'behoove', 'behove', 'belabor', 'belabour', 'belay', 'belch', 'belie', 'believe', 'belittle', 'bellow', 'belly', 'bellyache', 'belong', 'belt', 'bemoan', 'bemuse', 'benchmark', 'bend', 'benefit', 'bequeath', 'berate', 'bereave', 'berth', 'beseech', 'beset', 'besiege', 'besmirch', 'bespatter', 'bespeak', 'best', 'bestir', 'bestow', 'bestride', 'bet', 'betake', 'betide', 'betoken', 'betray', 'better', 'bewail', 'beware', 'bewilder', 'bewitch', 'bias', 'bicker', 'bicycle', 'bid', 'bide', 'biff', 'bifurcate', 'big', 'bike', 'bilk', 'bill', 'billet', 'billow', 'bin', 'bind', 'binge', 'biodegrade', 'bird', 'bisect', 'bitch', 'bite', 'bitmap', 'bivouac', 'bivvy', 'blab', 'blabber', 'black', 'blackball', 'blacken', 'blacklist', 'blackmail', 'blag', 'blame', 'blanch', 'blank', 'blanket', 'blare', 'blaspheme', 'blast', 'blather', 'blaze', 'blazon', 'bleach', 'bleat', 'bleed', 'bleep', 'blemish', 'blench', 'blend', 'bless', 'blight', 'blind', 'blindfold', 'blindfolded', 'blindside', 'blink', 'bliss', 'blister', 'blitz', 'bloat', 'block', 'blockade', 'blog', 'blood', 'bloom', 'bloop', 'blossom', 'blot', 'blow', 'blub', 'blubber', 'bludge', 'bludgeon', 'bluff', 'blunder', 'blunt', 'blur', 'blurt', 'blush', 'bluster', 'board', 'boast', 'bob', 'bobble', 'bode', 'bodge', 'bog', 'boggle', 'boil', 'bolster', 'bolt', 'bomb', 'bombard', 'bond', 'bone', 'bonk', 'boo', 'boob', 'boogie', 'book', 'bookmark', 'boom', 'boomerang', 'boost', 'boot', 'bootleg', 'booze', 'bop', 'border', 'bore', 'born', 'borrow', 'boss', 'botch', 'bother', 'bottle', 'bottleful', 'bottom', 'bounce', 'bound', 'bow', 'bowdlerise', 'bowdlerize', 'bowl', 'bowlful', 'box', 'boycott', 'braai', 'brace', 'braces', 'bracket', 'brag', 'braid', 'brain', 'brainstorm', 'brainwash', 'braise', 'brake', 'branch', 'brand', 'brandish', 'brave', 'brawl', 'bray', 'brazen', 'breach', 'break', 'breakfast', 'breast', 'breastfeed', 'breathalyse', 'breathalyze', 'breathe', 'breed', 'breeze', 'brew', 'bribe', 'brick', 'bridge', 'bridle', 'brief', 'brighten', 'brim', 'bring', 'bristle', 'broach', 'broadcast', 'broaden', 'broadside', 'broil', 'broker', 'brood', 'brook', 'browbeat', 'brown', 'browse', 'bruise', 'bruit', 'brush', 'brutalise', 'brutalize', 'bubble', 'buck', 'bucket', 'bucketful', 'buckle', 'bud', 'buddy', 'budge', 'budget', 'buff', 'buffer', 'buffet', 'bug', 'bugger', 'build', 'bulge', 'bulk', 'bulldoze', 'bullshit', 'bully', 'bum', 'bumble', 'bump', 'bunch', 'bundle', 'bung', 'bungle', 'bunk', 'bunker', 'bunt', 'buoy', 'burble', 'burden', 'burgeon', 'burglarize', 'burgle', 'burn', 'burnish', 'burp', 'burrow', 'burst', 'bury', 'bus', 'bushwhack', 'busk', 'bust', 'bustle', 'busy', 'butcher', 'butt', 'butter', 'button', 'buttonhole', 'buttress', 'buy', 'buzz', 'buzzing', 'bypass', 'cable', 'cache', 'cackle', 'caddie', 'cadge', 'cage', 'cajole', 'cake', 'calcify', 'calculate', 'calibrate', 'call', 'calm', 'calve', 'camouflage', 'camp', 'campaign', 'can', 'canalise', 'canalize', 'cancel', 'cane', 'cannibalise', 'cannibalize', 'cannon', 'cannulate', 'canoe', 'canonise', 'canonize', 'canoodle', 'canst', 'cant', 'canter', 'canvass', 'cap', 'caper', 'capitalise', 'capitalize', 'capitulate', 'capsize', 'captain', 'caption', 'captivate', 'capture', 'caramelise', 'caramelize', 'carbonise', 'carbonize', 'carburise', 'carburize', 'card', 'care', 'careen', 'career', 'caress', 'caricature', 'carjack', 'carol', 'carom', 'carouse', 'carp', 'carpet', 'carpool', 'carry', 'cart', 'cartwheel', 'carve', 'cascade', 'case', 'cash', 'cashier', 'casserole', 'cast', 'castigate', 'castrate', 'catalog', 'catalogue', 'catalyse', 'catalyze', 'catapult', 'catch', 'categorise', 'categorize', 'cater', 'caterwaul', 'catnap', 'caucus', 'caulk', 'cause', 'cauterise', 'cauterize', 'caution', 'cave', 'cavil', 'cavort', 'caw', 'cc', 'cease', 'cede', 'celebrate', 'cement', 'censor', 'censure', 'centralise', 'centralize', 'centre', 'certificate', 'certify', 'chafe', 'chaff', 'chain', 'chair', 'chalk', 'challenge', 'champ', 'champion', 'chance', 'change', 'channel', 'chant', 'chaperon', 'chaperone', 'char', 'characterise', 'characterize', 'charbroil', 'charge', 'chargesheet', 'chargrill', 'charm', 'chart', 'charter', 'chase', 'chasten', 'chastise', 'chat', 'chatter', 'chauffeur', 'cheapen', 'cheat', 'cheater', 'check', 'checkmate', 'cheek', 'cheep', 'cheer', 'cherish', 'chew', 'chicken', 'chide', 'chill', 'chillax', 'chime', 'chink', 'chip', 'chirp', 'chisel', 'chivvy', 'chlorinate', 'choke', 'chomp', 'choose', 'chop', 'choreograph', 'chortle', 'chorus', 'christen', 'chromakey', 'chronicle', 'chuck', 'chuckle', 'chug', 'chunder', 'chunter', 'churn', 'cinch', 'circle', 'circulate', 'circumcise', 'circumnavigate', 'circumscribe', 'circumvent', 'cite', 'civilise', 'civilize', 'clack', 'claim', 'clam', 'clamber', 'clamor', 'clamour', 'clamp', 'clang', 'clank', 'clap', 'clarify', 'clash', 'clasp', 'class', 'classify', 'clatter', 'claw', 'clean', 'cleanse', 'clear', 'cleave', 'clench', 'clerk', 'click', 'climax', 'climb', 'clinch', 'cling', 'clink', 'clinking', 'clip', 'cloak', 'clobber', 'clock', 'clog', 'clone', 'clonk', 'close', 'closet', 'clot', 'clothe', 'cloud', 'clout', 'clown', 'club', 'cluck', 'clue', 'clump', 'clunk', 'cluster', 'clutch', 'clutter', 'coach', 'coagulate', 'coalesce', 'coarsen', 'coast', 'coat', 'coax', 'cobble', 'cock', 'cocoon', 'coddle', 'code', 'codify', 'coerce', 'coexist', 'cogitate', 'cohabit', 'cohere', 'coil', 'coin', 'coincide', 'collaborate', 'collapse', 'collar', 'collate', 'collect', 'collectivise', 'collectivize', 'collide', 'colligate', 'collocate', 'collude', 'colonise', 'colonize', 'colorize', 'colour', 'comb', 'combat', 'combine', 'combust', 'come', 'comfort', 'command', 'commandeer', 'commemorate', 'commence', 'commend', 'comment', 'commentate', 'commercialise', 'commercialize', 'commingle', 'commiserate', 'commission', 'commit', 'commune', 'communicate', 'commute', 'compact', 'compare', 'compartmentalise', 'compartmentalize', 'compel', 'compensate', 'compete', 'compile', 'complain', 'complement', 'complete', 'complicate', 'compliment', 'comply', 'comport', 'compose', 'compost', 'compound', 'comprehend', 'compress', 'comprise', 'compromise', 'compute', 'computerise', 'computerize', 'con', 'conceal', 'concede', 'conceive', 'concentrate', 'conceptualise', 'conceptualize', 'concern', 'concertina', 'conciliate', 'conclude', 'concoct', 'concrete', 'concur', 'concuss', 'condemn', 'condense', 'condescend', 'condition', 'condone', 'conduct', 'cone', 'confer', 'confess', 'confide', 'configure', 'confine', 'confirm', 'confiscate', 'conflate', 'conflict', 'conform', 'confound', 'confront', 'confuse', 'confute', 'congeal', 'congratulate', 'congregate', 'conjecture', 'conjoin', 'conjugate', 'conjure', 'conk', 'connect', 'connive', 'connote', 'conquer', 'conscientise', 'conscientize', 'conscript', 'consecrate', 'consent', 'conserve', 'consider', 'consign', 'consist', 'console', 'consolidate', 'consort', 'conspire', 'constitute', 'constrain', 'constrict', 'construct', 'construe', 'consult', 'consume', 'consummate', 'contact', 'contain', 'contaminate', 'contemplate', 'contend', 'content', 'contest', 'contextualise', 'contextualize', 'continue', 'contort', 'contract', 'contradict', 'contraindicate', 'contrast', 'contravene', 'contribute', 'contrive', 'control', 'controvert', 'convalesce', 'convene', 'converge', 'converse', 'convert', 'convey', 'convict', 'convince', 'convoke', 'convulse', 'coo', 'cook', 'cool', 'coop', 'cooperate', 'coordinate', 'cop', 'cope', 'coppice', 'copulate', 'copy', 'copyright', 'cordon', 'core', 'cork', 'corkscrew', 'corner', 'corral', 'correct', 'correlate', 'correspond', 'corrode', 'corrupt', 'coruscate', 'cosh', 'cosset', 'cost', 'cosy', 'cotton', 'couch', 'cough', 'counsel', 'count', 'countenance', 'counter', 'counteract', 'counterbalance', 'counterfeit', 'countermand', 'counterpoint', 'countersign', 'couple', 'courier', 'course', 'court', 'covenant', 'cover', 'covet', 'cow', 'cower', 'cox', 'cozy', 'crack', 'crackle', 'cradle', 'craft', 'cram', 'cramp', 'crane', 'crank', 'crap', 'crash', 'crate', 'crave', 'crawl', 'crayon', 'creak', 'creaking', 'cream', 'crease', 'create', 'credential', 'credit', 'creep', 'cremate', 'creolise', 'creolize', 'creosote', 'crest', 'crew', 'crib', 'crick', 'criminalise', 'criminalize', 'crimp', 'cringe', 'crinkle', 'cripple', 'crisp', 'criticise', 'criticize', 'critique', 'croak', 'crochet', 'crook', 'croon', 'crop', 'cross', 'crouch', 'crow', 'crowd', 'crown', 'crucify', 'cruise', 'crumble', 'crumple', 'crunch', 'crusade', 'crush', 'cry', 'crystallise', 'crystallize', 'cube', 'cuckold', 'cuddle', 'cudgel', 'cue', 'cuff', 'cull', 'culminate', 'cultivate', 'culture', 'cup', 'curate', 'curb', 'curdle', 'cure', 'curl', 'curry', 'curse', 'curtail', 'curtain', 'curtsy', 'curve', 'cushion', 'cuss', 'customise', 'customize', 'cut', 'cwtch', 'cycle', 'dab', 'dabble', 'dally', 'dam', 'damage', 'dammit', 'damn', 'damp', 'dampen', 'dance', 'dandle', 'dangle', 'dare', 'darken', 'darn', 'dart', 'dash', 'date', 'daub', 'daunt', 'dawdle', 'dawn', 'daydream', 'dazzle', 'deactivate', 'deaden', 'deadhead', 'deafen', 'deal', 'debar', 'debase', 'debate', 'debilitate', 'debit', 'debrief', 'debug', 'debunk', 'debut', 'decamp', 'decant', 'decapitate', 'decay', 'deceive', 'decelerate', 'decentralise', 'decentralize', 'decide', 'decimalise', 'decimalize', 'decimate', 'decipher', 'deck', 'declaim', 'declare', 'declassify', 'decline', 'declutter', 'decode', 'decommission', 'decompose', 'decompress', 'deconsecrate', 'deconstruct', 'decontaminate', 'decontrol', 'decorate', 'decouple', 'decoy', 'decrease', 'decree', 'decriminalise', 'decriminalize', 'decry', 'decrypt', 'dedicate', 'deduce', 'deduct', 'deejay', 'deem', 'deepen', 'deface', 'defame', 'default', 'defeat', 'defecate', 'defect', 'defend', 'defer', 'defile', 'define', 'deflate', 'deflect', 'deflower', 'defog', 'defoliate', 'deforest', 'deform', 'defrag', 'defragment', 'defraud', 'defray', 'defrock', 'defrost', 'defuse', 'defy', 'degenerate', 'deglaze', 'degrade', 'degrease', 'dehumanise', 'dehumanize', 'dehydrate', 'deify', 'deign', 'delay', 'delegate', 'delete', 'deliberate', 'delight', 'delimit', 'delineate', 'deliquesce', 'deliver', 'delouse', 'delude', 'deluge', 'delve', 'demand', 'demarcate', 'demean', 'demerge', 'demilitarise', 'demilitarize', 'demineralise', 'demineralize', 'demist', 'demo', 'demob', 'demobilise', 'demobilize', 'democratise', 'democratize', 'demolish', 'demonise', 'demonize', 'demonstrate', 'demoralise', 'demoralize', 'demote', 'demotivate', 'demur', 'demystify', 'denationalise', 'denationalize', 'denigrate', 'denitrify', 'denominate', 'denote', 'denounce', 'dent', 'denude', 'deny', 'depart', 'depend', 'depersonalise', 'depersonalize', 'depict', 'deplane', 'deplete', 'deplore', 'deploy', 'depopulate', 'deport', 'depose', 'deposit', 'deprave', 'deprecate', 'depreciate', 'depress', 'depressurise', 'depressurize', 'deprive', 'depute', 'deputise', 'deputize', 'deracinate', 'derail', 'dereference', 'deregulate', 'deride', 'derive', 'derogate', 'descale', 'descend', 'describe', 'descry', 'desecrate', 'desegregate', 'deselect', 'desensitise', 'desensitize', 'desert', 'deserve', 'design', 'designate', 'desire', 'desist', 'deskill', 'desolate', 'despair', 'despise', 'despoil', 'destabilise', 'destabilize', 'destock', 'destroy', 'detach', 'detail', 'detain', 'detect', 'deter', 'deteriorate', 'determine', 'detest', 'dethrone', 'detonate', 'detour', 'detoxify', 'detract', 'detrain', 'devalue', 'devastate', 'develop', 'deviate', 'devise', 'devoice', 'devolve', 'devote', 'devour', 'diagnose', 'dial', 'dice', 'dicker', 'dictate', 'diddle', 'die', 'diet', 'differ', 'differentiate', 'diffract', 'diffuse', 'dig', 'digest', 'digitalise', 'digitalize', 'digitise', 'digitize', 'dignify', 'digress', 'dilate', 'dilute', 'diluted', 'dim', 'diminish', 'dimple', 'dine', 'ding', 'dink', 'dip', 'diphthongise', 'diphthongize', 'direct', 'dirty', 'dis', 'disable', 'disabuse', 'disadvantage', 'disaffiliate', 'disafforest', 'disagree', 'disallow', 'disambiguate', 'disappear', 'disappoint', 'disapprove', 'disarm', 'disarrange', 'disassemble', 'disassociate', 'disavow', 'disband', 'disbar', 'disbelieve', 'disburse', 'discard', 'discern', 'discharge', 'discipline', 'disclaim', 'disclose', 'discolor', 'discolour', 'discomfit', 'discomfort', 'discompose', 'disconcert', 'disconnect', 'discontinue', 'discount', 'discourage', 'discourse', 'discover', 'discredit', 'discriminate', 'discuss', 'disdain', 'disembark', 'disembowel', 'disenfranchise', 'disengage', 'disentangle', 'disestablish', 'disfigure', 'disgorge', 'disgrace', 'disguise', 'disgust', 'dish', 'dishearten', 'dishonor', 'dishonour', 'disillusion', 'disincentivise', 'disincentivize', 'disinfect', 'disinherit', 'disinhibit', 'disintegrate', 'disinter', 'disinvest', 'dislike', 'dislocate', 'dislodge', 'dismantle', 'dismay', 'dismember', 'dismiss', 'dismount', 'disobey', 'disorient', 'disorientate', 'disown', 'disparage', 'dispatch', 'dispel', 'dispense', 'disperse', 'displace', 'display', 'displease', 'disport', 'dispose', 'dispossess', 'disprove', 'dispute', 'disqualify', 'disregard', 'disrespect', 'disrobe', 'disrupt', 'dissect', 'dissemble', 'disseminate', 'dissent', 'dissimulate', 'dissipate', 'dissociate', 'dissolve', 'dissuade', 'distance', 'distend', 'distil', 'distill', 'distinguish', 'distort', 'distract', 'distress', 'distribute', 'distrust', 'disturb', 'disunite', 'ditch', 'dither', 'dive', 'diverge', 'diversify', 'divert', 'divest', 'divide', 'divine', 'divorce', 'divulge', 'divvy', 'do', 'dob', 'dock', 'doctor', 'document', 'dodge', 'doff', 'dog', 'dole', 'doll', 'dollarise', 'dollarize', 'domesticate', 'dominate', 'don', 'donate', 'doodle', 'doom', 'doorstep', 'dop', 'dope', 'dose', 'doss', 'dot', 'dote', 'double', 'doubt', 'douche', 'douse', 'dovetail', 'down', 'downchange', 'downgrade', 'downlink', 'download', 'downplay', 'downshift', 'downsize', 'dowse', 'doze', 'draft', 'drag', 'dragoon', 'drain', 'dramatise', 'dramatize', 'drape', 'draught', 'draw', 'drawl', 'dread', 'dream', 'dredge', 'drench', 'dress', 'dribble', 'drift', 'drill', 'drink', 'drip', 'drive', 'drivel', 'drizzle', 'drone', 'drool', 'droop', 'drop', 'drown', 'drowse', 'drug', 'drum', 'dry', 'dub', 'duck', 'duckie', 'ducks', 'duel', 'duff', 'dull', 'dumb', 'dumbfound', 'dummy', 'dump', 'dunk', 'dunt', 'dupe', 'duplicate', 'dust', 'dwarf', 'dwell', 'dwindle', 'dye', 'dynamite', 'earmark', 'earn', 'earth', 'ease', 'eat', 'eavesdrop', 'ebb', 'echo', 'eclipse', 'economise', 'economize', 'eddy', 'edge', 'edify', 'edit', 'editorialise', 'editorialize', 'educate', 'eff', 'efface', 'effect', 'effectuate', 'egg', 'ejaculate', 'eject', 'eke', 'elaborate', 'elapse', 'elbow', 'elect', 'electrify', 'electrocute', 'electroplate', 'elevate', 'elicit', 'elide', 'eliminate', 'elongate', 'elope', 'elucidate', 'elude', 'email', 'emanate', 'emancipate', 'emasculate', 'embalm', 'embargo', 'embark', 'embarrass', 'embed', 'embellish', 'embezzle', 'embitter', 'emblazon', 'embody', 'embolden', 'emboss', 'embrace', 'embroider', 'embroil', 'emcee', 'emend', 'emerge', 'emigrate', 'emit', 'emote', 'empathise', 'empathize', 'emphasise', 'emphasize', 'employ', 'empower', 'empty', 'emulate', 'emulsify', 'enable', 'enact', 'encamp', 'encapsulate', 'encase', 'encash', 'enchant', 'encircle', 'enclose', 'encode', 'encompass', 'encounter', 'encourage', 'encroach', 'encrypt', 'encumber', 'end', 'endanger', 'endear', 'endeavor', 'endeavour', 'endorse', 'endow', 'endure', 'energise', 'energize', 'enervate', 'enfeeble', 'enfold', 'enforce', 'enfranchise', 'engage', 'engender', 'engineer', 'engorge', 'engrave', 'engross', 'engulf', 'enhance', 'enjoin', 'enjoy', 'enlarge', 'enlighten', 'enlist', 'enliven', 'enmesh', 'ennoble', 'enquire', 'enrage', 'enrapture', 'enrich', 'enrol', 'enroll', 'ensconce', 'enshrine', 'enshroud', 'enslave', 'ensnare', 'ensue', 'ensure', 'entail', 'entangle', 'enter', 'entertain', 'enthral', 'enthrall', 'enthrone', 'enthuse', 'entice', 'entitle', 'entomb', 'entrance', 'entrap', 'entreat', 'entrench', 'entrust', 'entwine', 'enumerate', 'enunciate', 'envelop', 'envisage', 'envision', 'envy', 'epitomise', 'epitomize', 'equal', 'equalise', 'equalize', 'equate', 'equip', 'equivocate', 'eradicate', 'erase', 'erect', 'erode', 'err', 'erupt', 'escalate', 'escape', 'eschew', 'escort', 'espouse', 'espy', 'essay', 'establish', 'esteem', 'estimate', 'etch', 'eulogise', 'eulogize', 'euthanise', 'euthanize', 'evacuate', 'evade', 'evaluate', 'evangelise', 'evangelize', 'evaporate', 'even', 'eventuate', 'evict', 'evidence', 'evince', 'eviscerate', 'evoke', 'evolve', 'exacerbate', 'exact', 'exaggerate', 'exalt', 'examine', 'exasperate', 'excavate', 'exceed', 'excel', 'except', 'excerpt', 'exchange', 'excise', 'excite', 'exclaim', 'exclude', 'excommunicate', 'excoriate', 'excrete', 'exculpate', 'excuse', 'execute', 'exemplify', 'exempt', 'exercise', 'exert', 'exeunt', 'exfoliate', 'exhale', 'exhaust', 'exhibit', 'exhilarate', 'exhort', 'exhume', 'exile', 'exist', 'exit', 'exonerate', 'exorcise', 'exorcize', 'expand', 'expatiate', 'expect', 'expectorate', 'expedite', 'expel', 'expend', 'experience', 'experiment', 'expiate', 'expire', 'explain', 'explicate', 'explode', 'exploit', 'explore', 'export', 'expose', 'expostulate', 'expound', 'express', 'expropriate', 'expunge', 'expurgate', 'extemporise', 'extemporize', 'extend', 'exterminate', 'externalise', 'externalize', 'extinguish', 'extirpate', 'extol', 'extort', 'extract', 'extradite', 'extrapolate', 'extricate', 'extrude', 'exude', 'exult', 'eye', 'eyeball', 'eyeglasses', 'fabricate', 'face', 'facilitate', 'factor', 'factorise', 'factorize', 'fade', 'faff', 'fail', 'faint', 'fake', 'fall', 'falsify', 'falter', 'familiarise', 'familiarize', 'fan', 'fancy', 'fantasise', 'fantasize', 'fare', 'farewell', 'farm', 'farrow', 'fart', 'fascinate', 'fashion', 'fast', 'fasten', 'father', 'fathom', 'fatten', 'fault', 'favor', 'favour', 'fawn', 'fax', 'faze', 'fear', 'feast', 'feather', 'feature', 'federate', 'feed', 'feel', 'feign', 'feint', 'fell', 'fellate', 'feminise', 'feminize', 'fence', 'fend', 'ferment', 'ferret', 'ferry', 'fertilise', 'fertilize', 'fess', 'fester', 'festoon', 'fetch', 'fete', 'fetishise', 'fetishize', 'fetter', 'feud', 'fib', 'fictionalise', 'fictionalize', 'fiddle', 'fidget', 'field', 'fight', 'figure', 'filch', 'file', 'filibuster', 'fill', 'fillet', 'film', 'filter', 'finagle', 'finalise', 'finalize', 'finance', 'find', 'fine', 'finesse', 'finger', 'fingerprint', 'finish', 'fire', 'firebomb', 'firm', 'fish', 'fishtail', 'fit', 'fix', 'fizz', 'fizzle', 'flag', 'flagellate', 'flail', 'flake', 'flame', 'flank', 'flap', 'flare', 'flash', 'flat', 'flatline', 'flatten', 'flatter', 'flaunt', 'flavour', 'flay', 'fleck', 'flee', 'fleece', 'flesh', 'flex', 'flick', 'flicker', 'flight', 'flinch', 'fling', 'flip', 'flirt', 'flit', 'float', 'flock', 'flog', 'flood', 'floodlight', 'floor', 'flop', 'floss', 'flounce', 'flounder', 'flour', 'flourish', 'flout', 'flow', 'flower', 'flub', 'fluctuate', 'fluff', 'flummox', 'flunk', 'flush', 'fluster', 'flutter', 'fly', 'foal', 'foam', 'fob', 'focalise', 'focalize', 'focus', 'fog', 'foil', 'foist', 'fold', 'follow', 'foment', 'fondle', 'fool', 'foot', 'forage', 'forbear', 'forbid', 'force', 'ford', 'forearm', 'forecast', 'foreclose', 'foregather', 'foreground', 'foresee', 'foreshadow', 'foreshorten', 'forestall', 'foretell', 'forewarn', 'forfeit', 'forfend', 'forgather', 'forge', 'forget', 'forgive', 'forgo', 'fork', 'form', 'formalise', 'formalize', 'format', 'formulate', 'fornicate', 'forsake', 'forswear', 'fortify', 'forward', 'forwards', 'fossick', 'fossilise', 'fossilize', 'foster', 'foul', 'found', 'founder', 'fox', 'fracture', 'fragment', 'frame', 'franchise', 'frank', 'fraternise', 'fraternize', 'fray', 'freak', 'free', 'freelance', 'freeload', 'freestyle', 'freewheel', 'freeze', 'freight', 'frequent', 'freshen', 'fret', 'frighten', 'fringe', 'frisk', 'fritter', 'frizz', 'frizzle', 'frogmarch', 'frolic', 'front', 'frost', 'froth', 'frown', 'fruit', 'frustrate', 'fry', 'fuck', 'fudge', 'fuel', 'fulfil', 'fulfill', 'fulminate', 'fumble', 'fume', 'fumigate', 'function', 'fund', 'funk', 'funnel', 'furl', 'furlough', 'furnish', 'furrow', 'further', 'fuse', 'fuss', 'gab', 'gabble', 'gad', 'gag', 'gain', 'gainsay', 'gall', 'gallivant', 'gallop', 'galumph', 'galvanise', 'galvanize', 'gamble', 'gambol', 'gang', 'gape', 'garage', 'garden', 'gargle', 'garland', 'garner', 'garnish', 'garrison', 'garrote', 'garrotte', 'gas', 'gash', 'gasp', 'gatecrash', 'gather', 'gauge', 'gawk', 'gawp', 'gaze', 'gazump', 'gazunder', 'gear', 'gee', 'gel', 'geld', 'gen', 'generalise', 'generalize', 'generate', 'gentrify', 'genuflect', 'germinate', 'gerrymander', 'gestate', 'gesticulate', 'gesture', 'get', 'ghost', 'ghostwrite', 'gibber', 'gift', 'giggle', 'gild', 'ginger', 'gird', 'girdle', 'give', 'gladden', 'glamorise', 'glamorize', 'glance', 'glare', 'glass', 'glaze', 'gleam', 'glean', 'glide', 'glimmer', 'glimmering', 'glimpse', 'glint', 'glisten', 'glister', 'glitter', 'gloat', 'globalise', 'globalize', 'glom', 'glorify', 'glory', 'gloss', 'glow', 'glower', 'glue', 'glug', 'glut', 'gnash', 'gnaw', 'go', 'goad', 'gob', 'gobble', 'goggle', 'goldbrick', 'goof', 'google', 'goose', 'gore', 'gorge', 'gossip', 'gouge', 'govern', 'grab', 'grace', 'grade', 'graduate', 'graft', 'grant', 'grapple', 'grasp', 'grass', 'grate', 'gratify', 'gravitate', 'graze', 'grease', 'green', 'greet', 'grey', 'grieve', 'grill', 'grimace', 'grin', 'grind', 'grip', 'gripe', 'grit', 'grizzle', 'groan', 'grok', 'groom', 'grope', 'gross', 'grouch', 'ground', 'group', 'grouse', 'grout', 'grovel', 'grow', 'growl', 'grub', 'grudge', 'grumble', 'grunt', 'guarantee', 'guard', 'guess', 'guest', 'guffaw', 'guide', 'guillotine', 'guilt', 'gulp', 'gum', 'gun', 'gurgle', 'gurn', 'gush', 'gussy', 'gust', 'gut', 'gutter', 'guzzle', 'gybe', 'gyp', 'gyrate', 'hack', 'haemorrhage', 'haggle', 'hail', 'hallmark', 'halloo', 'hallucinate', 'halt', 'halve', 'ham', 'hammer', 'hamper', 'hamstring', 'hand', 'handcuff', 'handicap', 'handle', 'hang', 'hanker', 'happen', 'harangue', 'harass', 'harbor', 'harbour', 'harden', 'hare', 'hark', 'harm', 'harmonise', 'harmonize', 'harness', 'harp', 'harpoon', 'harrow', 'harrumph', 'harry', 'harvest', 'hash', 'hassle', 'hasten', 'hatch', 'hate', 'haul', 'haunt', 'have', 'haw', 'hawk', 'hazard', 'haze', 'head', 'headbutt', 'headhunt', 'headline', 'heal', 'heap', 'hear', 'hearken', 'hearten', 'heat', 'heave', 'heckle', 'hector', 'hedge', 'heed', 'heel', 'heft', 'heighten', 'heist', 'help', 'hem', 'hemorrhage', 'herald', 'herd', 'hesitate', 'hew', 'hex', 'hibernate', 'hiccough', 'hiccup', 'hide', 'hie', 'highball', 'highlight', 'hightail', 'hijack', 'hike', 'hinder', 'hinge', 'hint', 'hire', 'hiss', 'hit', 'hitch', 'hitchhike', 'hive', 'hoard', 'hoax', 'hobble', 'hobnob', 'hock', 'hoe', 'hog', 'hoick', 'hoist', 'hold', 'hole', 'holiday', 'holler', 'hollow', 'holster', 'home', 'homeschool', 'homestead', 'hone', 'honeymoon', 'honk', 'honour', 'hoodwink', 'hoof', 'hook', 'hoon', 'hoot', 'hoover', 'hop', 'hope', 'horn', 'horrify', 'horse', 'horsewhip', 'hose', 'hosepipe', 'hospitalise', 'hospitalize', 'host', 'hot', 'hotfoot', 'hound', 'house', 'hover', 'howl', 'huddle', 'huff', 'hug', 'hull', 'hum', 'humanise', 'humanize', 'humble', 'humiliate', 'humour', 'hump', 'hunch', 'hunger', 'hunker', 'hunt', 'hurdle', 'hurl', 'hurry', 'hurt', 'hurtle', 'husband', 'hush', 'husk', 'hustle', 'hybridise', 'hybridize', 'hydrate', 'hydroplane', 'hype', 'hyperventilate', 'hyphenate', 'hypnotise', 'hypnotize', 'hypothesise', 'hypothesize', 'ice', 'iconify', 'idealise', 'idealize', 'ideate', 'identify', 'idle', 'idolise', 'idolize', 'ignite', 'ignore', 'illuminate', 'illumine', 'illustrate', 'imagine', 'imagineer', 'imbibe', 'imbue', 'imitate', 'immerse', 'immigrate', 'immobilise', 'immobilize', 'immolate', 'immortalise', 'immortalize', 'immunise', 'immunize', 'immure', 'impact', 'impair', 'impale', 'impanel', 'impart', 'impeach', 'impede', 'impel', 'imperil', 'impersonate', 'impinge', 'implant', 'implement', 'implicate', 'implode', 'implore', 'imply', 'import', 'importune', 'impose', 'impound', 'impoverish', 'impregnate', 'impress', 'imprint', 'imprison', 'improve', 'improvise', 'impugn', 'inactivate', 'inaugurate', 'incapacitate', 'incarcerate', 'incarnate', 'incense', 'incentivise', 'incentivize', 'inch', 'incinerate', 'incise', 'incite', 'incline', 'include', 'incommode', 'inconvenience', 'incorporate', 'increase', 'incriminate', 'incubate', 'inculcate', 'incur', 'indemnify', 'indent', 'index', 'indicate', 'indict', 'individualise', 'individualize', 'individuate', 'indoctrinate', 'induce', 'induct', 'indulge', 'industrialise', 'industrialize', 'infantilise', 'infantilize', 'infect', 'infer', 'infest', 'infill', 'infiltrate', 'inflame', 'inflate', 'inflect', 'inflict', 'influence', 'inform', 'infringe', 'infuriate', 'infuse', 'ingest', 'ingratiate', 'inhabit', 'inhale', 'inhere', 'inherit', 'inhibit', 'initial', 'initialise', 'initialize', 'initiate', 'inject', 'injure', 'ink', 'inlay', 'innovate', 'inoculate', 'input', 'inscribe', 'inseminate', 'insert', 'inset', 'insinuate', 'insist', 'inspect', 'inspire', 'install', 'instance', 'instigate', 'instil', 'instill', 'institute', 'institutionalise', 'institutionalize', 'instruct', 'insulate', 'insult', 'insure', 'integrate', 'intend', 'intensify', 'inter', 'interact', 'interbreed', 'intercede', 'intercept', 'interchange', 'interconnect', 'intercut', 'interest', 'interface', 'interfere', 'interject', 'interlace', 'interleave', 'interlink', 'interlock', 'intermarry', 'intermesh', 'intermingle', 'intermix', 'intern', 'internalise', 'internalize', 'internationalise', 'internationalize', 'interpenetrate', 'interpolate', 'interpose', 'interpret', 'interrelate', 'interrogate', 'interrupt', 'intersect', 'intersperse', 'intertwine', 'intervene', 'interview', 'interweave', 'interwork', 'intimate', 'intimidate', 'intone', 'intoxicate', 'intrigue', 'introduce', 'intrude', 'intubate', 'intuit', 'inundate', 'inure', 'invade', 'invalid', 'invalidate', 'inveigh', 'inveigle', 'invent', 'inventory', 'invert', 'invest', 'investigate', 'invigilate', 'invigorate', 'invite', 'invoice', 'invoke', 'involve', 'ionise', 'ionize', 'irk', 'iron', 'irradiate', 'irrigate', 'irritate', 'irrupt', 'isolate', 'issue', 'italicise', 'italicize', 'itch', 'itemise', 'itemize', 'iterate', 'jab', 'jabber', 'jack', 'jackknife', 'jail', 'jam', 'jangle', 'jar', 'jaw', 'jaywalk', 'jazz', 'jeer', 'jell', 'jeopardise', 'jeopardize', 'jerk', 'jest', 'jet', 'jettison', 'jib', 'jibe', 'jig', 'jiggle', 'jilt', 'jingle', 'jink', 'jinx', 'jive', 'jockey', 'jog', 'joggle', 'join', 'joint', 'joke', 'jol', 'jolly', 'jolt', 'josh', 'jostle', 'jot', 'journey', 'joust', 'judder', 'judge', 'juggle', 'juice', 'jumble', 'jump', 'junk', 'justify', 'jut', 'juxtapose', 'keel', 'keelhaul', 'keen', 'keep', 'ken', 'key', 'keyboard', 'kibitz', 'kick', 'kid', 'kidnap', 'kill', 'kindle', 'kink', 'kip', 'kiss', 'kit', 'kite', 'klap', 'kludge', 'knacker', 'knead', 'knee', 'kneecap', 'kneel', 'knife', 'knight', 'knit', 'knock', 'knot', 'know', 'knuckle', 'kowtow', 'kvetch', 'label', 'labour', 'lace', 'lacerate', 'lack', 'lacquer', 'lactate', 'ladder', 'ladle', 'lag', 'lam', 'lamb', 'lambast', 'lambaste', 'lament', 'lamp', 'lampoon', 'lance', 'land', 'lands', 'landscape', 'languish', 'lap', 'lapse', 'lard', 'large', 'lark', 'lash', 'lasso', 'last', 'latch', 'lather', 'laud', 'laugh', 'launch', 'launder', 'lavish', 'lay', 'layer', 'laze', 'leach', 'lead', 'leaf', 'leaflet', 'leak', 'lean', 'leap', 'leapfrog', 'learn', 'lease', 'leash', 'leave', 'leaven', 'lech', 'lecture', 'leer', 'leg', 'legalise', 'legalize', 'legislate', 'legitimise', 'legitimize', 'lend', 'lengthen', 'lessen', 'let', 'letter', 'letterbox', 'level', 'lever', 'leverage', 'levitate', 'levy', 'liaise', 'libel', 'liberalise', 'liberalize', 'liberate', 'license', 'lick', 'lie', 'lift', 'ligate', 'light', 'lighten', 'like', 'liken', 'limber', 'lime', 'limit', 'limp', 'line', 'linger', 'link', 'lionise', 'lionize', 'liquefy', 'liquidate', 'liquidise', 'liquidize', 'lisp', 'list', 'listen', 'litigate', 'litter', 'live', 'liven', 'load', 'loads', 'loaf', 'loan', 'loathe', 'lob', 'lobby', 'lobotomise', 'lobotomize', 'localise', 'localize', 'locate', 'lock', 'lodge', 'loft', 'log', 'loiter', 'loll', 'lollop', 'long', 'look', 'looks', 'loom', 'loop', 'loose', 'loosen', 'loot', 'lop', 'lope', 'lord', 'lose', 'lounge', 'lour', 'louse', 'love', 'low', 'lowball', 'lower', 'lubricate', 'luck', 'lug', 'lull', 'lumber', 'lump', 'lunch', 'lunge', 'lurch', 'lure', 'lurk', 'lust', 'luxuriate', 'lynch', 'macerate', 'machine', 'madden', 'magic', 'magnetise', 'magnetize', 'magnify', 'mail', 'maim', 'mainline', 'mainstream', 'maintain', 'major', 'make', 'malfunction', 'malign', 'malinger', 'maltreat', 'man', 'manacle', 'manage', 'mandate', 'mangle', 'manhandle', 'manicure', 'manifest', 'manipulate', 'manoeuvre', 'mantle', 'manufacture', 'manure', 'map', 'mar', 'march', 'marginalise', 'marginalize', 'marinate', 'mark', 'market', 'maroon', 'marry', 'marshal', 'martyr', 'marvel', 'masculinise', 'masculinize', 'mash', 'mask', 'masquerade', 'mass', 'massacre', 'massage', 'master', 'mastermind', 'masticate', 'masturbate', 'match', 'mate', 'materialise', 'materialize', 'matriculate', 'matter', 'mature', 'maul', 'maunder', 'max', 'maximise', 'maximize', 'mean', 'meander', 'measure', 'mechanise', 'mechanize', 'medal', 'meddle', 'mediate', 'medicate', 'meditate', 'meet', 'meld', 'mellow', 'melt', 'memorialise', 'memorialize', 'memorise', 'memorize', 'menace', 'mend', 'menstruate', 'mention', 'meow', 'mercerise', 'mercerize', 'merchandise', 'merge', 'merit', 'mesh', 'mesmerise', 'mesmerize', 'mess', 'message', 'metabolise', 'metabolize', 'metamorphose', 'mete', 'meter', 'methinks', 'mew', 'mewl', 'miaow', 'microblog', 'microchip', 'micromanage', 'microwave', 'micturate', 'migrate', 'militarise', 'militarize', 'militate', 'milk', 'mill', 'mime', 'mimic', 'mince', 'mind', 'mine', 'mingle', 'miniaturise', 'miniaturize', 'minimise', 'minimize', 'minister', 'minor', 'mint', 'minute', 'mirror', 'misapply', 'misappropriate', 'misbehave', 'miscalculate', 'miscarry', 'miscast', 'misconceive', 'misconstrue', 'miscount', 'misdiagnose', 'misdial', 'misdirect', 'misfile', 'misfire', 'misgovern', 'mishandle', 'mishear', 'mishit', 'misinform', 'misinterpret', 'misjudge', 'miskey', 'mislay', 'mislead', 'mismanage', 'mismatch', 'misname', 'misplace', 'misplay', 'mispronounce', 'misquote', 'misread', 'misreport', 'misrepresent', 'miss', 'mission', 'misspell', 'misspend', 'mist', 'mistake', 'mistime', 'mistreat', 'mistrust', 'misunderstand', 'misuse', 'mitigate', 'mitre', 'mix', 'moan', 'mob', 'mobilise', 'mobilize', 'mock', 'mod', 'model', 'moderate', 'modernise', 'modernize', 'modify', 'modulate', 'moisten', 'moisturise', 'moisturize', 'mold', 'molder', 'molest', 'mollify', 'mollycoddle', 'molt', 'monitor', 'monopolise', 'monopolize', 'moo', 'mooch', 'moon', 'moonlight', 'moonwalk', 'moor', 'moot', 'mop', 'mope', 'moralise', 'moralize', 'morph', 'mortar', 'mortgage', 'mortify', 'mosey', 'mosh', 'mothball', 'mother', 'motion', 'motivate', 'motor', 'mould', 'moulder', 'moult', 'mount', 'mourn', 'mouse', 'mouth', 'move', 'movies', 'mow', 'muck', 'muddle', 'muddy', 'muff', 'muffle', 'mug', 'mulch', 'mull', 'multicast', 'multiply', 'multitask', 'mumble', 'mumbling', 'mummify', 'munch', 'murder', 'murmur', 'murmuring', 'murmurings', 'muscle', 'muse', 'mushroom', 'muss', 'muster', 'mutate', 'mute', 'mutilate', 'mutiny', 'mutter', 'muzzle', 'mystify', 'nab', 'nag', 'nail', 'name', 'namecheck', 'nap', 'narrate', 'narrow', 'narrowcast', 'nasalise', 'nasalize', 'nationalise', 'nationalize', 'natter', 'naturalise', 'naturalize', 'nauseate', 'navigate', 'near', 'nearer', 'nearest', 'neaten', 'necessitate', 'neck', 'necklace', 'need', 'needle', 'negate', 'negative', 'neglect', 'negotiate', 'neigh', 'nerve', 'nest', 'nestle', 'net', 'nettle', 'network', 'neuter', 'neutralise', 'neutralize', 'nibble', 'nick', 'nickname', 'niggle', 'nip', 'nitrify', 'nix', 'nobble', 'nod', 'nominalize', 'nominate', 'norm', 'normalise', 'normalize', 'nose', 'nosedive', 'nosh', 'notarise', 'notarize', 'notch', 'note', 'notice', 'notify', 'nourish', 'nudge', 'nuke', 'nullify', 'numb', 'number', 'nurse', 'nurture', 'nut', 'nuzzle', 'obey', 'obfuscate', 'object', 'objectify', 'oblige', 'obliterate', 'obscure', 'observe', 'obsess', 'obstruct', 'obtain', 'obtrude', 'obviate', 'occasion', 'occlude', 'occupy', 'occur', 'off', 'offend', 'offer', 'officiate', 'offload', 'offset', 'offshore', 'ogle', 'oil', 'okay', 'omit', 'ooze', 'open', 'operate', 'opine', 'oppose', 'oppress', 'opt', 'optimise', 'optimize', 'option', 'orbit', 'orchestrate', 'ordain', 'order', 'organise', 'organize', 'orient', 'orientate', 'originate', 'ornament', 'orphan', 'oscillate', 'ossify', 'ostracise', 'ostracize', 'oust', 'out', 'outbid', 'outclass', 'outdistance', 'outdo', 'outface', 'outfit', 'outflank', 'outfox', 'outgrow', 'outgun', 'outlast', 'outlaw', 'outline', 'outlive', 'outmaneuver', 'outmanoeuvre', 'outnumber', 'outpace', 'outperform', 'outplay', 'outpoint', 'output', 'outrage', 'outrank', 'outrun', 'outsell', 'outshine', 'outsmart', 'outsource', 'outstay', 'outstrip', 'outvote', 'outweigh', 'outwit', 'overachieve', 'overact', 'overawe', 'overbalance', 'overbook', 'overburden', 'overcharge', 'overcome', 'overcompensate', 'overcook', 'overdevelop', 'overdo', 'overdose', 'overdraw', 'overdub', 'overeat', 'overemphasize', 'overestimate', 'overexpose', 'overextend', 'overfeed', 'overflow', 'overfly', 'overgeneralise', 'overgeneralize', 'overgraze', 'overhang', 'overhaul', 'overhear', 'overheat', 'overindulge', 'overlap', 'overlay', 'overlie', 'overload', 'overlook', 'overpay', 'overplay', 'overpower', 'overprint', 'overproduce', 'overrate', 'overreach', 'overreact', 'override', 'overrule', 'overrun', 'oversee', 'oversell', 'overshadow', 'overshoot', 'oversimplify', 'oversleep', 'overspend', 'overstate', 'overstay', 'overstep', 'overstock', 'overstretch', 'overtake', 'overtax', 'overthrow', 'overtrain', 'overturn', 'overuse', 'overvalue', 'overwhelm', 'overwinter', 'overwork', 'overwrite', 'ovulate', 'owe', 'own', 'oxidise', 'oxidize', 'oxygenate', 'pace', 'pacify', 'pack', 'package', 'packetise', 'packetize', 'pad', 'paddle', 'padlock', 'page', 'paginate', 'pailful', 'pain', 'paint', 'pair', 'pal', 'palatalise', 'palatalize', 'pale', 'pall', 'palliate', 'palm', 'palpate', 'palpitate', 'pamper', 'pan', 'pander', 'panel', 'panhandle', 'panic', 'pant', 'paper', 'parachute', 'parade', 'parallel', 'paralyse', 'paralyze', 'paraphrase', 'parboil', 'parcel', 'parch', 'pardon', 'pare', 'park', 'parlay', 'parley', 'parody', 'parole', 'parrot', 'parry', 'parse', 'part', 'partake', 'participate', 'particularise', 'particularize', 'partition', 'partner', 'party', 'pass', 'passivise', 'passivize', 'paste', 'pasteurise', 'pasteurize', 'pasture', 'pat', 'patch', 'patent', 'patrol', 'patronise', 'patronize', 'patter', 'pattern', 'pause', 'pave', 'paw', 'pawn', 'pay', 'peak', 'peal', 'peck', 'pedal', 'peddle', 'pedestrianise', 'pedestrianize', 'pee', 'peek', 'peel', 'peep', 'peer', 'peg', 'pelt', 'pen', 'penalise', 'penalize', 'pencil', 'penetrate', 'pension', 'people', 'pep', 'pepper', 'perambulate', 'perceive', 'perch', 'percolate', 'perfect', 'perforate', 'perform', 'perfume', 'perish', 'perjure', 'perk', 'perm', 'permeate', 'permit', 'perpetrate', 'perpetuate', 'perplex', 'persecute', 'persevere', 'persist', 'personalise', 'personalize', 'personify', 'perspire', 'persuade', 'pertain', 'perturb', 'peruse', 'pervade', 'pervert', 'pester', 'pet', 'peter', 'petition', 'petrify', 'phase', 'philosophise', 'philosophize', 'phone', 'photocopy', 'photograph', 'photoshop', 'photosynthesise', 'photosynthesize', 'phrase', 'pick', 'picket', 'pickle', 'picnic', 'picture', 'picturise', 'picturize', 'piddle', 'piece', 'pierce', 'pig', 'pigeonhole', 'piggyback', 'pike', 'pile', 'pilfer', 'pill', 'pillage', 'pillory', 'pillow', 'pilot', 'pimp', 'pin', 'pinch', 'pine', 'ping', 'pinion', 'pink', 'pinpoint', 'pioneer', 'pip', 'pipe', 'pique', 'pirate', 'pirouette', 'piss', 'pit', 'pitch', 'pity', 'pivot', 'pixelate', 'pixellate', 'placate', 'place', 'plagiarise', 'plagiarize', 'plague', 'plait', 'plan', 'plane', 'plant', 'plaster', 'plasticise', 'plasticize', 'plate', 'plateau', 'play', 'plead', 'please', 'pledge', 'plight', 'plod', 'plonk', 'plop', 'plot', 'plough', 'pluck', 'plug', 'plumb', 'plummet', 'plump', 'plunder', 'plunge', 'plunk', 'pluralise', 'pluralize', 'ply', 'poach', 'pocket', 'point', 'poise', 'poison', 'poke', 'polarise', 'polarize', 'pole', 'poleax', 'poleaxe', 'police', 'polish', 'politicise', 'politicize', 'poll', 'pollard', 'pollinate', 'pollute', 'polymerise', 'polymerize', 'ponce', 'ponder', 'pong', 'pontificate', 'pony', 'poo', 'pooh', 'pool', 'poop', 'pootle', 'pop', 'popularise', 'popularize', 'populate', 'pore', 'port', 'portend', 'portion', 'portray', 'pose', 'posit', 'position', 'possess', 'posset', 'post', 'postmark', 'postpone', 'postulate', 'posture', 'pot', 'potter', 'pounce', 'pound', 'pour', 'pout', 'powder', 'power', 'practice', 'practise', 'praise', 'praises', 'prance', 'prang', 'prate', 'prattle', 'pray', 'preach', 'precede', 'precipitate', 'precis', 'preclude', 'predate', 'predecease', 'predetermine', 'predicate', 'predict', 'predispose', 'predominate', 'preen', 'preface', 'prefer', 'prefigure', 'prefix', 'preheat', 'prejudge', 'prejudice', 'preload', 'premaster', 'premiere', 'preoccupy', 'prep', 'prepare', 'prepone', 'preregister', 'presage', 'prescind', 'prescribe', 'preselect', 'presell', 'present', 'preserve', 'preset', 'preside', 'press', 'pressure', 'pressurise', 'pressurize', 'presume', 'presuppose', 'pretend', 'pretest', 'prettify', 'prevail', 'prevaricate', 'prevent', 'preview', 'prey', 'price', 'prick', 'prickle', 'pride', 'prime', 'primp', 'print', 'prioritise', 'prioritize', 'prise', 'privatise', 'privatize', 'privilege', 'prize', 'probate', 'probe', 'proceed', 'process', 'proclaim', 'procrastinate', 'procreate', 'proctor', 'procure', 'prod', 'produce', 'profane', 'profess', 'professionalise', 'professionalize', 'proffer', 'profile', 'profit', 'program', 'programme', 'progress', 'prohibit', 'project', 'proliferate', 'prolong', 'promenade', 'promise', 'promote', 'prompt', 'promulgate', 'pronounce', 'proof', 'proofread', 'prop', 'propagandise', 'propagandize', 'propagate', 'propel', 'prophesy', 'propitiate', 'propose', 'proposition', 'propound', 'proscribe', 'prosecute', 'proselytise', 'proselytize', 'prospect', 'prosper', 'prostitute', 'prostrate', 'protect', 'protest', 'protrude', 'prove', 'provide', 'provision', 'provoke', 'prowl', 'prune', 'pry', 'psych', 'psychoanalyse', 'publicise', 'publicize', 'publish', 'pucker', 'puff', 'puke', 'pull', 'pullulate', 'pulp', 'pulsate', 'pulse', 'pulverise', 'pulverize', 'pummel', 'pump', 'pun', 'punch', 'punctuate', 'puncture', 'punish', 'punt', 'pupate', 'purchase', 'purge', 'purify', 'purl', 'purloin', 'purport', 'purr', 'purse', 'pursue', 'purvey', 'push', 'pussyfoot', 'put', 'putrefy', 'putt', 'putter', 'puzzle', 'quack', 'quadruple', 'quaff', 'quail', 'quake', 'qualify', 'quantify', 'quarantine', 'quarrel', 'quarry', 'quarter', 'quarterback', 'quash', 'quaver', 'queer', 'quell', 'quench', 'query', 'quest', 'question', 'queue', 'quibble', 'quicken', 'quiet', 'quieten', 'quintuple', 'quip', 'quirk', 'quit', 'quiver', 'quiz', 'quote', 'quoth', 'rabbit', 'race', 'rack', 'radiate', 'radicalise', 'radicalize', 'radio', 'raffle', 'rag', 'rage', 'raid', 'rail', 'railroad', 'rain', 'raise', 'rake', 'rally', 'ram', 'ramble', 'ramp', 'rampage', 'randomise', 'randomize', 'range', 'rank', 'rankle', 'ransack', 'ransom', 'rant', 'rap', 'rape', 'rappel', 'rasp', 'rasterise', 'rasterize', 'rat', 'ratchet', 'rate', 'ratify', 'ration', 'rationalise', 'rationalize', 'rattle', 'ravage', 'rave', 'ravel', 'ravish', 'raze', 'razz', 'reach', 'reacquaint', 'react', 'reactivate', 'read', 'readdress', 'readies', 'readjust', 'readmit', 'ready', 'reaffirm', 'realign', 'realise', 'realize', 'reallocate', 'ream', 'reanimate', 'reap', 'reappear', 'reapply', 'reappoint', 'reappraise', 'rear', 'rearm', 'rearrange', 'reason', 'reassemble', 'reassert', 'reassess', 'reassign', 'reassure', 'reawaken', 'rebel', 'reboot', 'reborn', 'rebound', 'rebrand', 'rebuff', 'rebuild', 'rebuke', 'rebut', 'recall', 'recant', 'recap', 'recapitulate', 'recapture', 'recast', 'recede', 'receive', 'recess', 'recharge', 'reciprocate', 'recite', 'reckon', 'reclaim', 'reclassify', 'recline', 'recognise', 'recognize', 'recoil', 'recollect', 'recommence', 'recommend', 'recompense', 'reconcile', 'recondition', 'reconfigure', 'reconfirm', 'reconnect', 'reconnoitre', 'reconquer', 'reconsider', 'reconstitute', 'reconstruct', 'reconvene', 'record', 'recount', 'recoup', 'recover', 'recreate', 'recrudesce', 'recruit', 'rectify', 'recuperate', 'recur', 'recycle', 'redact', 'redden', 'redecorate', 'redeem', 'redefine', 'redeploy', 'redesign', 'redevelop', 'redial', 'redirect', 'rediscover', 'redistribute', 'redistrict', 'redo', 'redouble', 'redound', 'redraft', 'redraw', 'redress', 'reduce', 'reduplicate', 'reef', 'reek', 'reel', 'ref', 'refer', 'referee', 'reference', 'refill', 'refinance', 'refine', 'refit', 'reflate', 'reflect', 'refloat', 'refocus', 'reform', 'reformat', 'reformulate', 'refract', 'refrain', 'refresh', 'refrigerate', 'refuel', 'refund', 'refurbish', 'refuse', 'refute', 'regain', 'regale', 'regard', 'regenerate', 'register', 'regress', 'regret', 'regroup', 'regularise', 'regularize', 'regulate', 'regurgitate', 'rehabilitate', 'rehash', 'rehear', 'rehearse', 'reheat', 'rehome', 'rehouse', 'reign', 'reignite', 'reimburse', 'rein', 'reincarnate', 'reinforce', 'reinstate', 'reinterpret', 'reintroduce', 'reinvent', 'reinvest', 'reinvigorate', 'reissue', 'reiterate', 'reject', 'rejig', 'rejigger', 'rejoice', 'rejoin', 'rejuvenate', 'rekindle', 'relapse', 'relate', 'relaunch', 'relax', 'relay', 'release', 'relegate', 'relent', 'relieve', 'relinquish', 'relish', 'relive', 'reload', 'relocate', 'rely', 'remain', 'remainder', 'remake', 'remand', 'remap', 'remark', 'remarry', 'remaster', 'remediate', 'remedy', 'remember', 'remind', 'reminisce', 'remit', 'remix', 'remodel', 'remonstrate', 'remortgage', 'remould', 'remount', 'remove', 'remunerate', 'rename', 'rend', 'render', 'rendezvous', 'renege', 'renew', 'renounce', 'renovate', 'rent', 'reoccur', 'reoffend', 'reopen', 'reorder', 'reorganise', 'reorganize', 'reorient', 'repackage', 'repair', 'repatriate', 'repay', 'repeal', 'repeat', 'repel', 'repent', 'rephrase', 'replace', 'replay', 'replenish', 'replicate', 'reply', 'report', 'repose', 'repossess', 'represent', 'repress', 'reprieve', 'reprimand', 'reprint', 'reproach', 'reprocess', 'reproduce', 'reprove', 'repudiate', 'repulse', 'repurpose', 'request', 'require', 'requisition', 'requite', 'rerun', 'reschedule', 'rescind', 'rescue', 'research', 'researches', 'resect', 'resell', 'resemble', 'resent', 'reserve', 'reset', 'resettle', 'reshape', 'reshuffle', 'reside', 'resign', 'resist', 'resit', 'resize', 'reskill', 'resolve', 'resonate', 'resort', 'resound', 'resource', 'respect', 'respire', 'respond', 'respray', 'rest', 'restart', 'restate', 'restock', 'restore', 'restrain', 'restrict', 'restring', 'restructure', 'result', 'resume', 'resupply', 'resurface', 'resurrect', 'resuscitate', 'retail', 'retain', 'retake', 'retaliate', 'retard', 'retch', 'retell', 'retest', 'rethink', 'retire', 'retool', 'retort', 'retouch', 'retrace', 'retract', 'retrain', 'retreat', 'retrench', 'retrieve', 'retrofit', 'retry', 'return', 'reunify', 'reunite', 'reuse', 'rev', 'revalue', 'revamp', 'reveal', 'revel', 'revenge', 'reverberate', 'revere', 'reverse', 'revert', 'review', 'revile', 'revise', 'revisit', 'revitalise', 'revitalize', 'revive', 'revivify', 'revoke', 'revolt', 'revolutionise', 'revolutionize', 'revolve', 'reward', 'rewind', 'rewire', 'reword', 'rework', 'rewrite', 'rhapsodise', 'rhapsodize', 'rhyme', 'rib', 'rick', 'ricochet', 'rid', 'riddle', 'ride', 'ridge', 'ridicule', 'riffle', 'rifle', 'rig', 'right', 'rightsize', 'rile', 'rim', 'ring', 'rinse', 'riot', 'rip', 'ripen', 'riposte', 'ripple', 'rise', 'risk', 'ritualise', 'ritualize', 'rival', 'rivet', 'roam', 'roar', 'roast', 'rob', 'robe', 'rock', 'rocket', 'roger', 'roll', 'romance', 'romanticise', 'romanticize', 'romp', 'roof', 'room', 'roost', 'root', 'rope', 'rosin', 'roster', 'rot', 'rotate', 'rouge', 'rough', 'roughen', 'roughhouse', 'round', 'rouse', 'roust', 'rout', 'route', 'rove', 'row', 'rub', 'rubberneck', 'rubbish', 'ruck', 'rue', 'ruffle', 'ruin', 'ruins', 'rule', 'rumble', 'ruminate', 'rummage', 'rumor', 'rumour', 'rumple', 'run', 'rupture', 'rush', 'rust', 'rustle', 'sabotage', 'sack', 'sacrifice', 'sadden', 'saddle', 'safeguard', 'sag', 'sail', 'salaam', 'salivate', 'sally', 'salt', 'salute', 'salvage', 'salve', 'sample', 'sanctify', 'sanction', 'sand', 'sandbag', 'sandblast', 'sandpaper', 'sandwich', 'sanitise', 'sanitize', 'sap', 'sashay', 'sass', 'sate', 'satiate', 'satirise', 'satirize', 'satisfy', 'saturate', 'saunter', 'savage', 'save', 'savor', 'savour', 'saw', 'say', 'scald', 'scale', 'scallop', 'scalp', 'scamper', 'scan', 'scandalise', 'scandalize', 'scapegoat', 'scar', 'scare', 'scarf', 'scarify', 'scarper', 'scatter', 'scattering', 'scavenge', 'scent', 'schedule', 'schematise', 'schematize', 'scheme', 'schlep', 'schlepp', 'schmooze', 'school', 'schtup', 'schuss', 'scoff', 'scold', 'scoop', 'scoot', 'scope', 'scorch', 'score', 'scorn', 'scotch', 'scour', 'scourge', 'scout', 'scowl', 'scrabble', 'scram', 'scramble', 'scrap', 'scrape', 'scratch', 'scrawl', 'scream', 'screech', 'screen', 'screw', 'scribble', 'scrimp', 'script', 'scroll', 'scrounge', 'scrub', 'scrummage', 'scrunch', 'scruple', 'scrutinise', 'scrutinize', 'scud', 'scuff', 'scuffle', 'scull', 'sculpt', 'scupper', 'scurry', 'scuttle', 'scythe', 'seal', 'sealift', 'sear', 'search', 'season', 'seat', 'secede', 'seclude', 'second', 'secrete', 'section', 'secularise', 'secularize', 'secure', 'sedate', 'seduce', 'see', 'seed', 'seek', 'seep', 'seethe', 'segment', 'segregate', 'segue', 'seize', 'select', 'sell', 'sellotape', 'semaphore', 'send', 'sensationalise', 'sensationalize', 'sense', 'sensitise', 'sensitize', 'sentence', 'sentimentalise', 'sentimentalize', 'separate', 'sequence', 'sequester', 'sequestrate', 'serenade', 'serialise', 'serialize', 'sermonise', 'sermonize', 'serve', 'service', 'set', 'settle', 'sever', 'sew', 'sex', 'sexualise', 'sexualize', 'shack', 'shackle', 'shade', 'shadow', 'shaft', 'shag', 'shake', 'shalt', 'sham', 'shamble', 'shame', 'shampoo', 'shanghai', 'shape', 'share', 'sharpen', 'shatter', 'shave', 'shear', 'sheathe', 'shed', 'sheer', 'shell', 'shellac', 'shelter', 'shelve', 'shepherd', 'shield', 'shift', 'shimmer', 'shimmy', 'shin', 'shine', 'shinny', 'ship', 'shipwreck', 'shirk', 'shit', 'shiver', 'shock', 'shoe', 'shoehorn', 'shoo', 'shoot', 'shop', 'shoplift', 'shore', 'short', 'shorten', 'shortlist', 'shoulder', 'shout', 'shove', 'shovel', 'show', 'showboat', 'showcase', 'shower', 'shred', 'shriek', 'shrill', 'shrink', 'shrivel', 'shroom', 'shroud', 'shrug', 'shtup', 'shuck', 'shudder', 'shuffle', 'shun', 'shunt', 'shush', 'shut', 'shuttle', 'shy', 'sic', 'sick', 'sicken', 'side', 'sideline', 'sidestep', 'sideswipe', 'sidetrack', 'sidle', 'sieve', 'sift', 'sigh', 'sight', 'sightsee', 'sign', 'signal', 'signify', 'signpost', 'silence', 'silhouette', 'silt', 'silver', 'simmer', 'simper', 'simplify', 'simulate', 'simulcast', 'sin', 'sing', 'singe', 'single', 'sink', 'sip', 'siphon', 'sire', 'sit', 'site', 'situate', 'size', 'sizzle', 'skate', 'skateboard', 'skedaddle', 'sketch', 'skew', 'skewer', 'ski', 'skid', 'skim', 'skimp', 'skin', 'skip', 'skipper', 'skirmish', 'skirt', 'skitter', 'skive', 'skivvy', 'skulk', 'sky', 'skyjack', 'skyrocket', 'slack', 'slacken', 'slag', 'slake', 'slam', 'slander', 'slant', 'slap', 'slash', 'slate', 'slather', 'slaughter', 'slave', 'slaver', 'slay', 'sledge', 'sleek', 'sleep', 'sleepwalk', 'sleet', 'slew', 'slice', 'slick', 'slide', 'slight', 'slim', 'sling', 'slink', 'slip', 'slit', 'slither', 'slob', 'slobber', 'slog', 'slop', 'slope', 'slosh', 'slot', 'slouch', 'slough', 'slow', 'slug', 'sluice', 'slum', 'slumber', 'slump', 'slur', 'slurp', 'smack', 'smart', 'smarten', 'smash', 'smear', 'smell', 'smelt', 'smile', 'smirk', 'smite', 'smoke', 'smooch', 'smoodge', 'smooth', 'smother', 'smoulder', 'smudge', 'smuggle', 'snack', 'snaffle', 'snag', 'snaggle', 'snake', 'snap', 'snare', 'snarf', 'snarl', 'snatch', 'sneak', 'sneer', 'sneeze', 'snicker', 'sniff', 'sniffle', 'snigger', 'snip', 'snipe', 'snitch', 'snivel', 'snog', 'snooker', 'snoop', 'snooper', 'snooze', 'snore', 'snorkel', 'snort', 'snow', 'snowball', 'snowplough', 'snowplow', 'snub', 'snuff', 'snuffle', 'snuffling', 'snuggle', 'soak', 'soap', 'soar', 'sob', 'sober', 'socialise', 'socialize', 'sock', 'sod', 'sodomise', 'sodomize', 'soften', 'soil', 'sojourn', 'solace', 'solder', 'soldier', 'sole', 'solemnise', 'solemnize', 'solicit', 'solidify', 'soliloquize', 'solve', 'somersault', 'soothe', 'sorrow', 'sort', 'sough', 'sound', 'soundproof', 'soup', 'sour', 'source', 'souse', 'sow', 'space', 'span', 'spangle', 'spank', 'spar', 'spare', 'spark', 'sparkle', 'spatter', 'spattering', 'spawn', 'spay', 'speak', 'spear', 'spearhead', 'spec', 'specialise', 'specialize', 'specify', 'spectacles', 'spectate', 'speculate', 'speed', 'spell', 'spellcheck', 'spend', 'spew', 'spice', 'spiff', 'spike', 'spill', 'spin', 'spiral', 'spirit', 'spit', 'spite', 'splash', 'splatter', 'splay', 'splice', 'splinter', 'split', 'splosh', 'splurge', 'splutter', 'spoil', 'sponge', 'sponsor', 'spoof', 'spook', 'spool', 'spoon', 'sport', 'sports', 'spot', 'spotlight', 'spout', 'sprain', 'sprawl', 'spray', 'spread', 'spreadeagle', 'spring', 'springboard', 'sprinkle', 'sprint', 'spritz', 'sprout', 'spruce', 'spur', 'spurn', 'spurt', 'sputter', 'spy', 'squabble', 'squall', 'squander', 'square', 'squash', 'squat', 'squawk', 'squeak', 'squeal', 'squeeze', 'squelch', 'squint', 'squirm', 'squirrel', 'squirt', 'squish', 'stab', 'stabilise', 'stabilize', 'stable', 'stables', 'stack', 'staff', 'stage', 'stagger', 'stagnate', 'stain', 'stake', 'stalk', 'stall', 'stammer', 'stamp', 'stampede', 'stanch', 'stand', 'standardise', 'standardize', 'staple', 'star', 'starch', 'stare', 'start', 'startle', 'starve', 'stash', 'state', 'statement', 'station', 'staunch', 'stave', 'stay', 'steady', 'steal', 'steam', 'steamroller', 'steel', 'steep', 'steepen', 'steer', 'stem', 'stencil', 'step', 'stereotype', 'sterilise', 'sterilize', 'stew', 'stick', 'stickybeak', 'stiff', 'stiffen', 'stifle', 'stigmatise', 'stigmatize', 'still', 'stimulate', 'sting', 'stinger', 'stink', 'stint', 'stipple', 'stipulate', 'stir', 'stitch', 'stock', 'stockpile', 'stoke', 'stomach', 'stomp', 'stone', 'stonewall', 'stoop', 'stop', 'stopper', 'store', 'storm', 'storyboard', 'stow', 'straddle', 'strafe', 'straggle', 'straighten', 'strain', 'strand', 'strangle', 'strap', 'stratify', 'stravage', 'stravaig', 'stray', 'streak', 'stream', 'streamline', 'strengthen', 'stress', 'stretch', 'stretcher', 'strew', 'stride', 'strike', 'string', 'strip', 'strive', 'stroke', 'stroll', 'structure', 'struggle', 'strum', 'strut', 'stub', 'stud', 'study', 'stuff', 'stultify', 'stumble', 'stump', 'stun', 'stunt', 'stupefy', 'stutter', 'style', 'stymie', 'sub', 'subcontract', 'subdivide', 'subdue', 'subedit', 'subject', 'subjugate', 'sublet', 'sublimate', 'submerge', 'submit', 'subordinate', 'suborn', 'subpoena', 'subscribe', 'subside', 'subsidise', 'subsidize', 'subsist', 'substantiate', 'substitute', 'subsume', 'subtend', 'subtitle', 'subtract', 'subvert', 'succeed', 'succor', 'succour', 'succumb', 'suck', 'sucker', 'suckle', 'suction', 'sue', 'suffer', 'suffice', 'suffocate', 'suffuse', 'sugar', 'suggest', 'suit', 'sulk', 'sulks', 'sully', 'sum', 'summarise', 'summarize', 'summon', 'summons', 'sun', 'sunbathe', 'sunder', 'sunset', 'sup', 'superimpose', 'superintend', 'superpose', 'supersede', 'supersize', 'supersized', 'supervene', 'supervise', 'supplant', 'supplement', 'supply', 'support', 'suppose', 'suppress', 'suppurate', 'surcharge', 'surf', 'surface', 'surge', 'surmise', 'surmount', 'surpass', 'surprise', 'surrender', 'surround', 'survey', 'survive', 'suspect', 'suspend', 'suspenders', 'suss', 'sustain', 'suture', 'swab', 'swaddle', 'swagger', 'swallow', 'swamp', 'swan', 'swank', 'swap', 'swarm', 'swat', 'swath', 'swathe', 'sway', 'swear', 'sweat', 'sweep', 'sweeps', 'sweeten', 'swell', 'swelter', 'swerve', 'swig', 'swill', 'swim', 'swindle', 'swing', 'swipe', 'swirl', 'swish', 'switch', 'swivel', 'swoon', 'swoop', 'swoosh', 'swot', 'symbolise', 'symbolize', 'sympathise', 'sympathize', 'symptomize', 'synchronise', 'synchronize', 'syndicate', 'synthesise', 'synthesize', 'syringe', 'systematise', 'systematize', 'tab', 'table', 'tabulate', 'tack', 'tackle', 'tag', 'tail', 'tailgate', 'tailor', 'taint', 'take', 'talk', 'tally', 'tame', 'tamp', 'tamper', 'tan', 'tangle', 'tango', 'tank', 'tankful', 'tantalise', 'tantalize', 'tap', 'tape', 'taper', 'tar', 'target', 'tarmac', 'tarnish', 'tarry', 'tart', 'task', 'taste', 'tattle', 'tattoo', 'taunt', 'tauten', 'tax', 'taxi', 'taxicab', 'teach', 'team', 'tear', 'tease', 'tee', 'teem', 'teeter', 'teethe', 'telecast', 'telecommute', 'teleconference', 'telegraph', 'telemeter', 'teleoperate', 'telephone', 'teleport', 'telescope', 'televise', 'telex', 'tell', 'telnet', 'temp', 'temper', 'temporise', 'temporize', 'tempt', 'tenant', 'tend', 'tender', 'tenderise', 'tenderize', 'tense', 'tension', 'tergiversate', 'term', 'terminate', 'terraform', 'terrify', 'terrorise', 'terrorize', 'test', 'testify', 'tether', 'text', 'thank', 'thatch', 'thaw', 'theorise', 'theorize', 'thicken', 'thin', 'think', 'thirst', 'thrash', 'thread', 'threaten', 'thresh', 'thrill', 'thrive', 'throb', 'throbbing', 'throng', 'throttle', 'throw', 'thrust', 'thud', 'thumb', 'thump', 'thunder', 'thwack', 'thwart', 'tick', 'ticket', 'tickle', 'tide', 'tidy', 'tie', 'tighten', 'tile', 'till', 'tilt', 'time', 'timetable', 'tinge', 'tingle', 'tingling', 'tinker', 'tinkle', 'tinkling', 'tint', 'tip', 'tippex', 'tipple', 'tiptoe', 'tire', 'titillate', 'titivate', 'title', 'titrate', 'titter', 'toady', 'toast', 'toboggan', 'toddle', 'toe', 'tog', 'toggle', 'toil', 'toke', 'tolerate', 'toll', 'tone', 'tongue', 'tonify', 'tool', 'toot', 'tootle', 'top', 'topple', 'torch', 'torment', 'torpedo', 'torture', 'toss', 'tot', 'total', 'tote', 'totter', 'touch', 'tough', 'toughen', 'tour', 'tousle', 'tout', 'tow', 'towel', 'tower', 'toy', 'trace', 'track', 'trade', 'traduce', 'traffic', 'trail', 'train', 'traipse', 'trammel', 'tramp', 'trample', 'trampoline', 'tranquilize', 'tranquillize', 'transact', 'transcend', 'transcribe', 'transfer', 'transfigure', 'transfix', 'transform', 'transfuse', 'transgress', 'transit', 'translate', 'transliterate', 'transmit', 'transmogrify', 'transmute', 'transpire', 'transplant', 'transport', 'transpose', 'trap', 'trash', 'traumatise', 'traumatize', 'travel', 'traverse', 'trawl', 'tread', 'treasure', 'treat', 'treble', 'trek', 'tremble', 'trembling', 'trepan', 'trespass', 'trial', 'trick', 'trickle', 'trifle', 'trigger', 'trill', 'trim', 'trip', 'triple', 'triumph', 'trivialise', 'trivialize', 'troll', 'tromp', 'troop', 'trot', 'trouble', 'troubleshoot', 'trounce', 'trouser', 'truant', 'truck', 'trudge', 'trump', 'trumpet', 'truncate', 'trundle', 'truss', 'trust', 'try', 'tuck', 'tug', 'tugboat', 'tumble', 'tune', 'tunnel', 'turbocharge', 'turf', 'turn', 'tussle', 'tut', 'tutor', 'twang', 'tweak', 'tweet', 'twiddle', 'twig', 'twin', 'twine', 'twinkle', 'twirl', 'twist', 'twitch', 'twitter', 'twittering', 'type', 'typecast', 'typeset', 'typify', 'tyrannise', 'tyrannize', 'ulcerate', 'ululate', 'ump', 'umpire', 'unbalance', 'unban', 'unbend', 'unblock', 'unbuckle', 'unburden', 'unbutton', 'uncoil', 'uncork', 'uncouple', 'uncover', 'uncurl', 'undelete', 'underachieve', 'underbid', 'undercharge', 'undercook', 'undercut', 'underestimate', 'underestimation', 'underexpose', 'undergo', 'underlie', 'underline', 'undermine', 'underpay', 'underperform', 'underpin', 'underplay', 'underrate', 'underscore', 'undersell', 'undershoot', 'underspend', 'understand', 'understate', 'understudy', 'undertake', 'undervalue', 'underwrite', 'undo', 'undock', 'undress', 'undulate', 'unearth', 'unfasten', 'unfold', 'unfreeze', 'unfurl', 'unhand', 'unhinge', 'unhitch', 'unhook', 'unify', 'uninstall', 'unionise', 'unionize', 'unite', 'unlace', 'unlearn', 'unleash', 'unload', 'unlock', 'unloose', 'unloosen', 'unmask', 'unnerve', 'unpack', 'unpick', 'unplug', 'unravel', 'unroll', 'unsaddle', 'unscramble', 'unscrew', 'unseat', 'unsettle', 'unsubscribe', 'untangle', 'untie', 'unveil', 'unwind', 'unwrap', 'unzip', 'up', 'upbraid', 'upchange', 'upchuck', 'update', 'upend', 'upgrade', 'uphold', 'upholster', 'uplift', 'upload', 'uproot', 'upsell', 'upset', 'upshift', 'upskill', 'upstage', 'urge', 'urinate', 'use', 'usher', 'usurp', 'utilise', 'utilize', 'utter', 'vacate', 'vacation', 'vaccinate', 'vacillate', 'vacuum', 'valet', 'validate', 'value', 'vamoose', 'vandalise', 'vandalize', 'vanish', 'vanquish', 'vaporise', 'vaporize', 'varnish', 'vary', 'vault', 'veer', 'veg', 'vegetate', 'veil', 'vend', 'veneer', 'venerate', 'vent', 'ventilate', 'venture', 'verbalise', 'verbalize', 'verge', 'verify', 'versify', 'vest', 'vet', 'veto', 'vex', 'vibrate', 'victimise', 'victimize', 'vide', 'video', 'videotape', 'vie', 'view', 'viewing', 'vilify', 'vindicate', 'violate', 'visit', 'visualise', 'visualize', 'vitiate', 'vitrify', 'vocalize', 'voice', 'void', 'volley', 'volumise', 'volumize', 'volunteer', 'vomit', 'vote', 'vouch', 'vouchsafe', 'vow', 'voyage', 'vulgarise', 'vulgarize', 'wad', 'waddle', 'wade', 'waffle', 'waft', 'wag', 'wage', 'wager', 'waggle', 'wail', 'wait', 'waive', 'wake', 'wakeboard', 'waken', 'walk', 'wall', 'wallop', 'wallow', 'wallpaper', 'waltz', 'wander', 'wane', 'wangle', 'wank', 'want', 'warble', 'ward', 'warm', 'warn', 'warp', 'warrant', 'wash', 'wassail', 'waste', 'watch', 'water', 'waterproof', 'waterski', 'wave', 'waver', 'wax', 'waylay', 'weaken', 'wean', 'weaponise', 'weaponize', 'wear', 'weary', 'weasel', 'weather', 'weatherise', 'weatherize', 'weave', 'wed', 'wedge', 'wee', 'weed', 'weekend', 'weep', 'weigh', 'weight', 'weird', 'welch', 'welcome', 'weld', 'well', 'welly', 'welsh', 'wend', 'westernise', 'westernize', 'wet', 'whack', 'wheedle', 'wheel', 'wheeze', 'whelp', 'whet', 'whiff', 'while', 'whilst', 'whimper', 'whine', 'whinge', 'whinny', 'whip', 'whirl', 'whirr', 'whirring', 'whisk', 'whisper', 'whispering', 'whistle', 'whiten', 'whitewash', 'whittle', 'whiz', 'whizz', 'whoop', 'whoosh', 'whup', 'wick', 'widen', 'widow', 'wield', 'wig', 'wiggle', 'wildcat', 'will', 'wilt', 'wimp', 'win', 'wince', 'winch', 'wind', 'winds', 'windsurf', 'wine', 'wing', 'wink', 'winkle', 'winnow', 'winter', 'wipe', 'wire', 'wiretap', 'wise', 'wisecrack', 'wish', 'withdraw', 'wither', 'withhold', 'withstand', 'witness', 'witter', 'wobble', 'wolf', 'wonder', 'woo', 'woof', 'word', 'work', 'worm', 'worry', 'worsen', 'worship', 'worst', 'wound', 'wow', 'wowee', 'wrangle', 'wrap', 'wreak', 'wreathe', 'wreck', 'wrench', 'wrest', 'wrestle', 'wriggle', 'wring', 'wrinkle', 'writ', 'write', 'writhe', 'wrong', 'wrought', 'xerox', 'yack', 'yak', 'yank', 'yap', 'yaw', 'yawn', 'yearn', 'yell', 'yellow', 'yelp', 'yield', 'yodel', 'yoke', 'yomp', 'yowl', 'yuppify', 'zap', 'zero', 'zigzag', 'zing', 'zip', 'zone', 'zoom'];

async function checkTowardRules() {
    try {
        if (modelInWork !== '01-tasks.bpmn') {
            displayMessage(`<div class="text-center">
                <div class="mt-1 mb-1"><b>Wallet</b> <code>${endowment.address}</code></div>
                        
                <img src="/images/fbpmnq/wallet-logo.png" width="64" alt="wallet-logo" class="img-thumbnail">
                <small class="form-text text-muted mb-2">Transfer funds you are willing to contribute to our cause to this MetaMask address.</small>

                <button type="button" class="btn btn-sm btn-block" data-dismiss="modal">Continue without endowment</button>
            </div>`, 'Support us');
        }

        isChecked = true;

        var bpmnInput = $('#bpmn-input').text();

        if (bpmnInput.length < 1) {
            displayMessage('BPMN 2.0 code is missing!');
        } else {
            $('#js-canvas').empty();

            var _height = Number.parseInt($('#slider').val());

            var viewer = new BpmnJS({
                container: $('#js-canvas'),
                height: _height
            });

            await viewer.importXML(bpmnInput);

            var canvas = viewer.get('canvas');
            canvas.zoom('fit-viewport');

            var converter = new X2JS();

            var json = converter.xml_str2json(bpmnInput);
            var processes = Array.isArray(json.definitions.process) ? json.definitions.process : [json.definitions.process];

            var messages = [];

            var possibleErrors = 0;

            var taskChecks = 3,
                intermediateEventChecks = 2,
                startEventChecks = 1,
                startEventNumberChecks = 1,
                endEventChecks = 1,
                endEventNumberChecks = 1,
                gatewayChecks = 1,
                inclusiveGatewayChecks = 1;

            var modelSize = 0;

            var processStructure = [];

            for (var j in processes) {
                var processName = processes[j]._name === undefined ? id : processes[j]._name;

                var tasks = processes[j]['task'] === undefined ? [] : (Array.isArray(processes[j]['task']) ? processes[j]['task'] : [processes[j]['task']]);

                for (var i in tasks) {
                    var id = tasks[i]._id;

                    var name = tasks[i]._name === undefined ? id : tasks[i]._name;

                    var incoming = tasks[i].incoming === undefined ? 0 : (Array.isArray(tasks[i].incoming) ? tasks[i].incoming.length : 1);

                    var outgoing = tasks[i].outgoing === undefined ? 0 : (Array.isArray(tasks[i].outgoing) ? tasks[i].outgoing.length : 1);

                    var isError = false;
                    var isWarning = false;

                    if ($('#bpmn-errors').is(':checked')) {
                        if (incoming < 1) {
                            messages.push({
                                id: id,
                                type: 'Task',
                                name: name,
                                text: 'does not have any incoming sequence flows',
                                message: 'error'
                            });

                            isError = true;
                        }

                        if (outgoing < 1) {
                            messages.push({
                                id: id,
                                type: 'Task',
                                name: name,
                                text: 'does not have any outgoing sequence flows',
                                message: 'error'
                            });

                            isError = true;
                        }
                    }

                    if ($('#bpmn-warnings').is(':checked')) {
                        if (incoming > 1) {
                            messages.push({
                                id: id,
                                type: 'Task',
                                name: name,
                                text: 'has multiple incoming sequence flows',
                                message: 'warning'
                            });

                            isWarning = true;
                        }

                        if (outgoing > 1) {
                            messages.push({
                                id: id,
                                type: 'Task',
                                name: name,
                                text: 'has multiple outgoing sequence flows',
                                message: 'warning'
                            });

                            isWarning = true;
                        }
                    }

                    if ($('#label-warnings').is(':checked')) {
                        var tokenizedName = name.trim().split(/\s+/);

                        if (tokenizedName.length > 0 && !allEnglishVerbs.includes(tokenizedName[0].toLowerCase())) {
                            messages.push({
                                id: id,
                                type: 'Task',
                                name: name,
                                text: 'does not start with a verb',
                                message: 'warning'
                            });

                            isWarning = true;
                        }
                    }

                    if (isError) {
                        canvas.addMarker(id, 'highlight-red');
                    } else if (isWarning) {
                        canvas.addMarker(id, 'highlight-yellow');
                    } else {
                        canvas.addMarker(id, 'highlight-green');
                    }
                }

                var intermediateCatchEvents = processes[j]['intermediateCatchEvent'] === undefined ? [] : (Array.isArray(processes[j]['intermediateCatchEvent']) ? processes[j]['intermediateCatchEvent'] : [processes[j]['intermediateCatchEvent']]);

                var intermediateThrowEvents = processes[j]['intermediateThrowEvent'] === undefined ? [] : (Array.isArray(processes[j]['intermediateThrowEvent']) ? processes[j]['intermediateThrowEvent'] : [processes[j]['intermediateThrowEvent']]);

                var intermediateEvents = intermediateCatchEvents.concat(intermediateThrowEvents);

                for (var i in intermediateEvents) {
                    var id = intermediateEvents[i]._id;

                    var name = intermediateEvents[i]._name === undefined ? id : intermediateEvents[i]._name;

                    var incoming = intermediateEvents[i].incoming === undefined ? 0 : (Array.isArray(intermediateEvents[i].incoming) ? intermediateEvents[i].incoming.length : 1);

                    var outgoing = intermediateEvents[i].outgoing === undefined ? 0 : (Array.isArray(intermediateEvents[i].outgoing) ? intermediateEvents[i].outgoing.length : 1);

                    var isError = false;
                    var isWarning = false;

                    if ($('#bpmn-errors').is(':checked')) {
                        if (incoming < 1) {
                            messages.push({
                                id: id,
                                type: 'Intermediate Event',
                                name: name,
                                text: 'does not have any incoming sequence flows',
                                message: 'error'
                            });

                            isError = true;
                        }

                        if (outgoing < 1) {
                            messages.push({
                                id: id,
                                type: 'Intermediate Event',
                                name: name,
                                text: 'does not have any outgoing sequence flows',
                                message: 'error'
                            });

                            isError = true;
                        }
                    }

                    if ($('#bpmn-warnings').is(':checked')) {
                        if (incoming > 1) {
                            messages.push({
                                id: id,
                                type: 'Intermediate Event',
                                name: name,
                                text: 'has multiple incoming sequence flows',
                                message: 'warning'
                            });

                            isWarning = true;
                        }

                        if (outgoing > 1) {
                            messages.push({
                                id: id,
                                type: 'Intermediate Event',
                                name: name,
                                text: 'has multiple outgoing sequence flows',
                                message: 'warning'
                            });

                            isWarning = true;
                        }
                    }

                    if (isError) {
                        canvas.addMarker(id, 'highlight-red');
                    } else if (isWarning) {
                        canvas.addMarker(id, 'highlight-yellow');
                    } else {
                        canvas.addMarker(id, 'highlight-green');
                    }
                }

                var startEvents = processes[j]['startEvent'] === undefined ? [] : (Array.isArray(processes[j]['startEvent']) ? processes[j]['startEvent'] : [processes[j]['startEvent']]);

                for (var i in startEvents) {
                    var id = startEvents[i]._id;

                    var name = startEvents[i]._name === undefined ? id : startEvents[i]._name;

                    var outgoing = startEvents[i].outgoing === undefined ? 0 : (Array.isArray(startEvents[i].outgoing) ? startEvents[i].outgoing.length : 1);

                    var isError = false;
                    var isWarning = false;

                    if ($('#bpmn-errors').is(':checked')) {
                        if (outgoing < 1) {
                            messages.push({
                                id: id,
                                type: 'Start Event',
                                name: name,
                                text: 'does not have any outgoing sequence flows',
                                message: 'error'
                            });

                            isError = true;
                        }
                    }

                    if ($('#bpmn-warnings').is(':checked')) {
                        if (outgoing > 1) {
                            messages.push({
                                id: id,
                                type: 'Start Event',
                                name: name,
                                text: 'has multiple outgoing sequence flows',
                                message: 'warning'
                            });

                            isWarning = true;
                        }
                    }

                    if (isError) {
                        canvas.addMarker(id, 'highlight-red');
                    } else if (isWarning) {
                        canvas.addMarker(id, 'highlight-yellow');
                    } else {
                        canvas.addMarker(id, 'highlight-green');
                    }
                }

                if ($('#event-errors').is(':checked')) {
                    if (startEvents.length > 1) {
                        messages.push({
                            id: id,
                            type: 'Process',
                            name: processName,
                            text: 'has multiple start events',
                            message: 'error'
                        });
                    }
                }

                var endEvents = processes[j]['endEvent'] === undefined ? [] : (Array.isArray(processes[j]['endEvent']) ? processes[j]['endEvent'] : [processes[j]['endEvent']]);

                for (var i in endEvents) {
                    var id = endEvents[i]._id;

                    var name = endEvents[i]._name === undefined ? id : endEvents[i]._name;

                    var incoming = endEvents[i].incoming === undefined ? 0 : (Array.isArray(endEvents[i].incoming) ? endEvents[i].incoming.length : 1);

                    var isError = false;
                    var isWarning = false;

                    if ($('#bpmn-errors').is(':checked')) {
                        if (incoming < 1) {
                            messages.push({
                                id: id,
                                type: 'End Event',
                                name: name,
                                text: 'does not have any incoming sequence flows',
                                message: 'error'
                            });

                            isError = true;
                        }
                    }

                    if ($('#bpmn-warnings').is(':checked')) {
                        if (incoming > 1) {
                            messages.push({
                                id: id,
                                type: 'End Event',
                                name: name,
                                text: 'has multiple incoming sequence flows',
                                message: 'warning'
                            });

                            isWarning = true;
                        }
                    }

                    if (isError) {
                        canvas.addMarker(id, 'highlight-red');
                    } else if (isWarning) {
                        canvas.addMarker(id, 'highlight-yellow');
                    } else {
                        canvas.addMarker(id, 'highlight-green');
                    }
                }

                if ($('#event-warnings').is(':checked')) {
                    if (endEvents.length > 1) {
                        messages.push({
                            id: id,
                            type: 'Process',
                            name: processName,
                            text: 'has multiple end events',
                            message: 'warning'
                        });
                    }
                }

                var parallelGateways = processes[j]['parallelGateway'] === undefined ? [] : (Array.isArray(processes[j]['parallelGateway']) ? processes[j]['parallelGateway'] : [processes[j]['parallelGateway']]);

                var exclusiveGateways = processes[j]['exclusiveGateway'] === undefined ? [] : (Array.isArray(processes[j]['exclusiveGateway']) ? processes[j]['exclusiveGateway'] : [processes[j]['exclusiveGateway']]);

                var inclusiveGateways = processes[j]['inclusiveGateway'] === undefined ? [] : (Array.isArray(processes[j]['inclusiveGateway']) ? processes[j]['inclusiveGateway'] : [processes[j]['inclusiveGateway']]);

                var eventBasedGateways = processes[j]['eventBasedGateway'] === undefined ? [] : (Array.isArray(processes[j]['eventBasedGateway']) ? processes[j]['eventBasedGateway'] : [processes[j]['eventBasedGateway']]);

                var complexGateways = processes[j]['complexGateway'] === undefined ? [] : (Array.isArray(processes[j]['complexGateway']) ? processes[j]['complexGateway'] : [processes[j]['complexGateway']]);

                var gateways = parallelGateways.concat(exclusiveGateways).concat(inclusiveGateways).concat(eventBasedGateways).concat(complexGateways);

                for (var i in gateways) {
                    var id = gateways[i]._id;

                    var name = gateways[i]._name === undefined ? id : gateways[i]._name;

                    var incoming = gateways[i].incoming === undefined ? 0 : (Array.isArray(gateways[i].incoming) ? gateways[i].incoming.length : 1);

                    var outgoing = gateways[i].outgoing === undefined ? 0 : (Array.isArray(gateways[i].outgoing) ? gateways[i].outgoing.length : 1);

                    var isError = false;
                    var isWarning = false;

                    if ($('#gateway-warnings').is(':checked')) {
                        if (incoming > 1 && outgoing > 1) {
                            messages.push({
                                id: id,
                                type: 'Gateway',
                                name: name,
                                text: 'is mixing the split and join behavior',
                                message: 'warning'
                            });

                            isWarning = true;
                        }
                    }

                    if ($('#gateway-errors').is(':checked')) {
                        if ((incoming === 1 && outgoing === 1) || (incoming < 1 || outgoing < 1)) {
                            messages.push({
                                id: id,
                                type: 'Gateway',
                                name: name,
                                text: 'is neither split nor join',
                                message: 'error'
                            });

                            isError = true;
                        }
                    }

                    if (isError) {
                        canvas.addMarker(id, 'highlight-red');
                    } else if (isWarning) {
                        canvas.addMarker(id, 'highlight-yellow');
                    } else {
                        canvas.addMarker(id, 'highlight-green');
                    }
                }

                if ($('#inclusive-warnings').is(':checked')) {
                    if (inclusiveGateways.length > 1) {
                        messages.push({
                            id: id,
                            type: 'Process',
                            name: processName,
                            text: 'contains inclusive (OR) gateways',
                            message: 'warning'
                        });
                    }
                }

                possibleErrors += taskChecks * tasks.length + intermediateEventChecks * intermediateEvents.length + startEventChecks * startEvents.length + startEventNumberChecks + endEventChecks * endEvents.length + endEventNumberChecks + gatewayChecks * gateways.length + inclusiveGatewayChecks;

                var processElementsNumber = tasks.length + intermediateEvents.length + startEvents.length + endEvents.length + gateways.length;

                modelSize += processElementsNumber;

                var processFlows = processes[j]['sequenceFlow'] === undefined ? [] : (Array.isArray(processes[j]['sequenceFlow']) ? processes[j]['sequenceFlow'] : [processes[j]['sequenceFlow']]);

                processStructure.push({
                    name: processName,
                    elements: processElementsNumber,
                    flows: processFlows.length
                });
            }

            $('#detected-mistakes').empty();

            var errorsCount = 0,
                warningsCount = 0;

            for (var i in messages) {
                var badge = null;

                if (messages[i].message === 'error') {
                    badge = '<span class="badge badge-pill badge-danger">Error</span>';

                    errorsCount++;
                }

                if (messages[i].message === 'warning') {
                    badge = '<span class="badge badge-pill badge-warning">Warning</span>';

                    warningsCount++;
                }

                $('#detected-mistakes').append(`<li class="list-group-item list-group-item-action"><small>${badge} ${messages[i].type} <b>${messages[i].name}</b> ${messages[i].text}</small></li>`);
            }

            var modelQuality = calculateQuality(errorsCount, warningsCount, possibleErrors);
            var modelQualityPercent = modelQuality * 100;

            $('#model-quality').text(modelQualityPercent.toFixed(2));

            var modelCost = calculateCost(modelQuality, modelSize);

            var redesignCost = calculateCost(1, modelSize) - modelCost;

            var basePrice = 5;
            var redesignCostFinal = basePrice + Math.ceil(redesignCost) - 0.01;

            $('#order-redesign').html(`<button class="btn mb-0 mt-2" onclick="orderRedesign(${redesignCostFinal});" role="button">Order redesign for $${redesignCostFinal.toFixed(2)} only!</button>`);

            $('#model-cost').text(modelCost.toFixed(2));

            if (messages.length < 1) {
                $('#detected-mistakes').append(`<li class="list-group-item list-group-item-action"><small><span class="badge badge-pill badge-success">Success</span> No mistakes detected!</small></li>`);
            }

            if (modelInWork !== '01-tasks.bpmn') {
                await updateStats({
                    users: 0,
                    models: 1,
                    value: modelCost,
                    guests: 0
                });
            }

            calculateMetrics(processStructure);
        }
    } catch (err) {
        displayMessage(err.message);
    }
}

function calculateMetrics(processStructure) {
    $('#list-metrics').empty();

    for (var index in processStructure) {
        var name = processStructure[index].name;
        var elements = processStructure[index].elements;
        var flows = processStructure[index].flows;

        var cyclomaticNumber = flows - elements + 1;
        var networkConnectivity = flows / elements;

        var cyclomaticNumberColor = getColorCode(cyclomaticNumber, 4, 7);
        var networkConnectivityColor = getColorCode(networkConnectivity, 1.1, 1.7);

        $('#list-metrics').append(`<li class="list-group-item list-group-item-action">
            <small>
                <span class="badge badge-pill badge-primary">Metrics</span> Process <b>${name}</b><br>
                Cyclomatic number: <span class="badge badge-pill badge-${cyclomaticNumberColor}" style="font-size: 11px;">${cyclomaticNumber.toFixed(2)}</span><br>
                Network connectivity: <span class="badge badge-pill badge-${networkConnectivityColor}" style="font-size: 11px;">${networkConnectivity.toFixed(2)}</span>
            </small>
        </li>`);
    }
}

function getColorCode(value, warningThreshold, dangerThreshold) {
    if (value > warningThreshold) {
        return 'warning';
    } else if (value > dangerThreshold) {
        return 'danger';
    }

    return 'success';
}

function calculateQuality(errorsCount, warningsCount, possibleErrors) {
    return 1 - (errorsCount + warningsCount) / possibleErrors;
}

function calculateCost(modelQuality, modelSize) {
    var taskLOC = 6,
        monthHours = 152;

    var coefficient = 2.4,
        exponent = 1.05;

    var KLOC = (modelSize * modelQuality * taskLOC) / 1000;

    return coefficient * Math.pow(KLOC, exponent) * monthHours;
}

function tokenizeModel() {
    displayMessage('To be appeared later!');
}

function orderRedesign(redesignCostFinal) {
    displayMessage(`<div class="text-center">
        <label class="text-muted mb-0">Order BPMN redesign</label>
        <label class="text-muted mb-0"><small>Transfer funds to the address below equal to <b>$${redesignCostFinal.toFixed(2)}</b></small></label>
        <label class="text-muted mb-0"><small>Send transaction ID and BPMN model for redesign to <a href="mailto:7960954@gmail.com" target="_blank">7960954@gmail.com</a></small></label>
        <label class="text-muted mb-0"><small>Your model will be redesigned and emailed to you back in 24 hours</small></label>

        <div class="mt-1 mb-1"><b>Wallet</b> <code>${endowment.address}</code></div>

        <img src="/images/fbpmnq/wallet-logo.png" width="64" alt="wallet-logo" class="img-thumbnail">
        <small class="form-text text-muted mb-2">Transfer funds you are willing to contribute to our cause to this MetaMask address.</small>

        <button type="button" class="btn btn-sm btn-block" data-dismiss="modal">Cancel</button>
    </div>`, 'Order');
}

async function readSingleFile(e) {
    try {
        isChecked = false;

        var file = e.target.files[0];

        if (!file) {
            return;
        }

        var reader = new FileReader();

        reader.onload = async function(e) {
            $('#file-name').text(file.name);

            modelInWork = file.name;

            var contents = e.target.result;

            $('#bpmn-input').text(contents);

            hljs.highlightAll();

            $('#js-canvas').empty();

            var _height = Number.parseInt($('#slider').val());

            var viewer = new BpmnJS({
                container: $('#js-canvas'),
                height: _height
            });

            await viewer.importXML(contents);

            var canvas = viewer.get('canvas');
            canvas.zoom('fit-viewport');

            $('#detected-mistakes').html(`<li class="list-group-item"><small><span class="badge badge-pill badge-info">Info</span> Detected mistakes will be displayed here</small></li>`);
            $('#list-metrics').html(`<li class="list-group-item list-group-item-action"><small><span class="badge badge-pill badge-info">Info</span> Calculated metrics will be displayed here</small></li>`);
        };

        reader.readAsText(file);

        clearQualityCostBlock();

        await updateStats({
            users: 1,
            models: 0,
            value: 0,
            guests: 0
        });
    } catch (err) {
        displayMessage(err.message);
    }
}

$('#file-input').change(readSingleFile);

async function showDonations() {
    var priceResponse = await fetch('https://cloudfreebpmnquality.herokuapp.com/api/getPrice.php?tag=' + endowment.tag, {
        method: 'GET'
    });

    var priceResult = await priceResponse.json();
    var price = priceResult.value;

    var balanceResponse = await fetch('https://cloudfreebpmnquality.herokuapp.com/api/checkWalletNative.php?ticker=QBMT-ETH&wallet=' + endowment.address, {
        method: 'GET'
    });

    var balanceResult = await balanceResponse.json();
    var balance = Number.parseInt(balanceResult.value, 16) / 1e18;

    var balancePrice = balance * price;

    $('#donations').html(`<small class="form-check-label"><b>Wallet</b> <code>${endowment.address}</code></small><br>
        <small class="text-muted">Statistics <strong>(testnet)</strong></small><br>
        <small class="form-check-label">${balance.toFixed(8)} ${endowment.ticker} &asymp; $${balancePrice.toFixed(2)}</small>`);
}

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en'
    }, 'google_translate_element');
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        });
    });
});

$(document).ready(async function() {
    displayExample();

    $('#slider').val(800);
    $('#slider').trigger('change');

    await showDonations();

    await updateStats({
        users: 0.55,
        models: 0.32,
        value: 8.72,
        guests: 1
    });

    var utmContent = getURLParam('utm_content');

    if (utmContent === 'ads-free') {
        displayMessage(`<div class="text-center">
            <div class="row">
                <div class="col-sm-6 align-self-center">
                    <img src="/images/fbpmnq/logo.png" alt="product-logo" class="img-fluid mt-1 mb-1">
                </div>
                <div class="col-sm-6 align-self-center">
                    <div class="mt-1 mb-1"><b>Ads-Free FBPMNQ BPMN validation and analysis tool is a paid product!</b></div>
                    <div class="mt-1 mb-1"><small>You are allowed to fully test it. Please buy then.</small></div>
                    <div class="mt-1 mb-1">
                        <span style="font-size: 18px; font-weight: 700;"><s>$${59}</s></span>
                        <span style="font-size: 32px; font-weight: 900; color: #dc3545;">$${eComMeasures.price.value}</span>
                    </div>
                </div>
            </div>

            <div class="mt-1 mb-1">Transfer funds to this MetaMask address:</div>
            <div class="mt-1 mb-1"><b>Wallet</b> <code>${endowment.address}</code></div>

            <div class="mt-1 mb-3">Donors will also receive QBMT tokens in our test network to access the <span class="badge badge-primary">PRO</span> features of the <a href="https://cloudfreebpmnquality.herokuapp.com/analytics/?utm_source=freebpmnquality.github.io&utm_medium=button&utm_campaign=fbpmnq-demo&utm_content=qualibpmn-pro" target="_blank">QualiBPMN</a> service.</div>

            <a type="button" class="btn btn-block" style="background-color: #92E3A9; border-color: #92E3A9;" href="/products/fbpmnq/?utm_source=freebpmnquality.github.io&utm_medium=button&utm_campaign=fbpmnq-demo&utm_content=ads-free" target="_blank">TRY ADS-FREE TOOL</a>
            <button type="button" class="btn btn-sm btn-block" data-dismiss="modal">CONTINUE</button>
        </div>`, 'Try Ads-Free FBPMNQ');
    } else {
        displayMessage(`<div class="text-center">
            <div class="mt-1 mb-1">Kindly support us — disable your adblock extension and click on several banner ads!</div>
            <img src="/images/fbpmnq/ads-logo.png" width="64" alt="ads-logo" class="img-thumbnail mb-2">

            <div class="mt-1 mb-1">Or transfer funds you are willing to contribute to our cause directly to this MetaMask address:</div>
            <div class="mt-1 mb-1"><b>Wallet</b> <code>${endowment.address}</code></div>

            <img src="/images/fbpmnq/wallet-logo.png" width="64" alt="wallet-logo" class="img-thumbnail mb-3">
            
            <button type="button" class="btn btn-sm btn-block" data-dismiss="modal">CONTINUE</button>
        </div>`, 'Support us');
    }
});