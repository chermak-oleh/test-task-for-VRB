import { ResponseObj } from '../types/ResponseObj';
import { client } from '../utils/fetchClient';

export const getApiArticles = (page: number, topic: string): Promise<ResponseObj> => {
  return client.get(`&page=${page}`, topic);
};
