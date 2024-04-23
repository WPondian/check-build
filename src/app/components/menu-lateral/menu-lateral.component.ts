import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent {
  menuItems = [
    { icon: 'home', name: 'Home', hover: false },
    { icon: 'settings', name: 'Mão de obra', hover: false },
    { icon: 'info', name: 'Lista Materias', hover: false },
  ];
}
