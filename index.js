const db = require('./db.js');
const { max, map, assign } = require('lodash');

module.exports = {
  function iterate(table, data) {
    let newId;
    const tableData = db.get(table).value();
    const maxId = max(map(tableData, 'id'));
    const payload = assign(data, { id: maxId + 1 })
    if (payload) {
      return payload
    }
    return 'There was an error';
  }
}
