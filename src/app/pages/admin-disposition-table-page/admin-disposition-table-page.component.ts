import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { viewClassName } from '@angular/compiler';
import { MatDialog } from '@angular/material/dialog';
import { AddAgentComponent } from 'src/app/components/add-agent/add-agent.component';
import { HttpClient } from '@angular/common/http';
import { AgentService } from 'src/app/services/agent.service';


const CLIENT_DATA: any[] = [
  
  {source_id: '001', description:'Declined',code: '001', type:'Transfer Fee'},
  {source_id: '005', description:'Rejected',code: '002', type:'Enrollment Fee'},
  {source_id: '008', description:'Accepted',code: '006', type:'Does not Own/ Renter'},
  {source_id: '002', description:'Declined',code: '010', type:'Remove from Mailing'},
  {source_id: '003', description:'Declined',code: '005', type:'Can Do On Their Own'},
  {source_id: '009', description:'Accepted',code: '009', type:'Save Money'},
 
  
];


@Component({
  selector: 'app-admin-disposition-table-page',
  templateUrl: './admin-disposition-table-page.component.html',
  styleUrls: ['./admin-disposition-table-page.component.css']
})
export class AdminDispositionTablePageComponent implements OnInit {

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
