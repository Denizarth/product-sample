import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const routeParam = this.route.snapshot.paramMap;
    window.alert('(routeParam: ' + routeParam);

    const prodId = Number(routeParam.get('productId'));
    window.alert('(prodId: ' + prodId);

    this.product = products.find(prod => prod.id === prodId);
  }
}
