import { AfterViewInit } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as moment from 'moment';
import { DaterangepickerDirective } from 'ngx-daterangepicker-material';

@Component({
  selector: 'app-payout-sent',
  templateUrl: './payout-sent.component.html',
  styleUrls: ['./payout-sent.component.css']
})
export class PayoutSentComponent implements OnInit {
  @ViewChild(DaterangepickerDirective, { static: false }) pickerDirective: DaterangepickerDirective;

  openDatepicker() {
    this.pickerDirective.open();
  }
  datesUpdated(event:any){
console.log('in changes',event);

  }

  term:any;
  p:any=1;
  collection:any = [];
  totalLength:number =0;
  selected:any=null;
  makes: any[] = [];
  constructor() {
    this.makes = [];
   }
   config = {
    itemsPerPage: 7,
    currentPage: 1,
    totalItems: this.collection.count
  };

  public maxSize: number = 7;
  public currentPage: number =1;
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
  ngOnInit(): void {
    this.totalLength =Math.ceil(this.myData.length/7);
  }
myData:any=[
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :false,GotoProfile :'abc@gmail.com'},
  {name : 'Jamshed',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'Micheal',PayoutSenton:'Office',Amount :'Sliema',Processed :false, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :false,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :false,GotoProfile :'abc@gmail.com'},
  {name : 'Andrew',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :false,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :false,GotoProfile :'abc@gmail.com'},
  {name : 'Andrew',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :false,GotoProfile :'abc@gmail.com'}, {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :false,GotoProfile :'abc@gmail.com'},
  {name : 'Andrew',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :false,GotoProfile :'abc@gmail.com'}, {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :false,GotoProfile :'abc@gmail.com'},
  {name : 'Andrew',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :false,GotoProfile :'abc@gmail.com'}, {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :false,GotoProfile :'abc@gmail.com'},
  {name : 'Andrew',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :false,GotoProfile :'abc@gmail.com'}, {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :false,GotoProfile :'abc@gmail.com'},
  {name : 'Andrew',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :false,GotoProfile :'abc@gmail.com'}, {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :false,GotoProfile :'abc@gmail.com'},
  {name : 'Andrew',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :false,GotoProfile :'abc@gmail.com'}, {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :false,GotoProfile :'abc@gmail.com'},
  {name : 'Andrew',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :false,GotoProfile :'abc@gmail.com'}, {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :false,GotoProfile :'abc@gmail.com'},
  {name : 'Andrew',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :false,GotoProfile :'abc@gmail.com'}, {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :false,GotoProfile :'abc@gmail.com'},
  {name : 'Andrew',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :false,GotoProfile :'abc@gmail.com'}, {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :false,GotoProfile :'abc@gmail.com'},
  {name : 'Andrew',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :false,GotoProfile :'abc@gmail.com'}, {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :false,GotoProfile :'abc@gmail.com'},
  {name : 'Andrew',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :false,GotoProfile :'abc@gmail.com'}, {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :false,GotoProfile :'abc@gmail.com'},
  {name : 'Andrew',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :false,GotoProfile :'abc@gmail.com'}, {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :false,GotoProfile :'abc@gmail.com'},
  {name : 'Andrew',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :false,GotoProfile :'abc@gmail.com'}, {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :false,GotoProfile :'abc@gmail.com'},
  {name : 'Andrew',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :false,GotoProfile :'abc@gmail.com'}, {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :false,GotoProfile :'abc@gmail.com'},
  {name : 'Andrew',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :false,GotoProfile :'abc@gmail.com'}, {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :false,GotoProfile :'abc@gmail.com'},
  {name : 'Andrew',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :false,GotoProfile :'abc@gmail.com'}, {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :false,GotoProfile :'abc@gmail.com'},
  {name : 'Andrew',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :false,GotoProfile :'abc@gmail.com'}, {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :false,GotoProfile :'abc@gmail.com'},
  {name : 'Andrew',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :false,GotoProfile :'abc@gmail.com'}, {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :false,GotoProfile :'abc@gmail.com'},
  {name : 'Andrew',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :false,GotoProfile :'abc@gmail.com'}, {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :false,GotoProfile :'abc@gmail.com'},
  {name : 'Andrew',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :false,GotoProfile :'abc@gmail.com'}, {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :false,GotoProfile :'abc@gmail.com'},
  {name : 'Andrew',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :false,GotoProfile :'abc@gmail.com'}, {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :false,GotoProfile :'abc@gmail.com'},
  {name : 'Andrew',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :false,GotoProfile :'abc@gmail.com'}, {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :false,GotoProfile :'abc@gmail.com'},
  {name : 'Andrew',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :false,GotoProfile :'abc@gmail.com'}, {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :false,GotoProfile :'abc@gmail.com'},
  {name : 'Andrew',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :false,GotoProfile :'abc@gmail.com'}, {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :false,GotoProfile :'abc@gmail.com'},
  {name : 'Andrew',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :false,GotoProfile :'abc@gmail.com'}, {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'James Anderson',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :false,GotoProfile :'abc@gmail.com'},
  {name : 'Andrew',PayoutSenton:'House',Amount :'Sliema',Processed :true, Reconciled :true,GotoProfile :'abc@gmail.com'},
  {name : 'Jamshed',PayoutSenton:'House',Amount :'Sliema',Processed :false, Reconciled :false,GotoProfile :'abc@gmail.com'},

]
total:any=7;
onSelect(event:any){
  this.total =event.target.value;
console.log(event.target.value);

}
onPageChange(event:any){
  this.currentPage =event
  this.config.currentPage = event;
}
omDate(event: any){
console.log(event)
}


}
