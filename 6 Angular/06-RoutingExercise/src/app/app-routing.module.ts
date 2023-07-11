import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { UsersComponent } from './users/users/users.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
  },
  {
    component: ContactsComponent,
    path: 'contacts',
  },
  {
    component: UsersComponent,
    path: 'users',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
