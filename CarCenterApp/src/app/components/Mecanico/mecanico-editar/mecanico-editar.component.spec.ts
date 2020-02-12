import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MecanicoEditarComponent } from './mecanico-editar.component';

describe('MecanicoEditarComponent', () => {
  let component: MecanicoEditarComponent;
  let fixture: ComponentFixture<MecanicoEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MecanicoEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MecanicoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
