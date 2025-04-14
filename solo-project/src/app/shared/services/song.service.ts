import { Injectable, signal } from '@angular/core';
import { Song } from '../models/song.model';

@Injectable({
  providedIn: 'root',
})
export class SongService {
  isEditing = signal(false);
  songToEdit = signal<Song | null>(null);

  songs = signal<Song[]>([
    {
      title: 'Miss Misery',
      artist: 'Elliott Smith',
      album: 'Single',
      year: 1998,
      id: '2025-04-07T12:00:00.000Z',
    },
    {
      title: 'Silver Springs',
      artist: 'Fleetwood Mac',
      album: 'Single',
      year: 1977,
      id: '2025-04-07T12:00:01.000Z',
    },
    {
      title: 'Nude',
      artist: 'Radiohead',
      album: 'In Rainbows',
      year: 2007,
      id: '2025-04-07T12:00:02.000Z',
    },
    {
      title: 'Bloodstream',
      artist: 'Stateless',
      album: 'Stateless',
      year: 2007,
      id: '2025-04-07T12:00:03.000Z',
    },
    {
      title: 'Traces',
      artist: 'Red Vox',
      album: 'Afterthoughts',
      year: 2023,
      id: '2025-04-07T12:00:04.000Z',
    },
    {
      title: 'Stylo',
      artist: 'Gorillaz',
      album: 'Plastic Beach',
      year: 2010,
      id: '2025-04-07T12:00:05.000Z',
    },
  ]);

  getSongs() {
    return this.songs;
  }

  removeSong(t: string) {
    console.log('song removed');
    this.songs.update((s) => s.filter((sg) => sg.title !== t));
  }

  addSong(t: string, a: string, ab: string, y: number, i: string) {
    console.log('song added');
    this.songs.update((s) => [
      ...s,
      { title: t, artist: a, album: ab, year: y, id: i },
    ]);
  }

  editSong(
    title: string,
    artist: string,
    album: string,
    year: number,
    id: string
  ) {
    this.songToEdit.set({
      title: title,
      artist: artist,
      album: album,
      year: year,
      id: id,
    });
    console.log(this.songs());
    this.songs.update((songs: Song[]): any => {
      return songs.map((s) => {
        if (s.id === this.songToEdit()!.id) {
          return this.songToEdit()!;
        }
return s
      });
    })
    console.log(this.songs());
  }
}
