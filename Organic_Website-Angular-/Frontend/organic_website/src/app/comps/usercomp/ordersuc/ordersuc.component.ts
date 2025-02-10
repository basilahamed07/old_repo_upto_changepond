import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ordersuc',
  templateUrl: './ordersuc.component.html',
  styleUrl: './ordersuc.component.css'
})
export class OrdersucComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    
    setTimeout(() => {
      this.router.navigate(['prodact/orderview']); 
    }, 5000);
  }
}