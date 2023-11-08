import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

import {ProductModel, StoreModel} from '../../models/store.model';
import { StoresService } from '../../services/stores.service';

@Component({
  selector: 'app-add-new-store',
  templateUrl: './add-new-store.component.html',
  styleUrls: ['./add-new-store.component.scss'],
})
export class AddNewStoreComponent implements OnInit {
  @Output() public refreshStoreList = new EventEmitter<boolean>();

  public isInventoryOpen: boolean;
  public form: FormGroup;

  private storeService = inject(StoresService);

  public get inventoryFormArray(): FormArray {
    return this.form.get('inventory') as FormArray;
  }
  public get inventoryFormGroups(): FormGroup[] {
    return this.inventoryFormArray.controls as FormGroup[];
  }

  public get defaultFormGroup(): FormGroup {
    return new FormGroup({
      id: new FormControl<number>(0),
      name: new FormControl<string>(''),
      amount: new FormControl<number>(0),
    });
  }

  public ngOnInit(): void {
    this.initForm();
  }

  public toggleInventory(): void {
    this.isInventoryOpen = !this.isInventoryOpen;
  }

  public addControl(): void {
    this.inventoryFormArray.push(this.defaultFormGroup);
  }

  public removeControl(index: number): void {
    this.inventoryFormArray.removeAt(index);
  }

  public setSelectedInventory(item: ProductModel, index: number): void {
    this.inventoryFormGroups[index].get('name')?.patchValue(item.name);
    this.inventoryFormGroups[index].get('id')?.patchValue(item.id);
  }

  public createStore(): void {
    const { value } = this.form;
    this.storeService.store = {
      name: value.storeName,
      products: this.inventoryFormGroups.map(item => {
        return {
          id: item.value.id,
          name: item.value.name,
          amount: Number(item.value.amount),
        };
      }),
    } as StoreModel;
    this.form.reset();
    this.refreshStoreList.emit(true);
  }

  private initForm(): void {
    this.form = new FormGroup({
      storeName: new FormControl<string>('', [
        Validators.minLength(3),
        Validators.required,
      ]),
      inventory: new FormArray([this.defaultFormGroup]),
    });
  }
}
