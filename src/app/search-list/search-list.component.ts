import { Component, OnInit, Input } from '@angular/core';
import {item} from '../search-page/item';
import {SkillService} from '../skill.service';
import {Parent} from '../parent/parent';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';

import {ParentComponent} from '../parent/parent.component'
import { ParentService } from '../parent.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {
  public parents:Parent[];
public items:item[]=[];
public retvalues: item[] = [];
//public curritem: item;
 //control = 0;
isAllskill:boolean=true;
  constructor(private skillService:SkillService,private router: Router,private _parentService:ParentService,) { }

  ngOnInit() {
    this.getParents();
    this.hideornot();
  }

  @Input() filter: item;

  getParents(){
    this.skillService.getData()
          .subscribe(parents => this.parents=parents.json(),
          error => console.log(error),
          () => this.listgen());
   }
   
   listgen()
   {
     console.log("ListGen");
    // if(this.control==0)
     
     for (let parent of this.parents)
     {
       console.log("ListGen2");
       this.items.push(new item(parent.id,parent.name,false,-1));
       for (let child of parent.child)
       {
         this.items.push(new item(parent.id,child.name,true,child.id));
       }
     }

    //this.listitems();
    // this.control++;
     //this.hideornot();
    
   }

   keyeventfunc()
   {
    var list = document.getElementById("filtlist");
    while (list.hasChildNodes()) {  
    list.removeChild(list.firstChild);
    }
    if(this.filter.name!='')
    this.listitems();
    this.hideornot();  
   }
   hideornot()
   {
    var list = document.getElementById("filtlist");
    if(this.filter.name!='')
    list.hidden=false;
    else
    list.hidden=true;
   }
     
   listitems()
   {
     var filtvalues : item[] =[];
     filtvalues = this.transform(filtvalues,this.filter.name);
     var ul = document.getElementById("filtlist");
     for(let filtvalue of filtvalues)
      {
        var li = document.createElement("li");
        li.title=filtvalue.name;
        li.innerHTML=filtvalue.name;
        li.className="list-group-item list-group-item-action";
        li.addEventListener("click",(event) => this.routingfunc(filtvalue));
        ul.appendChild(li);
       }

     if(filtvalues.length==0)
     {
       var li = document.createElement("li");
       li.className="list-group-item";
       li.appendChild(document.createTextNode("No Matches found"));
       ul.appendChild(li);
     }
   }
   routingfunc(recitem : item)
   {
     console.log("reached routing function");
     this._parentService.changeMessage((recitem.pid)-1);
     if(recitem.ischild)
     {
     this._parentService.changeChild(recitem.name);
     }
     this.router.navigate(['./skillnav/explore']);
   }

   transform(values: item[], term: string): any {
    for(let value of this.items)
    {
      this.retvalues=values;
    var a = ((value.name).toLowerCase()).match(term.toLowerCase());
    console.log("a= "+a);
    if(a!=null)
    {
      this.retvalues.push(new item(value.pid,value.name,value.ischild,value.cid));
    }
    }
    return this.retvalues;
  }
}
