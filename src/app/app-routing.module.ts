import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductoDetalleComponent } from './pages/producto-detalle/producto-detalle.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"registro", component:RegistroComponent},
  {path:"ingreso", component:LoginComponent},
  {path:"producto/:id",component:ProductoDetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
