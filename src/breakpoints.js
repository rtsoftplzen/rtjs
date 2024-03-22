
// 0 === 0-576
// 1 === 576-768
// 2 === 768-992
// 3 === 992-1120
// 4 === 1120-1400
// 5 === 1400+
export const BREAKPOINT_VALUES = [576, 768, 992, 1200, 1400];

/**
 * Returns the index of the breakpoint that the width fits into.
 */
export const getBreakpointIndex = (width) => {
    const index = BREAKPOINT_VALUES.findIndex((breakpoint) => width <= breakpoint);
    const nextIndex = BREAKPOINT_VALUES.length;
    return index === -1 ? nextIndex : index;
}

/**
 * Returns the index of an item in the array that is associated
 * with the breakpoint that the width fits into.
 */
export const getBreakpointIndexForDependentArray = (width, values) => {
    const breakpointIndex = getBreakpointIndex(width);
    const resultIndex = breakpointIndex >= values.length ? values.length - 1 : breakpointIndex;
    return resultIndex;
}

/**
 * Returns the original values array where the null/undefined values are replaced
 * with the first non-null/undefined value that comes before it.
 */
export const transformBreakpointValues = (values) => {
    
    const valuesTransformed = [...values];

    for (let index = 0; index < valuesTransformed.length; index++) {

        const value = valuesTransformed[index];
        
        const nextIndex = index + 1;
        
        const noMoreItems = nextIndex === valuesTransformed.length;
        if(noMoreItems) {
            break;
        }

        const nextValue = valuesTransformed[nextIndex];
        
        if(nextValue === null || nextValue === undefined){
            valuesTransformed[nextIndex] = value;
        }

    }

    return valuesTransformed;
}

/**
 * Returns either the value directly or if an array
 * is provided or the value that is associated with the width breakpoint.
 */
export const getBreakpointUsableValue = (value, width) => {
    const isUsingArray = Array.isArray(value);
    if(!isUsingArray)
    {
        return value;
    }


    const transformedValues = transformBreakpointValues(value);
    const breakpointIndex = getBreakpointIndexForDependentArray(width, transformedValues);

    return transformedValues[breakpointIndex];
}

export const getBreakpointUsableValueFromScreen = (value) => {
    return getBreakpointUsableValue(value, window.innerWidth);
}