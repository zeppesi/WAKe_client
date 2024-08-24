/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,

  webpack(config) {
    const fileLoaderRule = config.module.rules.find(rule =>
      rule.test?.test?.('.svg'),
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: ['@svgr/webpack'],
      },
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },

  async rewrites() {
    return [
      {
        source: '/server/:path*/',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*/`,
      },
    ];
  },
};

export default nextConfig;
