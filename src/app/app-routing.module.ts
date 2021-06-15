import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./atomic-design/pages/home/home.module').then(m => m.HomeModule)},
  {path: 'home', loadChildren: () => import('./atomic-design/pages/home/home.module').then(m => m.HomeModule)},
  {path: 'blog', loadChildren: () => import('./atomic-design/pages/blog/blog.module').then(m => m.BlogModule)},
  // {path: 'os', loadChildren: () => import('./os/os.module').then(m => m.OsModule)},
  // {path: 'dev', loadChildren: () => import('./dev/dev.module').then(m => m.DevModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
