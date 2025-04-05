import { Component, inject, input } from '@angular/core';
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

removeHandler() {
  console.log('clicked')
  this.songService.removeSong(this.data()!.title)
}

editHandler() {
  console.log('clicked')
}
}
