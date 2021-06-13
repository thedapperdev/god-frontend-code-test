import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
// @ts-ignore
import { CarouselProvider, Slider, Slide as PureSlide, ButtonBack, ButtonNext, CarouselProviderProps, DotGroup } from 'pure-react-carousel';
// @ts-ignore
import { useOnWindowResize } from 'rooks';

import { mapValues } from 'lodash';

// @ts-ignore
import { View, Spacer, useTheme } from 'vcc-ui';
import { ReactComponent as Chevron } from './icons/chevron-circled.svg';


interface IButton {
  back?: Boolean,
};

const BaseNavButtonStyles = css`
  width: 3.5rem;
  background-color: transparent;
  border: none;
  &:disabled {
    opacity: 0.6;
  }
`;

const BackButton = styled(ButtonBack)`
  ${BaseNavButtonStyles}
  svg {
    transform: rotate(180deg);
  }
`;

const NextButton = styled(ButtonNext)`
  ${BaseNavButtonStyles}
`;

const CarouselButton: React.FC<IButton> = ({ back, ...props }: any) => {
  if (back) {
    return <BackButton {...props}>
      <Chevron />
    </BackButton>
  }
  return (
    <NextButton {...props}>
      <Chevron />
    </NextButton>
  )
}
const StyledCarouselProvider = styled(CarouselProvider)`
  
`;

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

const CarouselNavigationButtons = () => {
  return (
    <View direction='row' justifyContent='flex-end'>
      <CarouselButton back>Back</CarouselButton>
      <CarouselButton>Next</CarouselButton>
      <Spacer size={2} />
    </View>
  );
};

const StyledDotGroup = styled(DotGroup)`
  button {
    height: 10px;
    width: 10px;
    margin: 0 5px;
    padding: 0;
    
    border-radius: 50px;
    border: none;
    background-color: ${props => props.theme.color.ornament};
    &:disabled {
      background-color: ${props => props.theme.color.foreground.primary};
    }
  }
`;

const NavigationDots = () => {
  const theme = useTheme();
  return (
    <View direction='row' justifyContent='center'>
      <StyledDotGroup theme={theme} />
    </View>
  )
}

export const Provider: React.FC<ICarouselProvider> = ({ children, responsive, ...props }: ICarouselProvider) => {
  const { breakpoint } = useTheme();
  
  const [ responsiveProps, setResponsiveProps ] = useState(getResponsiveProps(breakpoint, responsive)); 

  useOnWindowResize(() => {
    setResponsiveProps(
      getResponsiveProps(breakpoint, responsive)
    )
  });

  return (
    <StyledCarouselProvider
        {...props}
        {...responsiveProps}>
        <View>
          {children}
          {responsiveProps.dots ? <NavigationDots /> : <CarouselNavigationButtons />}
        </View>
      </StyledCarouselProvider>
  )
};

interface ISlide {
  index: Number
}

// Note: as a result, other components may be customised from this NPM package at a later date.
export default {
  Provider,
};
