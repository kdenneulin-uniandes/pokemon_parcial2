import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { PokemonDetailDto } from '../pokemonDetailDto';

@Component({
  selector: 'app-pokemon-listar',
  templateUrl: './pokemon-listar.component.html',
  styleUrls: ['./pokemon-listar.component.css']
})
export class PokemonListarComponent implements OnInit {
  pokemonList: PokemonDetailDto[] =  []; 
  selected: boolean = false; 
  pokemonSelected!: PokemonDetailDto; 

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemons(); 
  }

  getPokemons() {
    this.pokemonList = this.pokemonService.getPokemons(); 
  }

  onSelected(pokemon: PokemonDetailDto) {
    this.selected = true; 
    this.pokemonSelected = pokemon;

  }

}
