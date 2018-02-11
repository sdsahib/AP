import { Component } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Injectable} from "@angular/core";
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Parent} from './parent/parent';
import {ParentComponent} from './parent/parent.component';
import { Response } from "@angular/http/src/static_response";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
}
  