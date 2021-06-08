import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrganismsModule} from "../organisms/organisms.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OrganismsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TemplatesModule { }
