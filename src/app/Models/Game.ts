export interface Game {
    gameId: string;
    config: GameConfig;
    cards: Card[];
}

export interface GameConfig {
    rows: number;
    columns: number;
    disAllowedCards: Card[]
    promisedCards: Card[]
}

export interface Card {
    isFlipped: boolean;
    suit?: Suit;
    id?: string;
    face?: string;
}

export interface ConfigCard extends Card {
    state: CardConfigState;
}

export enum Suit {
    Spades,
    Hearts,
    Diamonds,
    Clubs
}

export interface NewGame {
    gameId: string;
}

export enum CardConfigState {
    Enabled,
    Disabled,
    Promised,
}

export class DeckGenerator {

    deck: Array<Card>;
    constructor(includeJokers: boolean) {
        this.deck = [];
        let values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10','J', 'Q', 'K']
        const suits = [Suit.Clubs, Suit.Diamonds, Suit.Hearts, Suit.Spades]
        values.forEach(x => {
            suits.forEach(s => {
                this.deck.push( {face: x, suit: s} as Card)
            })
        })
        if(includeJokers){
            this.deck.push({face: 'Joker', suit: Suit.Hearts} as Card)
            this.deck.push({face: 'Joker', suit: Suit.Clubs} as Card)
        }
    }
}
