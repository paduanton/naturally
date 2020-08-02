import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageEmailSentComponent } from './page-email-sent.component';


const routes: Routes = [
  { path: 'email-enviado', component: PageEmailSentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageEmailSentRoutingModule { }
