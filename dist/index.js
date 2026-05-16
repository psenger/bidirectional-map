'use strict';

/*
 * Copyright (c) 2021, Philip A Senger (https://github.com/psenger/bidirectional-map/blob/main/LICENSE)
 */

/**
 * Bi Directional Map is a Map, in which the keys and values are registered pointing to each
 * other ( a binary relationship ). EG A->B and B->A. This is a Advanced Data Type and is some times
 * called an Associative Data Structure.
 * @version 1.0.5
 * @see {@link https://en.wikipedia.org/wiki/Bidirectional_map|wikipedia} for further information
 * @param {Iterable} [props] - An Iterable object whose elements are key-value pairs (arrays with two elements, e.g. [[ 1, ['one','two'] ],[ 2, ['three'] ]]). Each key-value pair is added to the new Map; null values are treated as undefined.
 * @constructs BiDirectionalMap
 * @class {BiDirectionalMap}
 */
class BiDirectionalMap extends Map {
  /**
   * Overwrite BiDirectionalMap species to the parent Map constructor
   * @return {MapConstructor}
   */
  static get [Symbol.species] () {
    return Map
  }

  constructor (props) {
    super(props);
    if (props && typeof props[Symbol.iterator] === 'function') {
      for (const [key, value] of props) {
        this.set(value, key);
      }
    }
  }

  /**
   * Sets the value for the key in the Map object. Overriding the parent `set` and returns the Map
   * object. Only works with `String` or `Numbers.
   * @override
   * @param {string|number} key - The key of the element to add to the `BiDirectionalMap` object.
   * @param {string|number} value - The value of the element to add to the `BiDirectionalMap` object.
   * @returns {BiDirectionalMap}
   */
  set (key, value) {
    // 1.) remove any existing relationships
    if (super.has(key) || super.has(value)) {
      const a = super.get(key);
      const b = super.get(value);
      super.delete(a);
      super.delete(b);
      super.delete(key);
      super.delete(value);
    }
    // 2.) now set the relationship
    super.set(key, value);
    super.set(value, key);
    return this
  }
}

module.exports = BiDirectionalMap;
//# sourceMappingURL=index.js.map
