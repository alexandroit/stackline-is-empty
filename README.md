# @stackline/is-empty

Independent maintenance fork of `is-empty@1.2.0`. Original API, module format, runtime dependency ranges, and supported Node.js engines are preserved.

```sh
npm install @stackline/is-empty
# Preserve existing imports with an npm alias:
npm install is-empty@npm:@stackline/is-empty@1.0.0
```

See [UPSTREAM.md](UPSTREAM.md) for the exact source and issue review, and [CHANGELOG.md](CHANGELOG.md) for focused maintenance changes. Development and release tooling runs on Node.js 24; that does not change the library runtime requirement.

Maintained by [Stackline](https://alexandro.net/). [Issues](https://github.com/alexandroit/stackline-is-empty/issues) · [npm](https://www.npmjs.com/package/@stackline/is-empty).

## Upstream documentation


# is-empty

  Check whether a value is empty.

## Installation
  
```
$ npm install is-empty
$ npm test
```

## Example

```js
var empty = require('is-empty');

empty([]);              // true
empty({});              // true
empty('');              // true
empty(0);               // true
empty(function(){});    // true
empty(null);            // true
empty(undefined);       // true
empty(new Map());       // true
empty(new Set());       // true
empty(new Error());     // true

empty(true);            // false
empty(false);           // false
empty(['a', 'b']);      // false
empty({ a: 'b' });      // false
empty('string');        // false
empty(42);              // false
empty(function(a,b){}); // false
empty(new Map([['key', 'value']])); // false
empty(new Set([1]));    // false
empty(new Error('fail'))// false
```

## API

### isEmpty(value)

  Check whether `value` is empty.

## License

  MIT
