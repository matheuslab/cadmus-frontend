/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import FirstDayGraph from './FirstDayGraph';
import OtherDaysGraph from './OtherDaysGraph';

const Graph = ({ data }) => {
  const { initialState, otherDays } = data;

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      margin="auto"
      alignContent="center"
      py={3}
    >

      <FirstDayGraph initialState={initialState} />

      <OtherDaysGraph otherDays={otherDays} />

    </Box>
  );
};


Graph.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Graph;
