import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarProductosComponent } from './consultar-productos.component';

describe('ConsultarProductosComponent', () => {
  let component: ConsultarProductosComponent;
  let fixture: ComponentFixture<ConsultarProductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarProductosComponent]
    });
    fixture = TestBed.createComponent(ConsultarProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
