import { Component, OnInit } from '@angular/core';
import {SkillService} from '../skill.service';
import {Parent} from '../parent/parent';
import {Http} from '@angular/http';
import { Location } from '@angular/common';
import {Observable} from 'rxjs/Observable';
import {item} from './item';
import 'rxjs/add/operator/map';
import { slideInOutAnimation } from '../animations';
@Component({
 selector: 'app-search-page',
 templateUrl: './search-page.component.html',
 styleUrls: ['./search-page.component.css'],
//animations: [slideInOutAnimation],
//host: { '[@slideInOutAnimation]': '' }
})
export class SearchPageComponent implements OnInit {

 constructor(private location: Location) {
   
 }

filter: item={pid:0,name:'',ischild:false,cid:0};


goBack(): void {
  this.location.back();
}

 ngOnInit() {
  
 }

}

