/**
 * @Dsc: 改别名
 * @Author wjz
 * @Date 2021/7/29 15:01
 */
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}


