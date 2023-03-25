import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountResolverComponent } from './account-resolver.component';

describe('AccountResolverComponent', () => {
  let component: AccountResolverComponent;
  let fixture: ComponentFixture<AccountResolverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountResolverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountResolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
