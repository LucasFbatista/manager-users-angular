import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserModule } from '../../user.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserService } from 'src/app/shared/services/user.service';

import { UserDeleteComponent } from './user-delete.component';

describe(`${UserDeleteComponent.name}`, () => {
  let component: UserDeleteComponent;
  let fixture: ComponentFixture<UserDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        UserModule,
        SharedModule
      ],
      providers:[ UserService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDeleteComponent);
    component = fixture.componentInstance;
  });

  it('Deve criar o component UserDelete', () => {
    expect(component).toBeTruthy();
  });

  it(`Deve chamar a funcao abrir modal(${UserDeleteComponent.prototype.open.name})`, () => {
    spyOn(component, 'open');
    component.open("#deleteModal");
    expect(component.open).toHaveBeenCalled();
    expect(component.open).toHaveBeenCalledTimes(1);
  })
});
