import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyFormComponent } from './my-form.component';

const routes: Routes = [
  { path: '', component: MyFormComponent },
  // { path: '', loadChildren: () => import('./my-form.module').then(m => m.MyFormModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyFormRoutingModule { }
