import { type TPrimitive } from "./types";

export function ellipsis(str: string, maxLen: number) {
    if (maxLen < 0 || str.length <= maxLen) return str;
    if (maxLen < 12) return str.slice(0, maxLen) + "...";
    return str.slice(0, Math.max(5, maxLen - 12)) + "..." + str.slice(-Math.min(9, maxLen - 5));
}

/** abstract function generating validators: if `currentValue` is not in `allowedValues`, return `defaultValue` */
export function enforceValue (allowedValues:TPrimitive[], defaultValue:TPrimitive = ""): Function {
    return (currentValue:TPrimitive): TPrimitive =>
        allowedValues.includes(currentValue)
            ? currentValue
            : defaultValue;
}

export function enforceBooleanValue (defaultValue: boolean): Function {
    return enforceValue([true, false], defaultValue)
}

/**
 * if a value is nullish, return defaultValue.
 * a custom `resolver` function can be passed to check for specific constraints (i.e., is an array empty ?):
 * if it returns false, then `defaultValue` is returned.
 */
export function valueOrDefault(defaultValue: any, resolver: ((value:any)=>boolean)|undefined) {
    return (value: any) => {
        if (resolver) {
            return resolver(value) ? value : defaultValue;
        }
        return value || defaultValue
    };
}

/**
 * update a key-value pair of search parameters, without reloading the page (otherwise, would trigger infinite loop)
 * if `validateValueFunc` is provided, also validate `paramValue`.
 *
 * about using widow.history, see: https://stackoverflow.com/a/70591485
 *
 * NOTE: value must be JSON-stringifiable
 */
export function updateUrlSearchParams(validateValueFunc: ((x:any)=>any)|undefined, paramName: string, paramValue: any): any {
    if (validateValueFunc) {
        paramValue = validateValueFunc(paramValue);
    }
    const url = new URL(window.location.href);
    url.searchParams.set(paramName, JSON.stringify(paramValue));
    window.history.pushState(null, '', url.toString());
    return paramValue
}
