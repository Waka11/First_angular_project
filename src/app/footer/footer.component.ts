import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  name:string = 'FOOTER';
  online:number = 48;

  constructor() { }

  ngOnInit() {
  }

}
