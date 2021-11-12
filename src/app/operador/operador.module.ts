import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarOperadorComponent } from './operadorComponents/listar-operador/listar-operador.component';
import { CrearOperadorComponent } from './operadorComponents/crear-operador/crear-operador.component';



@NgModule({
  declarations: [
    ListarOperadorComponent,
    CrearOperadorComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class OperadorModule { }
