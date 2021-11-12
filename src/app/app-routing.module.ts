import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { CrearOperadorComponent } from './operador/operadorComponents/crear-operador/crear-operador.component';
import { ListarOperadorComponent } from './operador/operadorComponents/listar-operador/listar-operador.component';
import { CrearParqueaderoComponent } from './parquedero/parqueaderoComponents/crear-parqueadero/crear-parqueadero.component';
import { ListarParqueaderoComponent } from './parquedero/parqueaderoComponents/listar-parqueadero/listar-parqueadero.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'parqueadero', component: ListarParqueaderoComponent },
  { path: 'crearParqueadero', component: CrearParqueaderoComponent},
  { path: 'operador', component:ListarOperadorComponent},
  { path: 'crearOperador', component:CrearOperadorComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
