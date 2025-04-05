import { Injectable, signal } from "@angular/core";
import { Song } from "../models/song.model";

@Injectable({
  providedIn: 'root'
})
export class SongService {

  songs = signal<Song[]>(
    [
    {title: 'Miss Misery', artist: 'Elliott Smith', album: 'Single', year: 1998},
    {title: 'Silver Springs', artist: 'Fleetwood Mac', album: 'Single', year: 1977},
    {title: 'Nude', artist: 'Radiohead', album: 'In Rainbows', year: 2007},
    {title: 'Bloodstream', artist: 'Stateless', album: 'Stateless', year: 2007},
    {title: 'Traces', artist: 'Red Vox', album: 'Afterthoughts', year: 2023},
    {title: 'Stylo', artist: 'Gorillaz', album: 'Plastic Beach', year: 2010}
    ]);

    getSongs() {
      return this.songs
    }

    removeSong(t: string) {
      console.log('song removed')
      this.songs.update(s => s.filter(sg => sg.title !== t))
    }

    addSong(t: string, a: string, ab: string, y: number ) {
    console.log('song added')
    this.songs.update(s => [...s, {title: t, artist: a, album: ab, year: y}])
  }

}
