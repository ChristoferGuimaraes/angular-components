import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  someText: string = "SOME TEXT HERE!"

  today = new Date;

  constructor() { }

  ngOnInit(): void {
  }

}
