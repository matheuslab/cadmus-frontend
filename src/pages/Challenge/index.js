/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import messages from './messages';
import { handleOnChange, handleOnSubmit } from './handlers';

export const Challenge = ({ intl }) => {
  const [cloud, setCloud] = useState(4);
  const [airport, setAirport] = useState(3);
  const [width, setWidth] = useState(10);
  const [height, setHeight] = useState(10);

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="50%"
      my={2}
    >
      <TextField
        type="number"
        value={cloud}
        onChange={handleOnChange(setCloud)}
        label={intl.formatMessage(messages.cloud)}
        placeholder={intl.formatMessage(messages.cloudNumber)}
        inputProps={{
          min: 4,
        }}
      />

      <TextField
        type="number"
        value={airport}
        onChange={handleOnChange(setAirport)}
        label={intl.formatMessage(messages.airport)}
        placeholder={intl.formatMessage(messages.airportNumber)}
        inputProps={{
          min: 3,
        }}
      />

      <TextField
        type="number"
        value={height}
        onChange={handleOnChange(setHeight)}
        label={intl.formatMessage(messages.height)}
        placeholder={intl.formatMessage(messages.heightNumber)}
        inputProps={{
          min: 10,
        }}
      />

      <TextField
        type="number"
        value={width}
        onChange={handleOnChange(setWidth)}
        label={intl.formatMessage(messages.width)}
        placeholder={intl.formatMessage(messages.widthNumber)}
        inputProps={{
          min: 10,
        }}
      />


      <Button onClick={handleOnSubmit({
        cloud, airport, height, width,
      })}
      >
        <Typography>
          <FormattedMessage {...messages.calc} />
        </Typography>
      </Button>
    </Box>
  );
};

Challenge.propTypes = {
  intl: PropTypes.object.isRequired,
};

export default injectIntl(Challenge);
