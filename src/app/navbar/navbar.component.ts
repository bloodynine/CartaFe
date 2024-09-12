import { Component } from '@angular/core';
import {LucideAngularModule, MapIcon, SpadeIcon} from "lucide-angular";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  readonly MapIcon = MapIcon;

  protected readonly SpadeIcon = SpadeIcon;
}
