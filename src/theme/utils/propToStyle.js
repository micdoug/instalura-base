import breakpointsMedia from "./breakpointsMedia";
import theme from "../index";

export default function propToStyle(propName) {
  return (props) => {
    const propValue = props[propName];
    if (typeof propValue === 'string') {
      return {
        [propName]: props[propName]
      }
    }
    if (typeof propValue === 'object') {
      const breakpointsToConsider = Object.keys(propValue);
      const cssBreakpoint = {};
      for (let breakpointToConsider of breakpointsToConsider) {
        cssBreakpoint[breakpointToConsider] = {
          [propName]: propValue[breakpointToConsider],
        };
      }
      return breakpointsMedia(cssBreakpoint);
    }
  };
}