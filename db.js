const low = require('lowdb');
const fileAsync = require('lowdb/lib/file-async');

const db = low('blah.json',
  {
    storage: fileAsync,
    writeOnChange: false,
  }
);

module.exports = db;

