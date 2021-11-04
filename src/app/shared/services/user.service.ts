import { Observable, EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

//MODULES
import { HttpClient } from '@angular/common/http';

//MODEL
import { User } from 'src/app/core/models/user.model';

//SERVICES
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class UserService {
  private readonly url: string = 'http://localhost:3001';

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/users`);
  }

  public getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}/users/${id}`);
  }

  public createNewUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.url}/users`, user).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler('Ocorreu um erro ao criar usuário!'))
    );
  }

  public deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`${this.url}/users/${id}`).pipe(
      map((obj) => obj),
      catchError((e) =>
        this.errorHandler('Ocorreu um erro ao excluir usuário!')
      )
    );
  }

  public updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.url}/users/${user.id}`, user).pipe(
      map((obj) => obj),
      catchError((e) =>
        this.errorHandler('Ocorreu um erro ao atualizar usuário!')
      )
    );
  }

  //ERROR VALIDATE
  errorHandler(msg: string): Observable<any> {
    this.toastr.error(msg);
    return EMPTY;
  }
}
