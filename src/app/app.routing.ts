import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PointListComponent } from "./point-list/point-list.component";
import { PointDetailComponent } from "./point-detail/point-detail.component";
import { NotFoundComponent } from "./not-found/not-found.component";


const appRoutes: Routes = <Routes>[
  {
    path: '',
    component: PointListComponent
  },
  {
    path: 'point/:id',
    component: PointDetailComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
