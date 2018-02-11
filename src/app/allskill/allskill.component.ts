import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { skill } from '../skillinterface';
import {ParentService } from '../parent.service';
import {Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import {Parent} from '../parent/parent';
import { Router } from '@angular/router';
import { Input } from '@angular/core';
@Component({
  selector: 'app-allskill',
  templateUrl: './allskill.component.html',
  styleUrls: ['./allskill.component.css']
})
export class AllskillComponent implements OnInit {
  message:number;
  groups: skill[];
  total: number;
  temp;
  k:any=-1;
  k1:any;
 @Input() isValid:boolean=false;
  constructor(private dataserv: DataService,private parentService:ParentService) {
    
     }  
  ngOnInit() {
    this.dataserv.getData()
    .subscribe(temp => {
      this.groups=temp;
      
      
    });
    this.parentService.currentMessage.subscribe(message => this.message = message);

  }
 
  Valid() :boolean{
    return this.isValid=!this.isValid;
  }
  
  setSkillId(id:number){
    this.k=id;
    this.parentService.changeMessage(this.k);
    this.isValid=!this.isValid;
  }
  
  gettotal(a : any) : number {
    
       console.log(a.id+a.name);
        this.total=0; 
       for( let child of a.child)
          {
          this.total+=child.No_of_rated_users;
          console.log(this.total);
          }                 
      
    return this.total;
  } 
}
