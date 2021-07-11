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
        // set(key: K, value: V): this;
        super.set(key,value);
        super.set(value,key);
        return this;
    }
}

module.exports = BiDirectionalMap
