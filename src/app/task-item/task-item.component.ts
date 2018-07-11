import { Component, OnChanges, Input } from '@angular/core';
import {Task} from '../task.interface';
import {DataService} from '../data.service';
@Component({
  selector: 'task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnChanges {
  @Input() data: Task;
  private dataService;
  private editing: boolean= false;
  constructor(dataServ: DataService) {
    this.dataService = dataServ;
  }

  ngOnChanges(changes) {
    // console.log(changes)
  }

  onRemoveTask(){
    this.dataService.removeTask(this.data);
  }
  editText(){
    this.editing = true;
  }

  saveText(){
    this.editing = false;
    this.dataService.save();
  }

  onCompleted(){
    this.dataService.save();
  }

  startEdit(input) {
    this.editing = true;
    setTimeout(() => {
      input.focus();
    }, 0)

  }
  finishEdit() {
    setTimeout(()=>{

      this.editing = false;
      this.dataService.save();
    }, 300)
    
  }

  onColorPicker(){
    this.dataService.save();
  }

}
