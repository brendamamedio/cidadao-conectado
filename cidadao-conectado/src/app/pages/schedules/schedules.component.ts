import { Component, OnInit } from '@angular/core';
import { ScheduleService, Schedule } from '../../services/schedule.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit {
  schedules: Schedule[] = [];
  errorMessage: string | null = null;

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit(): void {
    this.loadSchedules();
  }

  loadSchedules(): void {
    // Se você quiser buscar todos os agendamentos, ajuste o método no serviço
    this.scheduleService.getScheduledTimes('data-especifica').subscribe(
      (data: string[]) => {
        // Aqui você pode mapear os horários para o formato desejado
        this.schedules = data.map(time => ({ nome: '', telefone: '', data: 'data-especifica', hora: time, motivo: '' }));
      },
      (error: HttpErrorResponse) => {
        this.errorMessage = 'Erro ao carregar os agendamentos. Tente novamente mais tarde.';
        console.error('Erro ao carregar agendamentos:', error.message);
      }
    );
  }
}
