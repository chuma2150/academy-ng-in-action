import { createAction, props } from '@ngrx/store';
import { User } from '../../services';

export const setUser = createAction('[User] Set', props<{ user: User | undefined }>());
