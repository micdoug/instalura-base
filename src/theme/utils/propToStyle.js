import breakpointsMedia from './breakpointsMedia';

export default function propToStyle(propName) {
  return (props) => {
    const propValue = props[propName];
    if (typeof propValue === 'string') {
      return {
        [propName]: props[propName],
      };
    }
    if (typeof propValue === 'object') {
      const breakpointsToConsider = Object.keys(propValue);
      const cssBreakpoint = {};
      breakpointsToConsider.forEach((breakpointToConsider) => {
        cssBreakpoint[breakpointToConsider] = {
          [propName]: propValue[breakpointToConsider],
        };
      });
      return breakpointsMedia(cssBreakpoint);
    }
    return '';
  };
}
