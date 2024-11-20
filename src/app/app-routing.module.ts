import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonRoutingModule } from './pokemon/pokemon-routing.module';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pokemon/pokemon.module').then(m => m.PokemonModule) }, 
  { path: 'pokemons', loadChildren: () => import('./pokemon/pokemon.module').then(m => m.PokemonModule) },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
