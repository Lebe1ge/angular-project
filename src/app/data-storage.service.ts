import { Injectable } from '@angular/core';

const SUCCESS: string = "success";
const ERROR: string = "error";
const KEY_STORAGE_FAVORITE: string = "mySeries";

@Injectable()
export class DataStorageService {

  // Rajoute de la données dans le local storage
  add(id: string): string {
   
    let data = JSON.parse(localStorage.getItem(KEY_STORAGE_FAVORITE));
    
    if(!data) {
      localStorage.setItem(KEY_STORAGE_FAVORITE, JSON.stringify([id]));
      return SUCCESS;
    }
    else if(data.indexOf(id) == -1) {
      data.push(id);
      localStorage.setItem(KEY_STORAGE_FAVORITE, JSON.stringify(data));
      return SUCCESS;
    }

    return ERROR;
  }

  // Remove les données stockées dans le local storage
  removeData(id: string): string {

    let data = JSON.parse(localStorage.getItem(KEY_STORAGE_FAVORITE));

    if( data.indexOf(id) > -1 ){
      data.splice(data.indexOf(id),1);
      localStorage.setItem(KEY_STORAGE_FAVORITE, JSON.stringify(data));
      return SUCCESS;
    }

    return ERROR;
  }

  // Récupère les données stockées dans le local storage
  getAllData(): any {

    let data = JSON.parse(localStorage.getItem(KEY_STORAGE_FAVORITE));
    if(!data){
      return ERROR;
    }

    return data;
  }

  // Récupère les données stockées dans le local storage
  getFavoriteById(id: number): any {
    let data = JSON.parse(localStorage.getItem(KEY_STORAGE_FAVORITE));
    if(data != null && data.indexOf(id) == -1 ) {
      return false;
    }
    return true;
  }

}
