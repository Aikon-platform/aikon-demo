import { type TPrimitive } from "./types";

export function ellipsis(str: string, maxLen: number) {
    if (maxLen < 0 || str.length <= maxLen) return str;
    if (maxLen < 12) return str.slice(0, maxLen) + "...";
    return str.slice(0, Math.max(5, maxLen - 12)) + "..." + str.slice(-Math.min(9, maxLen - 5));
}

/** abstract function generating validators: if `currentValue` is not in `allowedValues`, return `defaultValue` */
export function enforceFieldValue (allowedValues:TPrimitive[], defaultValue:TPrimitive = ""): Function {
    return (currentValue:TPrimitive): TPrimitive =>
        allowedValues.includes(currentValue)
            ? currentValue
            : defaultValue;
}

/**
 * validate the value for a parameter and update the search parameters, without reloading the page (otherwise, would trigger infinite loop)
 * about using widow.history, see: https://stackoverflow.com/a/70591485
 */
export function updateUrlSearchParams(enforceValueFunc: Function, paramName: string, paramValue: string): string {
    paramValue = enforceValueFunc(paramValue);
    const url = new URL(window.location.href);
    url.searchParams.set(paramName, paramValue);
    window.history.pushState(null, '', url.toString());
    return paramValue
}
