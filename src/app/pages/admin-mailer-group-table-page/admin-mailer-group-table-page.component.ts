import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { viewClassName } from '@angular/compiler';
import { MatDialog } from '@angular/material/dialog';
import { AddAgentComponent } from 'src/app/components/add-agent/add-agent.component';
import { HttpClient } from '@angular/common/http';
import { AgentService } from 'src/app/services/agent.service';

const CLIENT_DATA: any[] = [
  
  {id: '001', language: '09/20/2014'},
  {id: '002', language: '08/25/2016'},
  {id: '001', language: '09/20/2014'},
  {id: '002', language: '08/25/2016'},
 
  
  
];

@Component({
  selector: 'app-admin-mailer-group-table-page',
  templateUrl: './admin-mailer-group-table-page.component.html',
  styleUrls: ['./admin-mailer-group-table-page.component.css']
})
export class AdminMailerGroupTablePageComponent implements OnInit {

  displayedColumns: string[] = ['id', 'language'];
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
