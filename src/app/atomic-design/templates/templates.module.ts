import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrganismsModule} from "../organisms/organisms.module";
import { HomepageComponent } from './homepage/homepage.component';
import {AppMaterialModule} from "../../app-material.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    AppMaterialModule,
    OrganismsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule
  ],
  exports: [
    HomepageComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TemplatesModule { }
