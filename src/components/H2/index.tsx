import React from 'react';
// @ts-ignore
import { Text, useTheme } from 'vcc-ui';

const H2: React.FC = (props) => {
  const theme = useTheme();
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  return <Text as='h2' extend={{
      color: theme.color.foreground.secondary,
      fontWeight: '400 !important',
      textAlign: 'left',
      }} {...props} />
}

export default H2;