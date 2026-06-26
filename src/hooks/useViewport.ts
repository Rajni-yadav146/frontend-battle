import { useState, useEffect, RefObject } from "react";

/**
 * Custom hook to detect mobile viewport using matchMedia.
 * Hydration-safe: Defaults to false on server, checks on mount.
 */
export function useIsMobile(breakpoint = 768): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${breakpoint}px)`);
    setIsMobile(media.matches);

    const handleResize = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    media.addEventListener("change", handleResize);
    return () => media.removeEventListener("change", handleResize);
  }, [breakpoint]);

  return isMobile;
}

/**
 * Custom hook to track an element's width using ResizeObserver.
 */
export function useElementWidth(elementRef: RefObject<HTMLElement | null>): number {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new ResizeObserver((entries) => {
      if (!entries || entries.length === 0) return;
      setWidth(entries[0].contentRect.width);
    });

    observer.observe(element);
    return () => {
      observer.unobserve(element);
    };
  }, [elementRef]);

  return width;
}
