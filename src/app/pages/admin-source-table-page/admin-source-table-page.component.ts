import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { viewClassName } from '@angular/compiler';
import { MatDialog } from '@angular/material/dialog';
import { AddAgentComponent } from 'src/app/components/add-agent/add-agent.component';
import { HttpClient } from '@angular/common/http';
import { AgentService } from 'src/app/services/agent.service';

const CLIENT_DATA: any[] = [
  
  {source_id: '001', description:'N/A',code: 'A', type:'0'},
  {source_id: '005', description:'N/A',code: 'H', type:'0'},
  {source_id: '008', description:'N/A',code: 'BAC', type:'0'},
  {source_id: '002', description:'N/A',code: 'LL', type:'0'},
  {source_id: '003', description:'N/A',code: 'NP', type:'0'},
  {source_id: '009', description:'N/A',code: 'D', type:'0'},
 
  
];


@Component({
  selector: 'app-admin-source-table-page',
  templateUrl: './admin-source-table-page.component.html',
  styleUrls: ['./admin-source-table-page.component.css']
})
export class AdminSourceTablePageComponent implements OnInit {

  displayedColumns: string[] = ['source_id', 'description','code', 'type'];
  dataSource = new MatTableDataSource(CLIENT_DATA);
  date = new Date()

  constructor(public dialog: MatDialog, private service:AgentService) { }

  openDialog() {
    const dialogRef = this.dialog.open(AddAgentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

  applyFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter =  filterValue.trim().toLowerCase();
  }

}
