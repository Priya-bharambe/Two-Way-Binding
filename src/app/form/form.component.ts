import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }
  name = '';
  email='';
  address='';
  city='';
  state='';
  zip='';
  cardname='';
  cardnumber='';
  exmonth='';
  exyear='';
  cvv='';

  ngOnInit(): void {
  }

}
