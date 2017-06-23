import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { API } from '../../shared/shared-variables';
import { Serie } from '../../entity/serie';

@Injectable()
export class SerieService {
  link = 'https://api.betaseries.com/shows/list?limit=8&starting=';
  serie: Serie;
  series = [];
  options = new RequestOptions({
    headers: new Headers({
      'Accept': 'application/json',
      'X-BetaSeries-Key': API.apiKey,
    })
  });

/**
 * Cherche les series
 * @param searchTerm 
 * @return json
 */
  searchSeries(searchTerm): Observable<Serie[]> {
    const apiLink = this.link + searchTerm;
    return this._http.get(apiLink, this.options)
      .map(res => {
        return res.json().shows;
      });
  }

  /**
   * Cherche les détails de la série
   * @param id 
   * @return json
   */
  searchDetailSerie(id): Observable<any> {
    const apiLink = 'https://api.betaseries.com/shows/display?v=2.4&id=' + id;

    return this._http.get(apiLink, this.options).map(res => {
      return res.json().show;
    });
  }

  /**
   * Cherche les séries ajouter par l'utilisateur
   * @param seriesId 
   */
  getUserSeries(seriesId: string[]): Observable<Serie[]> {
    
    const ids = seriesId.join();
    return this._http.get('https://api.betaseries.com/shows/display?id=' + ids, this.options)
      .map((res: Response) => {
        if (seriesId.length > 1) {
          return res.json().shows;
        }
        return [res.json().show];
      })
      .catch(this.handleError);
  }

  /**
   * Cherche une série à partir d'un id
   * @param serieId 
   * @return Observable
   */
  getSerie(serieId): Observable<Serie> {
    return this._http.get('https://api.betaseries.com/shows/display?id=' + serieId, this.options)
      .map((res: Response) => res.json().show)
      .catch(this.handleError);
  }

  /**
   * Récupère les commentaires liés à la série
   * @param serieId 
   * @return Observable
   */
  getSerieComment(serieId): Observable<Serie> {
    return this._http.get('https://api.betaseries.com/comments/comments?type=show&id=' + serieId, this.options)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  /**
   * Gère les erreurs liées à l'appel sur l'API
   * @param error 
   */
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
