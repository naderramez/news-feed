type NewsCategory = {
  id: number;
  name: string;
};

type ShowNewsItemOnHomePage = 'yes' | 'no';

export type NewsItem = {
  id: number;
  title: string;
  content: string;
  categoryID: string;
  urlToImage: string;
  description: string;
  publishedDate: string;
  showOnHomepage: ShowNewsItemOnHomePage;
};

export type HighlightItem = {
  id: number;
  brief: string;
  order: number;
  title: string;
  imgUrl: string;
  itemUrl: string;
  category: string;
  videoUrl: string;
  colorCode: string;
};

export type NewsCategories = NewsCategory[];
export type NewsCategoriesResponse = {
  newsCategory: NewsCategories;
};

export type NewsItems = NewsItem[];
export type NewsItemsResponse = {
  News: NewsItems;
};

export type HighlightItems = HighlightItem[];
export type HighlightItemsResponse = {
  slides: HighlightItems;
};
export type HighlightBannerProps = {
  highlightItem: HighlightItem;
};
