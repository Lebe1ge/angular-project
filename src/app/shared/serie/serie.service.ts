import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { BETA_SERIES_CONFIG } from '../shared-variables';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Serie } from '../../entity/serie';
import { SERIES } from '../../entity/mock-serie';

@Injectable()
export class SerieService {

  link = 'https://api.betaseries.com/shows/list?v=2.4&limit=10&starting=';
  series = [];
  options = new RequestOptions({
      headers: new Headers({
          'Accept': 'application/json',
          'X-BetaSeries-Key': BETA_SERIES_CONFIG.apiKey
      })
  });

  searchSeries(searchTerm): Observable<Serie[]> {
    const apiLink = this.link + searchTerm;
    return this._http.get(apiLink, this.options)
            .map(res => {
              return res.json().shows;
            });
  }

  getSeries(): Promise<Serie[]> {
    return Promise.resolve(SERIES);
  }

  constructor (private _http: Http) {
  }

}
