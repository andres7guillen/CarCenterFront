import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaListarComponent } from './marca-listar.component';

describe('MarcaListarComponent', () => {
  let component: MarcaListarComponent;
  let fixture: ComponentFixture<MarcaListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcaListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
