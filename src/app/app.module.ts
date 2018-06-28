import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import {DataService} from './data.service';
import { TaskItemComponent } from './task-item/task-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TaskItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
