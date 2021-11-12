import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarParqueaderoComponent } from './parqueaderoComponents/listar-parqueadero/listar-parqueadero.component';
import { CrearParqueaderoComponent } from './parqueaderoComponents/crear-parqueadero/crear-parqueadero.component';



@NgModule({
  declarations: [
    ListarParqueaderoComponent,
    CrearParqueaderoComponent
  ],
  imports: [
    CommonModule,
    
  ]
})
export class ParquederoModule { }
