/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Review } from '../../../models/chat/chat';

interface IReviewSlice {
  reviewChats: Review[];
  isLoanding: boolean;
  error: string | null;
}

const initialState: IReviewSlice = {
  reviewChats: [],
  isLoanding: false,
  error: null,
};

export const chatContainerReviewStore = createSlice({
  name: 'chatContainerReviewState',
  initialState,
  reducers: {
    setReviewChatsFinished: (state, action: PayloadAction<Review[]>) => {
      state.reviewChats = action.payload;
    },
  },
});

export const { setReviewChatsFinished } = chatContainerReviewStore.actions;
export default chatContainerReviewStore.reducer;
