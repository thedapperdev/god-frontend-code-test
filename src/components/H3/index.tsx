import React from 'react';
// @ts-ignore
import { Text, useTheme } from 'vcc-ui';
const H3: React.FC = (props) => {
  const theme = useTheme();
  return <Text as='h3' extend={{
      textTransform: 'uppercase',
      color: theme.color.foreground.secondary,
      fontWeight: '500 !important',
      textAlign: 'left' }} {...props} />
};

export default H3;