import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(data: Array<any>, colName:string, cilckcount: number): Array<any> {
    let sortDirection = 'descending';
    if(cilckcount == 1) {
      sortDirection = 'ascending'
    }
    data = data.sort((a,b) =>{
      if(sortDirection == 'descending') {
        return a[colName]> b[colName] ? -1 : 1;
      }
      return [colName] > b[colName] ? 1 : -1;
    })
    return data
  }
}



