import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  displayValue: string = '';

  appendToDisplay(value: string = '') {
    if (+value >= 0) {
      this.displayValue += value;
    } else {
      const lastChar = this.displayValue.slice(-1);

      if (!['+', '-', '*', '%', '**'].includes(lastChar)) {
        // Adiciona apenas se o último caractere não for um operador
        this.displayValue += value;
      }
    }
  }

  clearDisplay() {
    this.displayValue = '';
  }

  calculateOperations() {
    try {
      const result = eval(this.displayValue);

      if (!isFinite(result)) {
        // Tratar o caso de resultado infinito (divisão por zero)
        this.displayValue = 'Division by zero not allowed';
      } else {
        // Exibir o resultado normalmente
        this.displayValue = result.toLocaleString('pt-BR');
      }
    } catch (error) {
      this.displayValue = 'Calculation error!';
    }
  }
}
