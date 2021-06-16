import { Quotation } from "../models/quotation";

export interface QuotationEvent {
    quotation: Quotation;
    value: number;
  }