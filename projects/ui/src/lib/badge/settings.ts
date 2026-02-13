import { ComponentSettings } from '@shared/types';
import { BadgeProps } from './';

export const badge: ComponentSettings<BadgeProps> = {
    defaultInputs: {
        count: 5,
        size: 'small',
        color: 'primary',
        surfaceBorder: true,
    },
};
