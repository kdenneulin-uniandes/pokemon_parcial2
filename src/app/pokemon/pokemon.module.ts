import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonListarComponent } from './pokemon-listar/pokemon-listar.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { TypeDetailComponent } from './type-detail/type-detail.component';

@NgModule({
  imports: [
    CommonModule, 
    PokemonRoutingModule
  ],
  declarations: [PokemonDetailComponent, PokemonListarComponent, TypeDetailComponent], 
  exports: [PokemonDetailComponent, PokemonListarComponent, TypeDetailComponent]
})
export class PokemonModule { }
