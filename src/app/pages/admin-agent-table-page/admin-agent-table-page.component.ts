//import { Component, OnInit } from '@angular/core';
import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { viewClassName } from '@angular/compiler';
import { MatDialog } from '@angular/material/dialog';
import { AddAgentComponent } from 'src/app/components/add-agent/add-agent.component';
import { HttpClient } from '@angular/common/http';
import { AgentService } from 'src/app/services/agent.service';
import { BwmAgent } from 'src/app/entity/interfaces';
/* //commented out by Mo
const CLIENT_DATA: any[] = [



  
  {id: 'Yu', name: 8954212, level: 'Approved',code:"46456",active:'Yes'},
  {id: 'Jason', name: 474212, level: 'Approved',code:"46456",active:'No'},
  {id: 'Smith', name: 8954212, level: 'Approved',code:"46456",active:'Yes'},
  {id: 'Peter', name: 922552, level: 'Approved',code:"46456",active:'No'},
  {id: 'Matthew', name: 8954212, level: 'Approved',code:"46456",active:'Yes'},
  {id: 'Johnson', name: 8954212, level: 'Approved',code:"46456",active:'Yes'},
  {id: 'Jackson', name: 8954212, level: 'Approved',code:"46456",active:'Yes'},
  
]; */

@Component({
  selector: 'app-admin-agent-table-page',
  templateUrl: './admin-agent-table-page.component.html',
  styleUrls: ['./admin-agent-table-page.component.css']
})



export class AdminAgentTablePageComponent implements OnInit {

  agents: BwmAgent[] = [];


  displayedColumns: string[] = ['id', 'name', 'level','code','active','something'];
  dataSource = new MatTableDataSource<BwmAgent>();

  date = new Date()

  constructor(public dialog: MatDialog, private service:AgentService) { }

  openDialog() {
    const dialogRef = this.dialog.open(AddAgentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



  ngOnInit(): void {

    this.service.getAgents()
    .subscribe(agents=>{
      this.agents = agents;
     console.log(JSON.stringify(agents));
    this.dataSource.data = agents;
  
    });
    
  }



  applyFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter =  filterValue.trim().toLowerCase();
  }

}
