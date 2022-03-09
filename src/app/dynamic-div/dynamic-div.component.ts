import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-div',
  templateUrl: './dynamic-div.component.html',
  styleUrls: ['./dynamic-div.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class DynamicDivComponent implements OnInit {

  numbers:Array<any> = [];
  showAlert: boolean = false;
  alertArray: Array<any> = [];
  
  constructor() { }

  ngOnInit(): void {
    for(let i = 0; i< 1000; i++) {
      this.numbers.push(i)
    }
  }

  respond(i:any) {
    this.showAlert = true;
    if(this.alertArray.length > 0) {
      let found = false;
      this.alertArray.forEach((data) =>{
        if(data.id == i) {
          found = true;
          data.show = true;
        }
      });
      if(!found) {
        this.alertArray.push({id:i, show: true});
      } 
    } else {
      this.alertArray.push({id:i, show: true})
    }
  }

  closeAlert(clickedObj:any) {
    this.alertArray.forEach((data) => {
      if(data.id == clickedObj.id) {
        data.show = false;
      }
    });
  }
}
