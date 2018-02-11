import {Injectable} from "@angular/core";
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Parent} from './parent/parent';
import {ParentComponent} from './parent/parent.component';
import { Response } from "@angular/http/src/static_response";
import { Component, OnInit } from '@angular/core';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import {AllskillComponent} from './allskill/allskill.component';
import {Subject} from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class ParentService {
    id:string="2";
  url:string='https://my-json-server.typicode.com/sdsahib/getjsondata/parent';
getData():Observable<Parent> {
    return this.http.get(this.url).map(parent=>parent.json());
 }
constructor(private http:Http) {}
private messageSource = new BehaviorSubject<number>(0);
  currentMessage = this.messageSource.asObservable();
changeMessage(message: number) {
    this.messageSource.next(message);    
  }

  private childSource = new BehaviorSubject<string>("");
  childMessage = this.childSource.asObservable();
  changeChild(message: string) {
    console.log("child"+message);
    this.childSource.next(message);    
  }
}
