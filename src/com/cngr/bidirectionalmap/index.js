class BiDirectionalMap extends Map {
    // Overwrite MyMap species to the parent Map constructor
    static get [Symbol.species]() { return Map; }

    constructor(props) {
        super(props);
        if ( props && typeof props[Symbol.iterator] === 'function' ) {
            for(let [key,value] of props) {
                this.set(value,key)
            }
        }
    }

    set(key,value) {
        // 1.) remove any existing relationships
        if ( super.has(key) || super.has(value) ) {
          const a = super.get(key);
          const b = super.get(value);
          super.delete(a);
          super.delete(b);
          super.delete(key);
          super.delete(value);
        }
        // 2.) now set the relationship
        super.set(key,value);
        super.set(value,key);
        return this;
    }
}

module.exports = BiDirectionalMap
