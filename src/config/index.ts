/* eslint-disable-next-line no-unused-vars */
import { State as SettingType } from '@/store/module/setting';
// 默认ui配置
const setting: SettingType = {
  sidebarTheme: 'dark',
  headerTheme: 'light',
  showSettings: false,
  showTagsView: true,
  showMenuInHeader: false
};

export default {
  // 配置显示在浏览器标签的title
  title: '管理后台',

  /**
   * 是否使用国际化，默认为false
   * 如果不使用，则需要在路由中给需要在菜单中展示的路由设置meta: {title: 'xxx'}
   * 用来在菜单中显示文字
   */
  useI18n: true,

  // 默认打开的首页的路由name值，默认为home
  homeName: 'home',

  // 需要加载的插件
  plugin: {
    'error-store': {
      showInHeader: true, // 设为false后不会在顶部显示错误日志徽标
      developmentOff: true // 设为true后在开发环境不会收集错误信息，方便开发中排查错误
    }
  },

  // 系统配置
  setting,

  langType: {
    CN: 'zh-CN',
    TW: 'zh-TW',
    US: 'en-US'
  },

  useComponentCache: true,

  // 用户登录12小时后 自动登出（后面在每次发送请求时刷新过期时间）
  userExpireTime: 12 * 60 * 60
};
