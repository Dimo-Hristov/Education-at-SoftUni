import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalLoaderComponent } from './global-loader/global-loader.component';
import { SpinnerComponent } from '../shared/spinner/spinner.component';
import { SharedModule } from '../shared/shared.module';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [GlobalLoaderComponent, NavigationComponent],
  imports: [CommonModule, SharedModule],
  exports: [GlobalLoaderComponent, NavigationComponent],
})
export class CoreModule {}
