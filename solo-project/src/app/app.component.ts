import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { PlaylistComponent } from "./playlist/playlist.component";
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, PlaylistComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'solo-project';
}
