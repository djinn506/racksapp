import { Component, OnInit } from '@angular/core';

import { StackDataService } from '../stack-data.service';
import { Server } from '../server-list/server';
import { Stack } from './stack';

@Component({
  selector: 'stack-list',
  templateUrl: './stack-list.component.html',
  styleUrls: ['./stack-list.component.scss']
})
export class StackListComponent implements OnInit {

  stacks: Stack[] = []
  order: Server[]=[]
  orders: Server[]=[]

  constructor(
    private stacksDataService: StackDataService
    ) { }
  
  ngOnInit(): void {
    this.stacksDataService.getAll().subscribe( stacks => {
      console.log(stacks);
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

  getBrand(server: Server): string{
    return server.brand;
  }
}
