import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoEditarComponent } from './mantenimiento-editar.component';

describe('MantenimientoEditarComponent', () => {
  let component: MantenimientoEditarComponent;
  let fixture: ComponentFixture<MantenimientoEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantenimientoEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
