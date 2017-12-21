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

  getProducts(): Observable<IDiscogsUserList[]> {
    return this._http.get<IDiscogsUserList[]>(this._productUrl)
    .do(data => console.log('All: ' + JSON.stringify(data)))
    .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
