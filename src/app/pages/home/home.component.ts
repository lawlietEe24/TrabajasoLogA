import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule],
  selector: 'app-home',
  template: `
    <mat-toolbar color="accent">
      <span>Home</span>
      <div>
        <button mat-flat-button (click)="goToProducts()">View Products</button>
        <button mat-flat-button (click)="logOut()">Log out</button>
      </div>
    </mat-toolbar>
  `,
  styles: [
    `
      mat-toolbar {
        display: flex;
        justify-content: space-between;
      }
      .mat-toolbar .mat-button {
        margin-left: 8px;
      }
    `,
  ],
})
export default class HomeComponent {
  private _router = inject(Router);
  private authservice = inject(AuthService);

  async logOut(): Promise<void> {
    try {
      await this.authservice.logOut();
      this._router.navigateByUrl('/auth/log-in');
    } catch (error) {
      console.log(error);
    }
  }

  goToProducts(): void {
    this._router.navigateByUrl('/products');
  }
}
