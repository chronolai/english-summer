const dayjs = require('dayjs');

const {
  saveMD,
  loadDataset,
  getNextDate,
} = require('./utils');

const days = require('./days');

loadDataset().then((words) => {
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
    const dates = file.days.map(day => day.date);
    file.days.forEach((day, idx) => {
      const next = dayjs(getNextDate(dates, dayjs().format('YYYY-MM-DD')));
      const date = dayjs(day.date);
      const cond = date >= next;
      if (cond) {
        md.push('<!--');
      }
      md.push(`## ${day.date} (${idx + 1})`);
      day.rows.forEach((row) => {
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