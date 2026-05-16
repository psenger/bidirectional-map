<div align="center">

# @psenger/bidirectional-map

**Bidirectional key-value lookup — set once, look up from either side in O(1).**

[![CI](https://github.com/psenger/bidirectional-map/actions/workflows/test.yml/badge.svg)](https://github.com/psenger/bidirectional-map/actions/workflows/test.yml) [![npm version](https://img.shields.io/npm/v/@psenger/bidirectional-map)](https://www.npmjs.com/package/@psenger/bidirectional-map) [![npm downloads](https://img.shields.io/npm/dm/@psenger/bidirectional-map)](https://www.npmjs.com/package/@psenger/bidirectional-map) [![License: MIT](https://img.shields.io/npm/l/@psenger/bidirectional-map)](./LICENSE)

[Features](#features) • [Installation](#installation) • [Quick Start](#example-usage) • [API](#api) • [Contributing](./CONTRIBUTING.md)

</div>

---

A standard JavaScript `Map` only goes one direction. `BiDirectionalMap` registers both
`A→B` and `B→A` in a single `set()` call — so `get(A)` returns `B` and `get(B)` returns
`A` without managing a second structure yourself. It extends the native `Map`, so every
method you already use (`get`, `has`, `delete`, `forEach`, iteration) works without
modification. Zero runtime dependencies.

## Features

- **One call, both directions.** `map.set(key, value)` registers the forward and reverse
  mapping automatically — no second `set()` needed.
- **Consistent pairs.** Assigning a key that already participates in a relationship removes
  the stale pair first, keeping the map internally consistent.
- **Full `Map` compatibility.** Extends the built-in `Map` — spread, destructuring,
  `entries()`, `keys()`, `values()`, and `size` all work as-is.

<!--START_SECTION:file:INSTALLATION.md-->
## Installation

```bash
npm install @psenger/bidirectional-map--save
```

or

```bash
yarn add @psenger/bidirectional-map
```

<!--END_SECTION:file:INSTALLATION.md-->

<!--START_SECTION:file:TUTORIAL.md-->
## Example Usage

```javascript
const bidiMap = new BiDirectionalMap();
bidiMap.set(1, 2).set(3, 4);
console.log (`Key(1) = Value(${bidiMap.get(1)})` );
console.log (`Key(2) = Value(${bidiMap.get(2)})` );
console.log (`Key(3) = Value(${bidiMap.get(3)})` );
console.log (`Key(4) = Value(${bidiMap.get(4)})` );
// Key(1) = Value(2)
// Key(2) = Value(1)
// Key(3) = Value(4)
// Key(4) = Value(3)
for( let [Key,Value] of bidiMap.entries()){
    console.log(`Key(${Key}) = Value(${Value})`);
}
// Key(1) = Value(2)
// Key(2) = Value(1)
// Key(3) = Value(4)
// Key(4) = Value(3)
```

<!--END_SECTION:file:TUTORIAL.md-->

<!--START_SECTION:jsdoc-->
## API

<a name="BiDirectionalMap"></a>

### BiDirectionalMap
{BiDirectionalMap}

**Kind**: global class  
**See**: [wikipedia](https://en.wikipedia.org/wiki/Bidirectional_map) for further information  
**Version**: 1.0.6  

* [BiDirectionalMap](#BiDirectionalMap)
    * [new BiDirectionalMap([props])](#new_BiDirectionalMap_new)
    * _instance_
        * [.set(key, value)](#BiDirectionalMap+set) ⇒ [<code>BiDirectionalMap</code>](#BiDirectionalMap)
    * _static_
        * [.Symbol.species](#BiDirectionalMap.Symbol.species) ⇒ <code>MapConstructor</code>

<a name="new_BiDirectionalMap_new"></a>

#### new BiDirectionalMap([props])

| Param | Type | Description |
| --- | --- | --- |
| [props] | <code>Iterable</code> | An Iterable object whose elements are key-value pairs (arrays with two elements, e.g. [[ 1, ['one','two'] ],[ 2, ['three'] ]]). Each key-value pair is added to the new Map; null values are treated as undefined. |

<a name="BiDirectionalMap+set"></a>

#### biDirectionalMap.set(key, value) ⇒ [<code>BiDirectionalMap</code>](#BiDirectionalMap)
Sets the value for the key in the Map object. Overriding the parent `set` and returns the Map
object. Only works with `String` or `Numbers.

**Kind**: instance method of [<code>BiDirectionalMap</code>](#BiDirectionalMap)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> \| <code>number</code> | The key of the element to add to the `BiDirectionalMap` object. |
| value | <code>string</code> \| <code>number</code> | The value of the element to add to the `BiDirectionalMap` object. |

<a name="BiDirectionalMap.Symbol.species"></a>

#### BiDirectionalMap.Symbol.species ⇒ <code>MapConstructor</code>
Overwrite BiDirectionalMap species to the parent Map constructor

**Kind**: static property of [<code>BiDirectionalMap</code>](#BiDirectionalMap)  

<!--END_SECTION:jsdoc-->

## License

<!--START_SECTION:file:LICENSE-->
MIT License

Copyright (c) 2021 Philip A Senger

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

<!--END_SECTION:file:LICENSE-->

---

<div align="center">

**A minimal, zero-dependency bidirectional Map for JavaScript and Node.js.**

[Report a bug](https://github.com/psenger/bidirectional-map/issues) • [Contributing](./CONTRIBUTING.md) • [npm](https://www.npmjs.com/package/@psenger/bidirectional-map)

</div>
