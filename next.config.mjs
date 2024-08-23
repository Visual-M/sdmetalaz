/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['sdmetal.az'],
    },
    webpack(config, { dev, isServer }) {
        if (!isServer) {
            config.devtool = dev ? 'source-map' : 'hidden-source-map';
        }
        return config;
    },
};

export default nextConfig;