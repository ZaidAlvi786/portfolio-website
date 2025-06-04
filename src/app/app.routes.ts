import { Routes } from '@angular/router';
import { PortfolioHomeComponent } from './portfolio-home/portfolio-home.component';

export const routes: Routes = [
    { path: '', component: PortfolioHomeComponent },
    { path: 'home', component: PortfolioHomeComponent }
];
