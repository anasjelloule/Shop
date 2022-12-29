const { parsed: env } = require('dotenv').config()
module.exports = {
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
 
    // Important: return the modified config
    return config
  },
  reactStrictMode: false,
  productionBrowserSourceMaps: true,
  env,
}