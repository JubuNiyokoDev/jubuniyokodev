/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production"

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
  ...(isProduction ? { output: "export" } : {}),
}

export default nextConfig
