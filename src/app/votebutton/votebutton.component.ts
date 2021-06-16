import { EventEmitter, Input } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { Quotation } from '../models/quotation';

@Component({
  selector: 'app-votebutton',
  templateUrl: './votebutton.component.html',
  styleUrls: ['./votebutton.component.css']
})
export class VotebuttonComponent {

// @Output(),,
@Output() voteValue = new EventEmitter<number>()

 
}
