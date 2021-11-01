import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserModule } from '../../user.module';

import { UserListComponent } from './user-list.component';

describe(`${UserListComponent.name}`, () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        UserModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve criar o component UserList', () => {
    expect(component).toBeTruthy();
  });
});
