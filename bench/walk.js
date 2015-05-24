var astw = require('../');
var fs = require('fs');

// curl --create-dirs -o src/jquery.js http://code.jquery.com/jquery-1.11.3.js
// for i in {1..5}; do node walk.js; done
var src = fs.readFileSync(__dirname + '/src/jquery.js', 'utf8');
var visits = 0;
var t0 = Date.now();
astw(src)(function(node) { visits++; });
console.log('%sms - %s', Date.now() - t0, visits);
