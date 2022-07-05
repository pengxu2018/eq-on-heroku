import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { viewClassName } from '@angular/compiler';
//import {MatSort} from '@angular/material/sort';

import{Chart} from "chart.js";

/*
export interface CLIENT {
  name: string;
  id: number;
  status: string;
}
*/


const CLIENT_DATA: any[] = [
  {name: 'Thomas', id: 464646, status: 'Approved'},
  {name: 'Johnson', id: 955415, status: 'Pending'},
  {name: 'John', id: 454212, status: 'Approved'},
  {name: 'Jackson', id: 462246, status: 'Approved'},
  {name: 'Joshua', id: 9555515, status: 'Approved'},
  {name: 'Lin', id: 8954212, status: 'Approved'},
  {name: 'Ha', id: 8954212, status: 'Approved'},
  
];


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})



export class WelcomeComponent implements OnInit {

  displayedColumns: string[] = ['name', 'id', 'status'];
  dataSource = new MatTableDataSource(CLIENT_DATA);
  date = new Date()
  

  constructor() {
    //this.dataSource = new MatTableDataSource(CLIENT_DATA);

   }

  ngOnInit(): void {
    

    
  }


  applyFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter =  filterValue.trim().toLowerCase();
  }

}
