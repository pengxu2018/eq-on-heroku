import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { viewClassName } from '@angular/compiler';


export interface CLIENT {
  name: string;
  id: number;
  status: string;
  phone:string;
  lastContactDate:string;
}

const CLIENT_DATA: CLIENT[] = [
  {name: 'Thomas', id: 464646, status: 'Approved',phone:"(713) 125-1235", lastContactDate:"July 2,2020"},
  {name: 'Johnson', id: 955415, status: 'Pending', phone:"(713) 189-1855", lastContactDate:"April 23,2021"},
  {name: 'John', id: 454212, status: 'Approved',phone:"(832) 985-5568", lastContactDate:"Jan 8,2019"},
  {name: 'Jackson', id: 462246, status: 'Approved',phone:"(832) 369-9538", lastContactDate:"Feb 20,2020"},
  {name: 'Joshua', id: 9555515, status: 'Approved',phone:"(970) 699-2398", lastContactDate:"June 15,2021"},
  {name: 'Lin', id: 8954212, status: 'Approved',phone:"(361) 984-3687", lastContactDate:"Sept 6,2020"},
  {name: 'Ha', id: 8954212, status: 'Approved',phone:"(568) 985-9634", lastContactDate:"Nov 10,2018"},
  
];

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'id', 'phone','status','lastContactDate'];
  dataSource = new MatTableDataSource(CLIENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }
  applyFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter =  filterValue.trim().toLowerCase();
  }

  panelOpenState = false;
}
