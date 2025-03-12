import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScheduleService, Schedule } from '../../services/schedule.service';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.css']
})
export class SchedulingComponent {
  form: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;
  availableTimes: string[] = [
    '08:00 - 08:30',
    '08:30 - 09:00',
    '09:00 - 09:30',
    '10:00 - 10:30',
    '10:30 - 11:00',
    '11:00 - 11:30',
    '11:30 - 12:00',
    '14:00 - 14:30',
    '14:30 - 15:00',
    '15:00 - 15:30',
    '15:30 - 16:00',
    '16:00 - 16:30'
  ];
  disabledTimes: string[] = [];
  horarioSelecionado: string | null = null;

  constructor(
    private scheduleService: ScheduleService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      telefone: ['', [Validators.required, Validators.pattern(/^\(\d{2}\) \d{5}-\d{4}$/)]],
      data: ['', Validators.required],
      hora: ['', Validators.required],
      motivo: ['', Validators.required]
    });

    // Observa mudanças na data para buscar horários ocupados
    this.form.get('data')?.valueChanges.subscribe((date) => {
      if (date) {
        this.scheduleService.getScheduledTimes(date).subscribe(
          (scheduledTimes) => {
            this.disabledTimes = scheduledTimes;
          },
          (error) => {
            console.error('Erro ao buscar horários ocupados:', error);
          }
        );
      }
    });
  }

  selecionarHorario(time: string): void {
    this.horarioSelecionado = time;
    this.form.get('hora')?.setValue(time);
  }

  isTimeDisabled(time: string): boolean {
    return this.disabledTimes.includes(time);
  }

  onSubmit(): void {
    if (this.form.valid) {
      const schedule: Schedule = this.form.value;

      this.scheduleService.createSchedule(schedule).subscribe(
        (response) => {
          this.successMessage = 'Agendamento realizado com sucesso!';
          this.errorMessage = null;
          this.form.reset();
          this.horarioSelecionado = null;
        },
        (error) => {
          this.errorMessage = 'Erro ao realizar o agendamento. Tente novamente.';
          this.successMessage = null;
        }
      );
    } else {
      this.errorMessage = 'Por favor, preencha todos os campos corretamente.';
      this.successMessage = null;
    }
  }
}
