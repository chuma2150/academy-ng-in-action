import { User } from 'src/app/services';
import { setUser } from './user.actions';
import { initialState, userReducer } from './user.reducer';

describe('User Reducer', () => {
  it('should return the initial state', () => {
    const action = { type: 'NOOP' };
    const result = userReducer(undefined, action);
    expect(result).toBe(initialState);
  });

  it('should set user on setUser', () => {
    const user: User = {
      name: 'Max',
    };
    const action = setUser({ user: user });
    const result = userReducer(initialState, action);

    expect(result).toEqual({
      user: user,
    });
  });
});
