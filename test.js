const TSMap = require("./index.js").TSMap;

const sellOrderMap = new TSMap();
sellOrderMap.sortedSet(1, 2);
sellOrderMap.sortedSet(1, 3);
sellOrderMap.sortedSet(1, 5);
console.log(sellOrderMap.get(1));