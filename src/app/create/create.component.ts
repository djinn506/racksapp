import { Component, OnInit } from '@angular/core';
import { StackDataService } from '../stack-data.service';
import { Stack } from '../stack-list/stack';

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  stack: Stack = {
    brand : 'brand',
    model: 'model',
    type : 'type',
    stock: 0,
    quantity: 0,
    image : 'string',
    fail : false,
  }
  constructor( private stacksDataService: StackDataService
    ) { }

  ngOnInit(): void {
  }

  createStack(){
    console.log(this.stack);
    this.stacksDataService.create(this.stack).subscribe(data => console.log(data), error => console.log(error));
  }
}
