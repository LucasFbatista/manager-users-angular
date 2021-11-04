import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreModule } from './../../core.module';
import { NavBarComponent } from './nav-bar.component';

describe(`${NavBarComponent.name}`, () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[CoreModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
  });

  it('Deve criar o component NavBar', () => {
    fixture.detectChanges();
    expect(component).toBeDefined();
    expect(component).toBeTruthy();
  });

  it('(D) Deve carregar o titulo("Manager Panel")', () => {
    fixture.detectChanges();
    const tagComponent = fixture.nativeElement.querySelector("a");
    expect(tagComponent.textContent.trim()).toBe("Manager Panel");
  });

  it('(D) Deve carregar a imagem(Nav-bar)', () => {
    fixture.detectChanges();
    const imgComponent = fixture.nativeElement.querySelector("a > img");
    expect(imgComponent).toBeDefined();
    expect(imgComponent).toBeTruthy();
  });
});
