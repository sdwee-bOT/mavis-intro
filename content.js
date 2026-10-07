/* ============================================================
   全站文案配置（唯一数据源）
   ------------------------------------------------------------
   修改本文件即可替换页面所有可见文本，无需改动 HTML / CSS / JS。
   所有文案均为占位示例，按实际情况替换即可。

   结构总览：
   meta        站点标题与描述
   nav         顶部导航（Logo / 导航项 / 主行动按钮）
   hero        首屏：大标题、副标题、按钮、数据、右侧信息面板
   about       自我介绍模块（要点列表 + 个人卡片）
   strengths   个人优势模块（能力卡片：擅长 / 工作方式 / 解决问题）
   footer      页脚
   ============================================================ */

window.SITE_CONTENT = {

  /* ---------- 站点信息 ---------- */
  meta: {
    title: "林川 · 全栈产品工程师 | 个人主页",
    description: "全栈产品工程师个人主页：自我介绍、个人优势与合作方式。"
  },

  /* ---------- 顶部导航 ---------- */
  nav: {
    brandMark: "杨",                 // Logo 图形内的字（1 个字最佳）
    brand: "杨文军",                   // Logo 文字
    brandSub: "Personal Site",       // Logo 下方小字
    links: [
      { label: "首页",      href: "#hero" },
      { label: "爱好",      href: "#hobbies" },
      { label: "自我介绍",  href: "#about" },
      { label: "个人优势",  href: "#strengths" }
    ]
  },

  /* ---------- 首屏 Hero ---------- */
  hero: {
    eyebrow: "PORTFOLIO · 2026",
    title: "杨文军",                                        // 大标题主行
    actions: [
      { label: "查看自我介绍", href: "#about",   style: "primary" }
    ],
    panel: {
      filename: "profile.md",
      rows: [
        { k: "姓名",  v: "杨文军" },
        { k: "竞选职位",  v: "班长" },
        { k: "家乡",  v: "贵州安顺" },
        
      ],
      meters: [
        { label: "责任心", value: 92 },
        { label: "抗压能力", value: 88 },
        { label: "集体意识", value: 80 }
      ],
      
    }
  },

  /* ---------- 自我介绍模块 ---------- */
  about: {
    tag: "ABOUT",
    title: "我能带来的",
    desc: "我的优势是做事踏实、有耐心，执行力强，不怕繁琐的统计和通知工作，也愿意倾听大家的想法。各类通知我会整理清晰，及时同步，减少信息差；收集材料统一汇总，尽量不反复打扰大家。同时做好老师和同学之间的桥梁，大家有想法、有困难都可以和我说，我会帮忙沟通反馈。",
    points: [
      {
        title: "信息传递更顺畅",
        text: "所有通知整理清楚再发给大家，重要事项反复提醒，减少漏看通知、错过截止时间的情况。"
      },
      {
        title: "减少大家不必要的麻烦",
        text: "收集材料统一整理，提前检查，尽量一次性搞定，不反复让大家提交、反复填表。"
      },
      {
        title: "班级氛围更融洽",
        text: "多听取同学们想法，组织班级活动的时候兼顾大多数人的意愿，不强行安排大家不想参加的活动。"
      },
      {
        title: "有问题有人及时回应",
        text: "同学们遇到学业、宿舍、生活方面的难处，可以找班委沟通，不会出现有事找不到人的情况。"
      }
    ],
    card: {
      initial: "杨",
      name: "杨文军",
      role: "全栈产品工程师",
      location: "中国 · 深圳",
      intro: "7 年产品研发经验，擅长把复杂业务抽象成清晰的技术方案；习惯用文档和结论对齐团队认知，推动事情从方案走到上线，并对结果负责。",
      tags: ["系统设计", "前端体验", "后端服务", "数据驱动", "跨端协作", "工程化"],
      meta: [
        { k: "邮箱",   v: "hello@example.com" },
        { k: "所在地", v: "深圳 · 可远程" },
        { k: "状态",   v: "开放合作机会" },
        { k: "语言",   v: "中文 / English" }
      ]
    }
  },

  /* ---------- 个人优势模块 ---------- */
  strengths: {
    tag: "STRENGTHS",
    title: "我的优势",
    items: [
      {
        title: "执行力强，做事靠谱",
        howWork: "收到通知会第一时间处理，统计信息、收材料不会拖沓，交代给我的事情，都会按时做完，不容易出错。"
      },
      {
        title: "善于倾听，有耐心",
        howWork: "愿意听同学们的想法，不会自作主张。大家有意见、烦恼都可以跟我说，能好好沟通。"
      },
      {
        title: "责任心强，不怕麻烦",
        howWork: "班级里面琐碎事情很多，填表、通知、组织活动，比较耗时间，我有耐心长期坚持，不会半途而废。"
      },
      {
        title: "善于协调沟通",
        howWork: "可以当好老师和同学中间的桥梁，同学不方便直接跟老师说的问题，我帮忙反馈、沟通。"
      },
      {
        title: "时间比较充裕",
        howWork: "可以拿出课余时间处理班级事务，不会因为太忙耽误班里的事情。"
      }
    ]
  },

  /* ---------- 爱好模块 ---------- */
  hobbies: {
    tag: "HOBBIES",
    title: "我的爱好",
    placeholder: "平时喜欢打游戏，打篮球，旅游，拍照记录生活",
    items: [
      { src: "images/hobby1.jpg", alt: "A chrome sculpture", title: "杭州" },
      { src: "images/hobby2.jpg", alt: "A figure on a white set", title: "杭州" },
      { src: "images/hobby3.jpg", alt: "A clay bust in profile", title: "苏州" },
      { src: "images/hobby4.jpg", alt: "A clay bust in profile", title: "苏州" },
      { src: "images/hobby5.jpg", alt: "aaa", title: "苏州" }


      
    ]
  },

  /* ---------- 页脚 ---------- */
  footer: {
    left: "制作人：徐运来，杨文军",
    right: "Built with HTML / CSS / JS"
  }
};
