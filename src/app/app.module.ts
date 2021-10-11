import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LedgerComponent } from './ledger/ledger.component';
import { HistoryComponent } from './history/history.component';
import { HistroyService } from './history.service';

@NgModule({
  declarations: [
    AppComponent,
    LedgerComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HistroyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
