export interface PostDataType {
  slug: string;

  title: string;
  date: string;
  excerpt: string;
  imageURL: string;
  author: string;
  tags: string[];
  content: string;
  isFeatured: boolean;
  completed: boolean;
  authorImage: string;
}

export interface PostMetaDataType {
  title: string;
  date: string;
  excerpt: string;
  imageURL: string;
  author: string;
  tags: string[];
  isFeatured: boolean;
  completed: boolean;
  authorImage: string;
}
