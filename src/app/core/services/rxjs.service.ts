import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, Observer, of, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

    /* **********************************************************
    ********************************************************
    **********************
  */
  private obs$: Observable<number> = new Observable((obs) => {
    obs.next(1);
    obs.next(2);
    obs.complete();
  });

    /* **********************************************************
    ********************************************************
    **********************
  */

  private obsve!:string;

  private obsve$: Observer<any> = {
      next: val => {
        console.log('Observer:', val)
        this.obsve = val;
      },
      error: err => console.error('Observer error:', err),
      complete: () => console.log('Observer: completado')
  }

    /* **********************************************************
    ********************************************************
    **********************
  */

  private subject$: Subject<number> = new Subject<number>

  /* **********************************************************
    ********************************************************
    **********************
  */
  private behaviorSubject$ = new BehaviorSubject<string>('initial')

  

/* **********************************************************
    ********************************************************
    **********************
  */


  private replaySubject$ = new ReplaySubject<string>(2) //almacenar los 2 ultimos digitos


/* **********************************************************
    ********************************************************
    **********************
  */


  private async$ = new AsyncSubject<number>()

/* **********************************************************
    ********************************************************
    **********************
  */


  getObservable(): Observable<number> {
    return this.obs$;
  }

  getObserver(): string {
    of('x','y','z').subscribe(this.obsve$);
    return this.obsve;
  }

  setSubjet(value:number): void {
    this.subject$.next(value);
  }

  getSubjet(): Subject<number> {
    return this.subject$;
  }

  setBehaviorSubject(value: string): void {
    this.behaviorSubject$.next(value);
  }
  
  getBehaviorSubject(): Observable<string> {
    return this.behaviorSubject$.asObservable();
  }

  setReplaySubject(value: string): void {
    this.replaySubject$.next(value);
  }
  
  getReplaySubject(): Observable<string> {
    return this.replaySubject$.asObservable();
  }

  setAsync(value: number): void {
    this.async$.next(value);
  }
  
  getAsync(): Observable<number> {
    return this.async$.asObservable();
  }

  completetAsync(): void {
    this.async$.complete();
  }



}
