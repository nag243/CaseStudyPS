import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { SortPipe } from './sort.pipe';

@Component({
  selector: 'app-students-marks',
  templateUrl: './students-marks.component.html',
  styleUrls: ['./students-marks.component.scss']
})
export class StudentsMarksComponent implements OnInit {

  dataArr:Array<any> = [];
  dataArr2:Array<any> = [];
  headings:Array<any> = [];
  clkCounter:any = {};
  constructor( private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>("../../assets/json/students-marks.json").subscribe(data =>{
      if(data && data["students"] && data["students"].length > 0) {
        this.headings = Object.keys(data["students"][0]);
        this.dataArr = data["students"];
        this.dataArr2 = this.dataArr.slice();
      }
      for(let i = 0; i<this.headings.length; i++) {
        let name  = this.headings[i];
        this.clkCounter[name] = 0;
      }
    })
  }
  colClicked(event:any){
    let colClicked = event.target.innerText;
    this.clkCounter[colClicked] = this.clkCounter[colClicked] + 1 ;
    if(this.clkCounter[colClicked] < 3) {
      const sortPipe = new SortPipe();
      const sortedArr = sortPipe.transform(this.dataArr,colClicked, this.clkCounter[colClicked]);
      this.dataArr = sortedArr
    } else {
      this.clkCounter[colClicked] = 0;
      this.dataArr = this.dataArr2.slice();
    }
  }

}
