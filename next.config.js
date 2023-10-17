/** @type {import('next').NextConfig} */

const path = require('path')

module.exports = {
    env: {
        API_URL: process.env.API_URL || 'https://asactest.epicktrees.net/',
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        })
        return config
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
}
