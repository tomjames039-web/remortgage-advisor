/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations
  poweredByHeader: false,
  compress: true,

  // Optimize production builds
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  images: {
    // Optimize images for faster loading
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ext.same-assets.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'logos-world.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '1000logos.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cnrywhrfn.s3.eu-west-2.amazonaws.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i1.wp.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'download.logo.wine',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.freebiesupply.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'trustmarque.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'htgmortgages.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'd1pt6w2mt2xqso.cloudfront.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'companieslogo.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'd2p8oxuauxcpsf.cloudfront.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'dm-mortgages.s3.eu-west-2.amazonaws.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'financialit.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'therightmortgage.co.uk',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
