import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoCrearComponent } from './mantenimiento-crear.component';

describe('MantenimientoCrearComponent', () => {
  let component: MantenimientoCrearComponent;
  let fixture: ComponentFixture<MantenimientoCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantenimientoCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientoCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
