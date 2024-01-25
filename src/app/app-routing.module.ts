import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'order-history',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    children: [
      {
        path: '',
        loadChildren: () =>
        import('./features/authentication/authentication.module').then(m => m.AuthenticationModule)
      }
    ]
  },
  // {
  //   path: '**',
  //   component: Error404Component ,
  //   // pathMatch: 'full' 
  // },
  // Fallback when no prior routes is matched
  { path: '**', redirectTo: 'error404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
