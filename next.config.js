const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'nwkafwwlodsvejclhdsj.supabase.co',
      'arifbatuhanyildirimoglu-website.s3.eu-north-1.amazonaws.com'
    ],
  },
};

module.exports = withNextIntl(nextConfig); 