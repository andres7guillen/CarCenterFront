import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoListarComponent } from './mantenimiento-listar.component';

describe('MantenimientoListarComponent', () => {
  let component: MantenimientoListarComponent;
  let fixture: ComponentFixture<MantenimientoListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantenimientoListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
