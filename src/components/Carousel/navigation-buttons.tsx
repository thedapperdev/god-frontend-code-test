import { ReactComponent as Chevron } from './icons/chevron-circled.svg';
import { ButtonBack, ButtonNext } from 'pure-react-carousel';
import styled, { css } from 'styled-components';
import React from 'react';

// @ts-ignore
import { View, Spacer } from 'vcc-ui';

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

const CarouselNavigationButtons = () => {
  return (
    <View direction='row' justifyContent='flex-end'>
      <CarouselButton back>Back</CarouselButton>
      <CarouselButton>Next</CarouselButton>
      <Spacer size={2} />
    </View>
  );
};

export default CarouselNavigationButtons;
