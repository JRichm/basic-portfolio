/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    publicRuntimeConfig: {
      // Will be available on both server and client
        assetPrefix: '',
    },
}
    
module.exports = nextConfig