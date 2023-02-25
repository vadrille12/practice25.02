import { formatDistanceToNow } from 'date-fns';

export const dateToNow = (date) => formatDistanceToNow(new Date(date), { addSuffix: true });