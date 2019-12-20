import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'titleString'
})
export class TitleStringPipe implements PipeTransform {

    transform(title: string, ...args: any[]): any {
        return title.charAt(0).toUpperCase() + title.slice(1);
    }

}
