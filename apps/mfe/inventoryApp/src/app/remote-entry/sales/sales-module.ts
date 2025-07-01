import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesRoutingModule } from './sales-routing-module';
import { SalesInvoiceComponent } from './sales-invoice/sales-invoice-component';
import { SalesComponent } from './sales-component';
import { InvoiceHeader } from '../common/invoice-header/invoice-header';

@NgModule({
  declarations: [ SalesComponent, SalesInvoiceComponent,  ],
  imports: [CommonModule, SalesRoutingModule,InvoiceHeader ],
})
export class SalesModule {}
