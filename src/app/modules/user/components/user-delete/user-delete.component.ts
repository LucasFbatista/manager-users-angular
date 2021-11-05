import { Component, Input } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

//SERVICES
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/services/user.service';

//ICONS
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'manager-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss'],
})
export class UserDeleteComponent {

  public icons = { faTrash };
  @Input() public userId!: string;

  constructor(
    private modalService: NgbModal,
    private userService: UserService,
    private toastr: ToastrService,
  ) {}

  // MODAL CONFIG
  public open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          if(!!result){
            this.delete();
          }
        },
        (reason) => {
          this.getDismissReason(reason);
        }
      );
  }

  public delete(): void {
    this.deleteUser();
  }

  private deleteUser(): void {
    this.userService.deleteUser(Number(this.userId)).subscribe(() => {
      this.toastr.success('Usuario excluido com sucesso!');
      setTimeout(() => { location.reload() }, 5000);
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'pressionando ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'clicando em um pano de fundo';
    } else {
      return `Com: ${reason}`;
    }
  }
}
