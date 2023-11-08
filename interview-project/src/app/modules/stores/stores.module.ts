import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreItemComponent } from './components/store-item/store-item.component';
import { StoresDashboardComponent } from './components/stores-dashboard/stores-dashboard.component';
import { AddNewStoreComponent } from './components/add-new-store/add-new-store.component';
import {ClickOutsideDirective} from "./directives/click-outside.directive";
import {ReactiveFormsModule} from "@angular/forms";
import { InventoryOptionsComponent } from './components/inventory-options/inventory-options.component';


@NgModule({
  declarations: [
    StoreItemComponent,
    StoresDashboardComponent,
    AddNewStoreComponent,
    InventoryOptionsComponent,
  ],
  imports: [CommonModule, ClickOutsideDirective, ReactiveFormsModule],
})
export class StoresModule {}
