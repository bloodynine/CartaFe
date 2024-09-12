import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CardConfigState, Suit} from "../Models/Game";
import {
  CircleCheckBigIcon,
  CircleOffIcon,
  ClubIcon,
  DiamondIcon,
  HeartIcon,
  LucideAngularModule,
  SpadeIcon
} from "lucide-angular";

@Component({
  selector: 'app-config-card',
  standalone: true,
  imports: [
    LucideAngularModule
  ],
  templateUrl: './config-card.component.html',
  styleUrl: './config-card.component.css'
})
export class ConfigCardComponent {
  @Input() face = '';
  @Input() suit: Suit = Suit.Spades;
  @Input() state = CardConfigState.Enabled;
  @Output() stateChange = new EventEmitter<CardConfigState>();
  readonly DisabledIcon = CircleOffIcon;
  readonly PromisedIcon = CircleCheckBigIcon;
  

  toggleState() {
    this.state = (this.state + 1) % 3;
    this.stateChange.emit(this.state);
  }

  protected readonly DiamondIcon = DiamondIcon;
  protected readonly SpadeIcon = SpadeIcon;
  protected readonly HeartIcon = HeartIcon;
  protected readonly ClubIcon = ClubIcon;
  protected readonly CardConfigState = CardConfigState;
}
