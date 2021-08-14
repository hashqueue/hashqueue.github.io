// nav
module.exports = [
  { text: '首页', link: '/' },
  // {
  //   text: '技术',
  //   link: '/technology/',
  //   items: [
  //     { text: '技术文档', link: '/pages/9a7ee40fc232253e/' },
  //     { text: 'GitHub技巧', link: '/pages/4c778760be26d8b3/' },
  //     { text: 'Nodejs', link: '/pages/117708e0af7f0bd9/' },
  //     { text: '博客搭建', link: '/pages/41f87d890d0a02af/' },
  //   ],
  // },
  { text: '关于', link: '/about/' },
  {
    text: '收藏',
    link: '/categories/?category=收藏',
    items: [
      { text: '大佬的博客', link: '/pages/a5f74c/' }
    ],
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
