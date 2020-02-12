import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MecanicoDetalleComponent } from './mecanico-detalle.component';

describe('MecanicoDetalleComponent', () => {
  let component: MecanicoDetalleComponent;
  let fixture: ComponentFixture<MecanicoDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MecanicoDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MecanicoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
