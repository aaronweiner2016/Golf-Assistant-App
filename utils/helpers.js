const timestamp = require('time-stamp');

module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()
      }`;
  },
  time: timestamp('YYYY/MM/DD')
};