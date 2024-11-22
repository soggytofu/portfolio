/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Add this line to specify the output directory
  distDir: 'build',
}

module.exports = nextConfig