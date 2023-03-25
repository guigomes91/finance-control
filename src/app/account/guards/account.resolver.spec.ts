import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountResolver } from './account.resolver';

describe('AccountResolverComponent', () => {
  let component: AccountResolver;
  let fixture: ComponentFixture<AccountResolver>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountResolver ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountResolver);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
