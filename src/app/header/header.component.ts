import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuType: String = 'default';
  sellerName:string = '';

  constructor(private router: Router){
    console.log("constructor created");
    
  }

  ngOnInit(): void{
    
    this.router.events.subscribe((val:any)=>{
      if(val.url){
        //                                      seller se related jitne bhi component banenge unke naam se pehle 
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          console.warn("in seller area");
          this.menuType = "seller"
          if(localStorage.getItem('seller')){
            let sellerStore = localStorage.getItem('seller');
            let sellerData = sellerStore && JSON.parse(sellerStore)[1];
            this.sellerName = sellerData.name;
          }
        }else{
          console.warn("outside seller")
          this.menuType="default"
        }
      }
    })
  }

  logout(){
     localStorage.removeItem('seller');
     this.router.navigate(['seller-auth']);
  }
}
