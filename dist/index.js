"use strict";
class ArrayUtils {
    wrapInArray(value) {
        return [value];
    }
}
let utils = new ArrayUtils();
let numbers = utils.wrapInArray('1');
console.log(numbers);
//# sourceMappingURL=index.js.map