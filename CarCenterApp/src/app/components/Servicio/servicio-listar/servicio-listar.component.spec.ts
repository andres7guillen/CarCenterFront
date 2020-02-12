import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioListarComponent } from './servicio-listar.component';

describe('ServicioListarComponent', () => {
  let component: ServicioListarComponent;
  let fixture: ComponentFixture<ServicioListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
