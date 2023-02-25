import { formatDistanceToNow, format } from 'date-fns';


export const dateToNow = (date) => formatDistanceToNow(new Date(date), { addSuffix: true });

export const formatDate = (data) => format(new Date(data), "Pp",{ addSuffix: true })