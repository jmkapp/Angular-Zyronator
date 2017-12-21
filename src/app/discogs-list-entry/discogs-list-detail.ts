import { IDiscogsListEntry } from './discogs-list-entry';

export interface IDiscogsListDetail {
  name:	string;
  items: IDiscogsListEntry[];
  public: boolean;
  date_Changed: string;
  date_Added: string;
  resource_Url: string;
  uri: string;
  id:	number;
  description: string;
}
