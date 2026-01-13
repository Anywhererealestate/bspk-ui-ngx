import { KeyboardEventCode } from './keyboard';

export type KeysCallback = Partial<Record<KeyboardEventCode, ((event: KeyboardEvent) => void) | null>>;

export const getEventCode = (event: KeyboardEvent) => {
    let eventCode = event.code as KeyboardEventCode;
    if (event.ctrlKey && event.altKey && event.code === 'Space') eventCode = 'Ctrl+Option+Space';
    if (event.shiftKey && !eventCode.startsWith('Shift')) eventCode = `Shift+${event.code}` as KeyboardEventCode;

    return eventCode;
};

/**
 * Handles multiple keydown events with specific callbacks for each key.
 *
 * @param keysCallback - An object where keys are keyboard event codes and values are callback functions.
 * @returns A function that can be used as an event handler for keydown events.
 */
export function keydownHandler(
    keysCallback: KeysCallback,
    overrides?: { stopPropagation?: boolean; preventDefault?: boolean },
): (event: KeyboardEvent) => KeyboardEventCode | null;
export function keydownHandler(
    keysCallback: KeysCallback[],
    overrides?: { stopPropagation?: boolean; preventDefault?: boolean },
): (event: KeyboardEvent) => KeyboardEventCode | null;
export function keydownHandler(
    keysCallbackProp: KeysCallback | KeysCallback[] = {},
    overrides: { stopPropagation?: boolean; preventDefault?: boolean } = {},
): (event: KeyboardEvent) => KeyboardEventCode | null {
    const { stopPropagation = false, preventDefault = false } = overrides;

    const keysCallback = Array.isArray(keysCallbackProp)
        ? keysCallbackProp.reduce((acc, curr) => {
              // Merge multiple KeysCallback objects into one merging individual callbacks
              return {
                  ...acc,
                  ...Object.fromEntries(
                      Object.entries(curr).map(([key, callback]) => {
                          const existingCallback = acc[key as keyof KeysCallback];

                          if (callback && existingCallback) {
                              // If there's already a callback for this key, chain them
                              return [
                                  key,
                                  (event: KeyboardEvent) => {
                                      existingCallback(event);
                                      callback(event);
                                  },
                              ];
                          }
                          return [key, callback];
                      }),
                  ),
              };
          }, {})
        : keysCallbackProp;

    return (event: KeyboardEvent) => {
        const eventCode = getEventCode(event);
        const callback = keysCallback[eventCode];

        if (callback) {
            callback(event);
            if (stopPropagation) event.stopPropagation();
            if (preventDefault) event.preventDefault();
        }
        return callback ? eventCode : null;
    };
}
