import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeneficiariesComponent } from './beneficiaries/beneficiaries.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FinancialTransactionsComponent } from './financial-transactions/financial-transactions.component';
import { PayoutSentComponent } from './payout-sent/payout-sent.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  },
  {
    path :'dashboard',
    component : DashboardComponent ,
    children : [
      {
        path: '', redirectTo: 'payoutsSent', pathMatch: 'full'
      },
      {
        path :'payoutsSent', component : PayoutSentComponent ,
      },
      {
        path :'beneficiaries', component : BeneficiariesComponent ,
      },
      {
        path :'financialTransactions', component : FinancialTransactionsComponent ,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchantPanelRoutingModule { }
