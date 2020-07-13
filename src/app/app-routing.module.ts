import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'admin-events',
    loadChildren: () => import('./events/admin-events/admin-events.module').then( m => m.AdminEventsPageModule)
  },
  {
    path: 'user-events',
    loadChildren: () => import('./events/user-events/user-events.module').then( m => m.UserEventsPageModule)
  },
  {
    path: 'new-event',
    loadChildren: () => import('./events/new-event/new-event.module').then( m => m.NewEventPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
