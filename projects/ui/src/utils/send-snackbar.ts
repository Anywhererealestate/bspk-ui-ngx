import { sendAriaLiveMessage } from './send-aria-live-message';

const snackbarContainer = () => {
    return document.getElementById('bspk-snackbar-container') as HTMLDivElement | null;
};

/**
 * A temporary utility to send a snackbar message to the user. In the future, this should be replaced with the proper
 * snackbar service/component.
 */
export function sendSnackbar(message: string): void {
    queueMicrotask(() => {
        // minimal snackbar positioned center bottom in the body and removed after 3 seconds

        let container = snackbarContainer();

        if (!container) {
            container = document.createElement('div');
            container.style.position = 'fixed';
            container.style.bottom = '1em';
            container.style.left = '50%';
            container.style.transform = 'translateX(-50%)';
            container.style.display = 'flex';
            container.style.flexDirection = 'column';
            container.style.alignItems = 'center';
            container.style.gap = '0.5em';
            container.id = 'bspk-snackbar-container';
            document.body.appendChild(container);
        }

        const snackbar = document.createElement('div');
        snackbar.style.background = 'black';
        snackbar.style.color = 'white';
        snackbar.style.padding = '8px 16px';
        snackbar.style.borderRadius = '4px';
        snackbar.style.zIndex = 'var(--z-index-dialog)';
        snackbar.textContent = message;
        container.appendChild(snackbar);

        setTimeout(() => {
            container.removeChild(snackbar);
        }, 3000);

        // For environments where DOM is not available (e.g., server-side rendering), we can log the message
        if (typeof document === 'undefined') {
            // eslint-disable-next-line no-console
            console.error(message);
        }

        // eslint-disable-next-line no-console
        console.info('Snackbar message:', message);

        sendAriaLiveMessage(message);
    });
}
