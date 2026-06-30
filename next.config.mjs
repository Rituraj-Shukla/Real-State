/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Serve the /public images directly (no /_next/image optimizer). This makes
    // every image work on ANY host — static export, shared hosting, CDN — with
    // no sharp/AVIF dependency and no remote hotlink that can be blocked.
    unoptimized: true,
  },
};

export default nextConfig;
