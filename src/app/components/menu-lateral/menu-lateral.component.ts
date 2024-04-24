import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

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
  menuAtivo="Material"
  menuItems = [
    { icon: 'home', name: 'Home' },
    { icon: 'handyman', name: 'Material' },
    { icon: 'engineering', name: 'Mão de Obra' }
  ];
}