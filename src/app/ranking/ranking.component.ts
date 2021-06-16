import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Quotation } from '../models/quotation';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent {
  @Input()
  quotes: Quotation[] = [];
  @Input()
  rankingTitle: string= '';
}
