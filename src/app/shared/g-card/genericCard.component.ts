import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-generic-card',
  templateUrl: './genericCard.component.html',
  styleUrls: ['./genericCard.component.scss']
})
export class GenericCardComponent implements OnInit {
  @Input() content: any;
  @Input() position: string | undefined;
  @Input() type: string | undefined;
  @Input() pilot: string | undefined;
  pilotState: object | undefined;
  constructor() { }

  ngOnInit(): void {
     this.pilotState = {
       starShip: this.position,
       pilot: this.pilot
     }
  }

}
