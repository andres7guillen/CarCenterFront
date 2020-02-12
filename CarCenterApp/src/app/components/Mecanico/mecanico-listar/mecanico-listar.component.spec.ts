import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MecanicoListarComponent } from './mecanico-listar.component';

describe('MecanicoListarComponent', () => {
  let component: MecanicoListarComponent;
  let fixture: ComponentFixture<MecanicoListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MecanicoListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MecanicoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
