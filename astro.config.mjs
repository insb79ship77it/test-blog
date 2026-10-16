import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // 본인의 실제 Cloudflare Pages 배포 주소를 정확히 입력해야 sitemap이 정상 작동합니다!
  site: 'https://test-blog-3lh.pages.dev',
  integrations: [sitemap()],
});
