import { Component, OnInit } from '@angular/core';
import { IDiscogsUserList } from './discogs-user-list';
import { UserListsService } from './user-lists.service';

@Component({
  selector: 'app-user-lists',
  templateUrl: './user-lists.component.html',
  styleUrls: ['./user-lists.component.css']
})
export class UserListsComponent implements OnInit {
  pageTitle = 'Zyron Lists';
  filteredDiscogsUserLists: IDiscogsUserList[];
  discogsUserLists: IDiscogsUserList[];
  _listFilter: string;
  errorMessage: string;

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredDiscogsUserLists = this.listFilter ? this.performFilter(this.listFilter) : this.discogsUserLists;
  }

  constructor(private _userListsService: UserListsService) {
  }

  performFilter(filterBy: string): IDiscogsUserList[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.discogsUserLists.filter((userList: IDiscogsUserList) =>
          userList.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void {
    this._userListsService.getProducts()
            .subscribe(lists => {
              this.discogsUserLists = lists;
              this.filteredDiscogsUserLists = this.discogsUserLists;
            },
             error => this.errorMessage = <any> error);
    this.filteredDiscogsUserLists = this.discogsUserLists;
  }
}
