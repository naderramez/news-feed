import { AxiosResponse } from 'axios';
import { api } from 'src/boot/axios';
import {
  NewsCategoriesResponse,
  NewsItemsResponse,
} from '../models/newsModels';

export const getNewsCategories = (): Promise<
  AxiosResponse<NewsCategoriesResponse>
> => {
  return api.get('91298d970c27e9a06518');
};

export const getNewsItems = (): Promise<AxiosResponse<NewsItemsResponse>> => {
  return api.get('d275425a434e02acf2f7');
};
