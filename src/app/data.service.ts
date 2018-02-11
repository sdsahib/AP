import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import { skill } from './skillinterface';
import { User } from './userinterface';
import 'rxjs/add/operator/do';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }
  getData():Observable<skill[]>{
    return this.http.get<skill[]>('https://my-json-server.typicode.com/sdsahib/getjsondata/Parent')
    
  }
  getiData():Observable<skill[]>{
    return this.http.get<skill[]>('https://my-json-server.typicode.com/sdsahib/getjsondata/user')

}
  getUserSkill():Observable<User[]>{
    return this.http.get<User[]>('https://my-json-server.typicode.com/sdsahib/getjsondata/user');
            // .do(data => console.log(JSON.stringify(data)));
  }
}
