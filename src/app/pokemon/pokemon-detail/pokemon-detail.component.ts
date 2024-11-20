import { Component, Input, OnInit } from '@angular/core';
import { AbilitiesDetailDto, AbilityDto, PokemonDetailDto } from '../pokemonDetailDto';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { TypesDto } from '../../type/typeDto';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  @Input() pokemonDetail!: PokemonDetailDto; 
  @Input() pokemonAbilities: AbilityDto[] = []; 
  @Input() pokemonTypes: TypesDto[] = []; 
  selectedBool: boolean = false; 
  typeSelected!: TypesDto; 

  constructor(private service: PokemonService) { }


  ngOnInit() {
  }

  onSelectedType(type: TypesDto) {
    this.typeSelected = type ; 
    this.selectedBool = true;

  }

}
