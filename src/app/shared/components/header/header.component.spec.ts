import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe(`${HeaderComponent.name}`, () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve criar o component Header', () => {
    expect(component).toBeTruthy();
  });

  it('Deve verificar se o (@Input: headerTitle) foi mostrado corretamente', () => {
    fixture.detectChanges();
    component.headerTitle = "Carregou o Titulo";
    fixture.detectChanges();
    const titleHeader = fixture.nativeElement.querySelector(".header-content");
    expect(titleHeader.textContent.trim()).toBe(component.headerTitle);
  });

});
