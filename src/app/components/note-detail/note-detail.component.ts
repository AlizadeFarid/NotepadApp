import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Note } from '../shared/note.model';
import { NotesService } from '../shared/notes.service';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailComponent implements OnInit {

  note!: Note;
  noteId!:number;
  new!:boolean;

  constructor(private noteService: NotesService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.activateRoute.params.subscribe((params:any)=>{
      this.note = new Note();
      if(params.id){
        this.note = this.noteService.get(params.id);
        this.noteId = params.id;
        this.new = false;
      }
      else{
        this.new = true;
      }
    })
   
  }

  onSubmit(form:NgForm){
    if(this.new){
      this.noteService.addNote(form.value);
      this.router.navigateByUrl('/'); 
    }
  }
  
  cancel(){
    this.router.navigateByUrl('/');
  }

}
