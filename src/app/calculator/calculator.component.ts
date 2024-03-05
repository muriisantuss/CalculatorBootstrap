import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  displayValue: string = '';

  appendToDisplay(value: string = '') {
    this.displayValue += value;
  }

  clearDisplay() {
    this.displayValue = '';
  }

  calculateOperations() {
    this.displayValue = eval(this.displayValue).toString();

    try {
    } catch (Error) {
      this.displayValue = 'Error';
    }
  }
}
