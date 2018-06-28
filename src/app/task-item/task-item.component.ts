import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() data: Object;
  constructor() { }

  ngOnInit() {
  }

}
