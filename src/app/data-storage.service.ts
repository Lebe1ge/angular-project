import { Injectable } from '@angular/core';

const SUCCESS: string = "success";
const ERROR: string = "error";

@Injectable()
export class DataStorageService {

  // Rajoute de la données dans le local storage
  addData(entity: any): string {

    let nameClass: string = entity.constructor.name;

    if(entity.hasOwnProperty('id') === false){
      throw new Error('Attributes id doesnt exists on object entity');
    }
    
    let allData: Array<any> = Object.keys(entity).filter(function(item) {return item !== 'id';}).map(function(key){
      return [key, entity[key]];
    });

    localStorage.setItem(nameClass + '_' + entity['id'], JSON.stringify(allData));
    return SUCCESS;

  }

  // Remove les données stockées dans le local storage
  removeData(entity: any): string {

    let nameClass: string = entity.constructor.name;

    if(entity.hasOwnProperty('id') === false){
      throw new Error('Attributes id doesnt exists on object entity');
    }

    localStorage.removeItem(nameClass + '_' + entity['id']);
    return SUCCESS;
  }

  // Récupère les données stockées dans le local storage
  getData(entity: any): any {
    
    let nameClass: string = entity.constructor.name;
    let data: object;

    if(entity.hasOwnProperty('id') === false){
      throw new Error('Attributes id doesnt exists on object entity');
    }

    data = JSON.parse(localStorage.getItem(nameClass + '_' + entity['id']));
    return data;
  }

}
