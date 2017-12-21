import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserListsComponent } from './discogs-user-lists/user-lists.component';
import { DiscogsListEntriesComponent } from './discogs-list-entry/discogs-list-entries.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListsComponent,
    DiscogsListEntriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'discogsuserlists', component: UserListsComponent},
      { path: 'discogsuserlists/:id', component: DiscogsListEntriesComponent},
      { path: '', redirectTo: 'discogsuserlists', pathMatch: 'full'},
      { path: '**', redirectTo: 'discogsuserlists', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
