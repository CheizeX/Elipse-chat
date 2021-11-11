import { Channel } from '../../models/channels/channel';
import { baseRestApi } from '../base';

export const createChannel = (channelData: Omit<Channel, '_id'>) => {
  return baseRestApi.post<Channel>('/channels', channelData);
};

export const readChannels = () => {
  return baseRestApi.get<Channel[]>(`/channels`);
};

export const updateChannel = (
  channelId: string,
  channelData: Partial<Omit<Channel, '_id'>>,
) => {
  return baseRestApi.patch<Channel>(`/channels/${channelId}`, channelData);
};

export const deleteChannel = (channelId: string) => {
  return baseRestApi.delete<boolean>(`/channels/${channelId}`);
};
