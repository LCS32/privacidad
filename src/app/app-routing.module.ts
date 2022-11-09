import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormularioConfidencialidadComponent } from './formulario-confidencialidad/formulario-confidencialidad.component';
import { FormularioPrivacidadComponent } from './formulario-privacidad/formulario-privacidad.component';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'formulario-confidencialidad', component: FormularioConfidencialidadComponent},
  {path: 'formulario-privacidad', component: FormularioPrivacidadComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
