import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  viewType: string = 'grid';
  filterPrice: string = 'lowToHigh';
  products:Array<any> = [
    {
        "id" : 1,
        "price": 56
    },
    {
      "id" : 2,
        "price": 65
    },
    {
      "id" : 3,
        "price": 88
    },
    {
      "id" : 4,
        "price": 87
    },
    {
      "id" : 5,
        "price": 200
    },
    {
      "id" : 6,
        "price": 290
    },
  
    {
      "id" : 7,
        "price": 235
    },
    {
      "id" : 8,
        "price": 180
    },
    {
      "id" : 9,
        "price": 240
    },
    {
      "id" : 10,
        "price": 85
    },
    {
      "id" : 11,
        "price": 65
    },
    {
      "id" : 12,
        "price": 60
    },
    {
      "id" : 13,
        "price": 70
    },
    {
      "id" : 14,
        "price": 30
    },
    {
      "id" : 15,
        "price": 35
    },
    {
      "id" : 16,
        "price": 15
    },
    {
      "id" : 17,  
      "price": 1
    },
    {
      "id" : 18,
        "price": 10
    },
    {"id" : 19,
        "price": 125
    },
    {
      "id" : 20,
        "price": 55
    },
    {
      "id" : 21,
        "price": 85
    },
    {
      "id" : 22,
        "price": 95
    },
    {
      "id" : 23,
        "price": 100
    },
    {
      "id" : 24,
        "price": 155
    },
    {
      "id" : 25,
        "price": 165
    },
    {
      "id" : 26,
        "price": 180
    },
    {
      "id" : 27,
        "price": 195
    },
    {
      "id" : 28,
        "price": 140
    },
    {
      "id" : 29,
        "price": 80
    },
    {
      "id" : 30,
        "price": 210
    },
    {
      "id" : 31,
        "price": 295
    },
    {
      "id" : 32,
        "price": 300
    },
    {
      "id" : 33,
        "price": 250
    },
    {
      "id" : 34,
        "price": 255
    },
    {
      "id" : 35,
        "price": 280
    },
    {
      "id" : 36,
        "price": 25
    },
    {
      "id" : 37,
        "price": 45
    },
    {
      "id" : 38,
        "price": 18
    },
    {
      "id" :39 ,
        "price": 65
    },
    {
      "id" : 40,
        "price": 185
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  changeViewByType(){
    return this.viewType == 'grid' ? 'grid' : 'list';
  }

  onClickGrid(){
    this.viewType = 'grid';
  }

  onClickList(){
    this.viewType = 'list';
  }

  onPriceChange(event:any){
    this.filterPrice = event.target.value;
  }

}
