import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlexProjectComponent } from './alex-project.component';

describe('AlexProjectComponent', () => {
  let component: AlexProjectComponent;
  let fixture: ComponentFixture<AlexProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlexProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlexProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
