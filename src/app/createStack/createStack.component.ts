import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ServerDataService } from '../server-data.service';
import { Server } from './server'; /* local class definition*/
import { StackDataService } from '../stack-data.service';
import { Stack } from './stack'; /* local class definition*/
/*import { Stack } from '../stack-list/stack';*/

@Component({
  selector: 'create',
  templateUrl: './createStack.component.html',
  styleUrls: ['./createStack.component.scss']
})
export class CreateComponent implements OnInit {
  
  orders: Server[] = []

  stack : Stack = {
    brand: "NVIDIA",
    model: "rtx 9999",
    type: "GPU",
  
    stock: 1,
    quantity: 0,
    image: "",
    fail: false,
    isActive: false,
  /*  order: {
      brand: "",
      model: "",
    }*/
  }

  constructor( private stacksDataService: StackDataService, private router: Router, private orderDataService: ServerDataService
    ) { }

  ngOnInit(): void {
    this.orderDataService.getAll().subscribe( orders => {
      return this.orders = orders;
    });
  }

  createStack(){
    console.log(this.stack);
    this.stacksDataService.createStack(this.stack).subscribe(data => this.router.navigate(['/stacks']));
    } ;
    
    /*this.stacksDataService.createStack({ model: this.model }).subscribe(this.model = Stack );*/
/*
  createStack(){
    console.log(this.stack);
    this.stacksDataService.createStack({ stack: this.stack }).subscribe(data => this.router.navigate(['/stacks']));
  }
*/
  /*
  createStack(){
    console.log(this.stack);
    this.stacksDataService.createStack({ stack: this.stack });

    this.stacksDataService.getAll().subscribe( stacks => {
      
      return this.stack = stacks;
    } );
  }
  */
}
