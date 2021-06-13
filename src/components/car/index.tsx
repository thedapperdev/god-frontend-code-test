import React from 'react';
import H1 from '../H1';

// @ts-ignore
import { Text, useTheme, Link, Spacer, View } from 'vcc-ui';
// @ts-ignore
import styled from 'styled-components';

export interface Props {
  id?: string
  modelName: string
  bodyType: string
  modelType: string
  imageUrl: string
}

const H2 = (props: any) => {
  const theme = useTheme();
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  return <Text as='h2' extend={{
      color: theme.color.foreground.secondary,
      fontWeight: '400 !important',
      }}>
    {props.children}
  </Text>
}
const H3 = (props: any) => {
  const theme = useTheme();
  return <Text as='h3' extend={{
      textTransform: 'uppercase',
      color: theme.color.foreground.secondary,
      fontWeight: '500 !important',
      textAlign: 'left' }}>
    {props.children}
  </Text>
};


const Car: React.FC<Props> = (props: Props) => {
  const altText = `${props.modelName} ${props.modelType} ${props.bodyType}`;

  return (
    <View justifyContent='flex-start' extend={{ margin: '0 15px' }}>
      <H3>{props.bodyType}</H3>
      <View direction='row' alignItems='center'>
        <H1>{props.modelName}</H1>
        <Spacer />
        <H2>{props.modelType}</H2>
      </View>
      <Spacer />
      <View >
        <img src={props.imageUrl} alt={altText} />
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
