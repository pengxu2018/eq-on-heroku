import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//Material 
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { MatPaginator } from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';



//import { MatSort } from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';



//Pages
import { LoginComponent } from './pages/login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { ClientDetailComponent } from './pages/client-detail/client-detail.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ChartComponent } from './chart/chart.component';
import { Chart001Component } from './components/chart001/chart001.component';
import { Chart002Component } from './components/chart002/chart002.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { LeftPanelComponent } from './components/left-panel/left-panel.component';
import { FollowUpListComponent } from './components/follow-up-list/follow-up-list.component';
import { AdminFileManagementComponent } from './pages/admin-file-management/admin-file-management.component';
import { AdminDataArchivalComponent } from './pages/admin-data-archival/admin-data-archival.component';
import { AdminAgentTablePageComponent } from './pages/admin-agent-table-page/admin-agent-table-page.component';
import { AdminLanguageTablePageComponent } from './pages/admin-language-table-page/admin-language-table-page.component';
import { AdminMailerGroupTablePageComponent } from './pages/admin-mailer-group-table-page/admin-mailer-group-table-page.component';
import { AdminAuditCodeTablePageComponent } from './pages/admin-audit-code-table-page/admin-audit-code-table-page.component';
import { AdminStatusTablePageComponent } from './pages/admin-status-table-page/admin-status-table-page.component';
import { AdminCallReasonTablePageComponent } from './pages/admin-call-reason-table-page/admin-call-reason-table-page.component';
import { AdminSourceTablePageComponent } from './pages/admin-source-table-page/admin-source-table-page.component';
import { AdminDispositionTablePageComponent } from './pages/admin-disposition-table-page/admin-disposition-table-page.component';
import { AdminBlankPageComponent } from './pages/admin-blank-page/admin-blank-page.component';
import { AddAgentComponent } from './components/add-agent/add-agent.component';

//Services
import { AgentService } from './services/agent.service';




//mini Components




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    ClientsComponent,
    ClientDetailComponent,
    PageNotFoundComponent,
    ChartComponent,
    Chart001Component,
    Chart002Component,
    PageHeaderComponent,
    LeftPanelComponent,
    FollowUpListComponent,
    AdminFileManagementComponent,
    AdminDataArchivalComponent,
    AdminAgentTablePageComponent,
    AdminLanguageTablePageComponent,
    AdminMailerGroupTablePageComponent,
    AdminAuditCodeTablePageComponent,
    AdminStatusTablePageComponent,
    AdminCallReasonTablePageComponent,
    AdminSourceTablePageComponent,
    AdminDispositionTablePageComponent,
    AdminBlankPageComponent,
    AddAgentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatRadioModule, 
    MatTooltipModule,
    MatTreeModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    //MatSort
  ],
  providers: [
    AgentService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
