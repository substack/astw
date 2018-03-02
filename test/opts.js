var astw = require('../');
var test = require('tape');

test('parse options', function (t) {
    t.plan(2);

    var source = '#!/usr/bin/env node\nconsole.log("ok")';

    t.throws(function () { astw(source); });

    t.doesNotThrow(function () {
        astw(source, { allowHashBang: true });
    });
});

test('custom parser', function (t) {
    t.plan(2);

    var source = 'whatever';

    astw(source, {
        parser: {
            parse: function (str) {
                return { type: 'Name', value: str };
            }
        }
    })(function (node) {
        t.equal(node.type, 'Name');
        t.equal(node.value, source);
    });
});
