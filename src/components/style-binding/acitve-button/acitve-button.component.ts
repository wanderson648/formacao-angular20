import { Component } from '@angular/core';

@Component({
  selector: 'app-acitve-button',
  standalone: true,
  imports: [],
  template: `
    <button [class.active]="isActive" (click)="toggleActive()">
      Botao de Status ({{ isActive ? 'Ativo' : 'Inativo'}})
    </button>
  `,
  styles: `
    button {
      padding: 10px 15px;
      margin: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      cursor: pointer;
      background-color: #f0f0f0;
      color: #333;
      transition: background-color 0.2s ease;
    }

    .active {
      background-color: #007bff;
      color: white;
      border-color: #007bff;
      font-weight: bold;
    }
  `
})
export class AcitveButtonComponent {
  isActive: boolean = false;

  toggleActive() {
    this.isActive = !this.isActive;
  }
}
