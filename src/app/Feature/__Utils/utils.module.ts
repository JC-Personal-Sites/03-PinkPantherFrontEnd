import { NgModule } from '@angular/core';

import { IvyCarouselModule } from 'angular-responsive-carousel';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';

const modules = [
  IvyCarouselModule,
  MatToolbarModule,
  MatDialogModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  FormsModule,
  ReactiveFormsModule,
  MatCardModule,
  MatIconModule,
  MatMenuModule,
  MatTabsModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class UtilsModule {}
