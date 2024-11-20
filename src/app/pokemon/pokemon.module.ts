import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonListarComponent } from './pokemon-listar/pokemon-listar.component';
import { PokemonRoutingModule } from './pokemon-routing.module';

@NgModule({
  imports: [
    CommonModule, 
    PokemonRoutingModule
  ],
  declarations: [PokemonDetailComponent, PokemonListarComponent], 
  exports: [PokemonDetailComponent, PokemonListarComponent]
})
export class PokemonModule { }
