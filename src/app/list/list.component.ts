import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import {List} from '../list.interface';
import { Task } from '../task.interface';
import { SortablejsOptions } from 'angular-sortablejs/dist';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input () data: List;
  private newTaskName: string;
  private dataService: DataService;
  private sortableOptions: SortablejsOptions = {
    group: 'sortable',
    animation: 150,
    onUpdate: (event: any) => {
      this.dataService.save();
    }
  }
  constructor(dataServ: DataService) {
    this.dataService = dataServ;
   }

  ngOnInit() {
  }
  onSaveNewTask(){
    if (this.newTaskName.trim() !== '') {
      this.dataService.saveNewTask(this.newTaskName.trim(), this.data)
      this.newTaskName = '';
    }
  }
  onRemoveList() {
    this.dataService.removeList(this.data.listId);
  }

  onDrop(event) {
    let taskItem: Task = event.dropData
    console.log(taskItem.text, this.data.name);

    this.dataService.moveTask(taskItem, this.data.listId);
  }

}
