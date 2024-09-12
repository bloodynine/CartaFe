import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {HttpClient, HttpClientModule, provideHttpClient} from "@angular/common/http";
import {FileIcon, LucideAngularModule} from "lucide-angular";
import {NavbarComponent} from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LucideAngularModule, RouterLink, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Carta';
  readonly FileIcon = FileIcon;
}
