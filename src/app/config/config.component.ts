import {Component, OnInit} from '@angular/core';
import {ConfigCardComponent} from "../config-card/config-card.component";
import {Card, CardConfigState, ConfigCard, DeckGenerator, GameConfig} from "../Models/Game";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CircleCheckBigIcon, CircleOffIcon, LucideAngularModule} from "lucide-angular";
import {ApiService} from "../api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-config',
  standalone: true,
  imports: [
    ConfigCardComponent,
    ReactiveFormsModule,
    LucideAngularModule
  ],
  templateUrl: './config.component.html',
  styleUrl: './config.component.css'
})
export class ConfigComponent implements OnInit{
  cards: ConfigCard[] = [];
  readonly DisabledIcon = CircleOffIcon;
  readonly PromisedIcon = CircleCheckBigIcon;
  configForm = new FormGroup({
    rows: new FormControl(5, [Validators.required, Validators.min(1)]),
    columns: new FormControl(5, [Validators.required, Validators.min(1)])
  })
  
  constructor(private api: ApiService, private router: Router) {
  }
  
  ngOnInit(): void {
    const deckGen = new DeckGenerator(true);
    this.cards = deckGen.deck as ConfigCard[];
    this.cards.forEach(x => x.state = CardConfigState.Enabled);
  }

  async createGame() {
    const promisedCards = [] as Card[];
    const disallowedCards = [] as Card[];
    this.cards.forEach(x => {
      if (x.state === CardConfigState.Promised) {
        promisedCards.push({
          suit: x.suit!,
          face: x.face!,
          isFlipped: false
        } as Card)
      } 
      if(x.state == CardConfigState.Disabled) {
        disallowedCards.push({
          suit: x.suit!,
          face: x.face!,
          isFlipped: false
        } as Card)
      }
    });
    
    const game: GameConfig = {
      rows: this.configForm.get('rows')!.value!,
      columns: this.configForm.get('columns')!.value!,
      disAllowedCards: disallowedCards,
      promisedCards: promisedCards
    }
    
    this.api.createGame(game).then(async (x) => {
      await this.router.navigate(['/game/', x.gameId]);
    })
  }
  
}
