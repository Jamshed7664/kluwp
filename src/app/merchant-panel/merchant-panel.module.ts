import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MerchantPanelRoutingModule } from './merchant-panel-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PayoutSentComponent } from './payout-sent/payout-sent.component';
import { BeneficiariesComponent } from './beneficiaries/beneficiaries.component';
import { FinancialTransactionsComponent } from './financial-transactions/financial-transactions.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
// import {NgxDaterangepickerMd} from 'ngx-daterangepicker-materia
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
@NgModule({
  declarations: [DashboardComponent, PayoutSentComponent, BeneficiariesComponent, FinancialTransactionsComponent],
  imports: [
    CommonModule,
    MerchantPanelRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgxDaterangepickerMd.forRoot(),
    NgxSpinnerModule,
    ModalModule,
    BsDatepickerModule.forRoot()
  ],
  providers :[BsModalService]
})
export class MerchantPanelModule { }
