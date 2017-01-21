const { max, map, assign } = require('lodash');
const debug = require('debug')('iterator');

const index = {
  iterate: (dataSet, field, data) => {
    const dataMap = map(dataSet, field);
    const dataField = field;
    const maxId = max(dataMap);
    const newId = parseInt(maxId, 10) + 1;
    const payload = assign(data, { [dataField]: newId });
    if (payload) {
      debug(payload);
      return payload;
    }
    debug('error');
    return ('There was an error');
  },
};

module.exports = index;
