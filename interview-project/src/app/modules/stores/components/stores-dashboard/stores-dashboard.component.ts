import { Component, inject, OnInit } from '@angular/core';

import { StoresService } from '../../services/stores.service';
import { StoreModel } from '../../models/store.model';

@Component({
  selector: 'app-stores-dashboard',
  templateUrl: './stores-dashboard.component.html',
  styleUrls: ['./stores-dashboard.component.scss'],
})
export class StoresDashboardComponent implements OnInit {
  public storeItems: StoreModel[] = [];
  public reloadStoreList: boolean;
  public toastMessage = '';

  private storeService = inject(StoresService);

  public ngOnInit(): void {
    this.initialStoreItems();
  }

  public getStoreItems(refresh = false): void {
    const store = this.storeService.store;
    this.storeItems = this.sortStoreItems(
      this.storeService.getStoreItems([...this.storeItems, store])
    );
    this.toastMessage = 'The Store has been successfully added';
    this.reloadStoreList = refresh;
    this.hideNotification();
  }

  public removeStore(store: StoreModel): void {
    this.storeItems = this.storeItems.filter(item => item.id !== store.id);
    this.toastMessage = 'The Store has been successfully removed';
    this.reloadStoreList = true;
    this.hideNotification();
  }

  private initialStoreItems(): void {
    const stores = this.storeService.stores as StoreModel[];
    this.storeItems = this.sortStoreItems(
      this.storeService.getStoreItems(stores)
    );
  }

  private sortStoreItems(stores: StoreModel[]): StoreModel[] {
    return stores.sort((a, b) => {
      return b.goodsTotal - a.goodsTotal;
    });
  }

  private hideNotification(): void {
    const timeout = 2000;
    setTimeout(() => {
      this.reloadStoreList = false;
    }, timeout);
  }
}
