/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')(
  './i18n/request.ts'
);

const nextConfig = {
  images: {
    domains: [
      'nwkafwwlodsvejclhdsj.supabase.co',
      'arifbatuhanyildirimoglu-website.s3.eu-north-1.amazonaws.com'
    ],
  },
};

module.exports = withNextIntl(nextConfig); 