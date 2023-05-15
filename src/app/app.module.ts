import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './components/titulo/titulo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BarraNavegacaoComponent } from './components/barra-navegacao/barra-navegacao.component';
import { ImagemComponent } from './components/imagem/imagem.component';
import { CardComponent } from './components/card/card.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { BuscaPokeApiComponent } from './components/busca-poke-api/busca-poke-api.component';
import { Card2Component } from './components/card2/card2.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    BarraNavegacaoComponent,
    ImagemComponent,
    CardComponent,
    RodapeComponent,
    BuscaPokeApiComponent,
    Card2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
