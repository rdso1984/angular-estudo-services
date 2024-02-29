import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonServiceService } from '../../services/pokemon-service.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent implements OnInit{

  name:string = "CHARIZARD"
  attributesTypes:string[] = ['FIRE', 'ROCK', 'WATER']

  //Injetando um service no construtor
  constructor(private service:PokemonServiceService){ }

  ngOnInit(): void {
    this.service.getPokemon("charizard").subscribe(
      {
        next: (res) => console.log(res),
        error: (err) => console.log(err)
      }
    )
  }

  
}
