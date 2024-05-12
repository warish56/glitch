import {useSnackbarStore} from '@common/store/snackbar';
import {sanckbarType} from '@common/types/snackbar';

export const useSnackbar = () => {
  const {message, removeData, setData, type} = useSnackbarStore(store => store);

  const showSnackbar = (
    level: sanckbarType,
    text: string,
    hideAfter = 3000,
  ) => {
    setData(level, text);
    setTimeout(removeData, hideAfter);
  };

  return {
    message,
    type,
    showSnackbar,
  };
};
