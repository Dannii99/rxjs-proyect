import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RxjsService } from '../../core/services/rxjs.service';


@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss'
})
export class RxjsComponent implements OnInit, OnDestroy {

  public obs: any[] = [];
  public obsve: any[] = [];
  public subjet: any[] = [];
  public behaviorSubject: any[] = [];
  public replaySubject: any[] = [];

  constructor(private _rxjsService: RxjsService) {}

  ngOnDestroy(): void {
  
  }

  ngOnInit(): void {

    this._rxjsService.getObservable().subscribe({
      next: (value: number) => {
        this.obs.push(value);
        console.log('Observable:', value)
      },
      complete: () => {
        console.log('Complete')
      }
    });

    
    /* ============================================== */


    this.obsve.push(this._rxjsService.getObserver());
    console.log('obsve::', this.obsve);

    this._rxjsService.getSubjet().subscribe({
      next: (value) => {
        console.log('subjet ', value);
        this.subjet.push(value)
      },
    })
    this._rxjsService.setSubjet(3);
    this._rxjsService.setSubjet(4);

    /* ============================================== */

    this._rxjsService.getBehaviorSubject().subscribe({
      next: (value) => {
        console.log('behaviorSubject ', value);
        this.behaviorSubject.push(value);
      },
    })

    this._rxjsService.setBehaviorSubject('Complement');
    this._rxjsService.setBehaviorSubject('Finish');
    
    /* ============================================== */

    this._rxjsService.setReplaySubject('caso 1');
    this._rxjsService.setReplaySubject('caso 2');
    this._rxjsService.setReplaySubject('caso 3');
    this._rxjsService.setReplaySubject('caso 4');
    this._rxjsService.setReplaySubject('caso 5');

    this._rxjsService.getReplaySubject().subscribe({
      next: (value) => {
        console.log('replaySubject ', value);
        this.replaySubject.push(value);
      },complete:() => {

      }
    })

    /* ============================================== */

    this._rxjsService.getAsync().subscribe(val => console.log('Sub1:', val));

    this._rxjsService.setAsync(10);
    this._rxjsService.setAsync(20);

    this._rxjsService.getAsync().subscribe(val => console.log('Sub2:', val));

    this._rxjsService.setAsync(30);
    this._rxjsService.completetAsync();

    /* ============================================== */

  }

}
