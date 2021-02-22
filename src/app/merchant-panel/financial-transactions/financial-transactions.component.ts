import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as moment from 'moment';
import * as $ from 'jquery'
import { DaterangepickerDirective } from 'ngx-daterangepicker-material';
import { BsDatepickerDirective, BsDaterangepickerDirective } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-financial-transactions',
  templateUrl: './financial-transactions.component.html',
  styleUrls: ['./financial-transactions.component.css']
})
export class FinancialTransactionsComponent implements OnInit {
  term: any;
  p: any = 1;
  collection: any = [];
  totalLength: number = 0;
  selected: any = null;
  makes: any[] = [];
  total: any = 7;
  showRanngePickerInput: boolean = true;
  showbsDatePicker: boolean = true;
  currentData:Date;
  @ViewChild(DaterangepickerDirective, { static: false }) pickerDirective: DaterangepickerDirective;
  @ViewChild(BsDatepickerDirective, { static: false }) picker: BsDatepickerDirective;
  @ViewChild(BsDaterangepickerDirective, { static: false }) bsRangePicker: BsDaterangepickerDirective;
  constructor() {
    this.makes = [];
  }

  ngOnInit() {
    this.totalLength = Math.ceil(this.myData.length / 7);
  }

  openDatepicker() {

    this.picker.show();
  }
  openRanePicker() {
    this.bsRangePicker.show()
  }
  getRangeValue(event: any) {
    console.log(this.currentData);

  }
  config = {
    itemsPerPage: 6,
    currentPage: 1,
    totalItems: this.collection.count
  };

  public maxSize: number = 6;
  public currentPage: number = 1;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;
  public labels: any = {
    previousLabel: '',
    nextLabel: '',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: `You're on page`
  };

  myData: any = [
    { TransactionGroupDate: '09/02/22021', TotalTransactions: '300', TotalAmountTransacted: '46,721', TotalFees: '654' },
    { TransactionGroupDate: '09/02/22021', TotalTransactions: '300', TotalAmountTransacted: '46,721', TotalFees: '654' },
    { TransactionGroupDate: '09/02/22021', TotalTransactions: '300', TotalAmountTransacted: '46,721', TotalFees: '654' },
    { TransactionGroupDate: '09/02/22021', TotalTransactions: '300', TotalAmountTransacted: '46,721', TotalFees: '654' },
    { TransactionGroupDate: '09/02/22021', TotalTransactions: '300', TotalAmountTransacted: '46,721', TotalFees: '654' },
    { TransactionGroupDate: '09/02/22021', TotalTransactions: '300', TotalAmountTransacted: '46,721', TotalFees: '654' },
    { TransactionGroupDate: '09/02/22021', TotalTransactions: '300', TotalAmountTransacted: '46,721', TotalFees: '654' },
    { TransactionGroupDate: '09/02/22021', TotalTransactions: '300', TotalAmountTransacted: '46,721', TotalFees: '654' },
    { TransactionGroupDate: '09/02/22021', TotalTransactions: '300', TotalAmountTransacted: '46,721', TotalFees: '654' },
    { TransactionGroupDate: '09/02/22021', TotalTransactions: '300', TotalAmountTransacted: '46,721', TotalFees: '654' },
    { TransactionGroupDate: '09/02/22021', TotalTransactions: '300', TotalAmountTransacted: '46,721', TotalFees: '654' },
    { TransactionGroupDate: '09/02/22021', TotalTransactions: '300', TotalAmountTransacted: '46,721', TotalFees: '654' },
    { TransactionGroupDate: '09/02/22021', TotalTransactions: '300', TotalAmountTransacted: '46,721', TotalFees: '654' },
    { TransactionGroupDate: '09/02/22021', TotalTransactions: '300', TotalAmountTransacted: '46,721', TotalFees: '654' },
    { TransactionGroupDate: '09/02/22021', TotalTransactions: '300', TotalAmountTransacted: '46,721', TotalFees: '654' },
    { TransactionGroupDate: '09/02/22021', TotalTransactions: '300', TotalAmountTransacted: '46,721', TotalFees: '655' },

  ]

  onSelect(event: any) {
    this.total = event.target.value;
    this.config.itemsPerPage = event.target.value;
    this.totalLength = Math.ceil(this.myData.length / event.target.value);
  }
  onPageChange(event: any) {
    this.currentPage = event
    this.config.currentPage = event;
  }
}
