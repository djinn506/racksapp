import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ServerDataService } from '../server-data.service';
import { Server } from './server'; /* local class definition*/
import { StackDataService } from '../stack-data.service';
import { Stack } from './stack'; /* local class definition*/
/*import { Stack } from '../stack-list/stack';*/

@Component({
  selector: 'create-stack',
  templateUrl: './createStack.component.html',
  styleUrls: ['./createStack.component.scss']
})
export class CreateComponent implements OnInit {
  
  servers: Server[] = []

  stack : Stack = {
    brand: "NVIDIA",
    model: "rtx 9999",
    type: "GPU",
  
    stock: 1,
    quantity: 0,
    image: "/assets/noimage.jpg",
    isActive: false,
    server: {
      id:1,  
      
    }
  }

  selected:number=1;

  constructor( private stacksDataService: StackDataService, private router: Router, private serverDataService: ServerDataService
    ) { }

  ngOnInit(): void {
    this.serverDataService.getAll().subscribe( servers => {
      return this.servers = servers;
    });
  }

  createStack(){
    console.log(this.stack);
    this.stacksDataService.createStack(this.stack).subscribe(data => this.router.navigate(['/stacks']));
    } ;
  
    /*
    onChangeSelection(selected){
      this.stack.server.id=parseInt(selected);
    }

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
