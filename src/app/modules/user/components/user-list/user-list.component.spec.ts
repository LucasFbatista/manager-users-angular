import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from 'src/app/shared/shared.module';
import { UserModule } from '../../user.module';

import { UserListComponent } from './user-list.component';

describe(`${UserListComponent.name}`, () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        UserModule,
        SharedModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
  });

  it('Deve criar o component UserList', () => {
    expect(component).toBeTruthy();
  });

  it(`Deve chamar a funcao (${UserListComponent.prototype.listUsers.name}) quando o NgOnInit for chamado`, () => {
    spyOn(component, 'listUsers');
    fixture.detectChanges();
    expect(component.listUsers).toHaveBeenCalled();
    expect(component.listUsers).toHaveBeenCalledTimes(1);
  });
});
