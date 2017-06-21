import { Injectable } from '@angular/core';
import { Serie } from '../../entity/serie';
import { SERIES } from '../../entity/mock-serie';

@Injectable()
export class SerieService {
  getSeries(): Promise<Serie[]> {
    return Promise.resolve(SERIES);
  }

}
