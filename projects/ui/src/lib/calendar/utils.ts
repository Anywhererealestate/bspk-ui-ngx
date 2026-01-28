import { addDays, addMonths, format, isSameDay, parse, isValid } from 'date-fns';

export const COLUMNS_COUNT = 7;

export function parseDate(next: string | undefined): Date | undefined {
    // don't allow parsing unless the format is approximately mm/dd/yyyy
    if (!/^\d{1,2}\/\d{1,2}\/\d{2,4}$/.test(next || '')) return undefined;

    const parsedDate = next ? parse(next, 'MM/dd/yyyy', new Date()) : undefined;

    if (!isValid(parsedDate)) return undefined;

    if (parsedDate && parsedDate.getFullYear() < 100) {
        parsedDate.setFullYear(parsedDate.getFullYear() + 2000);
    }

    return parsedDate;
}

export function optionIdGenerator(baseId: string) {
    return (date: Date) => `${baseId}-option-${format(date, 'MM-dd-yyyy')}`;
}

type Direction = 'down' | 'left' | 'right' | 'up';

const DIRECTION_INCREMENT: Record<Direction, number> = {
    down: 1 * COLUMNS_COUNT,
    right: 1,
    up: -1 * COLUMNS_COUNT,
    left: -1,
};

// Angular version of useKeyDownCaptures
export function getCalendarKeydownHandler(
    activeDate: Date,
    setActiveDate: (date: Date) => void,
    rows: Date[][],
    focusActiveDay: () => void,
) {
    function handleItemArrows(direction: Direction) {
        return () => {
            const next = addDays(activeDate, DIRECTION_INCREMENT[direction]);
            setActiveDate(next);
            focusActiveDay();
        };
    }

    function handleEnterOrSpace(event: KeyboardEvent) {
        const target = event.target as HTMLElement;
        if (target.nodeName === 'TD') target.click();
    }

    return (event: KeyboardEvent) => {
        switch (event.key) {
            case 'ArrowDown':
                event.preventDefault();
                event.stopPropagation();
                handleItemArrows('down')();
                break;
            case 'ArrowUp':
                event.preventDefault();
                event.stopPropagation();
                handleItemArrows('up')();
                break;
            case 'ArrowLeft':
                event.preventDefault();
                event.stopPropagation();
                handleItemArrows('left')();
                break;
            case 'ArrowRight':
                event.preventDefault();
                event.stopPropagation();
                handleItemArrows('right')();
                break;
            case 'End': {
                event.preventDefault();
                event.stopPropagation();
                const next = rows.find((r) => r.some((d) => isSameDay(d, activeDate)))?.[COLUMNS_COUNT - 1];
                if (!next || isSameDay(next, activeDate)) return;
                setActiveDate(next);
                focusActiveDay();
                break;
            }
            case 'Home': {
                event.preventDefault();
                event.stopPropagation();
                const next = rows.find((r) => r.some((d) => isSameDay(d, activeDate)))?.[0];
                if (!next || isSameDay(next, activeDate)) return;
                setActiveDate(next);
                focusActiveDay();
                break;
            }
            case 'PageDown':
                event.preventDefault();
                event.stopPropagation();
                setActiveDate(addMonths(activeDate, 1));
                focusActiveDay();
                break;
            case 'PageUp':
                event.preventDefault();
                event.stopPropagation();
                setActiveDate(addMonths(activeDate, -1));
                focusActiveDay();
                break;
            case ' ':
            case 'Spacebar':
            case 'Enter':
                event.preventDefault();
                event.stopPropagation();
                handleEnterOrSpace(event);
                break;
        }
    };
}
