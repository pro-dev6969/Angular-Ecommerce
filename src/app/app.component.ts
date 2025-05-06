import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SellerService } from './services/seller.service';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [ CommonModule ,HeaderComponent, RouterOutlet  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce';

  
}

