import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export const useBreakpoints = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isSmallDesktop = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isDesktop = useMediaQuery(theme.breakpoints.between('lg', 'xl'));
  const isLargeDesktop = useMediaQuery(theme.breakpoints.between('xl', 'xxl'));
  const isUltraWide = useMediaQuery(theme.breakpoints.up('xxl'));

  return { isMobile, isTablet, isSmallDesktop, isDesktop, isLargeDesktop, isUltraWide };
};