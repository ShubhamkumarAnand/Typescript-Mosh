// Object Oriented programming

class Account {
	nickname?: string

	constructor(public readonly id: number, public owner: string, private _balance: number) {}

	deposit(amount: number): void {
		if (amount <= 0) throw new Error('Amount must be greater than zero')
		this._balance += amount
	}
	// getter -> Method inside a class to set a property on the state
	get balance(): number {
		return this._balance
	}

	// setter -> Method inside a class to set a property on the state
	set balance(value: number) {
		if (value <= 0) throw new Error('Invalid Amount')
		this._balance = value
	}
}

let account = new Account(1, 'Shubham', 0)

console.log(account)
console.log(typeof account)
console.log(account instanceof Account)

account.deposit(100)
account.balance = 20_000_000
console.log(account.balance)
