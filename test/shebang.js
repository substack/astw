var astw = require('../');
var test = require('tape');

test('shebang', function (t) {
    t.plan(2);
    var walk = astw('#!/usr/bin/env node\nfn(true);');
    walk(function (node) {
        if (node.type === 'CallExpression') {
            t.equal(node.callee.name, 'fn');
            t.equal(node.arguments[0].raw, 'true');
        }
    });
});
