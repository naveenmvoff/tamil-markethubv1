
export interface Author {
  id: string;
  name: string;
  avatarUrl: string;
  bio: string;
  socialLinks: {
    twitter?: string;
    linkedin?: string;
  };
}

export enum ArticleCategory {
  News = 'News & Trends',
  Campaigns = 'Campaigns Showcase',
  CaseStudies = 'Case Studies',
  Interviews = 'Interviews & Stories',
  Opinions = 'Opinions & Insights',
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  imageUrl: string;
  category: ArticleCategory;
  tags: string[];
  authorId: string;
  publishedDate: string;
  content: string; // Markdown or HTML content
}

export interface Campaign {
  id: string;
  brand: string;
  title: string;
  imageUrl: string;
  videoUrl?: string;
  description: string;
  industry: string;
}
