import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { ListarParqueaderoComponent } from './parquedero/parqueaderoComponents/listar-parqueadero/listar-parqueadero.component';
import { CrearParqueaderoComponent } from './parquedero/parqueaderoComponents/crear-parqueadero/crear-parqueadero.component';
import { ListarOperadorComponent } from './operador/operadorComponents/listar-operador/listar-operador.component';
import { CrearOperadorComponent } from './operador/operadorComponents/crear-operador/crear-operador.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListarParqueaderoComponent,
    CrearParqueaderoComponent,
    ListarOperadorComponent,
    CrearOperadorComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
