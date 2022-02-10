/* 4.Create an Account class. Account should have: id, name, balance.
 It should have setters for name and balance, and getters for all fields.
 It should have a method: credit(amount), which should add amount to balance and return the updated balance.
 It should have a method: debit(amount), which should subtract the amount from the balance, if amount is less than the balance, otherwise output “Amount exceeded balance.”
 It should have a method: transferTo(anotherAccount, amount): which should subtract the amount from the account balance and add it to the given anotherAccount and return the updated balance, if amount is less than the balance, otherwise output “Amount exceeded balance.”
 It should have a static method: identifyAccounts(accountFirst, accountSecond) which gets two accounts and identifies if they are the same or not, comparing all fields.
 It should have toString method.*/

class account {
  constructor(id, name, balance) {
    this._id = id;
    this._name = name;
    this._balance = balance;
  }

  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }
  get balance() {
    return this._balance;
  }
  set balance(newBalance) {
    this._balance = newBalance;
  }

  credit(amount) {
    this._balance += amount;
    return this._balance;
  }

  debit(amount) {
    if (amount <= this._balance) {
      this._balance -= amount;
    } else {
      console.log("Amount exceeded balance.");
    }
  }

  transferTo(anotherAccount, amount) {
    this.debit(amount);
    anotherAccount.credit(amount);
  }

  static identifyAccounts(accountFirst, accountSecond) {
    return accountFirst.toString() == accountSecond.toString();
  }

  toString() {
    return (
      "id: " +
      this._id +
      "\n" +
      "name: " +
      this._name +
      "\n" +
      "balance: " +
      this._balance
    );
  }
}

const instanceOfAccount1 = new account("lh546", "Lilit", 45000);
const instanceOfAccount2 = new account("lh546", "Lilit", 45000);
console.log(instanceOfAccount1.toString());
console.log(account.identifyAccounts(instanceOfAccount1, instanceOfAccount2));
instanceOfAccount1.transferTo(instanceOfAccount2, 200);
console.log(instanceOfAccount1.balance);
console.log(instanceOfAccount2.balance);
