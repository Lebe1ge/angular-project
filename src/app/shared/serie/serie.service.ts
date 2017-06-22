import { Injectable } from '@angular/core';
import { Serie } from '../../entity/serie';
import { SERIES } from '../../entity/mock-serie';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { BETA_SERIES_CONFIG } from '../shared-variables';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Serie } from '../../entity/serie';
import { SERIES } from '../../entity/mock-serie';

@Injectable()
export class SerieService {

    link = 'https://api.betaseries.com/search/all?v=2.4&query=';
    serie: Serie = new Serie;
    series = [];
    options = new RequestOptions({
        headers: new Headers({
            'Accept': 'application/json',
            'X-BetaSeries-Key': BETA_SERIES_CONFIG.apiKey,
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
    
  getSerie(serieId): Promise<Serie> {
    this._http.get('https://api.betaseries.com/shows/display?id=' + serieId, this.options)
    .subscribe((res: Response) => {
        this.serie = res.json().show;
    });
    return Promise.resolve(this.serie);
  }

  constructor (private _http: Http) {}

}
