import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepuestoListarComponent } from './repuesto-listar.component';

describe('RepuestoListarComponent', () => {
  let component: RepuestoListarComponent;
  let fixture: ComponentFixture<RepuestoListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepuestoListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepuestoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
