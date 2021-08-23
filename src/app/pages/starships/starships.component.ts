import { Component, OnInit } from '@angular/core';
import {StarshipsService} from "../../@core/services/starships.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {
  starShips: any[] = [];
  constructor(private starShipsS: StarshipsService, private router: Router) { }

  ngOnInit(): void {
    this.loadShips();
  }

  async loadShips() {
    this.starShipsS.data.subscribe(r => {
      this.starShips.push(...r);
    })
    this.starShips = await this.starShipsS.getStarships().then();
  }

}
