/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig


/** i18n config added */
const nextConfig = {
  i18n: {
    locales: ['en', 'ar', 'fr', 'es'],
    defaultLocale: 'en',
    localeDetection: true,
  },
}
export default nextConfig
