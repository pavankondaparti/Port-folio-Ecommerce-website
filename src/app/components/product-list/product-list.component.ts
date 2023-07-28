import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.getProductsList();
    setTimeout(() => {
      console.log(this.products);
    }, 2000);
  }

  getProductsList() {
    this.productService.getProducts().subscribe((result: any) => {
      this.products = result.data;
    });
  }
}
