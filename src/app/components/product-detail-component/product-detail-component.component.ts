import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail-component',
  templateUrl: './product-detail-component.component.html',
  styleUrls: ['./product-detail-component.component.css'],
})
export class ProductDetailComponentComponent implements OnInit {
  selectedId: any;
  allProducts: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.selectedId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.productService.getProducts().subscribe((prods: any) => {
      this.allProducts = prods.data;
    });
  }
}
