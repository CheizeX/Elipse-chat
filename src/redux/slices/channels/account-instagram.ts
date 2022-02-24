/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPropsInstagram } from '../../../models/channels/channel';

interface IAuthFacebookSlice {
  dataInfoIntagram: IPropsInstagram;
  isLoanding: boolean;
  error: string | null;
}

const initialState: IAuthFacebookSlice = {
  dataInfoIntagram: {
    name: '',
    image: '',
    id: '',
    isActive: false,
    accessToken: '',
    username: '',
    // isActive: false,
  },
  isLoanding: false,
  error: null,
};

export const accountInstagramStore = createSlice({
  name: 'chatContainerAccountInstagramState',
  initialState,
  reducers: {
    setAccountIntagram: (state, action: PayloadAction<IPropsInstagram>) => {
      state.dataInfoIntagram = action.payload;
    },
  },
});

export const { setAccountIntagram } = accountInstagramStore.actions;
export default accountInstagramStore.reducer;
