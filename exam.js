// basic1200: http://www.fhjh.tn.edu.tw/academic/contest/%E8%8B%B1%E8%AA%9E1200%E5%AD%97.pdf
// advance800: https://www.chshs.ntpc.edu.tw/uploads/1594691235941rkmrvWuB.pdf
// phrase: http://htmfiles.englishhome.org/grammar/phrasalverbs.htm

const csv = require('csv-parser');
const fs = require('fs');

function loadCSV(name) {
    const path = `./static/source/${name}.csv`;
    const rows = [];
    return new Promise((resolve, reject) => {
        fs.createReadStream(path)
        .pipe(csv())
        .on('error', e => reject(e))
        .on('data', row => rows.push(row))
        .on('end', () => resolve({
            name,
            path,
            rows,
        }));
    });
}

const files = [
    'basic1200',
    'advance800',
    'phrase',
];
Promise.all(files.map(file => loadCSV(file))).then(results => {
    console.error(results);
});