/* eslint-disable react/forbid-prop-types */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import messages from './messages';

export const InputData = ({
  intl, name, value, onChange, minValue,
}) => (
  <TextField
    type="number"
    value={value}
    onChange={onChange}
    label={intl.formatMessage(messages[name])}
    placeholder={intl.formatMessage(messages[`${name}Number`])}
    inputProps={{
      min: minValue,
    }}
  />
);

InputData.propTypes = {
  intl: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  minValue: PropTypes.number.isRequired,
};

export default injectIntl(InputData);
