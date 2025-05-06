import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-add-product',
  imports: [FormsModule],
  templateUrl: './seller-add-product.component.html',
  styleUrl: './seller-add-product.component.css'
})
export class SellerAddProductComponent {

  productMessage : string|undefined;

  constructor(private product:ProductService){}

  submitData(data: product){
    console.warn(data);
    this.product.addProduct(data).subscribe((result)=>{
      console.warn(result);
      if(result)
      {
        this.productMessage= "Product is successfully added."
      }
    });
  }
}
