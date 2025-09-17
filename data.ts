
import { Author, Article, Campaign, ArticleCategory } from './types';

export const authors: Author[] = [
  {
    id: '1',
    name: 'Jane Doe',
    avatarUrl: 'https://picsum.photos/seed/author1/100/100',
    bio: 'Chief Marketing Officer at Innovate Inc. with a passion for digital storytelling and brand strategy.',
    socialLinks: { twitter: '#', linkedin: '#' },
  },
  {
    id: '2',
    name: 'John Smith',
    avatarUrl: 'https://picsum.photos/seed/author2/100/100',
    bio: 'Creative Director and co-founder of Visionary Ads. Expert in visual campaigns and consumer psychology.',
    socialLinks: { linkedin: '#' },
  },
];

export const articles: Article[] = [
  {
    id: '1',
    title: 'The Rise of AI in Creative Marketing',
    slug: 'rise-of-ai-in-creative-marketing',
    excerpt: 'Exploring how artificial intelligence is reshaping the creative landscape, from ad generation to personalization.',
    imageUrl: 'https://picsum.photos/seed/article1/600/400',
    category: ArticleCategory.Opinions,
    tags: ['AI', 'Marketing', 'Technology'],
    authorId: '1',
    publishedDate: '2023-10-26',
    content: '## The AI Revolution \n\nArtificial intelligence is no longer a futuristic concept; it\'s a present-day tool that\'s transforming industries, and marketing is at the forefront of this change. From hyper-personalized ad campaigns to generative AI creating stunning visuals, the possibilities are endless. \n\n### Key Areas of Impact\n- **Personalization at Scale:** AI algorithms can analyze vast amounts of data to deliver tailored content to individual users. \n- **Content Creation:** Tools like DALL-E 2 and Midjourney are enabling marketers to create unique visuals in seconds. \n- **Predictive Analytics:** AI can forecast trends, helping brands stay ahead of the curve.',
  },
  {
    id: '2',
    title: 'Top 5 Viral Campaigns of the Summer',
    slug: 'top-5-viral-campaigns-summer',
    excerpt: 'A deep dive into the most successful and talked-about marketing campaigns of the season.',
    imageUrl: 'https://picsum.photos/seed/article2/600/400',
    category: ArticleCategory.Campaigns,
    tags: ['Viral', 'Social Media', 'Case Study'],
    authorId: '2',
    publishedDate: '2023-10-24',
    content: '## Summer of Virality \n\nThe summer of 2023 was a hotbed for creative marketing. Here are the campaigns that broke the internet. \n\n1. **Brand X\'s TikTok Challenge:** Engaging millions of users worldwide. \n2. **Brand Y\'s AR Filter:** A masterclass in interactive marketing. \n3. **Brand Z\'s Heartfelt Story:** Proving that emotional connection still reigns supreme.',
  },
  {
    id: '3',
    title: 'Interview with a Startup Founder on Growth Hacking',
    slug: 'interview-startup-founder-growth-hacking',
    excerpt: 'We sit down with the founder of a fast-growing tech startup to discuss their unconventional marketing strategies.',
    imageUrl: 'https://picsum.photos/seed/article3/600/400',
    category: ArticleCategory.Interviews,
    tags: ['Startup', 'Growth Hacking', 'Interview'],
    authorId: '1',
    publishedDate: '2023-10-22',
    content: '## Hacking Growth \n\nWe talked to the brilliant mind behind a breakout startup about how they achieved exponential growth with a shoestring budget. Their insights on community building and data-driven iteration are invaluable for any aspiring entrepreneur.',
  },
  {
    id: '4',
    title: 'The Future is Short-Form: Mastering Reels and TikTok',
    slug: 'future-is-short-form-video',
    excerpt: 'Why short-form video is dominating the social media landscape and how your brand can capitalize on it.',
    imageUrl: 'https://picsum.photos/seed/article4/600/400',
    category: ArticleCategory.News,
    tags: ['Video', 'Social Media', 'Trends'],
    authorId: '2',
    publishedDate: '2023-10-20',
    content: '## Snackable Content Wins \n\nAttention spans are shorter than ever. This article explores the psychological reasons behind the success of short-form video and provides a tactical guide for creating engaging content on platforms like Instagram Reels and TikTok.',
  },
  {
    id: '5',
    title: 'Case Study: How a Legacy Brand Reinvented Itself for Gen Z',
    slug: 'case-study-legacy-brand-gen-z',
    excerpt: 'An in-depth analysis of a classic brand\'s successful pivot to capture the hearts and minds of a new generation.',
    imageUrl: 'https://picsum.photos/seed/article5/600/400',
    category: ArticleCategory.CaseStudies,
    tags: ['Branding', 'Gen Z', 'Strategy'],
    authorId: '1',
    publishedDate: '2023-10-18',
    content: '## Old Brand, New Tricks \n\nThis case study unpacks the multi-faceted strategy that a hundred-year-old company used to become relevant to a younger audience. From influencer partnerships to a complete visual rebrand, we cover all the key decisions that led to their resurgence.',
  },
];

export const campaigns: Campaign[] = [
    {
        id: 'c1',
        brand: 'Glo-Up Cosmetics',
        title: 'Aura Collection Launch',
        imageUrl: 'https://picsum.photos/seed/campaign1/800/600',
        description: 'A visually stunning campaign introducing a new line of iridescent makeup, utilizing AR filters and influencer collaborations.',
        industry: 'Beauty',
    },
    {
        id: 'c2',
        brand: 'Nomad Outdoor Gear',
        title: 'Find Your Wild',
        imageUrl: 'https://picsum.photos/seed/campaign2/800/600',
        description: 'An epic short film following adventurers to remote locations, highlighting the durability and spirit of the brand.',
        industry: 'Apparel',
    },
    {
        id: 'c3',
        brand: 'CodeStream',
        title: 'The Developer\'s Flow',
        imageUrl: 'https://picsum.photos/seed/campaign3/800/600',
        description: 'A sleek, minimalist campaign targeting developers with a focus on productivity and uninterrupted workflow.',
        industry: 'Tech',
    },
    {
        id: 'c4',
        brand: 'FreshBite',
        title: 'From Farm to Your Fork',
        imageUrl: 'https://picsum.photos/seed/campaign4/800/600',
        description: 'A transparent campaign showcasing the journey of their ingredients, building trust and emphasizing freshness.',
        industry: 'Food & Beverage',
    }
];
