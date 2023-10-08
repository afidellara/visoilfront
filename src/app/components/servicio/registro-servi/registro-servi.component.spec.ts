import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroServiComponent } from './registro-servi.component';

describe('RegistroServiComponent', () => {
  let component: RegistroServiComponent;
  let fixture: ComponentFixture<RegistroServiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroServiComponent]
    });
    fixture = TestBed.createComponent(RegistroServiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
