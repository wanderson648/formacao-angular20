import { Component } from '@angular/core';
import { TwoWayDataBindingComponent } from "./two-way-data-binding/two-way-data-binding.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TwoWayDataBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
