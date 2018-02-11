import { Component, OnInit } from '@angular/core';
import {ParentComponent} from '../parent/parent.component';
import {Input} from '@angular/core';
import { Parent } from '../parent/parent';
import {child} from '../parent/child';
@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})

export class RatingComponent implements OnInit {
  isValid:boolean =false;
  @Input() child: child;  
  constructor() { }

  ngOnInit() {
  }
  public  Valid(isValid:string){
    var x=document.getElementById(isValid);
    x.hidden=!(x.hidden);
  }
}