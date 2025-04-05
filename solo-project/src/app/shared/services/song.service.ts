import { Injectable, signal } from "@angular/core";
import { Song } from "../models/song.model";

@Injectable({
  providedIn: 'root'
})
export class SongService {

  songs = signal<Song[]>(
    [
    {title: 'Silver Springs', artist: 'Fleetwood Mac', album: 'Single', year: 1977},
    {title: 'Miss Misery', artist: 'Elliott Smith', album: 'Single', year: 1998},
    {title: 'Nude', artist: 'Radiohead', album: 'In Rainbows', year: 2007}
    ]);

}
