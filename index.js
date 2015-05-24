var parse = require('acorn').parse;
var xtend = require('xtend');

module.exports = function (src, opts) {
    var ast = src;
    if (typeof src === 'string') {
        try {
            ast = parse(src, xtend({
                ecmaVersion: 6,
                allowReturnOutsideFunction: true,
                allowHashBang: true
            }, opts));
        }
        catch (err) { ast = parse('(' + src + ')') }
    }
    return function (cb) {
        walk(ast, undefined, cb);
    };
};

function walk (node, parent, cb) {
    for (var key in node) {
        if (!node.hasOwnProperty(key)) continue;
        if (typeof node[key] !== 'object' || !node[key]) continue;
        if (key === 'parent') continue;
        
        var child = node[key];
        if (typeof child.type === 'string') {
            child.parent = node;
            walk(child, node, cb);
        }
        else if (Array.isArray(child)) {
            for (var j = 0; j < child.length; j++) {
                var c = child[j];
                if (c && typeof c.type === 'string') {
                    c.parent = node;
                    walk(c, node, cb);
                }
            }
        }
    }
    cb(node);
}
