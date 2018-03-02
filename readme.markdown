# astw

walk the ast

[![browser support](http://ci.testling.com/substack/astw.png)](http://ci.testling.com/substack/astw)

[![build status](https://secure.travis-ci.org/substack/astw.png)](http://travis-ci.org/substack/astw)

This module is a faster version of
[falafel](https://github.com/substack/node-falafel)
that only does ast walking and `.parent` tracking, not source transforms.

# example

``` js
var astw = require('astw');
var deparse = require('escodegen').generate;
var walk = astw('4 + beep(5 * 2)');

walk(function (node) {
    var src = deparse(node);
    console.log(node.type + ' :: ' + JSON.stringify(src));
});
```

# methods

``` js
var astw = require('astw')
```

## var walk = astw(src, opts={})

Return a `walk()` function from the source string or ast object `src`.

Optionally:

* `opts.parser` - a parser module with a `.parse(source, opts)` method, defaults
  to [`require('acorn')`](https://github.com/acornjs/acorn).
* `opts.ecmaVersion` - default: 9

Other options are passed through to the `parser.parse` function.

## walk(cb)

Walk the nodes in the ast with `cb(node)` where `node` is each element in the
ast from [acorn](https://github.com/acornjs/acorn) but with an additional
`.parent` reference to the parent node.

# install

With [npm](https://npmjs.org) do:

```
npm install astw
```

# license

MIT
