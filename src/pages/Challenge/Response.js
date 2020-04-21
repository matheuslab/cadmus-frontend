/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

export const Response = ({ dayOfFirstCoveredAirport, daysToTotalCovered }) => (
  <React.Fragment>
    <Typography>
      <FormattedMessage
        {...messages.dayOfFirstAffectedAirport}
        values={{ firstAffectedDay: dayOfFirstCoveredAirport }}
      />
    </Typography>

    <Typography>
      <FormattedMessage
        {...messages.daysUntilAllAffectedAirports}
        values={{ daysUntilAllAirportsAffected: daysToTotalCovered }}
      />
    </Typography>
  </React.Fragment>
);

Response.propTypes = {
  dayOfFirstCoveredAirport: PropTypes.number.isRequired,
  daysToTotalCovered: PropTypes.number.isRequired,
};

export default Response;
