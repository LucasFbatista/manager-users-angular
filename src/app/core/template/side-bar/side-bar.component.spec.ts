import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreModule } from './../../core.module';
import { SideBarComponent } from './side-bar.component';

describe(`${SideBarComponent.name}`, () => {
  let component: SideBarComponent;
  let fixture: ComponentFixture<SideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ CoreModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideBarComponent);
    component = fixture.componentInstance;
  });

  it('Deve criar o component SideBar', () => {
    fixture.detectChanges();
    expect(component).toBeDefined();
    expect(component).toBeTruthy();
  });

  it('Deve carregar a class de links("side-bar-list-item")', () => {
    fixture.detectChanges();
    const sideBarLink = fixture.nativeElement.querySelector(".side-bar-list-item");
    expect(sideBarLink).toBeDefined();
    expect(sideBarLink).toBeTruthy();
  });
});
