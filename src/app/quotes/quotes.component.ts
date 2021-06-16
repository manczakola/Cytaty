import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { QUOTES } from '../models/data-base';
import { Quotation } from '../models/quotation';
import { QuotationEvent } from './QuotationEvent';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent {
  quotes: Quotation[] = QUOTES;
  @Output() vote = new EventEmitter<QuotationEvent>();



  addVote(quotation: Quotation, value: number) {
    this.vote.emit({quotation,value});
    console.log({quotation,value});

  }

}
