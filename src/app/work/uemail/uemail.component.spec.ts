import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UemailComponent } from './uemail.component';

describe('UemailComponent', () => {
  let component: UemailComponent;
  let fixture: ComponentFixture<UemailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UemailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
