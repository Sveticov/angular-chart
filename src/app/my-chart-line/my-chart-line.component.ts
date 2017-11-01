import {Component} from '@angular/core';

@Component({
  selector: 'app-my-chart-line',
  templateUrl: './my-chart-line.component.html',
  styleUrls: ['./my-chart-line.component.css']
})
export class MyChartLineComponent {


  lineTest2 = {
    chartType: 'PieChart',
    dataTable: [
      ['N1', 'N2'],
      ['v1', 1],
      ['v2', 2],
      ['v3', 3],
      ['v4', 4],
      ['v5', 5]
    ],
    options: {'title': 'Task'},
  };

  labels = ['DS', 'LD', 'EC', 'M3', 'DS Lab', 'EC Lab', '1', '2', '3', '4', '5'];
  data = [83, 75, 67, 50, 90, 35, 10, 12, 15, 16, 17];
  data2 = [[83, 75, 67, 50, 90, 35, 10, 12, 15, 16, 17], [93, 15, 17, 50, 90, 35, 14, 17, 15, 22, 27]];


  columnTypes = [{
    'type': 'string',
    'value': 'subjectName'
  },
    {
      'type': 'number',
      'value': 'Marks'
    }];

  chartType = 'Line';

  options = {
    'width': 750,
    'height': 400,
    'bars': 'vertical',
    'chartArea': {'left': 150, 'bottom': 50, 'right': 70, 'top': 50},
    hAxis: {
      title: 'Subject'
    },
    vAxis: {
      title: 'Marks'
    }
  };

}
