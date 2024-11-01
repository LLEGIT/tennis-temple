/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.atptour.com',
            },
            {
                protocol: 'https',
                hostname: 'cdn.pixabay.com',
            },
            {
                protocol: 'https',
                hostname: 'data.textstudio.com',
            },
            {
                protocol: 'https',
                hostname: 'media3.giphy.com',
            },
            {
                protocol: 'https',
                hostname: 'media.tenor.com',
            },
        ],
    },
};

export default nextConfig;
