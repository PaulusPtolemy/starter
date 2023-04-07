import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

export const useIsMobile = () => {
  const breakpoints = useBreakpoints(breakpointsTailwind);
  const isMobile = breakpoints.smaller("lg");

  return {
    isMobile,
  };
};
