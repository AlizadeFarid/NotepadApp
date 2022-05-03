import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { NoteDetailComponent } from './components/note-detail/note-detail.component';
import { NotesComponent } from './components/notes/notes.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
     { path:'', component: NotesComponent},
     { path:'new', component: NoteDetailComponent},
     { path:':id', component: NoteDetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
