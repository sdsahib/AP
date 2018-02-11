import { Component, OnInit } from '@angular/core';
import {ParentService} from '../parent.service';
import {Parent} from './parent';
import {child} from './child';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {RatingComponent} from '../rating/rating.component';
import { Subscription } from 'rxjs/Subscription';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import {SkillService} from '../skill.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Router} from '@angular/router';
import { AfterViewChecked } from '@angular/core/src/metadata/lifecycle_hooks';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewChecked {
  constructor(private router:Router,private location:Location,private _parentService:ParentService,private _skillService:SkillService, private route: ActivatedRoute) { 
    this.getParents(); 
    
  }
  isValid:boolean =false;
message:number=1;
childname:string="";
public parents:Parent={
  id:0,
  name:"",
  child:[]
};

ngAfterViewChecked() {
  this.showChild();
}
getParents(){
  this._parentService.getData()
        .subscribe(parent => this.parents=parent,error => console.log(error),
        () => this.makeValid());
        
}

public makeValid(){
  this.isValid=true;
  console.log("makeValid");
 // this.showChild();
}

public showChild()
{
console.log("showChild");
 if(this.childname!="")
 {
  console.log("inside if");
  this.Valid(this.childname);
  console.log(this.childname);
 }
}
goBack(): void {
  this.location.back();
}

public  Valid(isValid:string){
  var x=document.getElementById(isValid);
  x.hidden=!(x.hidden);
  console.log(isValid);
}

ngOnInit() {
    this._parentService.currentMessage.subscribe(message => this.message = message);
    this._parentService.childMessage.subscribe(childname => this.childname = childname);
    console.log(this.message);
    console.log(this.childname);
  }

}
