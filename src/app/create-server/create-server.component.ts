import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerDataService } from '../server-data.service';
import { Server } from './server';
import { StackDataService } from '../stack-data.service';
import { Stack } from './stack';

@Component({
  selector: 'create-server',
  templateUrl: './create-server.component.html',
  styleUrls: ['./create-server.component.scss']
})
export class CreateServerComponent implements OnInit {

  orders: Server[] = [];

  stacks: Stack[] = [];

  server: Server = {
    brand: "SuperMega",
    model: "99",
    
    stack: {
      id:99,
    }
  }
stack: any;

  constructor( private serversDataService: ServerDataService, private router: Router, private stacksDataService: StackDataService, 
  ) { }

  ngOnInit(): void {
    this.serversDataService.getAll().subscribe( stacks => {
      return this.stacks = stacks;
    });
  }

  createServer(){
    console.log(this.orders);
    this.serversDataService.createServer(this.server).subscribe(data => this.router.navigate(['/stacks']));
    } ;
}
