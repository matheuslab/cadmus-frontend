/* eslint-disable no-alert */
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import api from '../../services/api';

import messages from './messages';
import { handleOnChange, handleOnSubmit } from './handlers';
import Response from './Response';
import Graph from './Graph';

import InputData from './InputData';

const handleOnButtonClick = (data, setResponse) => async (event) => {
  await handleOnSubmit(data)(event);

  api.get('challenge').then(
    (response) => {
      setResponse(response.data);
    },
  ).catch((err) => {
    alert('Erro ao receber dados do servidor, tente novamente', err);
  });
};

export const Challenge = () => {
  const [cloud, setCloud] = useState(4);
  const [airport, setAirport] = useState(3);
  const [width, setWidth] = useState(10);
  const [height, setHeight] = useState(10);
  const [response, setResponse] = useState(null);

  return (
    <Box
      display="flex"
      flexDirection="column"
      my={2}
      mx={2}
    >

      <Box
        display="flex"
        flexDirection="column"
        width="10%"
      >
        <InputData
          name="cloud"
          value={cloud}
          onChange={handleOnChange(setCloud)}
          minValue={4}
          margin="dense"
        />

        <InputData
          name="airport"
          value={airport}
          onChange={handleOnChange(setAirport)}
          minValue={3}
          margin="dense"
        />

        <InputData
          name="height"
          value={height}
          onChange={handleOnChange(setHeight)}
          minValue={10}
          margin="dense"
        />

        <InputData
          name="width"
          value={width}
          onChange={handleOnChange(setWidth)}
          minValue={10}
          margin="dense"
        />
      </Box>

      <Box py={2} alignSelf="flex-start">
        <Button
          size="small"
          color="primary"
          variant="contained"
          onClick={handleOnButtonClick({
            cloud, airport, height, width,
          }, setResponse)}
        >
          <Typography>
            <FormattedMessage {...messages.calc} />
          </Typography>
        </Button>
      </Box>

      {response
        && (
        <React.Fragment>
          <Response
            dayOfFirstCoveredAirport={response.dayOfFirstCoveredAirport}
            daysToTotalCovered={response.daysToTotalCovered}
          />
          <Graph data={response} />
        </React.Fragment>
        )}

    </Box>
  );
};

export default Challenge;
