import { Component } from '@angular/core';

//ICONS
import { faUserPlus, faListAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'manager-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent{
  public icons = { faUserPlus, faListAlt };
}
