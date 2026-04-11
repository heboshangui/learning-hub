// ===== Resource Data =====
const resources = [
  // ========== 编程开发 ==========
  {
    category: 'programming',
    name: 'GitHub',
    desc: '全球最大的开源代码托管平台，支持 Git 版本控制，汇集了数千万开源项目和学习资源。',
    url: 'https://github.com',
    tags: ['代码托管', '开源', '协作'],
    favicon: 'https://github.githubassets.com/favicons/favicon.svg',
  },
  {
    category: 'programming',
    name: 'MDN Web Docs',
    desc: 'Mozilla 维护的 Web 技术官方文档，涵盖 HTML/CSS/JS 等前端技术的最权威参考。',
    url: 'https://developer.mozilla.org/zh-CN/',
    tags: ['前端', '文档', 'Web'],
    favicon: 'https://developer.mozilla.org/favicon.ico',
  },
  {
    category: 'programming',
    name: 'Stack Overflow',
    desc: '全球最活跃的程序员问答社区，解决开发过程中遇到的各种技术难题。',
    url: 'https://stackoverflow.com',
    tags: ['问答', '社区', '调试'],
    favicon: 'https://cdn.sstatic.net/Sites/stackoverflow/Img/favicon.ico',
  },
  {
    category: 'programming',
    name: '掘金',
    desc: '字节跳动旗下的技术社区，国内最活跃的开发者平台之一，提供高质量技术文章。',
    url: 'https://juejin.cn',
    tags: ['技术博客', '前端', '后端'],
    favicon: 'https://juejin.cn/favicon.ico',
  },
  {
    category: 'programming',
    name: '知乎 - 编程',
    desc: '中文互联网高质量问答社区，在编程话题下有大量深度讨论和专业回答。',
    url: 'https://www.zhihu.com/topic/19550517/hot',
    tags: ['问答', '社区', '深度'],
    favicon: 'https://static.zhihu.com/heifetz/favicon.ico',
  },
  {
    category: 'programming',
    name: 'LeetCode',
    desc: '全球最流行的算法刷题平台，涵盖大厂面试高频算法题，助力技术提升与面试准备。',
    url: 'https://leetcode.cn',
    tags: ['算法', '面试', '刷题'],
    favicon: 'https://leetcode.cn/favicon.ico',
  },
  {
    category: 'programming',
    name: '菜鸟教程',
    desc: '免费编程入门学习网站，涵盖前端、后端、数据库、移动端等各类技术教程。',
    url: 'https://www.runoob.com',
    tags: ['教程', '入门', '全栈'],
    favicon: 'https://www.runoob.com/favicon.ico',
  },
  {
    category: 'programming',
    name: 'freeCodeCamp',
    desc: '免费开源编程学习平台，提供完整的前端/后端/数据科学学习路径，获官方认证。',
    url: 'https://www.freecodecamp.org',
    tags: ['免费', '全栈', '认证'],
    favicon: 'https://cdn.freecodecamp.org/universal/favicons/favicon.ico',
  },
  {
    category: 'programming',
    name: 'Node.js 官方文档',
    desc: 'Node.js 官方文档，提供 JavaScript 运行时 API 参考、指南和核心概念。',
    url: 'https://nodejs.org/zh-cn/docs/',
    tags: ['后端', 'JavaScript', 'Node'],
    favicon: 'https://nodejs.org/static/favicon.ico',
  },
  {
    category: 'programming',
    name: 'CSS Trick',
    desc: '全球最知名的 CSS 技术网站，提供大量 CSS 技巧、布局方案和设计灵感。',
    url: 'https://css-tricks.com',
    tags: ['前端', 'CSS', '布局'],
    favicon: 'https://css-tricks.com/favicon.ico',
  },

  // ========== AI / 机器学习 ==========
  {
    category: 'ai',
    name: 'Hugging Face',
    desc: '全球最大的 AI 模型开源社区，汇集了数十万个预训练模型和数据集，是 NLP 和生成式 AI 的核心平台。',
    url: 'https://huggingface.co',
    tags: ['模型', 'NLP', '开源'],
    favicon: 'https://huggingface.co/favicon.ico',
  },
  {
    category: 'ai',
    name: 'Papers with Code',
    desc: '将学术论文与对应代码结合的平台，方便查找最新 AI 研究的实现代码和评测基准。',
    url: 'https://paperswithcode.com',
    tags: ['论文', '深度学习', '代码'],
    favicon: 'https://paperswithcode.com/favicon.ico',
  },
  {
    category: 'ai',
    name: '飞桨 PaddlePaddle',
    desc: '百度开源的深度学习平台，提供丰富的预训练模型和中文文档，适合国内开发者。',
    url: 'https://www.paddlepaddle.org.cn',
    tags: ['深度学习', '国产', '框架'],
    favicon: 'https://www.paddlepaddle.org.cn/favicon.ico',
  },
  {
    category: 'ai',
    name: '阿里云 AI 社区',
    desc: '阿里云人工智能平台，涵盖机器学习、模型服务、数据标注等一站式 AI 能力。',
    url: 'https://ai.aliyun.com',
    tags: ['云计算', '模型服务', '机器学习'],
    favicon: 'https://ai.aliyun.com/favicon.ico',
  },
  {
    category: 'ai',
    name: 'Kaggle',
    desc: 'Google 旗下的数据科学和机器学习竞赛平台，提供数据集、Notebook 和学习路径。',
    url: 'https://www.kaggle.com',
    tags: ['数据科学', '竞赛', '数据集'],
    favicon: 'https://www.kaggle.com/favicon.ico',
  },
  {
    category: 'ai',
    name: 'Google DeepMind',
    desc: 'DeepMind 官方研究网站，发布最前沿的 AI 研究成果，如 AlphaFold、Transformer 等。',
    url: 'https://deepmind.com/research',
    tags: ['研究', '深度学习', '前沿'],
    favicon: 'https://deepmind.com/favicon.ico',
  },
  {
    category: 'ai',
    name: 'PyTorch 官方文档',
    desc: 'PyTorch 深度学习框架官方文档，是当前学术研究和工程实践中最流行的框架之一。',
    url: 'https://pytorch.org/docs',
    tags: ['深度学习', '框架', 'Python'],
    favicon: 'https://pytorch.org/favicon.ico',
  },
  {
    category: 'ai',
    name: 'Coursera AI 课程',
    desc: '斯坦福、DeepLearning.AI 等顶尖机构在 Coursera 上的 AI/ML 专业课程，部分可免费旁听。',
    url: 'https://www.coursera.org/browse/data-science/machine-learning',
    tags: ['课程', 'ML', '深度学习'],
    favicon: 'https://www.coursera.org/favicon.ico',
  },
  {
    category: 'ai',
    name: 'Fast.ai',
    desc: '免费深度学习课程和库，以"让深度学习人人可学"为使命，课程通俗易懂。',
    url: 'https://www.fast.ai',
    tags: ['课程', '免费', '深度学习'],
    favicon: 'https://www.fast.ai/favicon.ico',
  },

  // ========== 设计产品 ==========
  {
    category: 'design',
    name: 'Figma',
    desc: '基于浏览器的协作 UI 设计工具，支持实时协作、原型制作和设计系统管理。',
    url: 'https://www.figma.com',
    tags: ['UI设计', '协作', '原型'],
    favicon: 'https://static.figma.com/app/icon/1/favicon.ico',
  },
  {
    category: 'design',
    name: 'Behance',
    desc: 'Adobe 旗下的创意作品展示平台，汇集全球设计师的优质 UI、插画、品牌设计作品。',
    url: 'https://www.behance.net',
    tags: ['作品集', 'UI', '插画'],
    favicon: 'https://a5.behance.net/8b216e633bb2d3f9d2e96b4cf2d42a381c5e66c0/img/favicon/favicon.ico',
  },
  {
    category: 'design',
    name: 'Dribbble',
    desc: '全球最知名的设计师社区，提供高质量 UI 设计、动画、品牌设计作品灵感和求职机会。',
    url: 'https://dribbble.com',
    tags: ['设计', '灵感', 'UI'],
    favicon: 'https://cdn.dribbble.com/assets/favicon-b38525134603b9513174ec887944bde1e87e27f1ea54c3a5e3e8c4c7e8a8d4d.png',
  },
  {
    category: 'design',
    name: '即刻',
    desc: '国内活跃的产品经理和设计师社区，话题覆盖产品设计、交互体验、职场成长等。',
    url: 'https://web.okjike.com',
    tags: ['产品经理', '社区', '交互'],
    favicon: 'https://web.okjike.com/favicon.ico',
  },
  {
    category: 'design',
    name: '站酷 ZCOOL',
    desc: '国内最活跃的设计师互动平台，涵盖 UI、插画、摄影、三维等多元设计领域。',
    url: 'https://www.zcool.com.cn',
    tags: ['设计师', '作品', '灵感'],
    favicon: 'https://www.zcool.com.cn/favicon.ico',
  },
  {
    category: 'design',
    name: 'UI Notes',
    desc: '收录精选 UI 设计案例的灵感网站，按组件分类，方便设计师查找参考。',
    url: 'https://uinotes.com',
    tags: ['UI', '组件', '灵感'],
    favicon: 'https://uinotes.com/favicon.ico',
  },
  {
    category: 'design',
    name: 'Mobbin',
    desc: '收录全球顶级 App 最新 UI 设计的灵感网站，涵盖登录、首页、搜索等常见流程。',
    url: 'https://mobbin.com',
    tags: ['App设计', '灵感', 'UI'],
    favicon: 'https://mobbin.com/favicon.ico',
  },
  {
    category: 'design',
    name: 'Pinterest',
    desc: '全球最大的图片灵感收藏平台，通过瀑布流方式发现和整理设计灵感和创意素材。',
    url: 'https://www.pinterest.com',
    tags: ['灵感', '素材', '视觉'],
    favicon: 'https://s.pinimg.com/webapp/static/favicon.ico',
  },

  // ========== 金融投资 ==========
  {
    category: 'finance',
    name: '东方财富',
    desc: '国内最大的财经资讯与行情平台，提供股票、基金、债券、期货等全品类金融数据。',
    url: 'https://www.eastmoney.com',
    tags: ['行情', '资讯', '股票'],
    favicon: 'https://www.eastmoney.com/favicon.ico',
  },
  {
    category: 'finance',
    name: '同花顺',
    desc: '老牌证券行情分析软件，提供 K 线图、技术指标、自选股管理等丰富功能。',
    url: 'https://www.10jqka.com.cn',
    tags: ['行情', '技术分析', '炒股'],
    favicon: 'https://www.10jqka.com.cn/favicon.ico',
  },
  {
    category: 'finance',
    name: '雪球',
    desc: '国内最大的投资者社区，汇聚了价值投资理念，提供股票组合、财报分析和社区讨论。',
    url: 'https://xueqiu.com',
    tags: ['投资', '社区', '组合'],
    favicon: 'https://xueqiu.com/favicon.ico',
  },
  {
    category: 'finance',
    name: '富途牛牛',
    desc: '提供港股、美股、A 股行情和交易的一站式投资平台，社区氛围活跃。',
    url: 'https://www.futunn.com',
    tags: ['港美股', '行情', '交易'],
    favicon: 'https://www.futunn.com/favicon.ico',
  },
  {
    category: 'finance',
    name: 'Wind 万得',
    desc: '国内最权威的金融数据终端，被机构投资者广泛使用，提供宏观、行业、公司全维度数据。',
    url: 'https://www.wind.com.cn',
    tags: ['数据', '机构', '宏观'],
    favicon: 'https://www.wind.com.cn/favicon.ico',
  },
  {
    category: 'finance',
    name: 'Bloomberg',
    desc: '全球最大的财经资讯与金融数据平台，提供实时行情、新闻、分析工具（部分收费）。',
    url: 'https://www.bloomberg.com',
    tags: ['国际', '资讯', '数据'],
    favicon: 'https://www.bloomberg.com/favicon.ico',
  },
  {
    category: 'finance',
    name: '36氪',
    desc: '关注新经济（科技、创业、投资）的深度报道平台，解读行业趋势和商业机会。',
    url: 'https://36kr.com',
    tags: ['创业', '投资', '科技'],
    favicon: 'https://36kr.com/favicon.ico',
  },
  {
    category: 'finance',
    name: '虎嗅',
    desc: '深度商业资讯平台，聚焦互联网、科技、消费等领域的商业模式和趋势分析。',
    url: 'https://www.huxiu.com',
    tags: ['商业', '科技', '分析'],
    favicon: 'https://www.huxiu.com/favicon.ico',
  },

  // ========== 语言学习 ==========
  {
    category: 'language',
    name: '多邻国 Duolingo',
    desc: '全球最流行的免费语言学习 App，以游戏化方式学习英语、日语、韩语等 40+ 语言。',
    url: 'https://www.duolingo.com',
    tags: ['英语', '日语', '免费'],
    favicon: 'https://d35aaqx5ub95lt.cloudfront.net/favicon.ico',
  },
  {
    category: 'language',
    name: '可可英语',
    desc: '国内老牌英语学习网站，提供VOA/BBC听力、四六级真题、英文名著等丰富资源。',
    url: 'https://www.kekenet.com',
    tags: ['听力', '四六级', '英语'],
    favicon: 'https://www.kekenet.com/favicon.ico',
  },
  {
    category: 'language',
    name: '简明日语',
    desc: '日本 NHK 广播电视台出品的免费日语学习课程，对应 JLPT N5～N3 级别，适合初学者。',
    url: 'https://www.nhk.or.jp/lesson/chinese/',
    tags: ['日语', 'NHK', '免费'],
    favicon: 'https://www.nhk.or.jp/favicon.ico',
  },
  {
    category: 'language',
    name: 'Anki',
    desc: '开源间隔重复记忆软件，可制作单词卡片，支持导入他人共享牌组，是语言学习的王牌工具。',
    url: 'https://apps.ankiweb.net',
    tags: ['背单词', '记忆', '间隔重复'],
    favicon: 'https://apps.ankiweb.net/favicon.ico',
  },
  {
    category: 'language',
    name: '沪江外语',
    desc: '沪江旗下多语种学习平台，提供日语、法语、德语等课程，涵盖从入门到专业的体系。',
    url: 'https://www.hujiang.com',
    tags: ['日语', '多语种', '课程'],
    favicon: 'https://www.hujiang.com/favicon.ico',
  },
  {
    category: 'language',
    name: 'Tandem',
    desc: '语言交换社交平台，与母语者进行一对一语言交流，实现真正沉浸式学习。',
    url: 'https://www.tandem.net',
    tags: ['口语', '语言交换', '社交'],
    favicon: 'https://www.tandem.net/favicon.ico',
  },
  {
    category: 'language',
    name: 'YouTube 学习频道',
    desc: 'YouTube 上大量优质外语学习频道，如 EnglishAddict、Japanese Ammo with Mika 等。',
    url: 'https://www.youtube.com/results?search_query=learn+english',
    tags: ['YouTube', '听力', '口语'],
    favicon: 'https://www.youtube.com/s/desktop/favicon.ico',
  },

  // ========== 综合资源 ==========
  {
    category: 'general',
    name: 'B站学习区',
    desc: 'B站（哔哩哔哩）汇聚了大量优质学习 UP 主，覆盖编程、设计、考研、科普等各领域。',
    url: 'https://www.bilibili.com/v/popular/history/',
    tags: ['视频', '学习', '中文'],
    favicon: 'https://www.bilibili.com/favicon.ico',
  },
  {
    category: 'general',
    name: 'Coursera',
    desc: '与全球顶尖大学合作的在线学习平台，提供 AI、金融、商业等方向的权威认证课程。',
    url: 'https://www.coursera.org',
    tags: ['MOOC', '课程', '认证'],
    favicon: 'https://www.coursera.org/favicon.ico',
  },
  {
    category: 'general',
    name: '网易公开课',
    desc: '汇集哈佛、耶鲁、清华、北大等顶尖学府公开课，涵盖人文、社科、理工等全学科。',
    url: 'https://open.163.com',
    tags: ['公开课', '大学', '免费'],
    favicon: 'https://open.163.com/favicon.ico',
  },
  {
    category: 'general',
    name: 'edX',
    desc: 'MIT 和哈佛联合创立的 MOOC 平台，提供来自全球 160+ 所大学的免费在线课程。',
    url: 'https://www.edx.org',
    tags: ['MOOC', '大学', '免费'],
    favicon: 'https://www.edx.org/favicon.ico',
  },
  {
    category: 'general',
    name: '中国大学MOOC',
    desc: '国内最好的大学课程学习平台，汇聚985高校课程，可获得认证证书。',
    url: 'https://www.icourse163.org',
    tags: ['MOOC', '大学', '中国'],
    favicon: 'https://www.icourse163.org/favicon.ico',
  },
  {
    category: 'general',
    name: '可汗学院 Khan Academy',
    desc: '美国非营利教育平台，课程覆盖数学、科学、编程、经济等，完全免费。',
    url: 'https://zh.khanacademy.org',
    tags: ['数学', '免费', 'K12'],
    favicon: 'https://zh.khanacademy.org/favicon.ico',
  },
  {
    category: 'general',
    name: 'TED',
    desc: '汇集全球各领域思想领袖的演讲视频，涵盖科技、社会、文化等主题，训练英语听力的绝佳素材。',
    url: 'https://www.ted.com',
    tags: ['演讲', '英语', '视野'],
    favicon: 'https://tedcdn.github.io/favicon.ico',
  },
  {
    category: 'general',
    name: '学术搜索 Google Scholar',
    desc: ' Google 学术搜索，查找学术论文、引用和研究成果，是科研工作者必备工具。',
    url: 'https://scholar.google.com',
    tags: ['学术', '论文', '研究'],
    favicon: 'https://scholar.google.com/favicon.ico',
  },
];

