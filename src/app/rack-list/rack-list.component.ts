import { Component, OnInit } from '@angular/core';
import { Rack } from './rack';


@Component({
  selector: 'rack-list',
  templateUrl: './rack-list.component.html',
  styleUrls: ['./rack-list.component.scss']
})
export class RackListComponent implements OnInit {

  racks : Rack[] = [{
    brand : "NVIDIA",
    model: "3060",
    type : "gpu",
    image: "assets/NVDIA3060.jpg",
    fail: false,
  },
  {
    brand : "AMD",
    model: "5700 XT",
    type : "gpu",
    image: "assets/AMD5700XT.jpeg",
    fail: true,
  },
  {
    brand : "Kingston",
    model: "Fury 8Gb DDR4",
    type : "ram",
    image: "assets/KingstonFury8Gb.jpeg",
    fail: false,
  },
]

  constructor() { }

  ngOnInit(): void {
  }

}
