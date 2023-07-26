export type PaperType = {
  id: string;
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
  } | null;
  tags: {
    pk: string;
    name: string;
  }[];
};
