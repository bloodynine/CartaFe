import { Component } from '@angular/core';
import {ApiService} from "../api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  constructor(private api: ApiService, 
              private router: Router) {
  }
  
  async createGame() {
    await this.router.navigate(['/new']);
  }
  
  
    
}
