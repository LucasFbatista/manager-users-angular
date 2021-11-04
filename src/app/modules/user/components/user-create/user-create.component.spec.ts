import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UserModule } from '../../user.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { UserService } from 'src/app/shared/services/user.service';
import { UserCreateComponent } from './user-create.component';

describe(`${UserCreateComponent.name}`, () => {
  let component: UserCreateComponent;
  let fixture: ComponentFixture<UserCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserModule, SharedModule, RouterTestingModule],
      providers: [UserService],
    }).compileComponents();

    fixture = TestBed.createComponent(UserCreateComponent);
    component = fixture.componentInstance;
  });

  it('Deve criar o component UserCreate', () => {
    expect(component).toBeTruthy();
  });

  it(`Deve chamar a funcao (${UserCreateComponent.prototype.createOrUpdate.name}) parar cadastrar novos usuários`, () => {
    spyOn(component, 'createOrUpdate');
    fixture.detectChanges();
    component.createOrUpdate();
    expect(component.createOrUpdate).toHaveBeenCalled();
    expect(component.createOrUpdate).toHaveBeenCalledTimes(1);
  });

  it(`Deve chamar a funcao (${UserCreateComponent.prototype.createOrUpdate.name}) passando o (id) do usuário parar atualizar o usuário`, () => {
    spyOn(component, 'createOrUpdate');
    fixture.detectChanges();
    component.id = 2;
    fixture.detectChanges();
    component.createOrUpdate();
    expect(component.createOrUpdate).toHaveBeenCalled();
    expect(component.createOrUpdate).toHaveBeenCalledTimes(1);
  });

  it(`Deve chamar a funcao (${UserCreateComponent.prototype.initForm.name}) quando o ngOnInit() for chamado, inicializando o formulario`, () => {
    spyOn(component, 'initForm');
    fixture.detectChanges();
    expect(component.initForm).toHaveBeenCalled();
    expect(component.initForm).toHaveBeenCalledTimes(1);
  });

  it(`Deve chamar a funcao (${UserCreateComponent.prototype.initForm.name}) quando o ngOnInit() for chamado, passando o (id) do usuário quer sera atualizado`, () => {
    spyOn(component, 'initForm');
    component.id = 2;
    fixture.detectChanges();
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
