const { iterate } = require('./index');
const debug = require('debug')('iterator');

const dataSet = [
  {
    id: '0',
    name: 'suzy',
    age: '32',
    hobby: 'anarchy'
  },
  {
    id: '1',
    name: 'jan',
    age: '32',
    hobby: 'rock climbing'
  }, {
    id: '4',
    name: 'vader',
    age: '32',
    hobby: 'vidya games'
  }
];

const person = {
  name: 'ted',
  age: '32',
  hobby: 'spelunking'
};

const blah = iterate(dataSet, 'id', person);

console.log('here is the result', blah);
