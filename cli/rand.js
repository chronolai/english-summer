const dayjs = require('dayjs');

const {
    loadDataset,
} = require('./utils');

const days = require('./days');

const name = process.argv[2];
const date = process.argv[3] || dayjs().format('YYYY-MM-DD');

const getKeys = name => days.filter(day => day.name === name).reduce((acc, val) => [...acc, ...val.rows], []).sort();

loadDataset().then((words) => {
    const randFunc = (a, b) => 0.5 - Math.random();
    const shuffleWords = (arr, top = 10) => arr.sort(randFunc).sort(randFunc).sort(randFunc).slice(0, top).map(key => ({ key, ...words[key] }));

    const allKeys = Object.keys(words);
    const examKeys = allKeys.filter(key => words[key].status !== '0');
    const eazyKeys = allKeys.filter(key => words[key].status === '0');
    const basic = examKeys.filter(key => key.includes('basic'));
    const advance = examKeys.filter(key => key.includes('advance'));
    const phrase = examKeys.filter(key => key.includes('phrase'));
    const senior = examKeys.filter(key => key.includes('senior'));

    // console.error('allKeys: ', allKeys.length);
    // console.error('examKeys: ', examKeys.length);
    // console.error('eazyKeys: ', eazyKeys.length);

    // console.error('basic: ', basic.length);
    // console.error('advance: ', advance.length);
    // console.error('phrase: ', phrase.length);

    console.error(`${name.charAt(0).toUpperCase() + name.slice(1)}#${date}`)
    if (name === 'ian') {
        const ianDays = getKeys('ian');
        const ianRemainBasicKeys = basic.filter(val => !ianDays.includes(val));

        const ianShuffleBasic = shuffleWords(ianRemainBasicKeys);
        const basicList = ianShuffleBasic.map(word => `- ${word.en} ${word.tw}`).join('\n');
        const basicKeys = ianShuffleBasic.map(word => word.id).join(', ');

        // console.error(ianDays.length);
        // console.error('ianRemainBasicKeys:', ianRemainBasicKeys.length);
        console.error(basicList);
        console.error();
        console.error(`[${basicKeys}]`);
    }
    if (name === 'dora') {
        const doraDays = getKeys('dora');
        const doraRemainBasicKeys = basic.filter(val => !doraDays.includes(val));
        const doraRemainAdvanceKeys = advance.filter(val => !doraDays.includes(val));
        const doraRemainPhraseKeys = phrase.filter(val => !doraDays.includes(val));
        const doraRemainSeniorKeys = senior.filter(val => !doraDays.includes(val));

        const doraShuffleBasic = shuffleWords(doraRemainBasicKeys, 5);
        const basicList = doraShuffleBasic.map(word => `- ${word.en} ${word.tw}`).join('\n');
        const basicKeys = doraShuffleBasic.map(word => word.id).join(', ');
        const doraShuffleAdvance = shuffleWords(doraRemainAdvanceKeys, 15);
        const advanceList = doraShuffleAdvance.map(word => `- ${word.en} ${word.tw}`).join('\n');
        const advanceKeys = doraShuffleAdvance.map(word => word.id).join(', ');
        // const doraShufflePhrase = shuffleWords(doraRemainPhraseKeys, 5);
        // const phraseList = doraShufflePhrase.map(word => `- ${word.en} ${word.tw}`).join('\n');
        // const phraseKeys = doraShufflePhrase.map(word => word.id).join(', ');
        const doraShuffleSenior = shuffleWords(doraRemainSeniorKeys, 15);
        const seniorList = doraShuffleSenior.map(word => `- ${word.en} ${word.tw}`).join('\n');
        const seniorKeys = doraShuffleSenior.map(word => word.id).join(', ');

        // console.error(doraDays.length);
        // console.error('doraRemainBasicKeys:', doraRemainBasicKeys.length);
        // console.error('doraRemainAdvanceKeys:', doraRemainAdvanceKeys.length);
        // console.error('doraRemainPhraseKeys:', doraRemainPhraseKeys.length);
        console.error(basicList);
        // console.error(advanceList);
        // console.error(phraseList);
        console.error(seniorList);
        console.error();
        console.error(`...[${basicKeys}].map(id => \`basic1200_$\{id\}\`),`);
        // console.error(`...[${advanceKeys}].map(id => \`advance800_$\{id\}\`),`);
        // console.error(`[${phraseKeys}]`);
        console.error(`...[${seniorKeys}].map(id => \`senior8000_$\{id\}\`),`);
    }
    console.error();
});