class BankAccount {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposit of ${amount} made. New balance is ${this.balance}`);
  }

  withdraw(amount) {
    if (this.balance-amount >= 0) {
      this.balance -= amount;
      console.log(`Withdrawal of ${amount} processed. Remaining balance is ${this.balance}`);
    } else {
      console.log("Insufficient funds. Withdrawal not processed.");
    }
  }

  checkBalance() {
    console.log(`Account Name: ${this.name}
Account balance is ${this.balance}`);
  }
}

let account1 = new BankAccount("Miraj Hossain", 1000);
account1.checkBalance();
account1.deposit(500);
account1.withdraw(200);
account1.checkBalance();
