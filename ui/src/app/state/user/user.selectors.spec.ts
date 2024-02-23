import { User } from 'src/app/services';
import { UserState } from './user.reducer';
import { selectUser } from './user.selectors';

interface AppState {
  user: UserState
}

describe('User Selectors', () => {
  it('should return the user from the state', () => {
    const user: User = {
      name: 'Max',
    };
    const appState: AppState = {
      user: {
        user: user,
      },
    };

    const result = selectUser(appState);
    expect(result).toEqual(user);
  });
});
