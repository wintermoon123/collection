/* post 页面共享交互：主题切换 + 语言切换 + 滚动显现
   设计 token 与键名同全站（oo-design-theme / oo-design-lang） */
(function () {
  'use strict';
  var root = document.documentElement;
  var toggle = document.getElementById('themeToggle');
  var icon = document.getElementById('themeIcon');
  var langBtn = document.getElementById('langBtn');
  var langMenu = document.getElementById('langMenu');
  var langCurrent = document.getElementById('langCurrent');
  if (!toggle || !langBtn) return;

  var LANGS = [
    { code: 'zh-Hans', tag: 'zh-CN', short: '简', label: '简体中文' },
    { code: 'zh-Hant', tag: 'zh-Hant', short: '繁', label: '繁體中文' },
    { code: 'en', tag: 'en', short: 'EN', label: 'English' },
    { code: 'ko', tag: 'ko', short: '한', label: '한국어' },
    { code: 'ja', tag: 'ja', short: '日', label: '日本語' }
  ];

  var UI = {
    'zh-Hans': { themeDark: '切换到深色模式', themeLight: '切换到浅色模式', langAria: '切换语言', langMenuLabel: '语言', title: 'post · oo的主页', desc: 'oo 的内容与笔记：wiki、blog 与 Q&A。' },
    'zh-Hant': { themeDark: '切換到深色模式', themeLight: '切換到淺色模式', langAria: '切換語言', langMenuLabel: '語言', title: 'post · oo 的首頁', desc: 'oo 的內容與筆記：wiki、blog 與 Q&A。' },
    'en': { themeDark: 'Switch to dark mode', themeLight: 'Switch to light mode', langAria: 'Change language', langMenuLabel: 'Language', title: "post · oo's home", desc: "oo's writing and notes: wiki, blog and Q&A." },
    'ko': { themeDark: '어두운 모드로 전환', themeLight: '밝은 모드로 전환', langAria: '언어 변경', langMenuLabel: '언어', title: 'post · oo의 홈', desc: "oo의 글과 노트: wiki, blog, Q&A." },
    'ja': { themeDark: 'ダークモードに切り替え', themeLight: 'ライトモードに切り替え', langAria: '言語を変更', langMenuLabel: '言語', title: 'post · oo のホーム', desc: 'oo の記事とノート：wiki、blog、Q&A。' }
  };

  /* 与全站一致：只翻译界面文案，正文保持原文 */
  var TEXT = {
    'zh-Hant': {
      'oo的主页': 'oo 的首頁', '作品': '作品', '10 问': '10 問', '书单': '書單', 'post': 'post',
      '跳到主要内容': '跳到主要內容', 'oo的主页，返回主页': 'oo 的首頁，返回首頁', '主导航': '主要導覽',
      '03 / post': '03 / post', '把读过、想过、写过的东西放在这里——知识笔记、长文与问答，持续更新。': '把讀過、想過、寫過的東西放在這裡——知識筆記、長文與問答，持續更新。',
      '栏目导航': '欄目導航', '正在整理': '正在整理',
      '最后更新：2026.11.21': '最後更新：2026.11.21', '最后更新：2026.11.22': '最後更新：2026.11.22', '最后更新：2026.3.24': '最後更新：2026.3.24', '回到顶部 ↑': '回到頂端 ↑',
      '阅读全文': '閱讀全文', '篇内容': '篇內容', '返回 post': '返回 post', '返回顶部': '返回頂部'
    },
    'en': {
      'oo的主页': "oo's home", '作品': 'Works', '10 问': '10 Questions', '书单': 'Reading list', 'post': 'post',
      '跳到主要内容': 'Skip to main content', 'oo的主页，返回主页': "oo's home, back to home", '主导航': 'Main navigation',
      '03 / post': '03 / post', '把读过、想过、写过的东西放在这里——知识笔记、长文与问答，持续更新。': 'Notes on what I read, think about and write — knowledge notes, long-form pieces and Q&A, continuously updated.',
      '栏目导航': 'Sections', '正在整理': 'Coming soon',
      '最后更新：2026.11.21': 'Last updated: 2026.11.21', '最后更新：2026.11.22': 'Last updated: 2026.11.22', '最后更新：2026.3.24': 'Last updated: 2026.3.24', '回到顶部 ↑': 'Back to top ↑',
      '阅读全文': 'Read more', '篇内容': 'pieces', '返回 post': 'Back to post', '返回顶部': 'Back to top'
    },
    'ko': {
      'oo的主页': 'oo의 홈', '作品': '작품', '10 问': '10가지 질문', '书单': '추천 도서', 'post': 'post',
      '跳到主要内容': '본문으로 건너뛰기', 'oo的主页，返回主页': 'oo의 홈, 홈으로 돌아가기', '主导航': '주 메뉴',
      '03 / post': '03 / post', '把读过、想过、写过的东西放在这里——知识笔记、长文与问答，持续更新。': '읽고 생각하고 쓴 것을 모아 둔 곳 — 지식 노트, 장문의 글, Q&A, 계속 업데이트됩니다.',
      '栏目导航': '섹션', '正在整理': '정리 중',
      '最后更新：2026.11.21': '마지막 업데이트: 2026.11.21', '最后更新：2026.11.22': '마지막 업데이트: 2026.11.22', '最后更新：2026.3.24': '마지막 업데이트: 2026.3.24', '回到顶部 ↑': '맨 위로 ↑',
      '阅读全文': '더 읽기', '篇内容': '개 콘텐츠', '返回 post': 'post로 돌아가기', '返回顶部': '맨 위로'
    },
    'ja': {
      'oo的主页': 'oo のホーム', '作品': '作品', '10 问': '10 の問い', '书单': '推薦図書', 'post': 'post',
      '跳到主要内容': 'メインコンテンツへスキップ', 'oo的主页，返回主页': 'oo のホーム、ホームへ戻る', '主导航': 'メインナビ',
      '03 / post': '03 / post', '把读过、想过、写过的东西放在这里——知识笔记、长文与问答，持续更新。': '読んだこと、考えたこと、書いたことをここに — 知識ノート、長文、Q&A、継続更新中。',
      '栏目导航': 'セクション', '正在整理': '整理中',
      '最后更新：2026.11.21': '最終更新：2026.11.21', '最后更新：2026.11.22': '最終更新：2026.11.22', '最后更新：2026.3.24': '最終更新：2026.3.24', '回到顶部 ↑': 'トップへ戻る ↑',
      '阅读全文': '続きを読む', '篇内容': '件', '返回 post': 'post に戻る', '返回顶部': 'トップへ'
    }
  };

  var textNodes = [];
  var attrTargets = [];
  document.querySelectorAll('body *').forEach(function (el) {
    if (el.id === 'themeToggle' || el.id === 'langBtn') return;
    Array.prototype.forEach.call(el.childNodes, function (n) {
      if (n.nodeType === 3 && n.nodeValue.trim()) textNodes.push({ node: n, orig: n.nodeValue, key: n.nodeValue.trim() });
    });
    ['aria-label', 'alt', 'title'].forEach(function (a) {
      if (el.hasAttribute(a)) attrTargets.push({ el: el, attr: a, orig: el.getAttribute(a) });
    });
  });

  var stored = null;
  try { stored = localStorage.getItem('oo-design-theme'); } catch (e) {}
  var theme = stored === 'dark' || stored === 'light' ? stored : 'light';

  function applyTheme(next) {
    var ui = UI[currentLang] || UI['zh-Hans'];
    root.setAttribute('data-theme', next);
    var isDark = next === 'dark';
    toggle.setAttribute('aria-pressed', String(isDark));
    toggle.setAttribute('aria-label', isDark ? ui.themeLight : ui.themeDark);
    toggle.setAttribute('title', isDark ? ui.themeLight : ui.themeDark);
    icon.innerHTML = isDark
      ? '<circle cx="12" cy="12" r="4.2"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4"/>'
      : '<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/>';
    try { localStorage.setItem('oo-design-theme', next); } catch (e) {}
  }

  function applyLang(code) {
    currentLang = code;
    var dict = TEXT[code] || null;
    var lang = LANGS.filter(function (l) { return l.code === code; })[0] || LANGS[0];
    var ui = UI[code] || UI['zh-Hans'];
    root.setAttribute('lang', lang.tag);

    textNodes.forEach(function (t) {
      if (!dict) { t.node.nodeValue = t.orig; return; }
      var tr = dict[t.key];
      t.node.nodeValue = (tr != null) ? tr : t.orig;
    });
    attrTargets.forEach(function (a) {
      if (!dict) { a.el.setAttribute(a.attr, a.orig); return; }
      var tr = dict[a.orig];
      a.el.setAttribute(a.attr, (tr != null) ? tr : a.orig);
    });

    document.title = ui.title;
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', ui.desc);
    langCurrent.textContent = lang.short;
    langBtn.setAttribute('aria-label', ui.langAria);
    langMenu.setAttribute('aria-label', ui.langMenuLabel);
    langMenu.querySelectorAll('button[data-lang]').forEach(function (b) {
      b.setAttribute('aria-checked', String(b.getAttribute('data-lang') === code));
    });

    applyTheme(theme);
    try { localStorage.setItem('oo-design-lang', code); } catch (e) {}
  }

  function openMenu(open) {
    langMenu.hidden = !open;
    langBtn.setAttribute('aria-expanded', String(open));
  }
  langBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    openMenu(langMenu.hidden);
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.lang-wrap')) openMenu(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') openMenu(false);
  });
  langMenu.querySelectorAll('button[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () {
      applyLang(b.getAttribute('data-lang'));
      openMenu(false);
      langBtn.focus();
    });
  });

  toggle.addEventListener('click', function () {
    theme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(theme);
  });

  var currentLang = 'zh-Hans';
  var storedLang = null;
  try { storedLang = localStorage.getItem('oo-design-lang'); } catch (e) {}
  var initLang = LANGS.some(function (l) { return l.code === storedLang; }) ? storedLang : 'zh-Hans';
  applyLang(initLang);

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var items = document.querySelectorAll('.reveal');
  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  }
})();
