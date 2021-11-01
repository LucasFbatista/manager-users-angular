import { UserService } from 'src/app/shared/services/user.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { UserModule } from '../../user.module';

import { UserCreateComponent } from './user-create.component';

describe(`${UserCreateComponent.name}`, () => {
  let component: UserCreateComponent;
  let fixture: ComponentFixture<UserCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        UserModule,
        RouterTestingModule
      ],
      providers:[ UserService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve criar o component UserCreate', () => {
    expect(component).toBeTruthy();
  });
});
