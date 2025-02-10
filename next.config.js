import createNextIntlPlugin from 'next-intl/plugin';

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

export default withNextIntl(nextConfig); 