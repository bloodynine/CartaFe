import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Card} from "../Models/Game";
import {ApiService} from "../api.service";
import {ClubIcon, DiamondIcon, FileIcon, HeartIcon, LucideAngularModule, SpadeIcon} from "lucide-angular";

@Component({
  selector: 'app-carta-card',
  standalone: true,
  imports: [
    LucideAngularModule
  ],
  templateUrl: './carta-card.component.html',
  styleUrl: './carta-card.component.css'
})
export class CartaCardComponent implements OnInit{
  @Input() card!: Card;
  readonly SpadeIcon = SpadeIcon;
  readonly HeartIcon = HeartIcon;
  readonly ClubIcon = ClubIcon;
  readonly DiamondIcon = DiamondIcon;
  iconSize = 60;
  
  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
  }
  
    flipCard() {
      this.api.flipCard(this.card.id!);
    }

}

