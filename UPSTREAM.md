# Upstream and issue review

Base: [ianstormtaylor/is-empty](https://github.com/ianstormtaylor/is-empty), npm `is-empty@1.2.0`, commit `56ac2424f4f15866ae5274e15f5d2b41d38749b5`. Full Git history and upstream attribution are retained. Last npm publication: 2017-02-01T16:39:49.434Z. Release inactivity does not by itself prove abandonment.

Review: 2026-09-29T00:21:53.835309+00:00. Source coverage: Most recently updated 100 open and 30 closed issue/PR entries; PRs removed. This is triage evidence, not a claim of exhaustive review.

Keep existing value semantics: invalid dates (#12), Intl/non-enumerable objects (#10), function arity (#9), whitespace (#14), and null-prototype objects are compatibility behavior, not changed by this fork. Closed #1, #2 and #8 are covered by the selected upstream tests (length properties, booleans and the string Error). Closed #5 is addressed by pinned development tools. No runtime defect was confirmed; lib/index.js is unchanged.

## Reviewed issue entries

- [ianstormtaylor/is-empty#12](https://github.com/ianstormtaylor/is-empty/issues/12) (open): Question: should invalid date be considered as empty?
- [ianstormtaylor/is-empty#10](https://github.com/ianstormtaylor/is-empty/issues/10) (open): isEmpty(window.Intl) supposed to be false in Chrome
- [ianstormtaylor/is-empty#9](https://github.com/ianstormtaylor/is-empty/issues/9) (closed): The empty of functions
- [ianstormtaylor/is-empty#14](https://github.com/ianstormtaylor/is-empty/issues/14) (closed): Blank spaces are considered "not empty"
- [ianstormtaylor/is-empty#8](https://github.com/ianstormtaylor/is-empty/issues/8) (closed): return true for string 'Error'
- [ianstormtaylor/is-empty#1](https://github.com/ianstormtaylor/is-empty/issues/1) (closed): Returns `true` for an Object with a `length` property
- [ianstormtaylor/is-empty#2](https://github.com/ianstormtaylor/is-empty/issues/2) (closed): Returns true for boolean true value
- [ianstormtaylor/is-empty#5](https://github.com/ianstormtaylor/is-empty/issues/5) (closed): Be more specific with dependency versions
