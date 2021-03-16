import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialLocalModule } from './material-local.module';
import { ClaseComponent } from './pages/clase/clase.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from './pages/inicio/inicio.component';
import { EstudianteComponent } from './pages/estudiante/estudiante.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaClaseComponent } from './pages/lista-clase/lista-clase.component';
import { AsignarClaseComponent } from './pages/asignar-clase/asignar-clase.component';
import { ComponentesComunesModule } from './componentes-comunes/componentes-comunes.module';
import { ListaEstudianteComponent } from './pages/lista-estudiante/lista-estudiante.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'clase', component: ClaseComponent},
  {path: 'estudiante', component: EstudianteComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ClaseComponent,
    InicioComponent,
    EstudianteComponent,
    ListaClaseComponent,
    AsignarClaseComponent,
    ListaEstudianteComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialLocalModule,
    BrowserAnimationsModule,
    ComponentesComunesModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    MaterialLocalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
