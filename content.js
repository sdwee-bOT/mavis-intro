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
    brandMark: "王",                 // Logo 图形内的字（1 个字最佳）
    brand: "王依一",                   // Logo 文字
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
    title: "王依一",                                        // 大标题主行
    titleFocus: "",                          // 大标题强调行（渐变色）
    subtitle: "想",
    actions: [
      { label: "查看自我介绍", href: "#about",   style: "primary" }
    ],
    stats: [
      { value: "7+",  label: "年研发经验" },
      { value: "30+", label: "交付项目" },
      { value: "3",   label: "百万级用户产品" }
    ],
    panel: {
      filename: "profile.md",
      rows: [
        { k: "姓名",  v: "王依一" },
        { k: "竞选职位",  v: "ssss" },
        { k: "家乡",  v: "中国 · 深圳" },
        
      ],
      meters: [
        { label: "系统设计与架构", value: 92 },
        { label: "前端体验与性能", value: 88 },
        { label: "数据驱动与增长", value: 80 }
      ],
      status: "当前状态：开放合作与远程机会"
    }
  },

  /* ---------- 自我介绍模块 ---------- */
  about: {
    tag: "ABOUT",
    title: "先理解问题，再动手解决",
    desc: "我习惯从业务目标与用户场景出发，把模糊需求拆成可验证的小问题，再用工程手段逐个解决。比起堆功能，我更在意系统是否长期可维护、体验是否一致。",
    points: [
      {
        title: "一句话定位",
        text: "既懂业务语言、又能落地代码的复合型工程师，能在产品、设计与研发之间做有效翻译。"
      },
      {
        title: "成长轨迹",
        text: "从一线业务开发起步，逐步负责模块拆分与架构设计，近三年主导跨端产品从 0 到 1 的搭建与迭代。"
      },
      {
        title: "当前关注",
        text: "复杂系统的可维护性、前端性能与体验一致性，以及用数据指标验证每个改动是否真的有效。"
      }
    ],
    card: {
      initial: "林",
      name: "林川",
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
    title: "我能带来的",
    desc: "我的优势是做事踏实、有耐心，执行力强，不怕繁琐的统计和通知工作，也愿意倾听大家的想法。各类通知我会整理清晰，及时同步，减少信息差；收集材料统一汇总，尽量不反复打扰大家。同时做好老师和同学之间的桥梁，大家有想法、有困难都可以和我说，我会帮忙沟通反馈。",
    items: [
      {
        title: "信息传递更顺畅",
        howWork: "所有通知整理清楚再发给大家，重要事项反复提醒，减少漏看通知、错过截止时间的情况。"
      },
      {
        title: "减少大家不必要的麻烦",
        howWork: "收集材料统一整理，提前检查，尽量一次性搞定，不反复让大家提交、反复填表。"
      },
      {
        title: "班级氛围更融洽",
        howWork: "多听取同学们想法，组织班级活动的时候兼顾大多数人的意愿，不强行安排大家不想参加的活动。"
      },
      {
        title: "有问题有人及时回应",
        howWork: "同学们遇到学业、宿舍、生活方面的难处，可以找班委沟通，不会出现有事找不到人的情况。"
      }
    ]
  },

  /* ---------- 爱好模块 ---------- */
  hobbies: {
    tag: "HOBBIES",
    title: "我的爱好",
    placeholder: "这里写爱好",
    items: [
      { src: "images/image1.jpg", alt: "A chrome sculpture", title: "Iridescence" },
      { src: "images/image2.jpg", alt: "A figure on a white set", title: "White Room" },
      { src: "images/three.jpg", alt: "A clay bust in profile", title: "Clay Study", subtitle: "Studio 04" }
    ]
  },

  /* ---------- 页脚 ---------- */
  footer: {
    left: "制作人：徐运来，杨文军",
    right: "Built with HTML / CSS / JS"
  }
};
