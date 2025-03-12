import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Schedule {
  nome: string;
  telefone: string;
  data: string; // Formato: YYYY-MM-DD
  hora: string; // Formato: HH:MM
  motivo: string;
}

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private apiUrl = 'http://sua-api.com/schedules'; // URL da sua API

  constructor(private http: HttpClient) { }

  // Método para criar um novo agendamento
  createSchedule(schedule: Schedule): Observable<Schedule> {
    return this.http.post<Schedule>(this.apiUrl, schedule);
  }

  // Método para buscar todos os agendamentos
  getSchedules(): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(this.apiUrl);
  }

  // Método para buscar horários já agendados para um dia específico
  getScheduledTimes(date: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/horarios?data=${date}`);
  }
}
