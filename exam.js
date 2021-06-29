// basic1200: http://www.fhjh.tn.edu.tw/academic/contest/%E8%8B%B1%E8%AA%9E1200%E5%AD%97.pdf
// advance800: https://www.chshs.ntpc.edu.tw/uploads/1594691235941rkmrvWuB.pdf
// phrase: http://htmfiles.englishhome.org/grammar/phrasalverbs.htm

const csv = require('csv-parser');
const fs = require('fs');
const dayjs = require('dayjs');

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

function loadSources() {
  const files = [
    'basic1200',
    'advance800',
    'phrase',
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

const ianDays = [{
  page: 'ian/round1',
  date: '2021-06-15',
  rows: [40, 128, 165, 400, 477, 689, 880, 1124, 1094, 1197].map(id => `basic1200_${id}`),
}, {
  page: 'ian/round1',
  date: '2021-06-16',
  rows: [1085, 215, 1154, 1014, 369, 382, 444, 211, 154, 389].map(id => `basic1200_${id}`),
}, {
  page: 'ian/round1',
  date: '2021-06-17',
  rows: [731, 961, 210, 736, 900, 1184, 1198, 828, 679, 569].map(id => `basic1200_${id}`),
}, {
  page: 'ian/round1',
  date: '2021-06-18',
  rows: [459, 113, 216, 701, 1092, 320, 685, 160, 228, 597].map(id => `basic1200_${id}`),
}, {
  page: 'ian/round1',
  date: '2021-06-19',
  rows: [1156, 767, 275, 310, 180, 48, 807, 102, 470, 922].map(id => `basic1200_${id}`),
}, {
  page: 'ian/round1',
  date: '2021-06-20',
  rows: [654, 834, 73, 650, 371, 673, 514, 87, 795, 765].map(id => `basic1200_${id}`),
}, {
  page: 'ian/round1',
  date: '2021-06-21',
  rows: [1174, 608, 711, 23, 662, 359, 1183, 1099, 1168, 120].map(id => `basic1200_${id}`),
}, {
  page: 'ian/round1',
  date: '2021-06-22',
  rows: [99, 319, 619, 897, 938, 114, 884, 342, 998, 408].map(id => `basic1200_${id}`),
}, {
  page: 'ian/round2',
  date: '2021-06-23',
  rows: [894, 35, 649, 1176, 660, 26, 468, 251, 859, 737].map(id => `basic1200_${id}`),
}, {
  page: 'ian/round2',
  date: '2021-06-24',
  rows: [348, 212, 65, 539, 460, 933, 1177, 8, 643, 1145].map(id => `basic1200_${id}`),
}, {
  page: 'ian/round2',
  date: '2021-06-25',
  rows: [1139, 229, 358, 1007, 616, 193, 218, 13, 466, 1127].map(id => `basic1200_${id}`),
}, {
  page: 'ian/round2',
  date: '2021-06-28',
  rows: [802, 741, 862, 1175, 412, 926, 304, 373, 724, 384].map(id => `basic1200_${id}`),
}, {
  page: 'ian/round2',
  date: '2021-06-29',
  rows: [1190, 573, 646, 1036, 136, 255, 21, 845, 19, 952].map(id => `basic1200_${id}`),
}, {
  page: 'ian/round2',
  date: '2021-06-30',
  rows: [930, 1187, 370, 984, 129, 513, 259, 753, 383, 1044].map(id => `basic1200_${id}`),
}, {
  page: 'ian/round2',
  date: '2021-07-01',
  rows: [].map(id => `basic1200_${id}`),
}, {
  page: 'ian/round2',
  date: '2021-07-02',
  rows: [].map(id => `basic1200_${id}`),
}, {
  page: 'ian/round2',
  date: '2021-07-05',
  rows: [].map(id => `basic1200_${id}`),
}, {
  page: 'ian/round2',
  date: '2021-07-06',
  rows: [].map(id => `basic1200_${id}`),
}, {
  page: 'ian/round2',
  date: '2021-07-07',
  rows: [].map(id => `basic1200_${id}`),
}, {
  page: 'ian/round2',
  date: '2021-07-08',
  rows: [].map(id => `basic1200_${id}`),
}, {
  page: 'ian/round2',
  date: '2021-07-09',
  rows: [].map(id => `basic1200_${id}`),
}, {
  page: 'ian/round2',
  date: '2021-07-12',
  rows: [].map(id => `basic1200_${id}`),
}, {
  page: 'ian/round2',
  date: '2021-07-13',
  rows: [].map(id => `basic1200_${id}`),
}];

const doraDays = [{
  page: 'dora/round1',
  date: '2021-06-28',
  rows: [
    ...[6, 992, 530, 861, 1141].map(id => `basic1200_${id}`),
    ...[272, 32, 408, 508, 118, 659, 665, 193, 689, 317].map(id => `advance800_${id}`),
    ...[1, 2, 3, 4, 5].map(id => `phrase_${id}`),
  ],
}, {
  page: 'dora/round1',
  date: '2021-06-29',
  rows: [
    ...[344, 361, 367, 574, 960].map(id => `basic1200_${id}`),
    ...[654, 87, 552, 329, 395, 130, 608, 107, 560, 85].map(id => `advance800_${id}`),
    ...[6, 7, 8, 9, 10].map(id => `phrase_${id}`),
  ],
}, {
  page: 'dora/round1',
  date: '2021-06-30',
  rows: [],
}, {
  page: 'dora/round1',
  date: '2021-07-01',
  rows: [],
}, {
  page: 'dora/round1',
  date: '2021-07-02',
  rows: [],
}, {
  page: 'dora/round1',
  date: '2021-07-05',
  rows: [],
}, {
  page: 'dora/round1',
  date: '2021-07-06',
  rows: [],
}, {
  page: 'dora/round1',
  date: '2021-07-07',
  rows: [],
}, {
  page: 'dora/round1',
  date: '2021-07-08',
  rows: [],
}, {
  page: 'dora/round1',
  date: '2021-07-09',
  rows: [],
}, {
  page: 'dora/round1',
  date: '2021-07-12',
  rows: [],
}, {
  page: 'dora/round1',
  date: '2021-07-13',
  rows: [],
}, {
  page: 'dora/round1',
  date: '2021-07-14',
  rows: [],
}, {
  page: 'dora/round1',
  date: '2021-07-15',
  rows: [],
}, {
  page: 'dora/round1',
  date: '2021-07-16',
  rows: [],
}, {
  page: 'dora/round1',
  date: '2021-07-19',
  rows: [],
}, {
  page: 'dora/round1',
  date: '2021-07-20',
  rows: [],
}, {
  page: 'dora/round1',
  date: '2021-07-21',
  rows: [],
}, {
  page: 'dora/round1',
  date: '2021-07-22',
  rows: [],
}, {
  page: 'dora/round1',
  date: '2021-07-23',
  rows: [],
}];

const days = [
  ...ianDays,
  ...doraDays,
];

loadSources().then((words) => {
  const pages = [...new Set(days.map(day => day.page))];
  const getDay = (day) => ({
    date: day.date,
    rows: day.rows.map(id => words[id]),
  });
  const getFile = (page) => ({
    title: page.split('/')[1].replace('round', 'Round '),
    path: `./docs/${page}.md`,
    days: days.filter(day => day.page === page).map(getDay),
  });
  return pages.map(getFile);
}).then((files) => {
  files.forEach((file) => {
    const md = [
      `import PlayButton from '../../src/components/PlayButton'`, '',
      `# ${file.title}`, ''
    ];
    file.days.forEach((day, idx) => {
      const date = dayjs(day.date);
      const tomorrow = dayjs().add(1, 'days').startOf('day');
      const cond = date > tomorrow;
      if (cond) {
        md.push('<!--');
      }
      md.push(`## ${day.date} (${idx + 1})`);
      // md.push(`| | En | Tw |`);
      // md.push(`| --- | --- | --- |`);
      day.rows.forEach((row) => {
        // md.push(`| <PlayButton value="${row.en}" /> | ${row.en} | ${row.tw} |`);
        md.push(`- <PlayButton value="${row.en}" /> ${row.tw}`);
      });
      md.push('');
      if (cond) {
        md.push('-->');
      }
    });
    saveMD(file.path, md.join('\n'));
  });
});