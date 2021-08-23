import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {StarshipsService} from "../../../@core/services/starships.service";

@Component({
  selector: 'app-pilot',
  templateUrl: './pilot.component.html',
  styleUrls: ['./pilot.component.scss']
})
export class PilotComponent implements OnInit {
  starShip: ''
  pilot = '';
  ship: any;
  pilotDetail: any;

  constructor(private router: Router, private startShipS: StarshipsService) {
    this.starShip = this.router.getCurrentNavigation()?.extras.state?.starShip;
    this.pilot = this.router.getCurrentNavigation()?.extras.state?.pilot;
    !this.pilot && this.goBack();
  }

  goBack() {
    this.router.navigate(['..']);
  }

  ngOnInit(): void {
    this.ship = this.startShipS.getStarShip(this.starShip);
    this.pilotDetail  = this.ship.pilots[+this.pilot];
  }
}
