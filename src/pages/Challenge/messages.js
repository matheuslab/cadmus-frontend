import { defineMessages } from 'react-intl';

export const scope = 'src.pages.Challenge';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Hello World',
  },
  cloud: {
    id: `${scope}.cloud`,
    defaultMessage: 'Nuvens',
  },
  cloudNumber: {
    id: `${scope}.cloudNumber`,
    defaultMessage: 'Número de Nuvens (mínimo 4)',
  },
  airport: {
    id: `${scope}.airport`,
    defaultMessage: 'Aeroportos',
  },
  airportNumber: {
    id: `${scope}.airportNumber`,
    defaultMessage: 'Número de Aeroportos (mínimo 3)',
  },
  height: {
    id: `${scope}.height`,
    defaultMessage: 'Altura',
  },
  heightNumber: {
    id: `${scope}.heightNumber`,
    defaultMessage: 'Tamanho na vertical',
  },
  width: {
    id: `${scope}.width`,
    defaultMessage: 'Comprimento',
  },
  widthNumber: {
    id: `${scope}.widthNumber`,
    defaultMessage: 'Tamanho na horizontal',
  },
  calc: {
    id: `${scope}.calc`,
    defaultMessage: 'Calcular',
  },
  dayOfFirstAffectedAirport: {
    id: `${scope}.dayOfFirstAffectedAirport`,
    defaultMessage: 'Dia em que o primeiro aeroporto foi afetado: {firstAffectedDay}',
  },
  daysUntilAllAffectedAirports: {
    id: `${scope}.daysUntilAllAffectedAirports`,
    defaultMessage: 'Dia em que as nuvens atingiram todos '
      + 'os aeroportos: {daysUntilAllAirportsAffected}',
  },
  dayOne: {
    id: `${scope}.dayOne`,
    defaultMessage: 'Dia 1',
  },
});
