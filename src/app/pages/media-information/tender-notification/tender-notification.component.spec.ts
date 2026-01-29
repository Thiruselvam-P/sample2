import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderNotificationComponent } from './tender-notification.component';

describe('TenderNotificationComponent', () => {
  let component: TenderNotificationComponent;
  let fixture: ComponentFixture<TenderNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenderNotificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenderNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
