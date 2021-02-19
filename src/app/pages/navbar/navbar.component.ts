import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $("#menu-toggle").click(function(e:any) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }
  }

