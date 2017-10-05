import { Injectable } from '@angular/core';

@Injectable()
export class AppStoreService {

  // toolbarActionList: any[]= [];

  constructor() {

  }

  getToolbarActions(currentPage: string){
    if (currentPage === 'dashboard') {
      return ['add_widget', 'save_dashboard'];   
    } else if (currentPage === 'investigation') {
      return ['back_btn'];    
    } else {
      return [];            
    }
  }

  getFavorites(){

  }
}
