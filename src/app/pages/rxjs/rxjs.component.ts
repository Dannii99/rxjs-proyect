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

  public obs!: Observable<any>;

  constructor(private _rxjsService:RxjsService) {}
  ngOnDestroy(): void {
    this._rxjsService.obs$.subscribe({
      next: (value) => {
        console.log('obs:: ', value);
        this.obs = value;
      }
    })
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
