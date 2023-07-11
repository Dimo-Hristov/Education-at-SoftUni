import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { CurrentThemeComponent } from './current-theme/current-theme.component';



@NgModule({
  declarations: [
    NewThemeComponent,
    CurrentThemeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ThemeModule { }
