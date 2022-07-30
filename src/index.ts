// Properly annotate the variables and their return types
// For making any parameters available optional parameters usually we do "taxYear?"
// By default if we don't have any return parameters then function in javascript will return undefined.

function calculateTax(income: number, taxYear = 2022): number {
	if (income < 50_000 && taxYear < 2018) return income * 0.3
	return income * 0.4
}

console.log(calculateTax(45_000, 2017))
console.log(calculateTax(55_000, 2017))
