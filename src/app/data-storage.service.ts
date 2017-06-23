import { Injectable } from '@angular/core';

const SUCCESS: string = "success";
const ERROR: string = "error";

@Injectable()
export class DataStorageService {

  keyStorage: string;

  /**
   * Ajout d'une donnée dans le localStorage
   * @param id
   * @return string
   */
  add(id: number): string {

    let data = JSON.parse(localStorage.getItem(this.keyStorage));

    if(!data) {
      localStorage.setItem(this.keyStorage, JSON.stringify([id]));
      return SUCCESS;
    }
    else if(data.indexOf(id) == -1) {
      data.push(id);
      localStorage.setItem(this.keyStorage, JSON.stringify(data));
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

    let data = JSON.parse(localStorage.getItem(this.keyStorage));

    if( data.indexOf(id) > -1 ){
      data.splice(data.indexOf(id),1);
      localStorage.setItem(this.keyStorage, JSON.stringify(data));
      return SUCCESS;
    }

    return ERROR;
  }

  /**
   * Récupération des données dans le localStorage
   * @return mixed
   */
  getAllData(): any {

    let data = JSON.parse(localStorage.getItem(this.keyStorage));
    if(!data){
      return [];
    }

    return data;
  }

  /**
   * Récupération des données en fonction d'un id
   * @param id
   * @return bool
   */
  getById(id: number): any {
    let data = JSON.parse(localStorage.getItem(this.keyStorage));
    if(!data) {
      return false;
    }
    return data.indexOf(id) > -1;
  }

  /**
   * Setter
   * @param keyStorage 
   */
  setKeyStorage(keyStorage: string) {
    this.keyStorage = keyStorage;
  }

  /**
   * Getter
   * @param keyStorage 
   */
  getKeyStorage(keyStorage: string) {
    return this.keyStorage;
  }

}
