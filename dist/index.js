"use strict";
function cmToInch(length) {
    if (typeof length === 'number')
        return length / 1.54;
    else
        return parseFloat(length) * 1.54;
}
console.log(cmToInch(64.5));
console.log(cmToInch('178cm'));
//# sourceMappingURL=index.js.map