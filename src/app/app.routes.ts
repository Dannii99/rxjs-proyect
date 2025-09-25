import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'rxjs',
        title: 'Rxjs',
        loadComponent: () => import('./pages/rxjs/rxjs.component').then((m) => m.RxjsComponent)
    },
    {
        path: '',
        redirectTo: '/rxjs',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/rxjs',
        pathMatch: 'full'
    }
];
