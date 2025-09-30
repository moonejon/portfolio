type Project = {
  name: string
  description: string
  link: string
  video?: string
  image?: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link?: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Penumbra',
    description: 'my personal book library',
    link: 'https://penumbra.jonathanmooney.me/library',
    image: '/app/images/penumbra-demo.png',
    id: 'project1',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Rune Labs',
    title: 'Frontend Engineer',
    start: '2022',
    end: '2024',
    // link: 'https://ibelick.com',
    id: 'work1',
  },
  {
    company: 'Opendorse',
    title: 'Frontend Engineer',
    start: '2021',
    end: '2022',
    // link: 'https://ibelick.com',
    id: 'work2',
  },
  {
    company: 'FieldFX/LiquidFrameworks',
    title: 'Junior Frontend Engineer',
    start: '2018',
    end: '2021',
    // link: 'https://ibelick.com',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description:
      'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/moonejon',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/moonejon',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/moonejon',
  },
]

export const EMAIL = 'mail@jonathanmooney.me'
