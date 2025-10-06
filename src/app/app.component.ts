import { Component } from '@angular/core';
import { TwoWayDataBindingComponent } from "./two-way-data-binding/two-way-data-binding.component";
import { DinamicTextComponent } from "../components/style-binding/dinamic-text/dinamic-text.component";
import { ProgressBarComponent } from "../components/style-binding/progress-bar/progress-bar.component";
import { SquarePopupComponent } from "../components/style-binding/square-popup/square-popup.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SquarePopupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
