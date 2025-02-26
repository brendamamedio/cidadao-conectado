import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteModel } from '../../models/note.model';
import { NotesService } from '../../services/note.service';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css'],
})
export class ComplaintComponent implements OnInit {
  notesContainer!: HTMLElement;
  noteInput!: HTMLTextAreaElement;
  addNoteBtn!: HTMLElement;
  searchInput!: HTMLInputElement;
  exportBtn!: HTMLElement;

  constructor(private router: Router, private notesService: NotesService) {}

  ngOnInit(): void {


    if (typeof document !== 'undefined') {
      this.notesContainer = document.querySelector("#notes-container")!;
      this.noteInput = document.querySelector("#note-content")!;
      this.addNoteBtn = document.querySelector(".add-note")!;
      this.searchInput = document.querySelector("#search-input")!;
      this.exportBtn = document.querySelector("#export-notes")!;

      this.addNoteBtn.addEventListener("click", () => this.addNote());
      this.searchInput.addEventListener("keyup", (e: KeyboardEvent) => {
        if (e.target instanceof HTMLInputElement) {
          this.searchNotes(e.target.value);
        }
      });
      this.noteInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          this.addNote();
        }
      });
      this.exportBtn.addEventListener("click", () => this.exportData());


      this.showNotes();
    }
  }

  redirectTo(route: string): void {
    this.router.navigate([route]);
  }

  showNotes() {
    this.cleanNotes();
    const notes = this.notesService.getNotes();
    notes.forEach((note: NoteModel) => {
      const noteElement = this.createNote(note.id, note.content, note.fixed);
      this.notesContainer.appendChild(noteElement);
    });
  }

  cleanNotes() {
    this.notesContainer.replaceChildren();
  }

  addNote() {
    const noteObjet = new NoteModel(
      this.notesService.generateId(),
      this.noteInput.value
    );
    const noteElement = this.createNote(noteObjet.id, noteObjet.content, noteObjet.fixed);
    this.notesContainer.appendChild(noteElement);
    const notes = this.notesService.getNotes();
    notes.push(noteObjet);
    this.notesService.saveNotes(notes);
    this.noteInput.value = '';
  }

  createNote(id: number, content: string, fixed: boolean) {
    const element = document.createElement("div");
    element.classList.add("note");

    const textarea = document.createElement("textarea");
    textarea.value = content;
    textarea.placeholder = "Adicione algum texto";
    element.appendChild(textarea);

    const pinIcon = document.createElement("i");
    pinIcon.classList.add("bi", "bi-pin");
    element.appendChild(pinIcon);

    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("bi", "bi-x-lg");
    element.appendChild(deleteIcon);

    const duplicateIcon = document.createElement("i");
    duplicateIcon.classList.add("bi", "bi-file-earmark-plus");
    element.appendChild(duplicateIcon);

    if (fixed) {
      element.classList.add("fixed");
    }

    
    element.querySelector("textarea")!.addEventListener("keyup", (e: any) => {
      const noteContent = e.target.value;
      this.updateNote(id, noteContent);
    });

    element.querySelector(".bi-pin")!.addEventListener("click", () => {
      this.toggleFixNote(id);
    });

    element.querySelector(".bi-x-lg")!.addEventListener("click", () => {
      this.deleteNote(id, element);
    });

    element.querySelector(".bi-file-earmark-plus")!.addEventListener("click", () => {
      this.copyNote(id);
    });

    return element;
  }

  toggleFixNote(id: number) {
    const notes = this.notesService.getNotes();
    const targetNote = notes.find((note: NoteModel) => note.id === id);
    if (targetNote) {
      targetNote.fixed = !targetNote.fixed;
      this.notesService.saveNotes(notes);
      this.showNotes();
    }
  }

  deleteNote(id: number, element: HTMLElement) {
    const notes = this.notesService.getNotes().filter((note: NoteModel) => note.id !== id);
    this.notesService.saveNotes(notes);
    this.notesContainer.removeChild(element);
  }

  copyNote(id: number) {
    const notes = this.notesService.getNotes();
    const targetNote = notes.find((note: NoteModel) => note.id === id);
    if (targetNote) {
      const noteObjet = new NoteModel(
        this.notesService.generateId(),
        targetNote.content,
        targetNote.fixed
      );
      const noteElement = this.createNote(noteObjet.id, noteObjet.content, noteObjet.fixed);
      this.notesContainer.appendChild(noteElement);
      notes.push(noteObjet);
      this.notesService.saveNotes(notes);
    }
  }

  updateNote(id: number, newContent: string) {
    const notes = this.notesService.getNotes();
    const targetNote = notes.find((note: NoteModel) => note.id === id);
    if (targetNote) {
      targetNote.content = newContent;
      this.notesService.saveNotes(notes);
    }
  }

  searchNotes(search: string) {
    const searchResults = this.notesService.getNotes().filter((note: NoteModel) => note.content.includes(search));
    this.cleanNotes();
    if (search !== "") {
      searchResults.forEach((note: NoteModel) => {
        const noteElement = this.createNote(note.id, note.content, note.fixed);
        this.notesContainer.appendChild(noteElement);
      });
    } else {
      this.showNotes();
    }
  }

  exportData() {
    const notes = this.notesService.getNotes();
    const csvString = [
      ["ID", "Conteúdo", "Fixado?"],
      ...notes.map((note: NoteModel) => [note.id, note.content, note.fixed]),
    ]
      .map((e: any) => e.join(","))
      .join("\n");

    const element = document.createElement("a");
    element.href = "data:text/csv;charset=utf-8," + encodeURI(csvString);
    element.target = "_blank";
    element.download = "notes.csv";
    element.click();
  }
}
