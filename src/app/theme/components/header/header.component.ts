import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import { Location } from '@angular/common'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showBackButton = false;

  constructor(private router: Router, private location: Location){
      router.events.subscribe((val) => {
        if (val instanceof  NavigationEnd && val.url !== "/starships") {
          this.showBackButton = true;
        }
        if (val instanceof  NavigationEnd &&  (val.url === "/starships" || val.url === '/')) {
          this.showBackButton = false;
        }
      });
  }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }
}
