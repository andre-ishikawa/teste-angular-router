import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LocalComponent } from './local/local.component';

const routes: Routes = [{
  path: 'cadastro', component: CadastroComponent
},
{ 
  path: 'local', component: LocalComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
