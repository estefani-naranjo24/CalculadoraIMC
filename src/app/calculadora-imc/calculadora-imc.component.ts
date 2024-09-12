import { Component } from '@angular/core';
import { ImcService } from './imc.service';

@Component({
  selector: 'app-calculadora-imc',
  templateUrl: './calculadora-imc.component.html',
  styleUrls: ['./calculadora-imc.component.css']
})
export class CalculadoraImcComponent {

  constructor(private imcService: ImcService) {}

  calculateIMC(): void {
    const firstName = (document.getElementById('firstName') as HTMLInputElement).value;
    const lastName = (document.getElementById('lastName') as HTMLInputElement).value;
    const gender = (document.getElementById('gender') as HTMLSelectElement).value;
    const weightInput = (document.getElementById('weight') as HTMLInputElement).value;
    const heightInput = (document.getElementById('height') as HTMLInputElement).value;

    const weight = parseFloat(weightInput);
    const height = parseFloat(heightInput);

    if (firstName && lastName && gender && !isNaN(weight) && !isNaN(height) && weight > 0 && height > 0) {
      const bmi = weight / ((height / 100) ** 2);
      const result = document.getElementById('result');

      let status = '';

      if (bmi < 18.5) {
        status = 'Bajo peso';
      } else if (bmi < 25) {
        status = 'Peso normal';
      } else if (bmi < 30) {
        status = 'Sobrepeso';
      } else {
        status = 'Obesidad';
      }

      // Guardar el resultado usando el servicio
      this.imcService.saveImcResult(firstName, lastName, gender, bmi, status);

      if (result) {
        result.innerHTML = `${firstName} ${lastName}, tu IMC es: ${bmi.toFixed(2)} - ${status}`;
      }
    }
  }
}
