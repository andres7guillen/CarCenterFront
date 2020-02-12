import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaCrearComponent } from './marca-crear.component';

describe('MarcaCrearComponent', () => {
  let component: MarcaCrearComponent;
  let fixture: ComponentFixture<MarcaCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcaCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcaCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
