import { UserListsComponent } from './discogs-user-lists/user-lists.component';
import { Component } from '@angular/core';
import { UserListsService } from './discogs-user-lists/user-lists.service';

@Component({
  selector: 'app-root',
  template: `
  <div><h1>{{pageTitle}}</h1>
    <app-user-lists></app-user-lists>
  </div>
  `,
  providers: [ UserListsService ]
})
export class AppComponent {
  pageTitle = 'Zyronator';
}
