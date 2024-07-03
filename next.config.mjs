/** @type {import('next').NextConfig} */

const nextConfig = {
  // add hoestname for images
  images: {
    domains: ['res.cloudinary.com', 'robohash.org'],
  },
};

export default nextConfig;
