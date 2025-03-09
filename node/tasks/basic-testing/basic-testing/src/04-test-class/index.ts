import { random } from 'lodash';

export class BankAccount {
  private _balance: number;

  constructor(initialBalance: number) {
    this._balance = initialBalance;
  }

  public getBalance() {
    return this._balance;
  }

  public deposit(amount: number): this {
    this._balance += amount;

    return this;
  }

  public withdraw(amount: number): this {
    if (amount > this._balance) {
      throw new InsufficientFundsError(this._balance);
    }
    this._balance -= amount;

    return this;
  }

  public transfer(amount: number, toAccount: BankAccount): this {
    if (this === toAccount) {
      throw new TransferFailedError();
    }

    this.withdraw(amount);
    toAccount.deposit(amount);

    return this;
  }

  public async fetchBalance(): Promise<number | null> {
    const balance = random(0, 100, false);

    const requestFailed = random(0, 1, false) === 0;

    return requestFailed ? null : balance;
  }

  public async synchronizeBalance() {
    const balance = await this.fetchBalance();
    if (balance === null) {
      throw new SynchronizationFailedError();
    }

    this._balance = balance;
  }
}

export const getBankAccount = (initialBalance: number): BankAccount => {
  return new BankAccount(initialBalance);
};

export class TransferFailedError extends Error {
  constructor() {
    super('Transfer failed');
  }
}

export class SynchronizationFailedError extends Error {
  constructor() {
    super('Synchronization failed');
  }
}

export class InsufficientFundsError extends Error {
  constructor(balance: number) {
    super(`Insufficient funds: cannot withdraw more than ${balance}`);
  }
}
