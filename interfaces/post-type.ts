export default interface PostType {
  slug: string;
  id: number;
  title: string;
  description: string;
  imageURL: string;
  author: string;
  tags: string[];
  content: string;
}
