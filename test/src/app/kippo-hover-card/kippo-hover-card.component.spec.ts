import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KippoHoverCardComponent } from './kippo-hover-card.component';

describe('KippoHoverCardComponent', () => {
  let component: KippoHoverCardComponent;
  let fixture: ComponentFixture<KippoHoverCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KippoHoverCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KippoHoverCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
