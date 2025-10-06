import { Component } from '@angular/core';

@Component({
  selector: 'app-square-popup',
  standalone: true,
  imports: [],
  template: `
    <div class="quadrado" [style.left.%]="posicaoHorizaontal"></div>
    <div class="popup" [style.top]="alturaPopup + 'vh' " [style.right]="'10px'">
      Popup dinamico
    </div>

    <button (click)="moverQuadrado()">Mover Quadrado</button>
    <button (click)="togglePopup()">Toggle Popup</button>
  
  `,
  styles: `
    .quadrado {
      width: 50px;
      height: 50px;
      background-color: purple;
      position: relative;
      transition: left 0.5s ease;
      margin-top: 20px;
    }

    .popup {
      position: fixed;
      background-color: lightcoral;
      padding: 15px;
      border-radius: 8px;
      transform: translateY(-100%);
      transition: transform 0.3s ease-out, top 0.3s ease-out;
    }
  
  `,
})
export class SquarePopupComponent {
  posicaoHorizaontal: number = 0;
  alturaPopup: number = -10;

  moverQuadrado() {
    this.posicaoHorizaontal = (this.posicaoHorizaontal + 10) % 100;
  }

  togglePopup() {
    this.alturaPopup = this.alturaPopup === -10 ? 10 : -10;
  }
}
