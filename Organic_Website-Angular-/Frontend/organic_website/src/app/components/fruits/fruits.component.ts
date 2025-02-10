import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {
  cardData: any[] = [];
  cart_product_ids: any[] = [];
  quantities: any[] = [];
  showSuccessPopup: boolean = false;
  existingCartIds: any[] = [];  
  existingQuandities:any[]=[];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    const access = sessionStorage.getItem("access");
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${access}`
    });

    
    this.http.get('http://127.0.0.1:8000/api/Product_Table/', { headers }).subscribe(
      (response: any) => {
        this.cardData = response;
        
        this.cardData.forEach(product => {
          product.quantity = 1;
        });
      },
      (error: any) => {
        console.error('Error when fetching product data:', error);
      }
    );

    
    this.http.get('http://localhost:8000/api/users/get_user', { headers }).subscribe(
      (response: any) => {
        this.existingCartIds = response.data.cart_product_ids;

        this.existingQuandities = response.data.quantities;
        console.log("Existing cart product IDs:", this.existingCartIds);

    
        let i=0;
        this.existingCartIds.forEach(id => {
          if (!this.cart_product_ids.includes(id)) {
            this.cart_product_ids.push(id);
            this.quantities.push(this.existingQuandities[i]);
            i+=1;
          }
        });
      },
      (error: any) => {
        console.error('Error when fetching user data:', error);
      }
    );
  }

  updateQuantity(product: any, change: number) {
    if (product.quantity + change >= 1) {
      product.quantity += change;
    }
  }

  addToCart(product: any) {
    const productId = product.id;
    const productQuantity = product.quantity;

    
    const existingIndex = this.cart_product_ids.indexOf(productId);

    if (existingIndex === -1) {
     
      this.cart_product_ids.push(productId);
      this.quantities.push(productQuantity || 1); 
    } else {
      
      this.quantities[existingIndex] = productQuantity;
    }

    
    const allProductIds = new Set([...this.cart_product_ids, ...this.existingCartIds]);

    
    const uniqueProductIds = Array.from(allProductIds);

 
    const payload = {
      cart_product_ids: uniqueProductIds,
      quantities: this.quantities.slice(0, uniqueProductIds.length) 
    };

    const access = sessionStorage.getItem("access");
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${access}`
    });

    
    console.log('Payload:', payload);
    this.http.patch('http://127.0.0.1:8000/api/users/get_user', payload, { headers })
      .subscribe(response => {
        this.showSuccessPopup = true;
        console.log("Product quantity updated:", response);
      }, error => {
        console.error("Error updating cart:", error);
      });
  }

  
  closePopup() {
    this.showSuccessPopup = false;
  }
}
