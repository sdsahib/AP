import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { skill } from '../skillinterface';
import 'rxjs/add/operator/map';
import { User } from '../userinterface';
import { ChildSkill } from '../userskillchildinterface';
import {GetDataPipe} from './extractdata.pipe';
@Component({
  selector: 'app-myskill',
  templateUrl: './myskill.component.html',
  styleUrls: ['./myskill.component.css'],
  providers: [DataService]
  
  
})
export class MyskillComponent implements OnInit {
  user : User[];
  skill: ChildSkill[];

  constructor(private dataserv: DataService) { 
    this.dataserv.getUserSkill()
    .subscribe(temp =>{
        this.user = temp;
        console.log('recieved in class '+ JSON.stringify(this.user) + ' sahib');
        
        }
        );
        // this.skill = this.user.skills;
    
  }

  
  ngOnInit() {
    

  }

}


