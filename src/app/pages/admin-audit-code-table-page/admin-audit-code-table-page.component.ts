import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { viewClassName } from '@angular/compiler';
import { MatDialog } from '@angular/material/dialog';
import { AddAgentComponent } from 'src/app/components/add-agent/add-agent.component';
import { HttpClient } from '@angular/common/http';
import { AgentService } from 'src/app/services/agent.service';




const CLIENT_DATA: any[] = [
  
  {code_id: '001', code_desciption: 'Status Changed'},
  {code_id: '002', code_desciption: 'Agnet Changed'},
  {code_id: '002', code_desciption: 'Sig Status Changed'},
 
  
  
];




@Component({
  selector: 'app-admin-audit-code-table-page',
  templateUrl: './admin-audit-code-table-page.component.html',
  styleUrls: ['./admin-audit-code-table-page.component.css']
})
export class AdminAuditCodeTablePageComponent implements OnInit {

  displayedColumns: string[] = ['code_id', 'code_desciption'];
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
