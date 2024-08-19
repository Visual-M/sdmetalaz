/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config, { dev, isServer }) {
        if (!isServer) {
            config.devtool = dev ? 'source-map' : 'hidden-source-map';
        }
        return config;
    },
};

export default nextConfig;