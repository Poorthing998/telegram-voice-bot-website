/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://typegone.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,

  transform: async (config, path) => {
    const lastmod = new Date().toISOString().split('T')[0];

    if (path === '/') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 1.0,
        lastmod,
      };
    }

    if (['/voice-to-text', '/compare', '/download'].includes(path)) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.9,
        lastmod,
      };
    }

    if (path.startsWith('/use-cases/')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.7,
        lastmod,
      };
    }

    if (['/privacy', '/terms', '/data-privacy'].includes(path)) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.3,
      };
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
    };
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
  },
};