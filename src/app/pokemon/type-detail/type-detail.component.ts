import { Component, Input, OnInit } from '@angular/core';
import { TypesDto } from '../../type/typeDto';

@Component({
  selector: 'app-type-detail',
  templateUrl: './type-detail.component.html',
  styleUrls: ['./type-detail.component.css']
})
export class TypeDetailComponent implements OnInit {
  @Input() pokemonTypes!: TypesDto; 

  constructor() { }

  ngOnInit() {
  }

}
