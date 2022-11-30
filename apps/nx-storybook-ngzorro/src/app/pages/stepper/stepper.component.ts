import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent {
  @Input() count = 0;
  @Output() changeEvent = new EventEmitter();

  increment(): void {
    this.count++;
    this.changeEvent.emit(this.count);
  }

  decrement(): void {
    this.count--;
    this.changeEvent.emit(this.count);
  }
}
