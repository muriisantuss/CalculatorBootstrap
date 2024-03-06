import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  displayValue: string = '';
  themes = ['redder', 'purpler', 'dark']; // Lista de temas
  currentTheme = this.themes[0]; // Tema padrão

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  toggleMode() {
    const currentIndex = this.themes.indexOf(this.currentTheme);
    const nextIndex = (currentIndex + 1) % this.themes.length;
    const nextTheme = this.themes[nextIndex];

    const html = this.el.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(html, 'class', nextTheme);

    this.currentTheme = nextTheme;
  }

  appendToDisplay(value: string = '') {
    if (+value >= 0) {
      this.displayValue += value;
    } else {
      const lastChar = this.displayValue.slice(-1);

      if (!['+', '-', '*', '%', '**', '/', '.'].includes(lastChar)) {
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
