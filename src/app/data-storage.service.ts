import { Injectable } from '@angular/core';

const SUCCESS: string = "success";
const ERROR: string = "error";
const KEY_STORAGE_FAVORITE: string = "mySeries";

@Injectable()
export class DataStorageService {

  /**
   * Ajout d'une donnée dans le localStorage
   * @param id 
   * @return string
   */
  add(id: number): string {

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

  /**
   * Suppression d'une donnée dans le localStorage
   * @param id 
   * @return string
   */
  // Remove les données stockées dans le local storage
  removeData(id: number): string {

    let data = JSON.parse(localStorage.getItem(KEY_STORAGE_FAVORITE));

    if( data.indexOf(id) > -1 ){
      data.splice(data.indexOf(id),1);
      localStorage.setItem(KEY_STORAGE_FAVORITE, JSON.stringify(data));
      return SUCCESS;
    }

    return ERROR;
  }

  /**
   * Récupération des données dans le localStorage
   * @return mixed
   */
  getAllData(): any {

    let data = JSON.parse(localStorage.getItem(KEY_STORAGE_FAVORITE));
    if(!data){
      return ERROR;
    }

    return data;
  }

  /**
   * Récupération des données en fonction d'un id 
   * @param id 
   * @return bool
   */
  getById(id: number): any {
    let data = JSON.parse(localStorage.getItem(KEY_STORAGE_FAVORITE));
    return data.indexOf(id) > -1;
  }

}
