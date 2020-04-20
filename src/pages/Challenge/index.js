import React from 'react';
import Typography from '@material-ui/core/Typography';
import { FormattedMessage } from 'react-intl';
import Box from '@material-ui/core/Box';

import messages from './messages';

export const Challenge = () => (
  <Box>
    <Typography>
      <FormattedMessage {...messages.title} />
    </Typography>
  </Box>
);

export default Challenge;
