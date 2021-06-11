import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./atomic-design/pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./atomic-design/pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'os',
    loadChildren: () => import('./os/os.module').then(m => m.OsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
