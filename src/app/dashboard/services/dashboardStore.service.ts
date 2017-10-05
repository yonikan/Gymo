import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Rx';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

@Injectable()
export class DashboardStoreService {

  constructor() {}

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
    ];
  }

  // getWidgetData(id: number) {
  //   return id;
  // }
}


