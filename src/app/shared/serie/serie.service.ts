import { Injectable } from '@angular/core';
import { Serie } from '../../entity/serie';
import { SERIES } from '../../entity/mock-serie';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { BETA_SERIES_CONFIG } from '../shared-variables';

@Injectable()
export class SerieService {
    link = 'https://api.betaseries.com/search/all?v=2.4&query=';
    http: Http;
    serie: Serie = new Serie;
    series = [];
    options = new RequestOptions({
        headers: new Headers({
            'Accept': 'application/json',
            'X-BetaSeries-Key': BETA_SERIES_CONFIG.apiKey,
        })
    });


  searchSeries(searchTerm): Promise<Serie[]> {
      const apiLink = this.link + searchTerm;
      this.http.request(apiLink, this.options) .subscribe((res: Response) => {
          this.series = res.json().data;
      });

    return Promise.resolve(SERIES);
  }

  getSeries(): Promise<Serie[]> {
    return Promise.resolve(SERIES);
  }

  getSerie(serieId): Promise<Serie> {

    this.http.get('https://api.betaseries.com/shows/display?id=' + serieId, this.options)
    .subscribe((res: Response) => {
        this.serie = res.json().show;
    });
    return Promise.resolve(this.serie);
  }

  constructor (http: Http) {
      this.http = http;
  }
}
