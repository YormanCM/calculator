import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
    titulo = 'Aplicación Calculadora';
    operandoA: number = 1000;
    operandoB: number = 0;
    resultado: number = 0; 

    sumar():void{
      this.resultado = this.operandoA + this.operandoB;
    }

    restar():void{
      this.resultado = this.operandoA - this.operandoB;
    }
    
    multiplicar():void{
      this.resultado = this.operandoA * this.operandoB;
    }

    dividir():void{
      this.resultado = this.operandoA / this.operandoB;
    }
}
