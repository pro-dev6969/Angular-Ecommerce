import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { login, signUp } from '../data-type';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-seller-auth',
  imports: [FormsModule,CommonModule ],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent  {

  constructor(private seller: SellerService , private router:Router){

  }

  showLogin = false;

  ngOnInit():void{
    this.seller.reloadSeller()
  }

  signUp(data: signUp){
    console.warn(data);
    this.seller.userSignup(data)
  }

  login(data: login){
    console.warn(data);
    this.seller.userLogin(data);
  }

  toggleForm(){
    this.showLogin = !this.showLogin
  }
}
