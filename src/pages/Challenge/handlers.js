/* eslint-disable no-alert */
import api from '../../services/api';

export const handleOnChange = (setState) => (event) => {
  setState(Number(event.target.value));
};

export const handleOnSubmit = (data) => async (event) => {
  event.preventDefault();

  try {
    await api.post('challenge', data);
  } catch (err) {
    alert('Erro no envio dos dados, tente novamente.');
  }
};
