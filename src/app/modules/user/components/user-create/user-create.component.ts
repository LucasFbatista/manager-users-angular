import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//ICONS
import {
  faUserPlus,
  faWindowClose,
  faSave,
  faUserEdit
} from '@fortawesome/free-solid-svg-icons';

//MODELS
import { User } from 'src/app/core/models/user.model';

//SERVICES
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/services/user.service';

//ROUTER
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'manager-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss'],
})
export class UserCreateComponent implements OnInit {
  public icons = { faUserPlus, faWindowClose, faSave, faUserEdit };
  public cadastro!: FormGroup;
  public options!: Array<any>;

  public id!: number;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private routerActivited: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = +this.routerActivited.snapshot.params["id"];

    if(this.id){
      this.userService.getUserById(this.id).subscribe((user: User) => this.initForm(user));
    }else{
      this.initForm(new User());
    }
    this.options = [
      {
        name: 'Não',
        value: false,
      },
      {
        name: 'Sim',
        value: true,
      },
    ];
  }

  public initForm(user: User): void {
    this.cadastro = this.fb.group({
      name: [ user.name, [ Validators.required, Validators.minLength(2), Validators.maxLength(256), ],],
      email: [ user.email, [Validators.required, Validators.email, Validators.maxLength(256)],],
      password: [user.password, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      isAdmin: [user.id ? user.isAdmin : false, [Validators.required]],
    });
  }

  public get f() {
    return this.cadastro.controls;
  }

  public createOrUpdate(): void {
    const user = this.cadastro.getRawValue() as User;
    if(this.id){
      user.id = this.id;
      this.updateUser(user);
    }else{
      this.createNewUser(user);
    }
  }

  public resetForm(): void {
    this.cadastro.reset();
  }

  private createNewUser(user: User): void {
    this.userService.createNewUser(user).subscribe(() => {
      this.toastr.success('Usuario gravado com sucesso!');
      this.resetForm();
    });
  }

  private updateUser(user: User): void {
    this.userService.updateUser(user).subscribe(() => {
      this.toastr.success("Usuario atualizado com successo!");
      this.resetForm();
    })
  }
}
