import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardModule } from './../dashboard.module';
import { DashboardComponent } from './dashboard.component';


describe(`${DashboardComponent.name}`, () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
     imports:[ DashboardModule ]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
  });

  it('Deve criar o component Dashboard', () => {
    expect(component).toBeTruthy();
  });

  it('Deve carregar o titulo do component manager-header(titulo: "Dashboard")', () => {
    fixture.detectChanges();
    const titleHeader = fixture.nativeElement.querySelector("manager-header");
    expect(titleHeader.textContent.trim()).toBe("DashBoard");
  });

  it('Deve carregar o container de classe do component de Card("container-dash")', () => {
    fixture.detectChanges();
    const titleHeader = fixture.nativeElement.querySelector(".container-dash");
    expect(titleHeader).toBeDefined();
    expect(titleHeader).toBeTruthy();
  })
});
