var app = require('./the.js')('UnsereGelderToolsBackend');

exports.status = app('status');
exports.echo = app('echoEvent:andContext:');
