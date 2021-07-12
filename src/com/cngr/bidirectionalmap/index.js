/*
 * Copyright (c) 2021, Philip A Senger (https://github.com/psenger/bidirectional-map/blob/main/LICENSE)
 */
'use strict'

/**
 * @module bidirectionalmap
 * @type {BiDirectionalMap}
 */
module.exports = class BiDirectionalMap extends Map {
  // Overwrite MyMap species to the parent Map constructor
  static get [Symbol.species]() {
    return Map;
  }

  /**
   * Constructor, with optional initial state of iterable.
   *
   * @param [iterable] - An Array or other iterable object whose elements are key-value pairs (arrays with two elements, e.g. [[ 1, ['one','two'] ],[ 2, ['three'] ]]). Each key-value pair is added to the new Map; null values are treated as undefined.
   */
  constructor(props) {
    super(props);
    if (props && typeof props[Symbol.iterator] === 'function') {
      for (let [key, value] of props) {
        this.set(value, key)
      }
    }
  }

  /**
   * Sets the value for the key in the Map object. Returns the Map object.
   * @param key
   * @param value
   * @returns {module.BiDirectionalMap}
   */
  set(key, value) {
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
    return this;
  }
}
