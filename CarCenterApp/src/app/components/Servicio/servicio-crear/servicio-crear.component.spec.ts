import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioCrearComponent } from './servicio-crear.component';

describe('ServicioCrearComponent', () => {
  let component: ServicioCrearComponent;
  let fixture: ComponentFixture<ServicioCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
