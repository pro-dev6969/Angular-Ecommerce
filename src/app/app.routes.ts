import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { authGuard } from './auth.guard';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { UserAuthComponent } from './user-auth/user-auth.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'seller-auth',
        component: SellerAuthComponent
    },
    // Added Lazy Loading here
    {
        path: 'seller-home',
        loadComponent: ()=>import('./seller-home/seller-home.component').then((c)=>c.SellerHomeComponent),
        canActivate: [authGuard]
    },
    {
        path:'seller-add-product',
        loadComponent:()=>import('./seller-add-product/seller-add-product.component').then((c)=>c.SellerAddProductComponent),
        canActivate: [authGuard]
    },
    {
        path: 'user-auth',
        loadComponent: ()=>import('./user-auth/user-auth.component').then((c)=>c.UserAuthComponent) 
    }
];


