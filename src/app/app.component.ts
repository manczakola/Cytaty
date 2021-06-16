import { Component } from '@angular/core';
import { Quotation } from './models/quotation';
import { QUOTES } from './models/data-base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = '';
  quotes: Quotation[] = QUOTES;
 
  rankingTitle: string = '';


  sortByBestVotes(): Quotation[] {
    return [...this.quotes].sort((a, b) => b.votes - a.votes);
  }


  addVote(quotation: Quotation, value: number) {
    // quotation.votes = quotation.votes ? quotation.votes : 0;
    quotation.votes += value;
    
  }

  onNewQuotation(quotation:Quotation) {
    console.log(quotation);
    
  this.quotes.unshift(quotation)
}
  bestQuotes() {
    this.rankingTitle = 'Najlepsze cytaty';
    return this.quotes.filter(q => q.votes > 0);
  }

  
  worstQuotes() {
    this.rankingTitle = 'Najgorsze cytaty';
    return this.quotes.filter(q => q.votes < 0);
  }
  titleFunc() {
    return this.title = "Aplikacja Najlepsze Cytaty"
  }

}