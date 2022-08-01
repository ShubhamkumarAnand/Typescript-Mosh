"use strict";
class Account {
    id;
    owner;
    _balance;
    nickname;
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('Amount must be greater than zero');
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value <= 0)
            throw new Error('Invalid Amount');
        this._balance = value;
    }
}
let account = new Account(1, 'Shubham', 0);
console.log(account);
console.log(typeof account);
console.log(account instanceof Account);
account.deposit(100);
account.balance = 20000000;
console.log(account.balance);
//# sourceMappingURL=index.js.map