import { Component, OnInit } from '@angular/core';
import { StackDataService } from '../stack-data.service';
import { Stack } from './stack';


@Component({
  selector: 'stack-list',
  templateUrl: './stack-list.component.html',
  styleUrls: ['./stack-list.component.scss']
})
export class StackListComponent implements OnInit {

  stacks : Stack[] = []
  
  /* [{
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
] */

  constructor(
    private stacksDataService: StackDataService
    ) { }
  
  ngOnInit(): void {
    this.stacksDataService.getAll().subscribe( stacks => {
      /* console.log(stacks); */
      return this.stacks = stacks;
    } );
  }  

  upQuantity(stack: Stack): void{
    if(stack.quantity < stack.stock){
      stack.quantity ++;
    }
  }

  downQuantity(stack: Stack): void{
    if(stack.quantity > 0){
    stack.quantity --;
    }
  }

  verifyStackQuantity(stack: Stack): void{
    if(stack.quantity > stack.stock){
      alert("No se puede pedir mas de los componentes que hay en stock");
      stack.quantity=stack.stock
    }
    if(stack.quantity < 0){
    alert("No se puede pedir menos de 0 componentes");
    stack.quantity=0;
    }
  }

}
