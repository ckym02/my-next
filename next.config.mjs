/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  // セキュリティ上の理由からリモートホストの場合は宣言が必要
  images: {
    remotePatterns: [
      {
        hostname: 'books.google.com'
      }
    ]
  }
};

export default nextConfig;
