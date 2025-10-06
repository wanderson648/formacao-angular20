import { Component } from '@angular/core';

@Component({
  selector: 'app-invalid-input',
  standalone: true,
  imports: [],
  template: `
    <input 
      type="text"
      placeholder="Digite algo..."
      [class.is-invalid]="hasError" 
      (input)="checkInput($event)" 
    />

    @if (hasError) {
      <p class="error-text">O campo não pode estar vazio</p>
    }
  `,
  styles: `
    input {
      padding: 8px;
      margin: 10px;
      border: 1px solid #ccc;
    }

    .is-invalid {
      border-color: #dc3545;
      box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
    }

    .error-text {
      color: #dc3545;
      font-size: 0.9em;
      margin-left: 10px;
    }
  `
})
export class InvalidInputComponent {
  hasError: boolean = false;

  checkInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.hasError = value.trim() === '';
  }
}
