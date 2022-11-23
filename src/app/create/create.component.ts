import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ServerDataService } from '../server-data.service';
import { Server } from '../server-list/server';
import { StackDataService } from '../stack-data.service';
import { Stack } from '../stack-list/stack';

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  order: Server[] = []
  order1: Server[] = []
  orders: Server[] = []

  stack: Stack = {
    id: 0,
    brand : 'brand',
    model: 'model',
    type : 'type',
    stock: 0,
    quantity: 0,
    image : 'string',
    fail : false,
    order: {
      id: 0,
      brand : 'brand',
      model: 'model',
    },
    order1: {
      id: 0,
      brand : 'brand',
      model: 'model',
    }
  }
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
    this.stacksDataService.create(this.stack).subscribe(data => this.router.navigate(['/stacks']));
  }

}
