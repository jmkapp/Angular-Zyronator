import { UserListsComponent } from './discogs-user-lists/user-lists.component';
import { Component } from '@angular/core';
import { UserListsService } from './discogs-user-lists/user-lists.service';

@Component({
  selector: 'app-root',
  template: `
  <div class='container'>
    <router-outlet></router-outlet>
  </div>
  `,
  providers: [ UserListsService ]
})
export class AppComponent {
  pageTitle = 'Zyronator';
}
