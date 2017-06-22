import { Injectable } from '@angular/core';

const SUCCESS: string = "success";
const ERROR: string = "error";

@Injectable()
export class DataStorageService {

  // Rajoute de la données dans le local storage
  updateOrAddData(entity: any, nameComponent: string): string {

    let idStorage = nameComponent + '_' + entity[0]['id'];
    localStorage.setItem(idStorage, JSON.stringify(entity));
    return SUCCESS;

  }

  // Remove les données stockées dans le local storage
  removeData(entity: object, nameComponent:string): string {

    let idStorage = nameComponent + '_' + entity[0]['id'];

    if(null === localStorage.getItem(idStorage)){
      throw new Error('This object doesnt exist on the storage');
    }

    localStorage.removeItem(idStorage);
    return SUCCESS;
  }

  // Récupère les données stockées dans le local storage
  getData(entity: object, nameComponent:string): any {

    let dataComponent: object = entity[0];
    let idStorage = nameComponent + '_' + dataComponent['id'];
    let data: string;

    if(null === localStorage.getItem(idStorage)){
      throw new Error('This object doesnt exist on the storage');
    }

    data = JSON.parse(localStorage.getItem(idStorage));
    console.log(data);
    return data;
  }

}