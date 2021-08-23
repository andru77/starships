import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {
  starShips: any[] = [];
  data = new BehaviorSubject<any[]>([]);

  constructor(private apiS: ApiService) { }

   async getStarships() {
     if (this.starShips.length > 0) {
       return this.starShips;  // return from cache
     } else {
       const res = await this.apiS.get('starships/').toPromise();
       await this.buildStarShips(res.results);
       let next = res.next !== null ? res.next.split('/api/')[1] : null;
       while (next !== null) {
         const response = await this.apiS.get(next).toPromise();
         await this.buildStarShips(response.results);
         next = response.next !== null ? response.next.split('/api/')[1] : null;
       }
     }
     return this.starShips;
   }

  buildStarShips (payload: any[]) {
     const ships = payload.map(async ship => {
        if (ship.pilots.length > 0){
          const promises :any[] = [];
          ship.pilots.forEach((pilot: string) => {
             let path = pilot.split('/api/')[1];
             let p = this.apiS.get(path).toPromise();
             promises.push(p);
          });
          ship.pilots = await Promise.all(promises);
        }
        return ship;
     });
     return  Promise.all(ships).then(r => {
       this.starShips.push(...r);
       this.data.next(r);
     });
  }

  getStarShip(position: string) {
    if (this.starShips.length > 0  && position) {
       return this.starShips[+position];
    }
  }
}

