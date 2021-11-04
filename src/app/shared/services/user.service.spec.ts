import { TestBed } from '@angular/core/testing';

import { UserService } from 'src/app/shared/services/user.service';
import { userStubService } from './user-stub-service';

import { SharedModule } from '../shared.module';

describe(`${UserService.name}`, () => {
  let service: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule],
      providers: [
        {
          provide: UserService,
          useValue: userStubService,
        },
      ],
    }).compileComponents();

    service = TestBed.inject(UserService);
  });

  it(`${UserService.prototype.getAllUsers.name} Deve retorna uma lista de usuários`, (done) => {
    const user1 = 'Joao da Silva Gomes';
    const user2 = 'J&L Comercial';

    service.getAllUsers().subscribe((users) => {
      expect(users).not.toBeNull();
      expect(users[0].name).toBe(user1);
      expect(users[1].name).toBe(user2);
      done();
    });
  });

  it(`${UserService.prototype.getUserById.name} Deve retorna o usuário pelo id`, (done) => {
    const userMock = {
      id: 1,
      name: 'Joao da Silva Gomes',
      email: 'fulano_silva@gmail.com',
      password: '15515515',
      isAdmin: 'false',
    };
    service.getUserById(userMock.id).subscribe((user) => {
      expect(user).not.toBeNull();
      expect(user.id).toBe(userMock.id);
      expect(user.name).toBe(userMock.name);
      done();
    });
  });

  it(`${UserService.prototype.createNewUser.name} Deve criar um novo usuário no sistema`, (done) => {
    const userMock = {
      id: 6,
      name: 'Lucas Ferreira Batista',
      email: 'lucas.batista@gmail.com',
      password: 'lucas1019',
      isAdmin: 'false',
    };
    service.createNewUser(userMock).subscribe((user) => {
      expect(user).toContain(userMock);
      done();
    });
  });

  it(`${UserService.prototype.createNewUser.name} Deve retorna mensagem de erro ao tentar criar um novo usuário no sistema`, (done) => {
    const userMock = {
      id: 0,
      name: '',
      email: '',
      password: '',
      isAdmin: '',
    };
    service.createNewUser(userMock).subscribe((user) => {
      expect(user).toContain('Ocorreu um erro ao criar usuário!');
      done();
    });
  });

  it(`${UserService.prototype.deleteUser.name} Deve excluir usuário do sistema`, (done) => {
    const userMock = {
      id: 4,
      name: 'Fulano da Silva Sousa',
      email: 'Fulano_Silva@gmail.com',
      password: 'fulano1019',
      isAdmin: 'false',
    };
    service.deleteUser(userMock.id).subscribe((response) => {
      expect(response).not.toContain(userMock);
      done();
    });
  });
  it(`${UserService.prototype.deleteUser.name} Deve retorna mensagem de erro ao tentar excluir usuário no sistema`, (done) => {
    const userMock = {
      id: 0,
      name: '',
      email: '',
      password: '',
      isAdmin: '',
    };
    service.deleteUser(userMock.id).subscribe((response) => {
      expect(response).toContain('Ocorreu um erro ao excluir usuário!');
      done();
    });
  });

  it(`${UserService.prototype.updateUser.name} Deve atualizar usuario no sistema`, (done) => {
    const userMock = {
      id: 3,
      name: 'Ciclano atualizado 2020',
      email: 'ciclano_2020_silva@gmail.com',
      password: '192190923',
      isAdmin: 'true',
    };
    service.updateUser(userMock).subscribe((response) => {
      expect(response).toEqual(userMock);
      done();
    });
  });

  it(`${UserService.prototype.updateUser.name} Deve retorna mensagem de erro ao tentar atualizar usuario no sistema`, (done) => {
    const userMock = {
      id: 0,
      name: '',
      email: '',
      password: '',
      isAdmin: '',
    };
    service.updateUser(userMock).subscribe((response) => {
      expect(response).toContain('Ocorreu um erro ao atualizar usuário!');
      done();
    });
  });

  it(`${UserService.prototype.errorHandler.name} Deve retorna a mensagem de erro passada por Parâmetro`, (done) => {
    const msg = 'O erro foi retornado';
    service.errorHandler(msg).subscribe((response) => {
      expect(response).toBe(msg);
      done();
    });
  });
});
