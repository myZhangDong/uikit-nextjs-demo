/** @type {import('next').NextConfig} */
const nextConfig = {}
const withImages = require('next-images')
// module.exports = withImages({
//     esModule: true,
// })
module.exports = nextConfig

// module.exports = withImages({
//     images: {
//         formats: ['image/webp'],
//     },
//     webpack: (config, { isServer }) => {
//         config.module.rules.push({
//             test: /\.(png|jpe?g|gif|svg)$/i,
//             use: [
//                 {
//                     loader: 'url-loader',
//                     options: {
//                         esModule: false,
//                         limit: 8192, // 限制图片大小
//                         publicPath: '/_next/static/images/', // 图片路径
//                         outputPath: 'static/images/', // 图片输出目录
//                         name: '[name].[hash].[ext]', // 输出文件名格式
//                     },
//                 },
//             ],
//         });

//         return config;
//     },
// });
