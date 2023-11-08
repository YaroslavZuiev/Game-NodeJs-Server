import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StoresDashboardComponent } from "./modules/stores/components/stores-dashboard/stores-dashboard.component";


const routes: Routes = [
  { path: '', redirectTo: 'stores', pathMatch: 'full' },
  { path: 'stores' , component:  StoresDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
