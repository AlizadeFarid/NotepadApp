import { Injectable } from '@angular/core';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notes: Note[] = new Array<Note>();

  constructor() { }

  getAllNotes() {
    return this.notes;
  }

  get(id: number) {
    return this.notes[id];
  }

  getNote(note: Note) {
    return this.notes.indexOf(note);
  }

  addNote(note: Note) {
    let newLength = this.notes.push(note);
    let index = newLength - 1;
    return index;
  }

  delete(id: number) {
    this.notes.splice(id, 1);
  }
}
