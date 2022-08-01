// Object Oriented programming

class Account {
	id: number
	owner: string
	balance: number

	constructor(id: number, owner: string, balance: number) {
		this.id = id
		this.owner = owner
		this.balance = balance
	}

	deposit(amount: number): void {
    if (amount <= 0)
      throw new Error('Amount must be greater than zero')
    else
      this.balance += amount
	}
}

let account = new Account(1, 'Shubham', 0)
console.log(account)
console.log(typeof account)
console.log(account instanceof Account);


account.deposit(100)
console.log(account.balance);
