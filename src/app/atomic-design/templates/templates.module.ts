import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrganismsModule} from "../organisms/organisms.module";
import { HomepageComponent } from './homepage/homepage.component';
import {AppMaterialModule} from "../../app-material.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";



@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    OrganismsModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  exports: [
    HomepageComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TemplatesModule { }
