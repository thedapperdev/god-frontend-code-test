import React from 'react';
import H1 from '../H1';
import H2 from '../H2';
import H3 from '../H3';
import { Image } from 'pure-react-carousel';


// @ts-ignore
import { useTheme, Link, Spacer, View } from 'vcc-ui';
// @ts-ignore
import styled from 'styled-components';

export interface ICar {
  id?: string
  modelName: string
  bodyType: string
  modelType: string
  imageUrl: string
}

const TitleView = styled(View)`
  flex-direction: column;
  ${props => props.theme.breakpoints.fromL} {
    flex-direction: row;
    align-items: center;
  }
`;

const Car: React.FC<ICar> = (props: ICar) => {
  const altText = `${props.modelName} ${props.modelType} ${props.bodyType}`;

  const theme = useTheme();
  return (
    <View justifyContent='flex-start' extend={{ margin: '0 15px' }}>
      <H3>{props.bodyType}</H3>
      <TitleView theme={theme}>
        <H1>{props.modelName}</H1>
        <Spacer />
        <H2>{props.modelType}</H2>
      </TitleView>
      <Spacer />
      <View >
        <Image src={props.imageUrl} alt={altText} hasMasterSpinner={true} />
      </View>
      <View direction='row' alignItems='center' justifyContent='center'>
        <Link href="#" arrow="right">
          Learn
        </Link>
        <Spacer size={3} />
        <Link href="#" arrow="right">
          Shop
        </Link>
      </View>
    </View>
  )
};

export default Car;
