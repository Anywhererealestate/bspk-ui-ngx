export const noop = () => {
    /* noop */
};

export function sendAriaLiveMessage(message: string) {
    // remove existing AriaLiveMessage element from dom
    document.querySelectorAll('[data-bspk-aria-live]').forEach((el) => el.remove());

    // add new AriaLiveMessage element to dom
    document.body.insertAdjacentHTML(
        'beforeend',
        `<div data-bspk-aria-live aria-live="polite" data-sr-only role="alert">${message}</div>`,
    );
}
