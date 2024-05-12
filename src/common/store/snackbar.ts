import {sanckbarType} from '@common/types/snackbar';
import {create} from 'zustand';

type store = {
  type: sanckbarType | '';
  message: string;
  setData: (type: sanckbarType, message: string) => void;
  removeData: () => void;
};

export const useSnackbarStore = create<store>(set => ({
  type: '',
  message: '',
  setData: (type: sanckbarType, message: string) => set({type, message}),
  removeData: () => set({type: '', message: ''}),
}));
