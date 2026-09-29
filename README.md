# @stackline/is-empty

> Check whether a value is "empty".

[![npm version](https://img.shields.io/npm/v/@stackline/is-empty.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/is-empty)
[![license](https://img.shields.io/npm/l/@stackline/is-empty.svg?style=flat-square)](https://github.com/alexandroit/stackline-is-empty)
[![GitHub repository](https://img.shields.io/badge/GitHub-alexandroit%2Fstackline-is-empty-181717?style=flat-square&logo=github)](https://github.com/alexandroit/stackline-is-empty)
[![Docs](https://img.shields.io/badge/docs-alexandro.net-0f766e?style=flat-square)](https://alexandro.net/docs/vanilla/is-empty/)
[![Reddit community](https://img.shields.io/badge/community-r%2FStackline-ff4500?style=flat-square&logo=reddit&logoColor=white)](https://www.reddit.com/r/Stackline/)

**[Documentation](https://alexandro.net/docs/vanilla/is-empty/)** | **[npm](https://www.npmjs.com/package/@stackline/is-empty)** | **[Issues](https://github.com/alexandroit/stackline-is-empty/issues)** | **[Repository](https://github.com/alexandroit/stackline-is-empty)**

**Current package version:** `1.0.1`

---

## Why this package?

`@stackline/is-empty` is the Stackline-maintained distribution of `is-empty@1.2.0`. It is an independent continuation of [is-empty](https://github.com/ianstormtaylor/is-empty); original authors and licenses remain credited below.

## Compatibility

| Item | Value |
| :--- | :--- |
| Package | `@stackline/is-empty@1.0.1` |
| API target | `is-empty@1.2.0` |
| Supported Node.js | `See supported framework requirements` |
| License | `MIT` |
| Main entry | `./lib/index.js` |
| Runtime dependencies | `none` |

## Installation

```bash
npm install @stackline/is-empty
```

Preserve existing imports and plugin resolution with an npm alias:

```bash
npm install is-empty@npm:@stackline/is-empty
```

## Usage and API reference

### is-empty

  Check whether a value is empty.

## Installation
  
```
$ npm install @stackline/is-empty
$ npm test
```

## Example

```js
var empty = require('@stackline/is-empty');

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

## Credits and original authors

- Original project: [is-empty](https://github.com/ianstormtaylor/is-empty).
- Stackline maintenance: [Alexandro Paixao Marques](https://www.linkedin.com/in/aleinfo/) and [Stackline contributors](https://github.com/alexandroit).

Original copyright, license notices and contributor acknowledgements remain part of this distribution. Stackline maintenance does not replace authorship of the original work.

## Community and Links

- [Stackline website](https://alexandro.net/)
- [GitHub projects](https://github.com/alexandroit)
- [npm packages](https://www.npmjs.com/~alex360qc)
- [Reddit community — r/Stackline](https://www.reddit.com/r/Stackline/)
- [Maintainer LinkedIn](https://www.linkedin.com/in/aleinfo/)

Use this repository's issue tracker for reproducible bugs and feature requests. Join r/Stackline for examples, usage questions and release discussions.
