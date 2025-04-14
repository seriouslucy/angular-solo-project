import { AfterViewChecked, Component, effect, ElementRef, inject, signal, viewChild } from '@angular/core';
import { Song } from '../../shared/models/song.model';
import { SongService } from '../../shared/services/song.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-song',
  imports: [FormsModule],
  templateUrl: './new-song.component.html',
  styleUrl: './new-song.component.css',
})
export class NewSongComponent {
  songService = inject(SongService);
  form = viewChild<ElementRef<HTMLFormElement>>('form')
  songToEdit = this.songService.songToEdit;
  isEditing = this.songService.isEditing;

  songs = signal<Song[]>;

  constructor() {
    effect(() => {
      let song = this.songToEdit();
      console.log(song);
    });
  }

  songButtonHandler(title: string, artist: string, album: string, year: number) {
    if (!this.isEditing()) {
      console.log('connected');
      let id = String(new Date());

      this.songService.addSong(
        title,
        artist,
        album,
        year,
        id
      );
     this.form()!.nativeElement.reset()
    } else {
      this.songService.editSong(
        title,
        artist,
        album,
        year,
        this.songToEdit()!.id
      );
    }
    this.isEditing.set(false)
    this.form()!.nativeElement.reset()
  }
}
