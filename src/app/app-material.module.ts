import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatOptionModule} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSortModule} from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSortModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatChipsModule
  ],
  exports: [
    MatTableModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSortModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatChipsModule
  ]
})
export class AppMaterialModule { }
