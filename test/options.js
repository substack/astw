var astw = require('../');
var test = require('tape');

test('options', function (t) {
    t.plan(2);
    var walk = astw('() => { return }', {ranges: true});
    walk(function (node) {
        if (node.type === 'ArrowFunctionExpression') {
            t.deepEqual(node.range, [0, 16]);
        }
        if (node.type === 'ReturnStatement') {
            t.deepEqual(node.range, [8, 14]);
        }
    });
});
