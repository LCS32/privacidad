import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-formulario-privacidad',
  templateUrl: './formulario-privacidad.component.html',
  styleUrls: ['./formulario-privacidad.component.css']
})
export class FormularioPrivacidadComponent implements OnInit {


  formulario!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  
  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      url: ['', [Validators.required, Validators.minLength(3)]],
      nombreUso: ['', [Validators.required, Validators.minLength(3)]],
      persona: ['', [Validators.required, Validators.minLength(3)]],
      nombreCompleto: ['', [Validators.required, Validators.minLength(3)]],
      nif: ['', [Validators.required, Validators.minLength(9)]],
      direccion: ['', [Validators.required, Validators.minLength(3)]],
      telefono: ['', [Validators.required, Validators.minLength(9)]],
      fax: ['', [Validators.required, Validators.minLength(9)]],
      email: ['', [Validators.required, Validators.email]],
      tipoDatos: ['', [Validators.required]],
      tiempo: ['', [Validators.required, Validators.minLength(3)]],
      comparten: ['', [Validators.required]],
      compartidoCon: ['', [Validators.required, Validators.minLength(3)]],
      ssl: ['', [Validators.required]],
    });
  }
 

  
  onSubmit(_datosForm: any) {
    console.log(_datosForm.value);
  }
  
    
    
}
    


