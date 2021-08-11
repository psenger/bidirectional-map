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
