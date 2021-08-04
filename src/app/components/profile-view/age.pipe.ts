import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'age'
  })
export class AgePipe implements PipeTransform {
    transform(birthDate?: string): string {
        console.log(birthDate)
        if (!birthDate) { return ''; }

        return (new Date().getFullYear() - new Date(birthDate).getFullYear()).toString();
    }
}