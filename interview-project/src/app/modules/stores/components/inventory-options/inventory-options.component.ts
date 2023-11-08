import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import products from '../../store-mock-data/products.json';
import { ProductModel } from '../../models/store.model';

@Component({
  selector: 'app-inventory-options',
  templateUrl: './inventory-options.component.html',
  styleUrls: ['./inventory-options.component.scss'],
})
export class InventoryOptionsComponent {
  @Input() public form: FormGroup;

  @Output() public itemClick = new EventEmitter<ProductModel>();
  @Output() public addControl = new EventEmitter<void>();
  @Output() public removeControl = new EventEmitter<void>();

  public readonly dropDownItems = products;
  public isDropDownOpen: boolean;
  public isLastItem = true;

  public selectedItemClick(item: ProductModel): void {
    this.itemClick.emit(item);
  }

  public toggleDropDown(): void {
    this.isDropDownOpen = !this.isDropDownOpen;
  }

  public addFormControl(): void {
    this.isLastItem = false;
    this.addControl.emit();
  }

  public removeFormControl(): void {
    this.removeControl.emit();
  }
}
