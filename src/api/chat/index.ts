import { Chat, FinishedStatus } from '../../models/chat/chat';
import { baseRestApi } from '../base';

export const createChat = (chatData: Omit<Chat, '_id'>) => {
  return baseRestApi.post<Chat>('/chats', chatData);
};

export const readChat = (status: string) => {
  return baseRestApi.get<Chat[]>(`/chats/status/${status}`);
};

export const updateChat = (
  chatId: string,
  chatData: Partial<Omit<Chat, '_id'>>,
) => {
  return baseRestApi.patch<Chat>(`/chats/${chatId}`, chatData);
};

export const deleteChat = (chatId: string) => {
  return baseRestApi.delete<boolean>(`/chats/${chatId}`);
};

export const endChat = async (
  chatId: string,
  chatData: Partial<FinishedStatus>,
) => {
  return baseRestApi.patch<Chat>(
    `/chats/finishConversation/${chatId}`,
    chatData,
  );
};

export const initConversation = (chatId: string, chatData: Partial<Chat>) => {
  return baseRestApi.patch<Chat>(`/chats/initConversation/${chatId}`, chatData);
};

export const transferConversation = async (chatId: string, userId: string) => {
  return baseRestApi.patch<Chat>(
    `/chats/transferConversation/${chatId}/${userId}`,
    {},
  );
};

export const readChatsToday = async (date: string) => {
  return baseRestApi.get<Chat>(
    `/chats/date/0/${date}/?channels=all&states=all&agents=all`,
  );
};

export const readReviewChats = async (filter = 'all') => {
  return baseRestApi.get<Chat>(
    `/chats/statistics/finishedChats?filter=${filter}`,
  );
};
