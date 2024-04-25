import { Routes } from '@angular/router';
import { HomeComponent } from './components/page/home/home.component';
import { MaterialComponent } from './components/page/material/material.component';
import { MaoDeObraComponent } from './components/page/mao-de-obra/mao-de-obra.component';

export const routes: Routes = [
    {path:'',redirectTo:"home",pathMatch:"full"},
    {path:'home',component:HomeComponent},
    {path:'material',component:MaterialComponent},
    {path:'mao-de-obra',component:MaoDeObraComponent},
];