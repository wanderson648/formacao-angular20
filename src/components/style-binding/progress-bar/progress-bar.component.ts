import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent {
  progresso: number = 0;


  aumentarProgresso() {
    this.progresso = Math.min(this.progresso + 30, 300);
  }

  diminuirProgresso() {
    this.progresso = Math.min(this.progresso - 30, 300);
  }
}
