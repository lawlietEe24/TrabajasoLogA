import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

@Component({
  standalone: true,
  imports: [MatCardModule],
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products: Product[] = [
    { id: 1, name: 'Product 1', description: 'Description of Product 1', imageUrl: 'https://picsum.photos/200/300' },
    { id: 2, name: 'Product 2', description: 'Description of Product 2', imageUrl: 'https://picsum.photos/200/300' },
    // Agrega más productos según sea necesario
  ];

  removeProduct(id: number): void {
    this.products = this.products.filter(product => product.id !== id);
  }
}
