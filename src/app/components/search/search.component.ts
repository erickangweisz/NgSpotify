import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify/spotify.service';
import { Artist } from '../../models/artist/artist';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  providers: [SpotifyService ]
})
export class SearchComponent {

  searchStr:string;
  searchRes: Artist[];

  constructor(private _spotifyService:SpotifyService) {}

  searchMusic() {
    this._spotifyService.searchMusic(this.searchStr)
      .subscribe(res => {
        this.searchRes = res.artists.items;
      })
  }

}