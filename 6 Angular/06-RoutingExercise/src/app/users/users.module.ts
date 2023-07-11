import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UsersService } from './users.service';

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule],
})
export class UsersModule {}
