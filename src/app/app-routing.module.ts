import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListadoComponent} from './listado/listado.component';
import {CrearComponent} from './crear/crear.component';
import {EditarComponent} from './editar/editar.component';


const routes: Routes = [{path:'list',component:ListadoComponent},
                        {path:'',redirectTo:'/list',pathMatch:'full'},
                        {path:'crear',component:CrearComponent},
                        {path:'edit/:id',component:EditarComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
