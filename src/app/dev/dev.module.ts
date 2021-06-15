import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {DevRoutingModule} from './dev-routing.module';
import {DevComponent} from './dev.component';

@NgModule({
  declarations: [DevComponent],
  imports: [CommonModule, DevRoutingModule, ScullyLibModule],
})
export class DevModule {}
