export interface postDataType {
  slug: string;

  title: string;
  date: string;
  excerpt: string;
  imageURL: string;
  author: string;
  tags: string[];
  content: string;
  isFeatured: boolean;
}

export interface postMetadataType {
  title: string;
  date: string;
  excerpt: string;
  imageURL: string;
  author: string;
  tags: string[];
}
