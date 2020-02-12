import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepuestoEditarComponent } from './repuesto-editar.component';

describe('RepuestoEditarComponent', () => {
  let component: RepuestoEditarComponent;
  let fixture: ComponentFixture<RepuestoEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepuestoEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepuestoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
