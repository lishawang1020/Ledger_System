import { Component, OnInit } from '@angular/core';
import { HistroyService } from '../history.service';
import { Transaction } from '../transaction';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {
  public balance!: number;
  private tokenPrice: number = 0.25;
  private gamePrice: number = 4;

  constructor(
    private historyService: HistroyService,
    private router: Router,
  ) { }

  ngOnInit(): void { 
    this.balance = this.historyService.getBalance();
  }

  decreateBalance() {
    if (this.balance < 4) {
      alert("Not enough token to play.");
    }
    else {
      const entry: Transaction = {
        description: 'Sonic Advanture Game',
        quantity: -this.gamePrice,
        total: -this.gamePrice * this.tokenPrice,
      };
      this.historyService.addEntry(entry);
      this.historyService.addBalance(-this.gamePrice);
      this.balance = this.historyService.getBalance();
    }
  }

  goToHistory() {
    this.router.navigate(['/history-component']);
  }

  onSubmit(data: string) {
    var isInt = /^\+?\d+$/.test(data);
    if (isInt === false) {
      alert("Please enter a valid quantity.");
    }
    else {
      let quantity = Number(data);
      this.historyService.addBalance(quantity);
      this.balance = this.historyService.getBalance();
      const entry: Transaction = {
        description: 'Card Refill',
        quantity: quantity,
        total: quantity * this.tokenPrice,
      };
      this.historyService.addEntry(entry);
      alert("Purchase successful!");
    }
  }

}
