import React, { useState } from 'react';
// @ts-ignore
import { CarouselProvider, CarouselProviderProps } from 'pure-react-carousel';
// @ts-ignore
import { useOnWindowResize } from 'rooks';

import { mapValues } from 'lodash';

// @ts-ignore
import { View, useTheme } from 'vcc-ui';

import CarouselNavigationButtons from './navigation-buttons';
import NavigationDots from './navigation-dots';


interface IResponsiveSize {
  dots: Boolean,
  step: number,
  visibleSlides: number,
  naturalSlideHeight: number,
  naturalSlideWidth: number
}

interface IResponsiveSlides {
  small: IResponsiveSize,
  medium: IResponsiveSize,
  large: IResponsiveSize,
}


interface ICarouselProvider extends Omit<CarouselProviderProps, 'visibleSlides'|'naturalSlideHeight'|'naturalSlideWidth'> {
  responsive: IResponsiveSlides
}

interface IThemeBreakpoints { size: { medium: string, large: string, 'x-large': string } }

const getResponsiveProps = (breakpoints: IThemeBreakpoints, responsiveProps: IResponsiveSlides): IResponsiveSize  => {
  const parsedBreakpoints = mapValues(breakpoints.size, v => parseInt(v));
  const { outerWidth } = window;
  if (outerWidth >= parsedBreakpoints.large) {
    return responsiveProps.large;
  }
  if (outerWidth >= parsedBreakpoints.medium) {
    return responsiveProps.medium;
  }
  return responsiveProps.small;
}




export const Provider: React.FC<ICarouselProvider> = ({ children, responsive, ...props }: ICarouselProvider) => {
  const { breakpoint } = useTheme();
  
  const [ {dots, ...responsiveProps}, setResponsiveProps ] = useState(getResponsiveProps(breakpoint, responsive)); 

  useOnWindowResize(() => {
    setResponsiveProps(
      getResponsiveProps(breakpoint, responsive)
    )
  });

  return (
    <CarouselProvider
        {...props}
        {...responsiveProps}>
        <View>
          {children}
          {dots ? <NavigationDots /> : <CarouselNavigationButtons />}
        </View>
      </CarouselProvider>
  )
};

// Note: as a result, other components may be customised from this NPM package at a later date.
export default {
  Provider,
};
