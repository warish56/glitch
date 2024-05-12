import {serverResponse} from '@common/types/response';
import {useSnackbar} from './useSnackbar';

export const useMutationError = () => {
  const {showSnackbar} = useSnackbar();
  const onError = (data: serverResponse<unknown>) => {
    if (data.errors) {
      showSnackbar('error', data.meta.message);
    }
  };

  return {onError};
};
