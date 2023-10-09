import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioServiComponent } from './formulario-servi.component';

describe('FormularioServiComponent', () => {
  let component: FormularioServiComponent;
  let fixture: ComponentFixture<FormularioServiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioServiComponent]
    });
    fixture = TestBed.createComponent(FormularioServiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
