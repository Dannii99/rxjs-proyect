import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  public obs$: Observable<any> = new Observable((obs) => {
    obs.next(1);
    obs.next(2);
    obs.add();
    obs.complete()
  });
  
  constructor() { }
}
