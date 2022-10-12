import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button *ngIf="!value" nbButton>{{ value }}</button>
    <button *ngIf="value === 'X'" nbButton hero status="success">
      {{ value }}
    </button>
    <button *ngIf="value === 'O'" nbButton hero status="info">
      {{ value }}
    </button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }'],
})
export class SquareComponent {
  @Input() value: 'X' | 'O' | '' = '';
}
