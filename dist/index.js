"use strict";
function calculateTax(income, taxYear = 2022) {
    if (income < 50000 && taxYear < 2018)
        return income * 0.3;
    return income * 0.4;
}
console.log(calculateTax(45000, 2017));
console.log(calculateTax(55000, 2017));
//# sourceMappingURL=index.js.map