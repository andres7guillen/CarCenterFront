import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepuestoDetalleComponent } from './repuesto-detalle.component';

describe('RepuestoDetalleComponent', () => {
  let component: RepuestoDetalleComponent;
  let fixture: ComponentFixture<RepuestoDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepuestoDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepuestoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
