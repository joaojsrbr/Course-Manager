import { StringMap } from "@angular/compiler/src/compiler_facade_interface";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'replase'
})
export class ReplasePipe implements PipeTransform{

   transform(value: string, char: string, valueToReplase: string){
       return value.replace(char, valueToReplase);
   }

}