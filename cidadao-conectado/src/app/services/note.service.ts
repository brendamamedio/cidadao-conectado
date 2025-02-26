import { Injectable } from '@angular/core';
import { NoteModel } from '../models/note.model';


@Injectable({
  providedIn: 'root',
})
export class NotesService {
  constructor() {}

  // Obter todas as notas do localStorage
  getNotes(): NoteModel[] {
    const notes = JSON.parse(localStorage.getItem('notes') || '[]');
    return notes.sort((a: NoteModel, b: NoteModel) => (a.fixed > b.fixed ? -1 : 1));
  }

  // Salvar as notas no localStorage
  saveNotes(notes: NoteModel[]): void {
    localStorage.setItem('notes', JSON.stringify(notes));
  }

  // Gerar um ID único para a nota
  generateId(): number {
    return Math.floor(Math.random() * 5000);
  }
}
