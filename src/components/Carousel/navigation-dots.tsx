import styled from 'styled-components';
import React from 'react';
import { DotGroup } from 'pure-react-carousel';
// @ts-ignore
import { useTheme, View } from 'vcc-ui';

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

export default NavigationDots;