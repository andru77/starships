import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {StarshipsService} from "../../../@core/services/starships.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  position = '';
  ship: any;
  constructor(private router: Router, private startShipS: StarshipsService) {
    this.position = this.router.getCurrentNavigation()?.extras.state?.position || '';
  }

  ngOnInit(): void {
    this.ship = this.startShipS.getStarShip(this.position);
    !this.ship && this.goBack();
  }

  goBack() {
     this.router.navigate(['..']);
  }

}
