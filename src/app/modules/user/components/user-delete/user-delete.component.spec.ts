import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserModule } from '../../user.module';
import { UserService } from 'src/app/shared/services/user.service';

import { UserDeleteComponent } from './user-delete.component';

describe(`${UserDeleteComponent.name}`, () => {
  let component: UserDeleteComponent;
  let fixture: ComponentFixture<UserDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        UserModule
      ],
      providers:[ UserService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve criar o component UserDelete', () => {
    expect(component).toBeTruthy();
  });
});
