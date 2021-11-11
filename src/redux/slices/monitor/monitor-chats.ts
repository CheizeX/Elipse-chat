/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Chat } from '../../../models/chat/chat';

interface IMonitorChatSlice {
  chatsToday: Chat[];
  isLoanding: boolean;
  error: string | null;
}

const initialState: IMonitorChatSlice = {
  chatsToday: [],
  isLoanding: false,
  error: null,
};

export const monitorManagementStore = createSlice({
  name: 'monitorTodayChatState',
  initialState,
  reducers: {
    setChatsToday: (state, action: PayloadAction<Chat[]>) => {
      state.chatsToday = action.payload;
    },
  },
});

export const { setChatsToday } = monitorManagementStore.actions;
export default monitorManagementStore.reducer;
