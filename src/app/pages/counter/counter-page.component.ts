import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styles: `
  button {
    padding: 10px 20px;
    margin: 5px;
    font-size: 16px;

  }`,
})
export class CounterPageComponent {
  count = 0;
  counterSignal = signal(0);

  increment() {
    this.count++;
    this.counterSignal.update((prev) => prev + 1);
  }

  decrement() {
    this.count--;
    this.counterSignal.update((prev) => prev - 1);
  }

  reset() {
    this.count = 0;
    this.counterSignal.set(0);
  }

  increaseBy(value: number) {
    this.count += value;
  }
}
