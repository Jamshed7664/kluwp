import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beneficiaries',
  templateUrl: './beneficiaries.component.html',
  styleUrls: ['./beneficiaries.component.css']
})
export class BeneficiariesComponent implements OnInit {
  term:any;
  constructor() { }

  ngOnInit(): void {
  }

myData:any=[
  {name : 'James Anderson',Address:'House',City :'Sliema',country :'Malta', zip :'262805',email :'abc@gmail.com',ibn :'VALMTMT0000000000',swift:'VALLMTMT',bankcountry:'Malta'},
  {name : 'James Anderson',Address:'House',City :'Sliema',country :'Malta', zip :'262806',email :'abc@gmail.com',ibn :'VALMTMT0000000000',swift:'VALLMTMT',bankcountry:'Malta'},
  {name : 'James Anderson',Address:'Office',City :'Sliema',country :'Spain', zip :'262807',email :'abc@gmail.com',ibn :'VALMTMT0000000000',swift:'VALLMTMT',bankcountry:'Malta'},
  {name : 'James Anderson',Address:'House',City :'Sliema',country :'Itely', zip :'262808',email :'abc@gmail.com',ibn :'VALMTMT0000000000',swift:'VALLMTMT',bankcountry:'Malta'},
  {name : 'James Anderson',Address:'House',City :'Sliema',country :'Austrelia', zip :'262805',email :'abc@gmail.com',ibn :'VALMTMT0000000000',swift:'VALLMTMT',bankcountry:'Malta'},
  {name : 'James Adrew',Address:'House',City :'Sliema',country :'Malta', zip :'262805',email :'abc@gmail.com',ibn :'VALMTMT0000000000',swift:'VALLMTMT',bankcountry:'Malta'},
  {name : 'James Anderson',Address:'House',City :'Sliema',country :'India', zip :'262805',email :'abc@gmail.com',ibn :'VALMTMT0000000000',swift:'VALLMTMT',bankcountry:'Malta'},
  {name : 'James Anderson',Address:'House',City :'Sliema',country :'Malta', zip :'262805',email :'abcd@gmail.com',ibn :'VALMTMT0000000001',swift:'VALLMTMT1',bankcountry:'Malta2'},
  {name : 'Men',Address:'House',City :'Sliema',country :'Malta', zip :'262805',email :'abc@gmail.com',ibn :'VALMTMT0000000000',swift:'VALLMTMT',bankcountry:'Malta'},
  {name : 'James Anderson',Address:'House',City :'Gola',country :'Japan', zip :'262805',email :'abc@gmail.com',ibn :'VALMTMT0000000000',swift:'VALLMTMT',bankcountry:'Malta'},
  {name : 'James Anderson',Address:'House',City :'Sliema',country :'Malta', zip :'262805',email :'abc@gmail.com',ibn :'VALMTMT0000000000',swift:'VALLMTMT',bankcountry:'Malta'},
  {name : 'Andrew',Address:'House',City :'Lkhimpurr',country :'Malta', zip :'262805',email :'abc@gmail.com',ibn :'VALMTMT0000000000',swift:'VALLMTMT',bankcountry:'Malta'},
];
total:any=5;
onSelect(event:any){
  this.total =event.target.value;
console.log(event.target.value);

}
}
