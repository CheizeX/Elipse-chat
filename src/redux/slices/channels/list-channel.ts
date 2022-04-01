/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPropsScripts, ListChannel } from '../../../models/channels/channel';

interface IIntegrationQRSlice {
  listChannel: ListChannel;
  // dataListChannel:
  idChannel: string;
  isLoanding: boolean;
  error: string | null;
  scriptsBuilder: IPropsScripts;
}

const initialState: IIntegrationQRSlice = {
  listChannel: {} as ListChannel,
  idChannel: '',
  isLoanding: false,
  error: null,
  scriptsBuilder: {} as IPropsScripts,
};

export const listChannelStore = createSlice({
  name: 'listChannelState',
  initialState,
  reducers: {
    setlistChannel: (state, action: PayloadAction<ListChannel>) => {
      state.listChannel = action.payload;
    },
    setIdChannel: (state, action: PayloadAction<string>) => {
      state.idChannel = action.payload;
    },
    setScript: (state, action: PayloadAction<IPropsScripts>) => {
      state.scriptsBuilder = action.payload;
    },
  },
});

export const { setlistChannel, setIdChannel, setScript } =
  listChannelStore.actions;
export default listChannelStore.reducer;
