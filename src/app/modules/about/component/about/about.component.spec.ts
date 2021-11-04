import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutModule } from './../../about.module';

import { AboutComponent } from './about.component';

describe(`${AboutComponent.name}`, () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AboutModule ]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
  });

  it('Deve criar o component About', () => {
    expect(component).toBeTruthy();
  });

  it('Deve carregar o titulo do component manager-header(titulo: "Sobre")', () => {
    fixture.detectChanges();
    const titleHeader = fixture.nativeElement.querySelector("manager-header");
    expect(titleHeader.textContent.trim()).toBe("Sobre");
  });
});
