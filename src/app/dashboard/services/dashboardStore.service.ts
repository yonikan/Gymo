import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class DashboardStoreService {

  constructor(private http: HttpClient) {}

  // test observables
  // test(): Observable<any> {
  //   let apiURL = `../../assets/json/widgets.json`;
  //   return this.http.get(apiURL)
  // }



  getWidgetsData(){

    return [
      {
        type: 'lineChart',
        name: 'widget num 2',
        id: '2',
        lineChartData: [
          {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
          {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
          {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
        ]
      },
      { 
        type: 'doughnutChart',
        name: 'widget num 3',
        id: '3',
        doughnutChartData: [
          350, 450, 100
        ]
      },
      {
        type: 'lineChart',
        name: 'widget num 4',
        id: '4',
        lineChartData: [
          {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
          {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
          {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
        ]
      },
      {
        type: 'doughnutChart',
        name: 'widget num 5',
        id: '5',
        doughnutChartData: [
          350, 450, 100
        ]
      },
      {
        type: 'lineChart',
        name: 'widget num 2',
        id: '2',
        lineChartData: [
          {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
          {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
          {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
        ]
      },
      { 
        type: 'doughnutChart',
        name: 'widget num 3',
        id: '3',
        doughnutChartData: [
          350, 450, 100
        ]
      }
    ];

    // this.http.get("../../assets/json/widgets.json").subscribe((success) => {
    //   console.log(success);  
    //   return success;       
    // });



    // // with map oparator
    // this.http.get("../../assets/json/widgets.json")
    // .map((data) => {
    //   return data;
    // })
    // .subscribe((success) => {
    //   this.navItems = success;          
    // });
  }
}


