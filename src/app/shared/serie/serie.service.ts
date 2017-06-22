import { Injectable } from '@angular/core';
import { Serie } from '../../entity/serie';
import { SERIES } from '../../entity/mock-serie';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SerieService {

  constructor() { }

  getSeries(): Promise<Serie[]> {
    return Promise.resolve(SERIES);
  }
}
