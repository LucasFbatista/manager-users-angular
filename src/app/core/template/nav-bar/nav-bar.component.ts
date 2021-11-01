import { Component, OnInit } from '@angular/core';

//ICONS
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'manager-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public icons = { faSignOutAlt };
  constructor() { }

  ngOnInit(): void {
  }

}
