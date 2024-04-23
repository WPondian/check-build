import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MenuLateralComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'check-build';
}
