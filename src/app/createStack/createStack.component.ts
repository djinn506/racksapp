import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ServerDataService } from '../server-data.service';
import { Server } from '../server-list/server';
import { StackDataService } from '../stack-data.service';
import { Stack } from './stack'; /* local class definition
/*import { Stack } from '../stack-list/stack';*/

@Component({
  selector: 'create',
  templateUrl: './createStack.component.html',
  styleUrls: ['./createStack.component.scss']
})
export class CreateComponent implements OnInit {
  /*order: Server[] = []
  orders: Server[] = []
  */

  stack : Stack = {
    brand: "NVIDIA",
    model: "rtx 9999",
    type: "GPU"}

  servers : Server[] = [];

  constructor( private stacksDataService: StackDataService, private router: Router, private serversDataService: ServerDataService
    ) { }

  ngOnInit(): void {
    this.serversDataService.getAll().subscribe( servers => {
      return this.servers = servers;
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
