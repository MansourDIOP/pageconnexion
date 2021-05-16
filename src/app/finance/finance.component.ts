import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {
  monimage2:string = "assetsfinance2.jpg";
  monimage1:string = "assets/images/finance1.png";
  monimage4:string = "assets/Orange_Money-Logo.wine.png";
  monimage3:string = "assets/Budget3.png";

  constructor() { }

  ngOnInit(): void {
  }

}
