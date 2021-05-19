import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CypressAbcComponent } from './cypress-abc.component';

describe('CypressAbcComponent', () => {
  let component: CypressAbcComponent;
  let fixture: ComponentFixture<CypressAbcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CypressAbcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CypressAbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
