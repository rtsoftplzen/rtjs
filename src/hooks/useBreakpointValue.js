import { useLayoutEffect, useState } from "react";
import { getBreakpointUsableValueFromScreen } from "../breakpoints";


export const useBreakpointValue = (breakpointDependentValue) => {

    const [value, setValue] = useState(getBreakpointUsableValueFromScreen(breakpointDependentValue));


    useLayoutEffect(() => {
        const onResize = () => {
            const val = getBreakpointUsableValueFromScreen(breakpointDependentValue)
            setValue(val);
        }

        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
        }


    }, [breakpointDependentValue])


    return value;
}