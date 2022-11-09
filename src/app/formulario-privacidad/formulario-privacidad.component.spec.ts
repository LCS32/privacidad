import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPrivacidadComponent } from './formulario-privacidad.component';

describe('FormularioPrivacidadComponent', () => {
  let component: FormularioPrivacidadComponent;
  let fixture: ComponentFixture<FormularioPrivacidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioPrivacidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioPrivacidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
