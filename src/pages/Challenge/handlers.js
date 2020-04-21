/* eslint-disable no-alert */
import api from '../../services/api';

export const handleOnChange = (setState) => (event) => {
  setState(event.target.value);
};

export const handleOnSubmit = (data) => async (event) => {
  event.preventDefault();

  try {
    await api.post('challenge', data);

    alert('Dados enviados com sucesso');
  } catch (err) {
    alert('Erro no envio dos dados, tente novamente.');
  }
};
