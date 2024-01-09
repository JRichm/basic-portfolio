/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    publicRuntimeConfig: {
      // Will be available on both server and client
        assetPrefix: '',
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'basic-portfolio-0yaa.onrender.com', // Change this to your domain or S3 bucket
            port: '',
            pathname: '/public/images/**', // Adjust the path to your images
          },
        ],
    }
}
    
module.exports = nextConfig