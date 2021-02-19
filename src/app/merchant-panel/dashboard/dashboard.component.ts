import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommunicationService } from 'src/app/services/communication.service';
import swal from 'sweetalert';
// declare var $: any;
import * as $ from 'jquery'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
routeName:any="Payouts Sent";
  constructor(private communication :CommunicationService, private route:Router) { }

  ngOnInit(): void {
    $("#menu-toggle").click(function(e:any) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
    if(window.localStorage.getItem('routerName')){
      this.routeName =window.localStorage.getItem('routerName')
    }else{
      this.routeName ="Payouts Sent"
    }
  }
  getRouteName(event:any){
    this.routeName =event;
    window.localStorage.setItem('routerName',event)
  }
  logout(){
    swal({
      title: "Are you sure?",
      text: "Do you want to logout ?",
      icon: "warning",
      buttons: ['Cancel','OK'],
      dangerMode: true,
      closeOnClickOutside :false,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("You have logged out successfully !", {
          icon: "success",
          timer : 1000,
          buttons :[false],
        }).then( willLogout =>{
          if(!willLogout){
            this.route.navigate(['/login'])
          }
        })
      }
    });
  }
}
