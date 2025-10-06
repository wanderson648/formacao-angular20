import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  imports: [],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css'
})
export class PropertyBindingComponent {
  texto = 'Texto inicial'
  inputType = "password"
  inputDisabled = false

  activeButton() {
    this.inputDisabled = !this.inputDisabled;
  }

  logarText() {
    console.log(this.texto);
  }

  onInputChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.texto = value;
  }
}
