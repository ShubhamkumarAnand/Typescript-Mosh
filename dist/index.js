"use strict";
class Account {
    id;
    owner;
    balance;
    nickname;
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('Amount must be greater than zero');
        else
            this.balance += amount;
    }
}
let account = new Account(1, 'Shubham', 0);
console.log(account);
console.log(typeof account);
console.log(account instanceof Account);
account.deposit(100);
console.log(account.balance);
//# sourceMappingURL=index.js.map