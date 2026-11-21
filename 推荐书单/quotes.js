/* ============================================================
   推荐书单 · 摘录便签 数据文件
   ------------------------------------------------------------
   这是书单页「标题下便签」唯一的数据源。
   新增一条摘录 = 在下面的 QUOTES 数组里加一个对象，
   页面会自动多出一张便签，无需改动 index.html。

   字段说明：
   - text    必填，摘录正文。按语言写成对象：
               'zh-Hans' 简体 / 'zh-Hant' 繁体 / en / ko / ja
               某语言没写时，自动回退显示简体中文原文。
   - author  必填，出处或作者，同样按语言写成对象。
   ============================================================ */

window.RECOMMEND_QUOTES = [
  {
    text: {
      'zh-Hans': '人类的脑子里，有99%是由别人的语言与观点构成的。属于自己的原创部分只有剩下的那一丁点。所以一个人读过的书，也表明了其脑内想法的历史轨迹。',
      'zh-Hant': '人類的腦子裡，有99%是由別人的語言與觀點構成的。屬於自己的原創部分只有剩下的那一丁點。所以一個人讀過的書，也表明了其腦內想法的歷史軌跡。',
      en: 'Ninety-nine percent of what is in a person\'s head is made up of other people\'s words and ideas. What is truly your own is only that tiny remainder. So the books a person has read trace the history of the thoughts in their mind.',
      ko: '사람의 머릿속 99%는 다른 사람의 언어와 관점으로 이루어져 있다. 자신만의 독창적인 부분은 나머지 아주 작은 부분뿐이다. 그래서 한 사람이 읽은 책은 그 사람 머릿속 생각의 역사를 보여준다.',
      ja: '人間の頭の中の99%は、他人の言葉と観点でできている。自分だけのオリジナルな部分は、残りのほんの少しだけだ。だから、その人が読んだ本は、その人の頭の中の考えの歴史を示している。'
    },
    author: {
      'zh-Hans': '上野千鹤子',
      'zh-Hant': '上野千鶴子',
      en: 'Chizuko Ueno',
      ko: '우에노 치즈코',
      ja: '上野千鶴子'
    }
  },
  {
    text: {
      'zh-Hans': '依照一种同时从属于历史无意识以及自我意识与意愿的社会逻辑，每个阶级或阶层都倾向于自我延续。对那些感受到恐惧的人来说，恐惧甚至成了他们存在于世的结构。',
      'zh-Hant': '依照一種同時從屬於歷史無意識以及自我意識與意願的社會邏輯，每個階級或階層都傾向於自我延續。對那些感受到恐懼的人來說，恐懼甚至成了他們存在於世的結構。',
      en: 'According to a social logic that belongs as much to the historical unconscious as to conscious awareness and will, every class or social stratum tends to reproduce itself. For those who feel fear, fear even becomes the very structure of their being in the world.',
      ko: '역사적 무의식과 자각 및 의지에 동시에 속하는 사회적 논리에 따라, 모든 계급이나 계층은 스스로를 지속하려는 경향이 있다. 두려움을 느끼는 사람들에게 두려움은 오히려 그들이 세상에 존재하는 방식의 구조가 되기도 한다.',
      ja: '歴史的無意識と、自意識や意志の両方に属する社会的論理に従って、あらゆる階級・階層は自らを再生産しようとする。恐れを感じる人々にとって、恐れはそのまま世界に存在する仕組みにさえなる。'
    },
    author: {
      'zh-Hans': '迪迪埃·埃里蓬',
      'zh-Hant': '迪迪埃·埃里蓬',
      en: 'Didier Eribon',
      ko: '디디에 에리봉',
      ja: 'ディディエ・エリボン'
    }
  },
  {
    text: {
      'zh-Hans': '一旦你走出第一步，就会发生有趣的事情。你的面前出现一个又一个始料未及的难题。你将邂逅激动人心的机会。你可能发现原先的计划早就落伍了，必须走上一条全新的道路。',
      'zh-Hant': '一旦你走出第一步，就會發生有趣的事情。你的面前出現一個又一個始料未及的難題。你將邂逅激動人心的機會。你可能發現原先的計畫早就落伍了，必須走上一條全新的道路。',
      en: 'Once you take the first step, interesting things begin to happen. One unexpected challenge after another appears before you. You will encounter thrilling opportunities. You may discover that your original plan is long out of date and that you must set off on an entirely new path.',
      ko: '일단 첫걸음을 내디디면 재미있는 일이 벌어진다. 예상치 못한 난제가 하나 또 하나 눈앞에 나타난다. 흥분되는 기회를 만나게 된다. 그리고 원래의 계획이 이미 낡아 버렸다는 것을 발견하고, 전혀 새로운 길을 걸어가야 할지도 모른다.',
      ja: '一歩を踏み出せば、面白いことが起きる。想定外の難題が次々と目の前に現れる。心が躍るような機会に出会うだろう。最初の計画がもう時代遅れだと気づき、まったく新しい道を歩むことになるかもしれない。'
    },
    author: {
      'zh-Hans': '《街头生意经》',
      'zh-Hant': '《街頭生意經》',
      en: 'The Knack',
      ko: 'The Knack',
      ja: 'The Knack'
    }
  },
  {
    text: {
      'zh-Hans': '企业本身不是目的，而是用来创造的工具，一种法律意义上的组织，仅此而已。',
      'zh-Hant': '企業本身不是目的，而是用來創造的工具，一種法律意義上的組織，僅此而已。',
      en: 'A business is not an end in itself, but a tool for creating — a legal entity, and nothing more.',
      ko: '기업 자체는 목적이 아니라 창조를 위한 도구이자, 법률적 의미의 조직일 뿐이다.',
      ja: '企業そのものは目的ではなく、創造のための道具であり、法的な意味での組織にすぎない。'
    },
    author: {
      'zh-Hans': '《小而美：持续盈利的经营法则》',
      'zh-Hant': '《小而美：持續獲利的經營法則》',
      en: 'Company of One',
      ko: 'Company of One',
      ja: 'Company of One'
    }
  }
];
