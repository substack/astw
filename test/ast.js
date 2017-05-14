var astw = require('../');
var test = require('tape');

test('ast', function (t) {
    t.plan(1);
    var walk = astw('var foo = 123;');
    t.equal(walk.ast.type, "Program");
});
