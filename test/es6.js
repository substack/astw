var astw = require('../');
var test = require('tape');

test('es6', function (t) {
    t.plan(2);
    var walk = astw('(function * () { yield f() })');
    walk(function (node) {
        if (node.type === 'FunctionExpression') {
            t.ok(node.generator);
        }
        if (node.type === 'YieldExpression') {
            t.pass();
        }
    });
});
