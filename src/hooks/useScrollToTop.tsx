import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = (
  x = 0,
  y = 0,
  scrollBehavior: 'auto' | 'smooth' = 'auto'
) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: x, left: y, behavior: scrollBehavior });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
};
