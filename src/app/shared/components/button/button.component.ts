import { Component, Input } from '@angular/core';

import { faChartLine } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'manager-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent{

  @Input() url!:string;
  @Input() name!: string;
  @Input() classBtn!: string;
  @Input() size!:string;
  @Input() type!:string;
  @Input() showOrHide:boolean = false;
  @Input() iconsButton?: any = this.iconsButton ? this.iconsButton : faChartLine;
}
