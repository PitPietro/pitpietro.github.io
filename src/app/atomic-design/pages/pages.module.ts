import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TemplatesModule} from "../templates/templates.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TemplatesModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule { }
