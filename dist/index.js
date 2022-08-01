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
    getBalance() {
        return this._balance;
    }
}
let account = new Account(1, 'Shubham', 0);
console.log(account);
console.log(typeof account);
console.log(account instanceof Account);
account.deposit(100);
console.log(account.getBalance());
//# sourceMappingURL=index.js.map