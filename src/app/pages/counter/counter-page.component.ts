import { Component } from '@angular/core';

@Component({
  template: `
    <h1>Counter {{ count }}</h1>
    <button (click)="increaseBy(1)">+1</button>
  `,
})
export class CounterPageComponent {
  count = 0; // Initialize the count variable to 0

  increment() {
    this.count++; // Increment the count by 1
  }

  decrement() {
    this.count--; // Decrement the count by 1
  }

  reset() {
    this.count = 0; // Reset the count to 0
  }

  increaseBy(value: number) {
    this.count += value;
  }
}
