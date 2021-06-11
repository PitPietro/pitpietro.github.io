import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {OsRoutingModule} from './os-routing.module';
import {OsComponent} from './os.component';

@NgModule({
  declarations: [OsComponent],
  imports: [CommonModule, OsRoutingModule, ScullyLibModule],
})
export class OsModule {}
