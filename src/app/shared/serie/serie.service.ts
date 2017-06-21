import { Injectable } from '@angular/core';
import { Serie } from '../../entity/serie';
import { SERIES } from '../../entity/mock-serie';
import { Http } from '@angular/http';
import {Observable} from "rxjs";

@Injectable()
export class SerieService {

  searchSeries(searchTerm): Promise<Serie[]> {
    this._http
      .get('https://api.betaseries.com/search/all?v=2.4&query=' + searchTerm)
      .map( res => { return res.json(); } )
      .catch( error => { return Observable.throw(new Error(error.status)); });

    return Promise.resolve(SERIES);
  }

  getSeries(): Promise<Serie[]> {
    return Promise.resolve(SERIES);
  }

  constructor (private _http: Http) {
    // this.header.append('X-BetaSeries-Key', 'b213ef91be08');
  }

}
