import { Component, OnInit } from '@angular/core';

//ICONS
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'manager-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public icons = { faQuestionCircle };

  constructor() { }

  ngOnInit(): void {
  }

}
