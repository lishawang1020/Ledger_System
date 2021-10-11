import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { LedgerComponent } from './ledger/ledger.component';

const routes: Routes = [
  { path: '', component: LedgerComponent },
  { path: 'history-component', component: HistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }