import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './components/categories/categories.component';
import { FormCategoryComponent } from './components/form-category/form-category.component';

import { MaterialModule } from './../../material/material.module';

@NgModule({
  declarations: [
    CategoriesComponent,
    FormCategoryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
