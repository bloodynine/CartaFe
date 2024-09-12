import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../api.service";
import {Card, Game} from "../Models/Game";
import {JsonPipe, NgClass} from "@angular/common";
import {CartaCardComponent} from "../carta-card/carta-card.component";

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    JsonPipe,
    NgClass,
    CartaCardComponent
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent  implements OnInit {
  gameId = '';
  game?: Game | undefined;
  columns = '';
  cards: Card[] = [];
  constructor(
      private route: ActivatedRoute,
      private api: ApiService,
  ) {
  }
  
  ngOnInit() {
    this.route.paramMap.subscribe(x => {
      this.api.getGame(x.get('id') || '');
    })
    
    this.api.game.subscribe(x => {
      if(x.config){
        this.cards = [];
        this.game = x;
        console.log(x)
        this.columns = `has-${x.config.columns}-cols`;
        for (let i = 0; i < x.config.rows * x.config.columns; i++) {
          this.cards.push(this.game.cards[i]);
        }  
      }
    })
  }
}
