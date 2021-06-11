export interface ScullyRouteInterface {
  route: string;
  title?: string;
  excerpt: string;
  slugs?: string[];
  published?: boolean;
  date: string;
  tags: string[];
  slug?: string;
  sourceFile?: string;
  lang?: string;
  [prop: string]: any;
}
