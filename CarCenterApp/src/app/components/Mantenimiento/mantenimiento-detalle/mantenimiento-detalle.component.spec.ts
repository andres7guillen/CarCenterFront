import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoDetalleComponent } from './mantenimiento-detalle.component';

describe('MantenimientoDetalleComponent', () => {
  let component: MantenimientoDetalleComponent;
  let fixture: ComponentFixture<MantenimientoDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantenimientoDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
