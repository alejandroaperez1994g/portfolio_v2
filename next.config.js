/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
                pathname: '/**/**',
            },
            {
                protocol: 'https',
                hostname: 'icon.icepanel.io',
                port: '',
                pathname: '/**/**',
            }
        ],
    },
}

module.exports = nextConfig
