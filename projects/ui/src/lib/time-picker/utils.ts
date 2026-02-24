import { format, isValid, parse } from 'date-fns';

export const MINUTE_OPTIONS = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];
export const HOUR_OPTIONS = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
export const MERIDIEM_OPTIONS = ['AM', 'PM'] as const;

export type Meridiem = 'AM' | 'PM';

export function stringValueToParts(timeString: string): {
    hours: string | undefined;
    minutes: string | undefined;
    meridiem: Meridiem;
    str: string;
} {
    const dateObj = parse(timeString, 'HH:mm', new Date());
    const isValidDate = isValid(dateObj);
    return {
        hours: isValidDate ? format(dateObj, 'hh') : undefined,
        minutes: isValidDate ? format(dateObj, 'mm') : undefined,
        meridiem: isValidDate ? (format(dateObj, 'a') as Meridiem) : 'AM',
        str: timeString,
    };
}

export function partsToStringValue(
    hours: string | undefined,
    minutes: string | undefined,
    meridiem: Meridiem,
): string {
    if (typeof hours === 'undefined' || typeof minutes === 'undefined') return '';
    let hours24 = Number(hours);
    if (meridiem === 'PM' && hours24 < 12) hours24 += 12;
    else if (meridiem === 'AM' && hours24 === 12) hours24 = 0;
    return `${hours24.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}
