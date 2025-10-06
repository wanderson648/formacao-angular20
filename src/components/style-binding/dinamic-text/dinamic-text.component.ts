import { Component } from '@angular/core';

@Component({
  selector: 'app-dinamic-text',
  standalone: true,
  imports: [],
  template: `
    <p [style.font-size.rem]="tamanhoTextoRem">Este texto tem um tamanho dinâmico</p>


    <button (click)="aumentarTamanho()">Plus (+)</button>
    <button (click)="diminuirTamanho()">Minus (-)</button>
  `,
  styles: `
    button {
      cursor: pointer;
    }
  `,
})
export class DinamicTextComponent {
  tamanhoTextoRem: number = 1.2;

  aumentarTamanho() {
    this.tamanhoTextoRem = Math.min(this.tamanhoTextoRem + 0.2, 2.0);
  }

  diminuirTamanho() {
    this.tamanhoTextoRem = Math.max(this.tamanhoTextoRem - 0.2, 0.8);
  }
}
