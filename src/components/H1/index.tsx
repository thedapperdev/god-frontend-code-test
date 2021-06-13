import React from 'react';
// @ts-ignore
import { Text } from 'vcc-ui';

interface Props {
  children: React.ReactNode, 
};

const H1: React.FC<Props> = (props: Props) => {
  return (
    <Text
      variant="hillary"
      subStyle="emphasis"
      as='h1'
      extend={{ textAlign: 'left' }}>
        {props.children}
    </Text>
  );
}

export default H1;
