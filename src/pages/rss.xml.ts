import type { APIContext } from 'astro';
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context: APIContext) {
  const blog = await getCollection('blog', (post) => !post.data.draft);
  return rss({
    title: 'Yogendra Kumar V R’s Blog',
    description: '',
    site: context.site!,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.datePublished),
      description: post.data.description,
      link: `/post/${post.slug}/`,
      content: sanitizeHtml(parser.render(post.body)),
    })),
  });
}
