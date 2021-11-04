import { Component, OnInit } from '@angular/core';

//ICONS
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

//SERVICES
import { UserService } from 'src/app/shared/services/user.service';

//MODEL
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'manager-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  public icons = { faPen, faTrash };
  public users!: User[];

  public filteredUsers!: User[];
  public _filterBy!: string;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.listUsers();
  }

  public listUsers(): void {
    this.getAllUsers();
  }

  private getAllUsers(): void {
    this.userService.getAllUsers().subscribe({
      next: (users) => {
        this.users = users;
        this.filteredUsers = this.users;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  set filter(value: string) {
    this._filterBy = value;
    this.filteredUsers = this.users.filter(
      (user: User) =>
        user.name
          .toLocaleLowerCase()
          .indexOf(this._filterBy.toLocaleLowerCase()) > -1
    );
  }

  get filter() {
    return this._filterBy;
  }
}
