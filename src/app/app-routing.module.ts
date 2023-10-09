import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatatableComponent } from './datatable/datatable.component';
import { DataEditComponent } from './data-edit/data-edit.component';

const routes: Routes = [
  {path:'',redirectTo:'datatable',pathMatch:'full'},
  {path:'datatable',component:DatatableComponent},
  {path:'data-add',component:DataEditComponent},
  {path:'data-edit/:index',component:DataEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
