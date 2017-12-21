import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscogsListEntriesComponent } from './discogs-list-entries.component';

describe('DiscogsListEntryComponent', () => {
  let component: DiscogsListEntriesComponent;
  let fixture: ComponentFixture<DiscogsListEntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscogsListEntriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscogsListEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
