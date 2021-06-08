import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TemplatesModule} from "./templates/templates.module";
import {share} from "rxjs/operators";
import {PagesModule} from "./pages/pages.module";
import {AtomsModule} from "./atoms/atoms.module";
import {MoleculesModule} from "./molecules/molecules.module";
import {OrganismsModule} from "./organisms/organisms.module";

const sharedModules = [
  AtomsModule,
  MoleculesModule,
  OrganismsModule,
  TemplatesModule,
  PagesModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    sharedModules
  ],
  exports: [sharedModules],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
