import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { API } from '../shared-variables';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Serie } from '../../entity/serie';
import { SERIES } from '../../entity/mock-serie';

@Injectable()
export class SerieService {
    link = 'https://api.betaseries.com/search/all?v=2.4&query=';
    serie: Serie;
    series = [];
    options = new RequestOptions({
        headers: new Headers({
            'Accept': 'application/json',
            'X-BetaSeries-Key': API.apiKey,
        })
    });


    searchSeries(searchTerm): Observable<Serie[]> {
      const apiLink = this.link + searchTerm;
      return this._http.get(apiLink, this.options)
            .map(res => {
              return res.json().shows;
    });
  }

  searchDetailSerie(id): Observable<Serie> {
    const apiLink = 'https://api.betaseries.com/shows/display?v=2.4&id=' + id;

    return this._http.get(apiLink, this.options).map(res => {
      return res.json().show;
    });
  }

  getSeries(): Promise<Serie[]> {
    return Promise.resolve(SERIES);
  }

  getSerie(serieId): Observable<Serie> {
    return this._http.get('https://api.betaseries.com/shows/display?id=' + serieId, this.options)
                    .map((res: Response) => res.json().show)
                    .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
  constructor (private _http: Http) {}
}
