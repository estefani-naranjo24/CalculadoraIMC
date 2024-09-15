import { Component } from '@angular/core';
import { ImcService } from './imc.service';

@Component({
  selector: 'app-calculadora-imc',
  templateUrl: './calculadora-imc.component.html',
  styleUrls: ['./calculadora-imc.component.css']
})
export class CalculadoraImcComponent {
  result: string = '';
  dietaRecomendada: string | null = null;

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
        this.dietaRecomendada = 'Aumentar la ingesta de calorías con alimentos ricos en nutrientes. Considera incluir más proteínas, carbohidratos y grasas saludables en tu dieta.';
      } else if (bmi < 25) {
        status = 'Peso normal';
        this.dietaRecomendada = 'Mantén una dieta equilibrada con una combinación adecuada de carbohidratos, proteínas y grasas saludables. Continúa con una dieta equilibrada y ejercicio regular.';
      } else if (bmi < 30) {
        status = 'Sobrepeso';
        this.dietaRecomendada = 'Considera reducir la ingesta de calorías y aumentar la actividad física. Incluye más frutas, verduras y proteínas magras en tu dieta y limita el consumo de azúcares y grasas.';
      } else {
        status = 'Obesidad';
        this.dietaRecomendada = 'Es importante consultar a un profesional de la salud para un plan de alimentación específico. Puede ser necesario reducir significativamente la ingesta de calorías y hacer cambios en la dieta y el estilo de vida.';
      }

      // Guardar el resultado usando el servicio
      this.imcService.saveImcResult(firstName, lastName, gender, bmi, status, this.dietaRecomendada);

      if (result) {
        result.innerHTML = `${firstName} ${lastName}, tu IMC es: ${bmi.toFixed(2)} - ${status} ${this.dietaRecomendada}`;
      }
    }
  }
}
