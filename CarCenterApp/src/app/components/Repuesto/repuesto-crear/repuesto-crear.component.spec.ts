import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepuestoCrearComponent } from './repuesto-crear.component';

describe('RepuestoCrearComponent', () => {
  let component: RepuestoCrearComponent;
  let fixture: ComponentFixture<RepuestoCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepuestoCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepuestoCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
