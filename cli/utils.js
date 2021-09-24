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

function saveMD(path, text) {
  console.error(path);
  fs.createWriteStream(path).write(text);
}

function loadDataset() {
  const files = [
    'basic1200',
    'advance800',
    'phrase',
    'senior8000',
  ];
  return Promise.all(files.map(file => loadCSV(file))).then(results => {
    const data = {};
    results.forEach(result => {
      result.rows.forEach(row => {
        data[`${result.name}_${row.id}`] = row;
      });
    })
    return data;
  });
}

function getNextDate(days, current) {
  const dates = days.filter(day => day >  current);
  return dates[0];
}

module.exports = {
  loadCSV,
  saveMD,
  loadDataset,
  getNextDate,
};