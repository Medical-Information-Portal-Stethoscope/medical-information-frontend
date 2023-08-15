export interface IComment {
  id: string;
  text: string;
  author: {
    id: string;
    first_name: string;
    last_name: string;
    role: 'user' | 'doctor' | 'admin' | string;
    avatar: string;
  };
  created_at: string;
  updated_at: string;
}

export type TArticle = {
  id: string;
  is_fan: boolean;
  is_hater: boolean;
  total_likes: number;
  total_dislikes: number;
  rating: number | null;
  image: string;
  is_favorited: boolean;
  created_at: string;
  updated_at: string;
  title: string;
  annotation: string;
  text: string;
  source_name: string | null;
  source_link: string | null;
  is_published: boolean;
  views_count: number;
  author: {
    id: string;
    first_name: string;
    last_name: string;
    role: 'user' | 'doctor' | 'admin' | string;
    avatar: string;
  } | null;
  tags: {
    pk: string;
    name: string;
  }[];
  comments: IComment[];
};

export type TArticleCreation = {
  title: string;
  annotation: string;
  text: string;
  source_name?: string;
  source_link?: string;
  image: string;
};
