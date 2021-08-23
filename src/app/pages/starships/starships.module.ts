import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarshipsRoutingModule } from './starships-routing.module';
import { StarshipsComponent } from './starships.component';
import {GenericCardComponent } from '../../shared/g-card/genericCard.component';
import { DetailComponent } from './detail/detail.component';
import { PilotComponent } from './pilot/pilot.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    StarshipsComponent,
    DetailComponent,
    PilotComponent
  ],
  imports: [
    CommonModule,
    StarshipsRoutingModule,
    SharedModule
  ]
})
export class StarshipsModule { }
