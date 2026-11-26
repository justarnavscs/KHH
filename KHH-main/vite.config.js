import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'
import { SITE_CONFIG, PUBLISHED_BOOKS, ACTIVE_SOCIAL_LINKS } from './src/config/site.js'

const absoluteSiteUrl = (value) => {
  const url = new URL(value)
  if (!['http:', 'https:'].includes(url.protocol)) {
    throw new Error('VITE_SITE_URL must use HTTP or HTTPS')
  }
  return url.origin
}

const xmlEscape = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;')

const siteSeoPlugin = (siteUrl, isBuild, env) => {
  const personId = `${siteUrl}/#person`
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': personId,
        name: SITE_CONFIG.personName,
        url: `${siteUrl}/`,
        description: SITE_CONFIG.description,
        sameAs: ACTIVE_SOCIAL_LINKS.map(({ url }) => url),
        knowsAbout: [
          'Programming and software development',
          'Entrepreneurship and business development',
          'Cybersecurity and information security',
          'Artificial intelligence and emerging technologies',
          'Video editing and creative production',
          'Graphic design and social media management',
          'Research, writing, and digital publishing',
        ],
        workExample: PUBLISHED_BOOKS.map(({ title }) => ({
          '@type': 'Book',
          name: title,
          author: { '@id': personId },
        })),
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: SITE_CONFIG.name,
        alternateName: 'Studio ArnX',
        description: SITE_CONFIG.description,
        inLanguage: 'en',
        publisher: { '@id': personId },
        about: { '@id': personId },
        hasPart: {
          '@type': 'CreativeWork',
          name: 'JARVIS I Robot',
          url: SITE_CONFIG.projectUrl,
          creator: { '@id': personId },
          description: 'The dedicated destination for Arnav Agarwal’s larger JARVIS I Robot project.',
        },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${siteUrl}/#profile`,
        url: `${siteUrl}/`,
        name: 'Arnav Agarwal | The Studio ArnX',
        inLanguage: 'en',
        mainEntity: { '@id': personId },
        isPartOf: { '@id': `${siteUrl}/#website` },
      },
    ],
  }

  return {
    name: 'site-seo',
    transformIndexHtml(html) {
      let output = html
        .replaceAll('__SITE_URL__', siteUrl)
        .replace('__SITE_JSONLD__', JSON.stringify(structuredData).replaceAll('<', '\\u003c'))
      if (env.VITE_GOOGLE_SITE_VERIFICATION) {
        output = output.replace(
          /(<meta name="google-site-verification" content=")[^"]*(" \/>)/,
          (_match, prefix, suffix) => `${prefix}${xmlEscape(env.VITE_GOOGLE_SITE_VERIFICATION)}${suffix}`,
        )
      }
      const bingTag = env.VITE_BING_SITE_VERIFICATION
        ? `<meta name="msvalidate.01" content="${xmlEscape(env.VITE_BING_SITE_VERIFICATION)}" />`
        : ''
      return output.replace('__BING_VERIFICATION_TAG__', bingTag)
    },
    closeBundle() {
      if (!isBuild) return
      const outputDir = path.resolve(process.cwd(), 'dist')
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${xmlEscape(`${siteUrl}/`)}</loc></url>\n</urlset>\n`
      const robots = `User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${siteUrl}/sitemap.xml\n`
      fs.mkdirSync(outputDir, { recursive: true })
      fs.writeFileSync(path.join(outputDir, 'sitemap.xml'), sitemap)
      fs.writeFileSync(path.join(outputDir, 'robots.txt'), robots)
    },
  }
}

// Custom local API serverless function runner for local development
const localApiPlugin = () => ({
  name: 'local-api-plugin',
  configureServer(server) {
    // Load all environment variables from .env files and populate process.env
    const env = loadEnv(server.config.mode, server.config.root, '');
    Object.assign(process.env, env);

    server.middlewares.use(async (req, res, next) => {
      if (req.url.startsWith('/api/')) {
        const apiName = req.url.split('?')[0].replace('/api/', '');
        const apiPath = path.resolve(server.config.root, `./api/${apiName}.js`);
        
        if (fs.existsSync(apiPath)) {
          try {
            // Read request body for POST/PUT/PATCH requests
            let body = '';
            await new Promise((resolve) => {
              req.on('data', chunk => { body += chunk; });
              req.on('end', resolve);
            });
            
            if (body) {
              try {
                req.body = JSON.parse(body);
              } catch (e) {
                req.body = body;
              }
            } else {
              req.body = {};
            }
            
            // Mock Express-like response object
            const mockRes = {
              status(code) {
                res.statusCode = code;
                return this;
              },
              json(data) {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(data));
                return this;
              },
              setHeader(name, val) {
                res.setHeader(name, val);
                return this;
              }
            };
            
            // Import and run the serverless function handler using Vite's SSR loading
            const { default: handler } = await server.ssrLoadModule(apiPath);
            await handler(req, mockRes);
            return;
          } catch (err) {
            console.error(`Error in local API handler /api/${apiName}:`, err);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: false, message: 'Internal Server Error', error: err.message }));
            return;
          }
        }
      }
      next();
    });
  }
})

// https://vite.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  const siteUrl = absoluteSiteUrl(env.VITE_SITE_URL || SITE_CONFIG.siteUrl)

  return {
    plugins: [
      react(),
      tailwindcss(),
      localApiPlugin(),
      siteSeoPlugin(siteUrl, command === 'build', env),
    ],
  }
})
