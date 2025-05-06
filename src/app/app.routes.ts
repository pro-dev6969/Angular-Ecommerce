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
        component: SellerAuthComponent,
    },
    {
        path: 'seller-home',
        component: SellerHomeComponent,
        canActivate: [authGuard]
    },
    {
        component: SellerAddProductComponent,
        path: 'seller-add-product',
        canActivate: [authGuard]
    },
    {
        component: UserAuthComponent,
        path: 'user-auth'
    }
];


