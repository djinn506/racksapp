import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.scss']
})
export class ServerListComponent implements OnInit {

  server = {
    brand : "SUPERMICRO",
    model: "8888",
    gpu: "gpuID11",
    mem: "ramID12"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
