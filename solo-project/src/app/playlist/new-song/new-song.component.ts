import { AfterViewChecked, Component, effect, ElementRef, inject, signal, ViewChild, viewChild } from '@angular/core';
import { Song } from '../../shared/models/song.model';
import { SongService } from '../../shared/services/song.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-song',
  imports: [FormsModule],
  templateUrl: './new-song.component.html',
  styleUrl: './new-song.component.css',
})
export class NewSongComponent {
  songService = inject(SongService);
  songToEdit = this.songService.songToEdit;
  isEditing = this.songService.isEditing;
 form = viewChild<ElementRef<HTMLFormElement>>('form')
  year = null

  songs = signal<Song[]>;

  constructor() {
    effect(() => {
      let song = this.songToEdit();
      console.log(song);
    });
  }


  formReset() {
    this.songToEdit.set(null)
    this.form()!.nativeElement.reset()

  }

  songButtonHandler(title: string, artist: string, album: string, year: string) {
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
    this.formReset()
    } else {
      this.songService.editSong(
        title,
        artist,
        album,
        year,
        this.songToEdit()!.id
      );
      this.formReset()
      this.isEditing.set(false);


    }
  }
}
