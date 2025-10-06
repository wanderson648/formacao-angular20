import { Component } from '@angular/core';
import { AcitveButtonComponent } from "../components/style-binding/acitve-button/acitve-button.component";
import { InvalidInputComponent } from "../components/style-binding/invalid-input/invalid-input.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InvalidInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
