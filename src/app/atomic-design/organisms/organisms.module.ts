import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MoleculesModule} from "../molecules/molecules.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MoleculesModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OrganismsModule { }
