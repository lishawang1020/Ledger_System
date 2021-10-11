import { Injectable } from '@angular/core';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class HistroyService {  
  private transactions: Transaction[] = [];
  private balance: number = 0;

  addEntry(entry: Transaction) {
    this.transactions.push(entry);
  }

  getTransactions(): Transaction[] {
    return this.transactions;
  }

  getBalance(): number {
    return this.balance;
  }

  addBalance(value: number) {
    this.balance += value;
  }
} 