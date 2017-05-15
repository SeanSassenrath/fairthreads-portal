import {
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION
} from '../constants/notification-constants';
import { mergeMap, delay } from 'rxjs';

export const showNotification = (status, { message }) => ({ 
  type: SHOW_NOTIFICATION,
  status,
  message
});

export const hideNotification = () => ({ type: HIDE_NOTIFICATION });

export const notificationEpic = action$ => 
  action$.ofType(SHOW_NOTIFICATION)
    .delay(3000)
    .mapTo(hideNotification());