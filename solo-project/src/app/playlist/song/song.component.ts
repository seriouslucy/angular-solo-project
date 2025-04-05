import { Component, inject, input } from '@angular/core';
import { SongService } from '../../shared/services/song.service';

@Component({
  selector: 'app-song',
  imports: [],
  templateUrl: './song.component.html',
  styleUrl: './song.component.css'
})
export class SongComponent {
songService = inject(SongService)

}
