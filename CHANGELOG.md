# Stackline changes

## 1.0.0 — 2026-09-28

Independent maintenance fork of is-empty 1.2.0. Preserve published API, module exports and runtime engine compatibility. Keep existing value semantics: invalid dates (#12), Intl/non-enumerable objects (#10), function arity (#9), whitespace (#14), and null-prototype objects are compatibility behavior, not changed by this fork. Closed #1, #2 and #8 are covered by the selected upstream tests (length properties, booleans and the string Error). Closed #5 is addressed by pinned development tools. No runtime defect was confirmed; lib/index.js is unchanged.

Pinned development tools, real API and packed-consumer checks, GitHub CI/CodeQL gates, exact-artifact npm provenance and immutable release evidence are added. See UPSTREAM.md for limits of issue triage.
