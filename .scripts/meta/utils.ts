/**
 * Removes <p> and </p> tags from the provided string, which are commonly added by Compodoc in the description fields.
 * Also trims the resulting string. If the input is undefined, it returns undefined.
 */
export function stripCompodocMarkup(str?: string) {
    return str?.replace(/<\/?p>/g, '').trim() || str;
}
