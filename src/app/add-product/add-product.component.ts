import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['https://picsum.photos/200/300', Validators.required]
    });
  }

  addProduct(): void {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
      // Implement logic to add product
    }
  }
}
