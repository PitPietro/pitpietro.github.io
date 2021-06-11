import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {OsComponent} from './os.component';
import {OsPostComponent} from "./os-post/os-post.component";

const routes: Routes = [
  {
    path: ':id',
    component: OsPostComponent,
  },
  {
    path: '',
    component: OsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OsRoutingModule {}

