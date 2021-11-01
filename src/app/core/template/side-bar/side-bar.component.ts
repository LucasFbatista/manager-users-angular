import { Component, OnInit } from '@angular/core';

//FONT AWESOME
import { faChartLine, faUsersCog, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'manager-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  public icons = {
    faChartLine, faUsersCog, faQuestionCircle
  };

  constructor() { }

  ngOnInit(): void {
  }

}
