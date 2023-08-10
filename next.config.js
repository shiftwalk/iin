const redirects = require('./helpers/dynamic-redirects.js');

module.exports = {
  async redirects() {
    const sanityRedirects = await redirects();
    return sanityRedirects;
  },
  images: {
		domains: ['cdn.sanity.io'],
		deviceSizes: [768, 1024, 1280, 1600, 1920, 2400, 3800],
		imageSizes: [32, 64, 96, 128, 256, 350, 500],
	},
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};