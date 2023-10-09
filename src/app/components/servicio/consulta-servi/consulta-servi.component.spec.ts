import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaServiComponent } from './consulta-servi.component';

describe('ConsultaServiComponent', () => {
  let component: ConsultaServiComponent;
  let fixture: ComponentFixture<ConsultaServiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaServiComponent]
    });
    fixture = TestBed.createComponent(ConsultaServiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
