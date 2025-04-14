import { Component, effect, inject, input } from '@angular/core';
import { SongService } from '../../shared/services/song.service';
import { Song } from '../../shared/models/song.model';

@Component({
  selector: 'app-song',
  imports: [],
  templateUrl: './song.component.html',
  styleUrl: './song.component.css'
})
export class SongComponent {
songService = inject(SongService)
songs = this.songService.songs
data = input<Song>()
songToEdit = this.songService.songToEdit
isEditing = this.songService.isEditing

removeHandler() {
  console.log('clicked')
  this.songService.removeSong(this.data()!.title)
}

editHandler() {
  console.log(this.data()?.id)
  window.scrollTo({top:document.body.scrollHeight, behavior: 'smooth'})
  this.songToEdit.set(this.data()!)
  
  console.log(this.songToEdit())

  this.isEditing.set(true);



}
}
