import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusNavigatorComponent } from './focus-navigator.component';

describe('FocusNavigatorComponent', () => {
  let component: FocusNavigatorComponent;
  let fixture: ComponentFixture<FocusNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FocusNavigatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
