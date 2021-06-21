import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiPapillaComponent } from './mi-papilla.component';

describe('MiPapillaComponent', () => {
  let component: MiPapillaComponent;
  let fixture: ComponentFixture<MiPapillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiPapillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiPapillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
