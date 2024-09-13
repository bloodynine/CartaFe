import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GameConfig, Game, NewGame} from "./Models/Game";
import {BehaviorSubject, lastValueFrom} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  baseUrl = environment.apiUrl;
  
  public game: BehaviorSubject<Game> = new BehaviorSubject<Game>({} as Game);
  
  constructor(private http: HttpClient) { }
  
  async createGame(config: GameConfig): Promise<NewGame> {
    return await lastValueFrom(this.http.post<NewGame>(this.baseUrl + 'Game', config))
  }
  
  getGame(id: string) {
    this.http.get<Game>(this.baseUrl + `Game/${id}`).subscribe((game: Game) => {
      this.game.next(game);
    });
  }

  flipCard(cardId: string) {
    const game = this.game.getValue();
    this.http.put(this.baseUrl + `Game/${game.gameId}/card/${cardId}`, {}).subscribe(() => {
        this.getGame(game.gameId);
    });
  }
}
