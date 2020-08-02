import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagePasswordChangedComponent } from './page-password-changed.component';


const routes: Routes = [
  { path: 'senha-alterada', component: PagePasswordChangedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagePasswordChangedRoutingModule { }
