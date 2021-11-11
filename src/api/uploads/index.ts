import { baseRestApi } from '../base';

export const uploadFile = (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  return baseRestApi.postMultipart<string>('/uploads', formData);
};
