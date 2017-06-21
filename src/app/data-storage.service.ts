import { Injectable } from '@angular/core';

@Injectable()
export class DataStorageService {

  // Rajoute de la données dans le local storage
  addData(entity: any): void {

    if(entity.hasOwnProperty('id') === false){
      throw new Exception('Attributes id doesnt exists on object entity');
    }
    
    let nameClass: string = entity.constructor.name;
    let allData: Array<any> = Object.keys(entity).filter(function(item) {return item !== 'id';}).map(function(key){
      return [key, entity[key]];
    });

    localStorage.setItem(nameClass + '_' + entity['id'], JSON.stringify(allData));

  }

  // Remove les données stockées dans le local storage
  removeData(entity: any): void {
    let nameClass: string = entity.constructor.name;
    localStorage.removeItem(nameClass + '_' + entity['id']);
  }

  // Récupère les données stockées dans le local storage
  getData(entity: any): void {
    let nameClass: string = entity.constructor.name;
  }

}
