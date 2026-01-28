// config.js
export const config = {
  siteTitle: "星霜の项目集",
  siteSubtitle: "实验 · 工具 · 玩具 · 以及一些深夜的灵感",

  githubUsername: "xiaobaiweinuli",

  copyrightStartYear: "2025",

  // 站点说明区域开关 + 内容
  siteInfo: {
    enabled: true,  // ← 改成 false 即可完全关闭说明区域（不占位）
    title: "关于这个页面",
    paragraphs: [
      "折腾的一些小项目，大部分是实验性质的玩具，或者半夜突发奇想搞出来的东西。",
      "如果某个链接打不开或功能异常，欢迎通过 GitHub 提 issue，或者在我的频道留言告诉我。"
    ]
  },

  projects: [
    {
      title: "AI生成GitHub主页",
      url: "https://myedge.loushi.dpdns.org",
      display: "myedge.loushi.dpdns.org",
      description: "使用 AI 自动生成个性化 GitHub 个人主页"
    },
    {
      title: "Gmail → Telegram 通知",
      url: "https://worker-tg-bot.github.io/tgemailbot/",
      display: "tgemailbot",
      description: "将 Gmail 新邮件实时推送到 Telegram"
    },
    {
      title: "Telegram API 代理",
      url: "https://tgbotapi.gongzhonghao.dpdns.org/",
      display: "tgbotapi.gongzhonghao.dpdns.org"
      // description 可选，不写就不显示
    },
    {
      title: "导航 · 收藏夹",
      url: "https://nav.xingshuang.xyz/",
      display: "nav.xingshuang.xyz",
      description: "个人常用网站导航与书签集合"
    },
    {
      title: "青龙面板TG通知机器人",
      url: "https://worker-tg-bot.github.io/qinglong-tgbot/",
      display: "qinglong-tgbot"
    },
    {
      title: "个人博客",
      url: "https://blog.xingshuang.xyz/",
      display: "blog.xingshuang.xyz"
    },
    {
      title: "赛博占卜",
      url: "https://cyber-fortune.bxiao.workers.dev/",
      display: "cyber-fortune",
      description: "随机生成赛博风格运势"
    },
    {
      title: "夸夸墙",
      url: "https://first-praise-wall.bxiao.workers.dev",
      display: "first-praise-wall",
      description: "收集全世界对你的夸夸留言"
    },
    {
      title: "公共图床",
      url: "https://images.xingshuang.xyz/",
      display: "images.xingshuang.xyz"
    },
    {
      title: "网页时光机 / 归档",
      url: "https://archive.xingshuang.xyz/",
      display: "archive.xingshuang.xyz"
    },
    {
      title: "TG频道广播微博",
      links: [
        { url: "https://broadcastchannel-2xb.pages.dev/", display: "broadcastchannel-2xb.pages.dev" },
        { url: "https://tg.xingshuang.xyz/", display: "tg.xingshuang.xyz" }
      ],
      description: "Telegram 频道内容转换成网页微博"
    },
    {
      title: "API代理服务",
      url: "https://xingshuang.hidns.vip/",
      display: "xingshuang.hidns.vip"
    },
    {
      title: "电子礼譜",
      url: "https://dianzilipu.netlify.app/",
      display: "dianzilipu.netlify.app",
      description: "在线的礼譜记录编辑"
    }
  ]
};