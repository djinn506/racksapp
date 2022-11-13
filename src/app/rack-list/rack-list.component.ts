import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rack-list',
  templateUrl: './rack-list.component.html',
  styleUrls: ['./rack-list.component.scss']
})
export class RackListComponent implements OnInit {

  rack = {
    brand : "NVIDIA",
    model: "3060",
    type : "gpu",
    image: "assets/NVDIA3060.jpg"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
