import { Observable, of } from 'rxjs';
import { User } from 'src/app/core/models/user.model';

const users: any = [
  {
    id: 1,
    name: 'Joao da Silva Gomes',
    email: 'joao_silva@gmail.com',
    password: '15515515',
    isAdmin: 'false',
  },
  {
    id: 2,
    name: 'J&L Comercial',
    email: 'comercialjlmachado@gmail.com',
    password: 'asdasdasda',
    isAdmin: 'true',
  },
  {
    id: 3,
    name: 'Ciclano da Silva',
    email: 'ciclano_silva@gmail.com',
    password: '15515515',
    isAdmin: 'false',
  },
  {
    id: 4,
    name: 'Fulano da Silva Sousa',
    email: 'Fulano_Silva@gmail.com',
    password: 'fulano1019',
    isAdmin: 'false',
  },
];

export const userStubService: any = {
  getAllUsers(): Observable<User[]> {
    return of(users);
  },

  getUserById(id: number): Observable<User> {
    let user: User = {
      id: 0,
      name: '',
      email: '',
      password: '',
      isAdmin: '',
    };
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === id) {
        user = users[i];
      }
    }
    return of(user);
  },

  createNewUser(user: User): Observable<User> | any {
    for (let i = 0; i < users.length; i++) {
      if (user.name === '' && user.password === '') {
        return this.errorHandler('Ocorreu um erro ao criar usuário!');
      } else {
        users.push(user);
        return of(users);
      }
    }
  },

  deleteUser(id: number): Observable<User> {
    let userIndex = users.findIndex((obj: any) => obj.id == id);

    if (id === 0) {
      return this.errorHandler('Ocorreu um erro ao excluir usuário!');
    } else {
      users.splice(userIndex, 1);
      return of(users);
    }
  },

  updateUser(user: User): Observable<User>{
    let userIndex = users.findIndex((obj: any) => obj.id == user.id);

    if (user.name === '' && user.password === '') {
      return this.errorHandler('Ocorreu um erro ao atualizar usuário!');
    } else {
      users[userIndex].name = user.name;
      users[userIndex].email = user.email;
      users[userIndex].isAdmin = user.isAdmin;
      users[userIndex].password = user.password;
      return of(users[userIndex]);
    }
  },

  errorHandler(msg: string): Observable<any> {
    return of(msg);
  },
};
