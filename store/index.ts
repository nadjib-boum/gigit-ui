import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import modalsSlice, { ModalsSlice  } from './slices/modals.slice';

type Store = ModalsSlice;

const useStore = create<Store>()(devtools (
  (set) => ({
    ...modalsSlice,
  }),
));

export default useStore;