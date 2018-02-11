import {Injectable} from "@angular/core";
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Parent} from './parent/parent';
import {item} from './search-page/item';
import { Response } from "@angular/http/src/static_response";

@Injectable()
export class SkillService {  
id:string="1";
changeID(itemParent:item)
{
 this.id=(itemParent.pid).toString();
 console.log(this.id);
}
url='https://my-json-server.typicode.com/sdsahib/getjsondata/parent';
res:Response;  
getData():Observable<Response> {
    return this.http.get(this.url);
}

getIndiData(id: number):Observable<Parent> {
  const surl = `${this.url}/${id}`;;
  console.log("getIndiData");
  return this.http.get(surl).map(parent=>parent.json());
}
constructor(private http:Http) { }


}
