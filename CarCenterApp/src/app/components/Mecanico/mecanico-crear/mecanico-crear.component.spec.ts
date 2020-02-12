import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MecanicoCrearComponent } from './mecanico-crear.component';

describe('MecanicoCrearComponent', () => {
  let component: MecanicoCrearComponent;
  let fixture: ComponentFixture<MecanicoCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MecanicoCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MecanicoCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
