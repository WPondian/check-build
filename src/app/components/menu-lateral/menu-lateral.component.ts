import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { filter } from 'rxjs';

@Component({
  selector: 'app-menu-lateral',
  standalone:true,
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css'],
  imports:[
    CommonModule,
    MatIconModule
  ]
})

export class MenuLateralComponent {
  menuAtivo = "home"
  menuItems = [
    { icon: 'home', name: 'home',titulo:"Home", color:"#039AC3" },
    { icon: 'handyman', name: 'material',titulo:"Material", color:"#7C1BD7" },
    { icon: 'engineering', name: 'mao-de-obra',titulo:"Mão de Obra", color:"#4A1BD7" }
  ];

  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        let rotaAtiva = event.url.substring(1);
        let menuRotaAtiva = this.menuItems.filter(menu =>{return menu.name == rotaAtiva});
        this.menuAtivo = menuRotaAtiva.length ? menuRotaAtiva[0].name : "home";        
      });
  }

  mouseHover(event: MouseEvent,cor:string,menu:string) {
    let divMenu = event.target as HTMLDivElement;

    let divIcon = divMenu.tagName != "MAT-ICON" ? divMenu?.querySelector('mat-icon') as HTMLDivElement :divMenu;

    cor = menu == this.menuAtivo ? 'white': cor;

    if (divIcon) {
      divIcon.style.color = cor;
    }
  }

  redirecionaMenu(route: string) {
    this.menuAtivo = route;
    this.router.navigate(['/' + route]);
  }
}