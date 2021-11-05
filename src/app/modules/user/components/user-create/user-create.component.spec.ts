import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UserModule } from '../../user.module';
import { UserService } from 'src/app/shared/services/user.service';
import { userStubService } from './../../../../shared/services/user-stub-service';
import { UserCreateComponent } from './user-create.component';

describe(`${UserCreateComponent.name}`, () => {
  let service: UserService;
  let component: UserCreateComponent;
  let fixture: ComponentFixture<UserCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, UserModule],
      providers: [
        {
          provide: UserService,
          useValue: userStubService,
        },
      ],
    }).compileComponents();

    service = TestBed.inject(UserService);
    fixture = TestBed.createComponent(UserCreateComponent);
    component = fixture.componentInstance;
  });

  it('Deve criar o component UserCreate', () => {
    expect(component).toBeTruthy();
  });

  it(`Deve chamar a funcao (${UserCreateComponent.prototype.createOrUpdate.name}) parar cadastrar um novo usuário`, () => {
    spyOn(component, 'createOrUpdate');
    fixture.detectChanges();
    component.cadastro.controls['name'].setValue('Lucas Ferreira Batista');
    component.cadastro.controls['email'].setValue('lucasfb2020@gmail.com');
    component.cadastro.controls['password'].setValue('lucas561678');
    component.cadastro.controls['isAdmin'].setValue('true');
    fixture.detectChanges();
    component.createOrUpdate();
    expect(component.createOrUpdate).toHaveBeenCalled();
    expect(component.createOrUpdate).toHaveBeenCalledTimes(1);
  });

  it(`Deve chamar a funcao (${UserCreateComponent.prototype.createOrUpdate.name}) parar cadastrar um novo usuário,
    quando o botao salvar for clicado`, () => {
    fixture.detectChanges();
    component.cadastro.controls['name'].setValue('Filomena Silva Sousa');
    component.cadastro.controls['email'].setValue('filomena2020@gmail.com');
    component.cadastro.controls['password'].setValue('filomena561678');
    component.cadastro.controls['isAdmin'].setValue('false');
    fixture.detectChanges();

    const saveButton = fixture.nativeElement.querySelector('button[type=submit]');

    saveButton.click();
    fixture.detectChanges();
    service.getAllUsers().subscribe(users => {
      const user = users.filter(user => user.name === "Filomena Silva Sousa")
      expect(user[0].name).toBe("Filomena Silva Sousa");
      expect(user[0].email).toBe("filomena2020@gmail.com");
    })
  });

  it(`Deve chamar a funcao (${UserCreateComponent.prototype.createOrUpdate.name})
    passando o (id) do usuário que sera atualizado`, (done) => {
    spyOn(component, 'createOrUpdate');
    fixture.detectChanges();
    component.id = 2;
    fixture.detectChanges();
    service.getUserById(component.id).subscribe((user) => {
      component.initForm(user);
      user.id = component.id;
      component.createOrUpdate();
      expect(component.createOrUpdate).toHaveBeenCalled();
      expect(component.createOrUpdate).toHaveBeenCalledTimes(1);
      done();
    });
  });

  it(`Deve chamar a funcao (${UserCreateComponent.prototype.initForm.name}) quando o ngOnInit() for chamado,
    inicializando o formulario`, () => {
    spyOn(component, 'initForm');
    fixture.detectChanges();
    expect(component.initForm).toHaveBeenCalled();
    expect(component.initForm).toHaveBeenCalledTimes(1);
  });

  it(`Deve chamar a funcao (${UserCreateComponent.prototype.initForm.name}) quando o ngOnInit() for chamado, passando o
    usuário quer sera atualizado`, () => {
    spyOn(component, 'initForm');
    const user = {
      name: 'Joao da Silva Gomes',
      email: 'fulano_silva@gmail.com',
      password: '15515515',
      isAdmin: 'false',
    };
    component.initForm(user);
    expect(component.initForm).toHaveBeenCalled();
    expect(component.initForm).toHaveBeenCalledTimes(1);
  });

  it(`Deve chamar a funcao (${UserCreateComponent.prototype.resetForm.name}) somente 1 vez`, () => {
    spyOn(component, 'resetForm');
    component.resetForm();
    expect(component.resetForm).toHaveBeenCalled();
    expect(component.resetForm).toHaveBeenCalledTimes(1);
  });
});
