import { Component } from '@angular/core';
import axios from 'axios';
import { withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-barra-navegacao',
  templateUrl: './barra-navegacao.component.html',
  styleUrls: ['./barra-navegacao.component.css']
})
export class BarraNavegacaoComponent {

  pokeName!:string
  pokePeso!:string
  pokeHeight!:string
  pokeImage!:string

  search(value: string){
    const option={
      method: 'Get',
      url:`https://pokeapi.co/api/v2/pokemon/${value}`,
      headers: {'Content-Type':'spplication/json'}
    }

    axios.request(option).then((response)=>{
      console.log(response.data)
      this.pokeName=(response.data.name)
      this.pokePeso=(`Peso: ${response.data.weight}`)
      this.pokeHeight=(`Altura: ${response.data.height}`)
      this.pokeImage=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${value}.gif`
    }).catch((error)=>{
      console.log(error)
    })
  }
}
