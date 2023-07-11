import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { NewThemeComponent } from './new-theme/new-theme.component';

const routes: Routes = [
  {
    path: 'themes',
    component: MainComponent,
  },
  {
    path: 'new-theme',
    component: NewThemeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemeRoutingModule {}
