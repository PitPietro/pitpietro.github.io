import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AtomsModule} from "../atoms/atoms.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AtomsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MoleculesModule { }
