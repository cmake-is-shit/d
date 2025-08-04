// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';
import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
  site: 'https://cmake-is-shit.github.io',
  base: '/d',
  integrations: [
    starlight({
      title: 'CoDWiki',
      components: {
        SocialIcons: './src/components/SocialIcons.astro',
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' },
        { icon: 'discord', label: 'Discord', href: 'https://discord.gg/NPZkjrY4sN' },
      ],
      sidebar: [
        {
          label: 'Guides',
          items: [
            { label: 'Example Guide', slug: 'guides/example' },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
    mdx(),
    markdoc()
  ],
});
