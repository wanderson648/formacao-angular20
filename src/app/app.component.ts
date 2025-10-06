import { Component } from '@angular/core';
import { PropertyBindingComponent } from "./property-binding/property-binding.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PropertyBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
