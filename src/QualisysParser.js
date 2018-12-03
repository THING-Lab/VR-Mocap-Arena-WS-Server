const QTMrt = require('qualisys-rt');

console.log(QTMrt.Api);

function init(io) {
  console.log('QTM Socket Sender Initialized');
}

module.exports = init;
