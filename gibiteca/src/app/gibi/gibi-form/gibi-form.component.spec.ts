import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GibiFormComponent } from './gibi-form.component';

describe('GibiFormComponent', () => {
  let component: GibiFormComponent;
  let fixture: ComponentFixture<GibiFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GibiFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GibiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
