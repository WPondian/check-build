import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-lateral',
  standalone:true,
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css'],
  imports:[
    CommonModule
  ]
})
export class MenuLateralComponent {
  menuItems = [
    { icon: 'home', name: 'Home' },
    { icon: 'settings', name: 'Settings' },
    { icon: 'info', name: 'Info' }
  ];
}