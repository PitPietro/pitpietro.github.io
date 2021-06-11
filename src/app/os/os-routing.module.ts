import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {OsComponent} from './os.component';

const routes: Routes = [
  {
    path: ':id',
    component: OsComponent,
  },
  {
    path: '**',
    component: OsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OsRoutingModule {}

