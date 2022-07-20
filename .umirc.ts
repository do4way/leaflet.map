import { IConfig } from 'umi-types'

// ref: https://umijs.org/config/
const config: IConfig = {
    ignoreMomentLocale: true,
    targets: { ie: 11 },
    treeShaking: true,
    hash: true,
    minimizer: 'terserjs',
    plugins: [
        // ref: https://umijs.org/plugin/umi-plugin-react.html
        [
            'umi-plugin-react',
            {
                antd: true,
                devtool: 'cheap-module-source-map',
                dva: {
                    immer: true,
                    hmr: true,
                },
                dynamicImport: { webpackChunkName: true },
                title: 'hisai.map',
                locale: {
                    enable: true,
                    default: 'ja-JP',
                },
            },
        ],
    ],
}

export default config
