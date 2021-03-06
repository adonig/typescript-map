# typescript-map
ES6 Map implemented in TypeScript.

This is not an ES6 Map polyfill, it is not a pure implementation (but it's really close!).
I just needed a way to declare maps in my ts code in a safe, reusable way without taking dozens of kilobytes.

Just over 1 kilobyte gzipped. :)

# Installation
`npm install typescript-map`

The lib creates a single global variable: `TSMap`

If you're using typescript/ES6:
```ts
import { TSMap } from "typescript-map"
```

If you're using commonjs:
```ts
const TSMap = require("typescript-map").TSMap;
```

If you're just using it in the browser:

1. Download `dist/tsmap.min.js`

2. Include it in your head: `<script src="tsmap.min.js"></script>`.

# Usage


```ts
var myMap = new TSMap();
myMap.set('foo','bar');
console.log(myMap.get('foo')) //<= "bar"

//Typescript
var myMap = new TSMap<string,number>();
myMap.set('foo',2);

//ES6 Maps take an array of arrays as the optional init object:
var myMap = new TSMap([
    ['foo','bar'],
    ['key','value']
])

```

Also includes several functions that aren't in the spec

```ts
// Safely retrieve a deeply nested object, works for nested TSMaps, objects and arrays.
let someValue = myMap.deepGet(["deeply","nested","property"]);

// Insert items keeping the keys sorted (Uses a super fast binary insert method)
myMap.sortedSet(5, "apple");
myMap.sortedSet(2, "orange");
myMap.sortedSet(7, "bannana");
console.log(myMap.keys()) // <= [2, 5, 7];

//Import JSON into the map
var myMap = new TSMap().fromJSON({
    foo:'bar',
    key:'value'
}, true); // <= optional second parameter, if "true" nested objects should be converted to TSMaps.

//Export the map to JSON
var myJSON = myMap.toJSON();

//Map the map (insert meme here).  Returns an array, not the map.
var anArray = myMap.map(function(value, key) {
    return value + " oh look, another hippy".
});

//Filter the map (removes items in the current map)
myMap.filter(function(value, key) {
    return key%2; //Remove all even objects;
});

```

Everything is documented in the src/index.ts file and the definitions file is pretty clear.  If you need a full doc on using Maps look here:
[MDN Map Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

# Building
`npm install && npm run build`

# License
MIT