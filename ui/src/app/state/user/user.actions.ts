import { createActionGroup, props } from '@ngrx/store';
import { User } from '../../services';

export const UserActions = createActionGroup({
  source: 'User',
  events: {
    'Set': props<{ user: User | undefined }>(),
  },
});
