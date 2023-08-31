import { Component, OnInit } from '@angular/core';

import { ServerDataService } from '../server-data.service';
import { Stack } from '../stack-list/stack';
import { Server } from './server';

@Component({
  selector: 'server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.scss']
})
export class ServerListComponent implements OnInit {

  servers : Server[] = [];

  constructor(
    private serversDataService: ServerDataService
  ) { }

  ngOnInit(): void {
    this.serversDataService.getAll().subscribe( servers => {
      console.log(servers);
      return this.servers = servers;
    });
  }
 
  getModel(stack: Stack): string{
    return stack.model;
  }

}
