import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteAbonneComponent } from './compte-abonne.component';

describe('CompteAbonneComponent', () => {
  let component: CompteAbonneComponent;
  let fixture: ComponentFixture<CompteAbonneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CompteAbonneComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteAbonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
