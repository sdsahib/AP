import {Pipe} from "@angular/core";
import { PipeTransform } from "@angular/core/src/change_detection/pipe_transform";

@Pipe({
    name : 'getData'
})
export class GetDataPipe implements PipeTransform{
    transform(value, args:string[]) : any {
        let keys = [];
        for (let key in value) {
          keys.push({key: key, value: value[key]});
        }
        console.log(keys);
        return keys;
      }
}