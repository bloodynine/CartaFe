import { Routes } from '@angular/router';
import {LandingComponent} from "./landing/landing.component";
import {GameComponent} from "./game/game.component";
import {ConfigComponent} from "./config/config.component";

export const routes: Routes = [
    {path: '', component: LandingComponent},
    {path: 'game/:id', component: GameComponent},
    {path: 'new', component: ConfigComponent}
];
