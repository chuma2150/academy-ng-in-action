import { User } from '../services';
import { MOCK_USERS } from '../services/user/user.service.spec';
import { FilterUserPipe } from './filter-user.pipe';

describe(FilterUserPipe.name, () => {
  it('should create ann instance', () => {
    const pipe = new FilterUserPipe();

    expect(pipe).toBeTruthy();
  });

  it('should return unfiltered users if no user was provided', () => {
    const pipe = new FilterUserPipe();

    const result = pipe.transform(MOCK_USERS);

    expect(result).toBe(MOCK_USERS);
  });

  it('should return filtered users if user was provided', () => {
    const pipe = new FilterUserPipe();
    const user: User = { name: 'findMe' };

    const result = pipe.transform([...MOCK_USERS, user], user);

    expect(result).toEqual(MOCK_USERS);
  });
});
