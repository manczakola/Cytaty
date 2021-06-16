import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QUOTES } from '../models/data-base';
import { Quotation } from '../models/quotation';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {
  @Output() newQuotation = new EventEmitter<Quotation>();
  isFormVisible: boolean = false;
  quotation: Quotation = { author: '', quotation: '', votes: 0 };

  switchFormVisibility(): void {
    this.isFormVisible = !this.isFormVisible;
  }


  addQuotation() {
    this.newQuotation.emit(this.quotation);
    this.quotation = { author: '', quotation: '', votes: 0 };
  }
}
