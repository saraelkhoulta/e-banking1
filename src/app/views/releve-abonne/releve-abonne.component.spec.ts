import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleveAbonneComponent } from './releve-abonne.component';

describe('ReleveAbonneComponent', () => {
  let component: ReleveAbonneComponent;
  let fixture: ComponentFixture<ReleveAbonneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReleveAbonneComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleveAbonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
