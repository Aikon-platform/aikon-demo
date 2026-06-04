import { type TPrimitive } from "./types";

export function ellipsis(str: string, maxLen: number) {
    if (maxLen < 0 || str.length <= maxLen) return str;
    if (maxLen < 12) return str.slice(0, maxLen) + "...";
    return str.slice(0, Math.max(5, maxLen - 12)) + "..." + str.slice(-Math.min(9, maxLen - 5));
}

export function unquote(v: any): any {
    if (typeof v === "string") {
        v = v.replace(/^["']|["']$/g, "")
    }
    return v
}

export const isObject = (o: any): boolean => o?.constructor === Object;

export const isString = (s: any): boolean => (typeof s === "string" || s instanceof String)

export const isArray = (a: any): boolean => Array.isArray(a)

/** abstract function generating validators: if `currentValue` is not in `allowedValues`, return `defaultValue` */
export function enforceValue(allowedValues:TPrimitive[], defaultValue:TPrimitive = ""): Function {
    return (currentValue:TPrimitive): TPrimitive => {
        currentValue = unquote(currentValue);

        return allowedValues.includes(currentValue)
            ? currentValue
            : defaultValue;
    }
}

export function enforceBooleanValue(defaultValue: boolean): Function {
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
export function updateUrlSearchParams(validateValueFunc: Function|undefined, paramName: string, paramValue: any): any {
    // unquote so that url-to-form binding works with and without quoptes
    paramValue = unquote(paramValue);
    // don't JSON-stringify strings: JSON-stringifying a string will add ""
    // around it which will mess up url-to-form binding
    paramValue =  isArray(paramValue) || isObject(paramValue)
        ? JSON.stringify(paramValue)
        : paramValue;

    if (validateValueFunc) {
        paramValue = validateValueFunc(paramValue);
    }

    const url = new URL(window.location.href);
    url.searchParams.set(paramName, paramValue);
    window.history.pushState(null, '', url.toString());
    return paramValue
}
