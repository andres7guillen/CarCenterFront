import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioEditarComponent } from './servicio-editar.component';

describe('ServicioEditarComponent', () => {
  let component: ServicioEditarComponent;
  let fixture: ComponentFixture<ServicioEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
