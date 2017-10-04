import { Injectable } from '@angular/core';

@Injectable()
export class AppStoreService {

  // toolbarActionList: any[]= [];

  constructor() {

  }

  getToolbarActions(currentPage: string){
    if (currentPage === 'dashboard') {
      return;      
    } else if (currentPage === 'investigation') {
      return;   
    } else {
      return;            
    }
  }

  getFavorites(){

  }
}
