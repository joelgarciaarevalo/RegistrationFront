import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatTable, MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { EventLogs } from './models/eventlogs';


const ELEMENT_DATA: EventLogs[] = [
  {EventLogId: 1, EventType: 'API', EventDate: '2024-04-04', EventDescription: 'Primer registro'},
  {EventLogId: 2, EventType: 'Manual', EventDate: '2024-04-04', EventDescription: 'Segundo registro'},
  {EventLogId: 3, EventType: 'API', EventDate: '2024-04-04', EventDescription: 'Tercer registro'},
  {EventLogId: 4, EventType: 'API', EventDate: '2024-04-04', EventDescription: '4 registro'},
  {EventLogId: 5, EventType: 'Manual', EventDate: '2024-04-04', EventDescription: '5 registro'},
  {EventLogId: 6, EventType: 'API', EventDate: '2024-04-04', EventDescription: '6 registro'},
  {EventLogId: 7, EventType: 'Manual', EventDate: '2024-04-04', EventDescription: '7 registro'},
  {EventLogId: 8, EventType: 'API', EventDate: '2024-04-04', EventDescription: '8 registro'},
  {EventLogId: 9, EventType: 'API', EventDate: '2024-04-04', EventDescription: '9 registro'},
  {EventLogId: 10, EventType: 'API', EventDate: '2024-04-04', EventDescription: '10 registro'},
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    MatButtonModule, 
    MatTableModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EventLogsFront';
  displayedColumns: string[] = ['EventLogId', 'EventType', 'EventDate', 'EventDescription'];
  dataSource = [...ELEMENT_DATA];
  
  @ViewChild(MatTable) table: MatTable<EventLogs>;
  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }
}
