import React, { useState } from 'react';
import styled, { css } from 'styled-components';
// @ts-ignore
import { CarouselProvider, Slider, Slide as PureSlide, ButtonBack, ButtonNext, CarouselProviderProps } from 'pure-react-carousel';
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
`;

const BackButton = styled(ButtonBack)`
  ${BaseNavButtonStyles};
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
}

interface IResponsiveSlides {
  medium: IResponsiveSize,
  large: IResponsiveSize,
}


interface ICarouselProvider extends Omit<CarouselProviderProps, 'visibleSlides'> {
  responsive: IResponsiveSlides
}

interface IThemeBreakpoints { size: { medium: string, large: string, 'x-large': string } }



const getResponsiveProps = (breakpoints: IThemeBreakpoints, responsiveProps: IResponsiveSlides): IResponsiveSize  => {
  console.log({responsiveProps})
  const parsedBreakpoints = mapValues(breakpoints.size, v => parseInt(v));
  const { outerWidth } = window;
  if (outerWidth >= parsedBreakpoints.large) {
    return responsiveProps.large;
  }
  return responsiveProps.medium;
}


export const Provider: React.FC<ICarouselProvider> = ({ children, responsive, ...props }: ICarouselProvider) => {
  const { breakpoint } = useTheme();
  
  const [ responsiveProps, setResponsiveProps ] = useState(responsive.medium); 
  useOnWindowResize(() => {
    console.log('helew')
    setResponsiveProps(
      getResponsiveProps(breakpoint, responsive)
    )

  });

  return (
    <StyledCarouselProvider
        {...props}
        {...responsiveProps}
        naturalSlideWidth={100}
        naturalSlideHeight={100}>
        <View>
          {children}
          <View direction='row' justifyContent='flex-end'>
            <CarouselButton back>Back</CarouselButton>
            <CarouselButton>Next</CarouselButton>
            <Spacer size={2} />
          </View>
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
