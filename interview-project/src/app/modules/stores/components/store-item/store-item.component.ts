import {Component, EventEmitter, Input, Output} from '@angular/core';

import { StoreModel } from '../../models/store.model';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.scss'],
})
export class StoreItemComponent {
  @Input() public storeItem: StoreModel;

  @Output() public remove = new EventEmitter<void>();

  public removeStore(): void {
    this.remove.emit();
  }
}
