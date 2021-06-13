import React from 'react';
import H1 from '../H1';

// @ts-ignore
import { Text, useTheme } from 'vcc-ui';
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
      fontWeight: '400 !important'
      }}>
    {props.children}
  </Text>
}
const H3 = (props: any) => {
  const theme = useTheme();
  return <Text as='h3' extend={{
      textTransform: 'uppercase',
      color: theme.color.foreground.secondary,
      fontWeight: '500 !important' }}>
    {props.children}
  </Text>
};


const Car: React.FC<Props> = (props: Props) => {
  const altText = `${props.modelName} ${props.modelType} ${props.bodyType}`;

  return (
    <>
      <H3>{props.bodyType}</H3>
      <H1>{props.modelName}</H1>
      <H2>{props.modelType}</H2>
      <img src={props.imageUrl} alt={altText} />
    </>
  )
};

export default Car;
