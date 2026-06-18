import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Astro学習者 | ブログ', // ←ここを自分のブログ名に変えてもOK！
    description: 'Astroを学ぶ旅', // ←ここをブログの説明文に変えてもOK！
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>ja-jp</language>`,
  });
}