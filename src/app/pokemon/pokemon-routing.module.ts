import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonListarComponent } from './pokemon-listar/pokemon-listar.component';
import { TypeDetailComponent } from './type-detail/type-detail.component';

const routes: Routes = [
    {
        path: 'list',
        component: PokemonListarComponent
      },
      {
        path: ':id',
        component: PokemonDetailComponent
      },
      {
        path:':id:idType', 
        component: TypeDetailComponent
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }