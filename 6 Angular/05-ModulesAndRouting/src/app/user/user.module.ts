import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserResolver } from './user-detail/user-detail.resolver';

@NgModule({
  declarations: [UserListComponent, UserDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'user/list',
        component: UserListComponent,
      },
      {
        path: 'user/list/:id',
        resolve: { user: UserResolver },
        component: UserDetailComponent,
      },
    ]),
  ],
  exports: [UserListComponent],
})
export class UserModule {}
