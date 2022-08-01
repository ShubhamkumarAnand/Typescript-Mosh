// Object Oriented programming

class Account {
	readonly id: number
	owner: string
	private _balance: number
	nickname?: string

	constructor(id: number, owner: string, balance: number) {
		this.id = id
		this.owner = owner
		this._balance = balance
  }

  private calculateTax() {

  }

	deposit(amount: number): void {
		if (amount <= 0) throw new Error('Amount must be greater than zero')
		this._balance += amount
	}

	getBalance(): number {
		return this._balance
	}
}

let account = new Account(1, 'Shubham', 0)

console.log(account)
console.log(typeof account)
console.log(account instanceof Account)

account.deposit(100)
console.log(account.getBalance());
