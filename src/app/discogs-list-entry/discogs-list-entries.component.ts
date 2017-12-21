import { IDiscogsListEntry } from './discogs-list-entry';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IDiscogsListDetail } from './discogs-list-detail';

@Component({
  selector: 'app-discogs-list-entries',
  templateUrl: './discogs-list-entries.component.html',
  styleUrls: ['./discogs-list-entries.component.css']
})
export class DiscogsListEntriesComponent implements OnInit {
  pageTitle = 'List Entry';
  discogsListDetail: IDiscogsListDetail;

  constructor(private _route: ActivatedRoute,
              private _router: Router) { }

  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    const test: IDiscogsListEntry[] = [];
    this.discogsListDetail = {
      'name': '(150613) Zyron Live on ISFM',
      'items': test,
      'public': true,
      'date_Changed': '2017-11-12T04:34:44Z',
      'date_Added': '2017-11-12T04:08:14Z',
      'resource_Url': 'https://api.discogs.com/lists/373143',
      'uri': 'https://www.discogs.com/lists/150613-Zyron-Live-on-ISFM/373143',
      'id': 373143,
      'description': 'Records played in this stream.\nhttp://zyron.c64.org/mixinfo.php?mixid=182&t=dj-zyron-live-on-isfm-2015-06-13'
    };
  }

  onBack(): void {
    this._router.navigate(['/discogsuserlists']);
  }
}
