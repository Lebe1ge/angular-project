import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { API } from '../../shared/shared-variables';

@Injectable()
export class SeasonService {
  options = new RequestOptions({
    headers: new Headers({
      'Accept': 'application/json',
      'X-BetaSeries-Key': API.apiKey,
    })
  });

  getSeasonEpisodes(serieId, season): Observable<any> {
    const apiLink = 'https://api.betaseries.com/shows/episodes?id=' + serieId + '&season=' + season;
    return this._http.get(apiLink, this.options)
      .map(res => {
        return res.json().episodes;
      });
  }

  private handleError(error: Response | any) {
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
  constructor(private _http: Http) { }

}
