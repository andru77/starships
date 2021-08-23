import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StarshipsComponent} from "./starships.component";
import {DetailComponent} from "./detail/detail.component";
import {PilotComponent} from "./pilot/pilot.component";

const routes: Routes = [
  {
    path: 'detail',
    component: DetailComponent,
  },
  {
    path: 'pilot-detail',
    component: PilotComponent,
  },
  {
    path: '',
    component: StarshipsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarshipsRoutingModule { }
