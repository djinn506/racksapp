import { Component, OnInit } from '@angular/core';
import { Rack } from './rack';


@Component({
  selector: 'rack-list',
  templateUrl: './rack-list.component.html',
  styleUrls: ['./rack-list.component.scss']
})
export class RackListComponent implements OnInit {

  racks : Rack[] = [{
    brand : "NVIDIA",
    model: "3060",
    type : "gpu",
    stock: 10,
    quantity: 0,
    image: "assets/NVDIA3060.jpg",
    fail: false,
  },
  {
    brand : "AMD",
    model: "5700 XT",
    type : "gpu",
    quantity: 0,
    stock: 5,
    image: "assets/AMD5700XT.jpeg",
    fail: true,
  },
  {
    brand : "Kingston",
    model: "Fury 8Gb DDR4",
    type : "ram",
    quantity: 0,
    stock: 8,
    fail: false,
    image: "assets/KingstonFury8Gb.jpeg",
  },
]

  constructor() { }

  ngOnInit(): void {
  }

  upQuantity(rack: Rack): void{
    if(rack.quantity < rack.stock){
      rack.quantity ++;
    }
  }

  downQuantity(rack: Rack): void{
    if(rack.quantity > 0){
    rack.quantity --;
    }
  }

  verifyRackQuantity(rack: Rack): void{
    if(rack.quantity > rack.stock){
      alert("No se puede pedir mas de los componentes que hay en stock");
      rack.quantity=rack.stock
    }
    if(rack.quantity < 0){
    alert("No se puede pedir menos de 0 componentes");
    rack.quantity=0;
    }
  }
  
}
