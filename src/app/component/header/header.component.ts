import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectedValue:any
  selectedCountry:any
  persons:any[]=["Smith","William","Afif"]
  countries:any[]=["Pakistan","America","Canada"]
  ngOnInit(){

  }

}
