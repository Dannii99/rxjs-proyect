import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'Rxjs',
        loadChildren: () => import('./pages/rxjs/rxjs.component').then((m) => m.RxjsComponent)
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
