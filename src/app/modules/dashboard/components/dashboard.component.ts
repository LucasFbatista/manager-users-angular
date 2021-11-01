import { Component, OnInit } from '@angular/core';

//ICONS
import { faChartLine } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'manager-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public icons = { faChartLine };

  constructor() { }

  ngOnInit(): void {
  }

}
