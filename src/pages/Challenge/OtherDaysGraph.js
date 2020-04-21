/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import uniqid from 'uniqid';

const OtherDaysGraph = ({ otherDays }) => {
  const items = Object.keys(otherDays);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      margin="auto"
      alignContent="center"
      py={3}
    >
      {items.map((keys) => (
        <React.Fragment key={uniqid()}>
          <Typography component="div">
            {otherDays[keys].map((row) => (
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
              {`Dia ${Number(keys) + 2}`}
            </Typography>
          </Box>
        </React.Fragment>
      ))}
    </Box>
  );
};

OtherDaysGraph.propTypes = {
  otherDays: PropTypes.array.isRequired,
};

export default OtherDaysGraph;
