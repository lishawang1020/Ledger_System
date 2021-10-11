import { Component, OnInit } from '@angular/core';
import { HistroyService } from '../history.service';
import { Transaction } from '../transaction';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  public transactions: Transaction[] = [];
  public testDes: string = '';
  

  constructor(
    private historyService: HistroyService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.transactions = this.historyService.getTransactions();
  }

  public printEntries() {
    console.log('Below are the entries');
    console.log(this.historyService.getTransactions());
  }

  public goToHomePage() {
    this.router.navigate(['']);
  }

}
