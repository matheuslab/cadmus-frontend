/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import uniqid from 'uniqid';

import messages from './messages';

export const FirstDayGraph = ({ initialState }) => (
  <React.Fragment>
    <Typography component="div">
      {initialState.map((row) => (
        <Box key={uniqid()}>
          {row.map((column) => (
            <Box
              display="inline"
              flexDirection="row"
              m={2}
              key={uniqid()}
            >
              {column}
            </Box>
          ))}
        </Box>
      ))}

    </Typography>

    <Box alignSelf="center">
      <Typography>
        <FormattedMessage {...messages.dayOne} />
      </Typography>
    </Box>
  </React.Fragment>
);

FirstDayGraph.propTypes = {
  initialState: PropTypes.array.isRequired,
};

export default FirstDayGraph;
