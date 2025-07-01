import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesInvoiceComponent } from './sales-invoice/sales-invoice-component';
import { SalesComponent } from './sales-component';

const routes: Routes = [
  { path: '', component: SalesComponent,
    children: [
      { path: 'invoice', component: SalesInvoiceComponent }
  ]
}
] ;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
