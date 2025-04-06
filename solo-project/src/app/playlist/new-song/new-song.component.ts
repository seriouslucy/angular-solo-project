import { Component, inject, signal } from '@angular/core';
import { Song } from '../../shared/models/song.model';
import { SongService } from '../../shared/services/song.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-song',
  imports: [FormsModule],
  templateUrl: './new-song.component.html',
  styleUrl: './new-song.component.css'
})
export class NewSongComponent {
  
  songService = inject(SongService)
  songs = signal<Song[]>
  title = '';
  artist = '';
  album = '';
  year = 0;

  addSongHandler() {
    console.log('connected')
    this.songService.addSong(this.title, this.artist, this.album, this.year)
    this.title = '';
    this.artist = '';
    this.album = '';
    this.year = 0;
  }
}
