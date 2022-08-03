"use strict";
class KeyValuePair {
    key;
    value;
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair = new KeyValuePair(1, 'AAA');
let pair1 = new KeyValuePair('a', 'AAB');
console.log(pair.key.valueOf());
console.log(pair1.key.valueOf());
//# sourceMappingURL=index.js.map