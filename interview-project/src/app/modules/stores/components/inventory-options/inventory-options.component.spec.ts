import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryOptionsComponent } from './inventory-options.component';

describe('InventoryDropdownComponent', () => {
  let component: InventoryOptionsComponent;
  let fixture: ComponentFixture<InventoryOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventoryOptionsComponent]
    });
    fixture = TestBed.createComponent(InventoryOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
