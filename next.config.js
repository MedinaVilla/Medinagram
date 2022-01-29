/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.centroculturalmigueldelibes.com","random.imagecdn.app",'us.123rf.com', "uploads-ssl.webflow.com", "pbs.twimg.com", "instagram.fpbc6-1.fna.fbcdn.net", "1frase.com","uploads-ssl.webflow.com", "uploads-ssl.webflow.com","mobirise.com", "upload.wikimedia.org", "avatars.githubusercontent.com", "studiosol-a.akamaihd.net","i.scdn.co","emprendedoresnews.com", "www.eltiempo.com"],
},
async redirects() {
  return [
    {
      source: '/profile',
      destination: '/medinavilla',
      permanent: true,
    },
  ]
}
}

module.exports = nextConfig
