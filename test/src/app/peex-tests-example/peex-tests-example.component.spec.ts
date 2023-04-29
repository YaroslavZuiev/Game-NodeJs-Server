import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeexTestsExampleComponent } from './peex-tests-example.component';

describe('PeexTestsExampleComponent', () => {
  let component: PeexTestsExampleComponent;
  let fixture: ComponentFixture<PeexTestsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeexTestsExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeexTestsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
