import { SharedModule } from './shared.module';
import { AuthService } from './auth/auth.service';

describe('SharedModule', () => {
  let sharedModule: SharedModule;
  let authService: AuthService;

  beforeEach(() => {
    sharedModule = new SharedModule(authService);
  });

  it('should create an instance', () => {
    expect(sharedModule).toBeTruthy();
  });
});
