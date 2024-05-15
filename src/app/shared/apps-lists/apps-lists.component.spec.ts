import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsListsComponent } from './apps-lists.component';

describe('AppsListsComponent', () => {
  let component: AppsListsComponent;
  let fixture: ComponentFixture<AppsListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppsListsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppsListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
