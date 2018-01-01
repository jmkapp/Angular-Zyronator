import { IDiscogsListDetail } from './../discogs-list-entry/discogs-list-detail';
import { IDiscogsUserList } from './discogs-user-list';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class UserListsService {
  private _productUrl = 'http://zyronatorcore.azurewebsites.net/api/discogsuserlists';

  constructor(private _http: HttpClient) {}

  getDiscogsUserLists(): Observable<IDiscogsUserList[]> {
    return this._http.get<IDiscogsUserList[]>(this._productUrl)
    .do(data => console.log('Discogs User Lists: ' + JSON.stringify(data)))
    .catch(this.handleError);
  }

  getListDetail(listId: number): Observable<IDiscogsListDetail> {
    return this._http.get<IDiscogsListDetail>(this._productUrl + '/' + listId)
    .do(data => console.log('Discogs User List Detail: ' + JSON.stringify(data)))
    .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