// ===== Category Info =====
const categoryMeta = {
  programming: { label: '💻 编程开发', color: '#58a6ff' },
  ai: { label: '🤖 AI/ML', color: '#bc8cff' },
  design: { label: '🎨 设计产品', color: '#f778ba' },
  finance: { label: '💰 金融投资', color: '#3fb950' },
  language: { label: '🌏 语言学习', color: '#f0883e' },
  general: { label: '🚀 综合资源', color: '#d29922' },
};

// ===== Render Functions =====
function getFaviconUrl(url, favicon) {
  if (favicon) return favicon;
  try {
    const u = new URL(url);
    return `https://www.google.com/s2/favicons?domain=${u.hostname}&sz=32`;
  } catch {
    return 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="%231c2128"/><text x="16" y="22" font-size="16" text-anchor="middle" fill="%2358a6ff">🔗</text></svg>';
  }
}

function createCard(item) {
  const catMeta = categoryMeta[item.category] || { label: item.category, color: '#8b949e' };
  const faviconUrl = getFaviconUrl(item.url, item.favicon);
  const tagsHtml = item.tags.map(tag => {
    const tagClass = `tag tag-${item.category}`;
    return `<span class="${tagClass}">${tag}</span>`;
  }).join('');

  return `
    <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="resource-card" data-category="${item.category}">
      <div class="card-header">
        <span class="card-title">${item.name}</span>
        <img src="${faviconUrl}" alt="favicon" class="card-favicon" onerror="this.style.display='none'">
      </div>
      <p class="card-desc">${item.desc}</p>
      <div class="card-tags">
        ${tagsHtml}
      </div>
    </a>
  `;
}

function renderResources(filterCategory = 'all', searchTerm = '') {
  const grid = document.getElementById('resourceGrid');
  const noResults = document.getElementById('noResults');

  const filtered = resources.filter(r => {
    const matchCat = filterCategory === 'all' || r.category === filterCategory;
    const term = searchTerm.toLowerCase();
    const matchSearch = !term ||
      r.name.toLowerCase().includes(term) ||
      r.desc.toLowerCase().includes(term) ||
      r.tags.some(t => t.toLowerCase().includes(term));
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '';
    noResults.classList.remove('hidden');
    return;
  }

  noResults.classList.add('hidden');
  grid.innerHTML = filtered.map(createCard).join('');
}

// ===== Event Listeners =====
const catBtns = document.querySelectorAll('.cat-btn');
let currentCat = 'all';

catBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    currentCat = btn.dataset.category;
    catBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const term = document.getElementById('searchInput').value;
    renderResources(currentCat, term);
  });
});

const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', (e) => {
  renderResources(currentCat, e.target.value);
});

// ===== Init =====
renderResources();
