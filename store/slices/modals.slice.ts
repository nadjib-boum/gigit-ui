export type ModalsSlice = {
  registerModal: boolean;
  loginModal: boolean;
}

const modalsSlice: ModalsSlice = {
  registerModal: false,
  loginModal: false,
}

export default modalsSlice;