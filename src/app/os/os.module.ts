import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {OsRoutingModule} from './os-routing.module';
import {OsComponent} from './os.component';
import {OsPostComponent} from './os-post/os-post.component';

@NgModule({
  declarations: [
    OsComponent,
    OsPostComponent
  ],
  imports: [
    CommonModule,
    OsRoutingModule,
    ScullyLibModule
  ],
})
export class OsModule {
}
