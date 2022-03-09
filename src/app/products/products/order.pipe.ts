import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'order',
    pure: true
})
export class Order implements PipeTransform {

    transform(value: any[], name: string, price: string): any[] {
        if (name)
            return value.sort(
                (a: any, b: any) => {
                    if(price && price.toLowerCase() == 'hightolow'){
                        return b[name] - a[name];
                    } else{
                        return a[name] - b[name]; 
                    }
                }
            );
        else
            return value;
    }

}