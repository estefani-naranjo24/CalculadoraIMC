import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImcService {
  private imcResults: { firstName: string, lastName: string, gender: string, bmi: number, status: string }[] = [];

  saveImcResult(firstName: string, lastName: string, gender: string, bmi: number, status: string): void {
    this.imcResults.push({ firstName, lastName, gender, bmi, status });
  }

  getImcResults() {
    return this.imcResults;
  }
}
