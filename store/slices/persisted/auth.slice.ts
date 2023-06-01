export type UserDataSlice = {
  userData: {
    id: number,
    email: string,
    image: string,
    username: string,
    fullName: string,
    description: string,
    isProfileSet: boolean,
  } | undefined;
}

const userDataSlice: UserDataSlice = {
  userData: undefined
};

export default userDataSlice;