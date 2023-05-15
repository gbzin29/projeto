import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component {
  @Input() nome!:string
  cards=[
    {
      nome:'pikachu',
      altura:'20',
      peso:'15',
      img:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif',
    }
  ]
}
