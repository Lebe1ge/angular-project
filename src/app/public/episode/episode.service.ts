import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { API } from '../../shared/shared-variables';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Episode } from '../../entity/episode';

@Injectable()
export class EpisodeService {
    link = 'https://api.betaseries.com/search/all?v=2.4&query=';
    episode: Episode;
    episodes = [];
    options = new RequestOptions({
        headers: new Headers({
            'Accept': 'application/json',
            'X-BetaSeries-Key': API.apiKey,
        })
    });


  // getSeries(): Promise<Episode> {
  //   return Promise.resolve(SERIES);
  // }

  getEpisode(episodeId): Observable<Episode> {
    return this._http.get('https://api.betaseries.com/episodes/display?id=' + episodeId, this.options)
                    .map((res: Response) => res.json().episode)
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
