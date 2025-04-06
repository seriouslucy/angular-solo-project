import { Component, inject, input } from '@angular/core';
import { SongService } from '../shared/services/song.service';
import { SongComponent } from './song/song.component';
import { NewSongComponent } from "./new-song/new-song.component";



@Component({
  selector: 'app-playlist',
  imports: [SongComponent, NewSongComponent],
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.css'
})
export class PlaylistComponent {
  songService = inject(SongService)
  songs = this.songService.getSongs()
  user = 'Lucy';

}
