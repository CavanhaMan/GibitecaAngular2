import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GibiComponent } from './gibi.component';

describe('GibiComponent', () => {
  let component: GibiComponent;
  let fixture: ComponentFixture<GibiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GibiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GibiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
