import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAgentTablePageComponent } from './pages/admin-agent-table-page/admin-agent-table-page.component';
import { AdminAuditCodeTablePageComponent } from './pages/admin-audit-code-table-page/admin-audit-code-table-page.component';
import { AdminBlankPageComponent } from './pages/admin-blank-page/admin-blank-page.component';
import { AdminCallReasonTablePageComponent } from './pages/admin-call-reason-table-page/admin-call-reason-table-page.component';
import { AdminDataArchivalComponent } from './pages/admin-data-archival/admin-data-archival.component';
import { AdminDispositionTablePageComponent } from './pages/admin-disposition-table-page/admin-disposition-table-page.component';
import { AdminFileManagementComponent } from './pages/admin-file-management/admin-file-management.component';
import { AdminLanguageTablePageComponent } from './pages/admin-language-table-page/admin-language-table-page.component';
import { AdminMailerGroupTablePageComponent } from './pages/admin-mailer-group-table-page/admin-mailer-group-table-page.component';
import { AdminSourceTablePageComponent } from './pages/admin-source-table-page/admin-source-table-page.component';
import { AdminStatusTablePageComponent } from './pages/admin-status-table-page/admin-status-table-page.component';
import { ClientDetailComponent } from './pages/client-detail/client-detail.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  //Client Pages
  {path:'', component:LoginComponent},
  {path:'welcome', component:WelcomeComponent},
  {path:'clients', component:ClientsComponent},
  {path:'client-detail', component:ClientDetailComponent},
  //Admin Pages
  {path:'admin-file-management', component:AdminFileManagementComponent},
  {path:'admin-data-archival', component:AdminDataArchivalComponent},
  {path:'admin-agent-table', component:AdminAgentTablePageComponent},
  {path:'admin-language-table', component:AdminLanguageTablePageComponent},
  {path:'admin-mailer-group-table', component:AdminMailerGroupTablePageComponent},
  {path:'admin-audit-code-table', component:AdminAuditCodeTablePageComponent},
  {path:'admin-status-table', component:AdminStatusTablePageComponent},
  {path:'admin-call-reason-table', component:AdminCallReasonTablePageComponent},
  {path:'admin-source-table', component:AdminSourceTablePageComponent},
  {path:'admin-disposition-code-table', component:AdminDispositionTablePageComponent},
  //others
  {path:'admin-blank', component:AdminBlankPageComponent},
  //page not found
  {path:'**', component:PageNotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
