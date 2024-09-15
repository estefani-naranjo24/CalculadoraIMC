import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImcService {
  private imcResults: { firstName: string, lastName: string, gender: string, bmi: number, status: string, dietaRecomendada: string }[] = [];

  saveImcResult(firstName: string, lastName: string, gender: string, bmi: number, status: string, dietaRecomendada: string): void {
    this.imcResults.push({ firstName, lastName, gender, bmi, status, dietaRecomendada });
  }

  getImcResults() {
    return this.imcResults;
  }
}
