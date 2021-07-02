const dayjs = require('dayjs');

const {
  saveMD,
  loadDataset,
  getNextDate,
} = require('./utils');

const days = require('./days');

loadDataset().then((words) => {
  const dates = [...new Set(days.map(day => day.date))];
  const getDay = (day) => ({
    name: day.name,
    date: day.date,
    rows: day.rows.map(id => words[id]),
  });
  const getFile = (date) => ({
    title: date,
    path: `./blog/${date}.md`,
    days: days.filter(day => day.date === date).map(getDay),
  });
  const f = (day) => {
    const next = dayjs(getNextDate(dates, dayjs().format('YYYY-MM-DD')));
    const date = dayjs(day.title);
    const cond = date > next;
    return !cond;
  };
  return dates.map(getFile).filter(f);
}).then((files) => {
  files.forEach((file) => {
    const md = [
      `import PlayButton from '../src/components/PlayButton'`, '',
      `# ${file.title}`, ''
    ];
    file.days.forEach((day, idx) => {
      md.push(`## ${day.name.charAt(0).toUpperCase() + day.name.slice(1)}`);
      day.rows.forEach((row) => {
        md.push(`- <PlayButton value="${row.en}" /> ${row.tw}`);
      });
      md.push('');
    });
    saveMD(file.path, md.join('\n'));
  });
});