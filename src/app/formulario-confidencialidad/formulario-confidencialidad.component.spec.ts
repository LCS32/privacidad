import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioConfidencialidadComponent } from './formulario-confidencialidad.component';

describe('FormularioConfidencialidadComponent', () => {
  let component: FormularioConfidencialidadComponent;
  let fixture: ComponentFixture<FormularioConfidencialidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioConfidencialidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioConfidencialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
