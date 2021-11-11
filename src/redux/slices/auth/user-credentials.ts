/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DecodedToken } from '../../../models/users/user';

interface LiveChatSliceInterface {
  userDataInState: DecodedToken;
}

const initialState: LiveChatSliceInterface = {
  userDataInState: {} as DecodedToken,
};

export const userDataInState = createSlice({
  name: 'userDataInState',
  initialState,
  reducers: {
    setUserDataInState: (state, action: PayloadAction<DecodedToken>) => {
      state.userDataInState = action.payload;
    },
  },
});

export const { setUserDataInState } = userDataInState.actions;
export default userDataInState.reducer;
