import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { AbilityDto, PokemonDetailDto } from '../pokemonDetailDto';
import { TypesDto } from '../../type/typeDto';

@Component({
  selector: 'app-pokemon-listar',
  templateUrl: './pokemon-listar.component.html',
  styleUrls: ['./pokemon-listar.component.css']
})
export class PokemonListarComponent implements OnInit {
  pokemonList: PokemonDetailDto[] =  []; 
  selected: boolean = false; 
  pokemonSelected!: PokemonDetailDto; 
  pokemonAbilities: AbilityDto[] = []; 
  pokemonTypes: TypesDto[] = [] ;
  listTypes: TypesDto[] = []; 
  numberPokemonsTypes: string[] = []; 

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemons(); 
  }

  getPokemons() {
    this.pokemonList = this.pokemonService.getPokemons(); 
  }

  onSelected(pokemon: PokemonDetailDto): void {
    this.pokemonSelected = pokemon; 
    this.pokemonAbilities = pokemon.abilities ; 
    this.pokemonTypes = pokemon.types ; 
    this.selected = true;
  }



}
