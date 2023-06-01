import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import modalsSlice, { type ModalsSlice  } from './slices/modals.slice';
import userDataSlice, { type UserDataSlice } from './slices/persisted/auth.slice';

type Store = ModalsSlice;
type PersisedtStore = UserDataSlice;

const useStore = create<Store>()(devtools (
  (set) => ({
    ...modalsSlice,
  }),
));

export const usePersistedStore = create<PersisedtStore>()(persist ((set) => ({
  ...userDataSlice,
}), { name: 'app-store' }))

export default useStore;