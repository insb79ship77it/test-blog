import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // 본인의 Cloudflare Pages 실제 접속 주소로 설정
  site: 'https://test-blog-3lh.pages.dev',
  integrations: [sitemap()],
});
