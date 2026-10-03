const siteTitle = "Regiane Capra | Advocacia Imobiliária em Poços de Caldas";
const siteDescription = "Orientação jurídica para compra, venda, locação e contratos imobiliários em Poços de Caldas–MG. Conheça Regiane Capra e entre em contato.";
const previewAlt = "Regiane Capra em seu escritório, ao lado da logo Capra Advocacia e da identificação Advocacia Imobiliária em Poços de Caldas.";
const xmlEscape = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

export function seoPlugin(configuredUrl = "") {
  let siteUrl;
  if (configuredUrl) {
    const parsed = new URL(configuredUrl);
    if (!['https:', 'http:'].includes(parsed.protocol) || parsed.username || parsed.password || parsed.pathname !== '/' || parsed.search || parsed.hash) {
      throw new Error('VITE_SITE_URL deve ser a URL raiz do site, por exemplo https://dominio.com.br');
    }
    siteUrl = parsed.origin + '/';
  }
  const absolute = (path) => siteUrl ? new URL(path, siteUrl).href : path;
  const meta = (key, content, property = false) => ({tag:'meta', attrs:{[property ? 'property' : 'name']: key, content}, injectTo:'head'});
  return {
    name: 'capra-seo',
    transformIndexHtml(html, context) {
      const privacy = context.path.endsWith('/privacidade.html');
      const title = privacy ? 'Aviso de Privacidade | Capra Advocacia' : siteTitle;
      const description = privacy ? 'Saiba como a Capra Advocacia e Regiane Capra tratam as informações fornecidas no contato pelo site e WhatsApp.' : siteDescription;
      const tags = [
        {tag:'link', attrs:{rel:'icon', type:'image/x-icon', href:'/favicon.ico'}, injectTo:'head'},
        {tag:'link', attrs:{rel:'icon', type:'image/png', sizes:'96x96', href:'/favicon-96.png'}, injectTo:'head'},
        {tag:'link', attrs:{rel:'apple-touch-icon', sizes:'180x180', href:'/apple-touch-icon.png'}, injectTo:'head'},
        meta('robots', 'index, follow, max-image-preview:large'),
        meta('og:type', 'website', true), meta('og:locale', 'pt_BR', true),
        meta('og:site_name', 'Capra Advocacia', true), meta('og:title', title, true),
        meta('og:description', description, true), meta('og:image', absolute('/social-preview.png'), true),
        meta('og:image:type', 'image/png', true), meta('og:image:width', '1200', true),
        meta('og:image:height', '630', true), meta('og:image:alt', previewAlt, true),
        meta('twitter:card', 'summary_large_image'), meta('twitter:title', title),
        meta('twitter:description', description), meta('twitter:image', absolute('/social-preview.png')),
        meta('twitter:image:alt', previewAlt),
      ];
      if (siteUrl) {
        const canonical = new URL(privacy ? 'privacidade.html' : '', siteUrl).href;
        tags.push({tag:'link', attrs:{rel:'canonical', href:canonical}, injectTo:'head'}, meta('og:url', canonical, true));
      }
      if (!privacy) {
        const business = {
          '@context': 'https://schema.org', '@type':'LegalService',
          name:'Capra Advocacia', alternateName:'Regiane Capra — Advocacia Imobiliária',
          description:siteDescription, telephone:'+55-35-99144-2912', email:'re.capra@hotmail.com',
          address: {'@type':'PostalAddress', streetAddress:'Av. João Pinheiro, 137, sala 01', addressLocality:'Poços de Caldas', addressRegion:'MG', postalCode:'37701-387', addressCountry:'BR'},
          sameAs:['https://www.instagram.com/regianecapra/', 'https://www.instagram.com/adv.capra/', 'https://www.google.com/maps/place/Advogada+C%C3%ADvel+Regiane+Capra+-+especialista+em+direito+Imobili%C3%A1rio/data=!4m2!3m1!1s0x0:0xefe3e46d73eba592'],
          ...(siteUrl ? {url:siteUrl, image:absolute('/social-preview.png'), logo:absolute('/logo.png')} : {}),
        };
        tags.push({tag:'script', attrs:{type:'application/ld+json'}, children:JSON.stringify(business).replaceAll('<', '\\u003c'), injectTo:'head'});
      }
      return {html:html.replace(/<title>.*?<\/title>/s, `<title>${title}</title>`).replace(/(<meta\s+name="description"\s+content=")[^"]*("\s*\/>)/s, `$1${description}$2`), tags};
    },
    generateBundle() {
      if (!siteUrl) this.warn('SEO: defina VITE_SITE_URL para gerar canonical, og:url, URLs absolutas de imagens e sitemap.xml.');
      const sitemap = siteUrl ? `\nSitemap: ${siteUrl}sitemap.xml\n` : '';
      this.emitFile({type:'asset', fileName:'robots.txt', source:`User-agent: *\nAllow: /\n${sitemap}`});
      if (siteUrl) {
        const urls = ['', 'privacidade.html'].map(path=>`  <url><loc>${xmlEscape(new URL(path, siteUrl).href)}</loc></url>`).join('\n');
        this.emitFile({type:'asset', fileName:'sitemap.xml', source:`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`});
      }
    },
  };
}
