/* ============================================================
   推荐书单 · 数据文件
   ------------------------------------------------------------
   这是书单页面唯一的数据源。想新增/删除/调整书籍，
   只需修改下面的 BOOKS 数组，页面会自动更新，无需改 HTML。

   新增书籍时：把豆瓣书籍链接发给我（形如
   https://book.douban.com/subject/数字/），我会自动抓取封面与评分并加入。

   字段说明：
   - title  必填，书名
   - author 必填，作者
   - cat    必填，分类，只能是 "社科" 或 "心理"
   - rating 选填，豆瓣评分
   - desc   选填，一句话推荐语
   - cover  选填，封面图相对路径（图片放在 covers/ 目录）
   - url    必填，豆瓣条目页链接
   ============================================================ */

window.RECOMMEND_BOOKS = [
  {
    title:  "置身事内",
    author: "兰小欢",
    cat:    "社科",
    rating: "9.1",
    desc:   "读懂中国政府与经济运行的现实逻辑，理解身边的发展从何而来。",
    cover:  "covers/35546622.jpg",
    url:    "https://book.douban.com/subject/35546622/",
  },
  {
    title:  "大国大城",
    author: "陆铭",
    cat:    "社科",
    rating: "8.7",
    desc:   "从经济地理视角看中国的统一、发展与平衡，重新理解城市与区域。",
    cover:  "covers/26824237.jpg",
    url:    "https://book.douban.com/subject/26824237/",
  },
  {
    title:  "工作、消费主义和新穷人",
    author: "齐格蒙特·鲍曼",
    cat:    "社科",
    rating: "8.3",
    desc:   "当工作伦理退场，消费主义如何制造出新的穷人。",
    cover:  "covers/35593780.jpg",
    url:    "https://book.douban.com/subject/35593780/",
  },
  {
    title:  "躺不平的千禧一代",
    author: "安妮·海伦·彼得森",
    cat:    "社科",
    rating: "8.1",
    desc:   "美国千禧一代为何「躺不平」——关于债务、工作与理想的社会观察。",
    cover:  "covers/36514708.jpg",
    url:    "https://book.douban.com/subject/36514708/",
  },
  {
    title:  "运气的诱饵",
    author: "娜塔莎·道·舒尔",
    cat:    "社科",
    rating: "8.5",
    desc:   "走进老虎机的设计内幕，看懂运气、成瘾与失控背后的机制。",
    cover:  "covers/35662675.jpg",
    url:    "https://book.douban.com/subject/35662675/",
  },
  {
    title:  "被讨厌的勇气",
    author: "岸见一郎 / 古贺史健",
    cat:    "心理",
    rating: "8.5",
    desc:   "以对话体讲阿德勒心理学：一切烦恼都来自人际关系。",
    cover:  "covers/26369699.jpg",
    url:    "https://book.douban.com/subject/26369699/",
  },
  {
    title:  "蛤蟆先生去看心理医生",
    author: "罗伯特·戴博德",
    cat:    "心理",
    rating: "8.3",
    desc:   "跟着蛤蟆先生做十次心理咨询，轻松读懂心理咨询的过程。",
    cover:  "covers/35143790.jpg",
    url:    "https://book.douban.com/subject/35143790/",
  },
  {
    title:  "100个远离焦虑的小方法",
    author: "奥利弗·卢克·德洛里",
    cat:    "心理",
    rating: "7.8",
    desc:   "100 个随手可做的小练习，帮助日常缓解焦虑、安顿情绪。",
    cover:  "covers/35812499.jpg",
    url:    "https://book.douban.com/subject/35812499/",
  },
];