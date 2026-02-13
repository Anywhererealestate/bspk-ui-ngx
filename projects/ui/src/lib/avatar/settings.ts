import { ComponentSettings } from '@shared/types';
import { AvatarProps } from './';

export const avatar: ComponentSettings<AvatarProps> = {
    defaultInputs: {
        color: 'blue',
        showIcon: true,
        image: '/avatar-01.png',
        initials: 'AR',
        name: 'Andre Giant',
        size: 'large',
        disabled: false,
    },
};
