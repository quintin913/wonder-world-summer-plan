const plans = [
  {
    week: 1,
    title: "二年級複習與開學準備",
    chinese: "朗讀短文、標自然段、生字端正",
    math: "二位數與三位數加減、九九乘法暖身",
    english: "字母、問候、自我介紹",
    societyNature: "家庭、學校、生活觀察"
  },
  {
    week: 2,
    title: "句子變完整",
    chinese: "造詞、擴句、人物與事情",
    math: "進位加法、退位減法",
    english: "數字、顏色、教室用語",
    societyNature: "時間、規則、植物觀察"
  },
  {
    week: 3,
    title: "閱讀理解起步",
    chinese: "人、時、地、事四要素",
    math: "10000 以內的數",
    english: "I am... / This is...",
    societyNature: "家人分工、水的生活用途"
  },
  {
    week: 4,
    title: "生活日記",
    chinese: "80 到 100 字日記",
    math: "四位數加減入門",
    english: "What is this? 問答",
    societyNature: "社區地點、溶解實驗"
  },
  {
    week: 5,
    title: "找重點",
    chinese: "重點句、摘要兩句",
    math: "長度：公分與毫米",
    english: "動物、物品分類",
    societyNature: "社區地圖、天氣觀察"
  },
  {
    week: 6,
    title: "看圖說故事",
    chinese: "看圖寫 3 到 5 句",
    math: "乘法應用題",
    english: "簡單問答跟讀",
    societyNature: "交通安全、實驗記錄"
  },
  {
    week: 7,
    title: "整理與表達",
    chinese: "120 字暑假小記",
    math: "除法概念、平均分",
    english: "30 秒自我介紹",
    societyNature: "節慶、自然圖表"
  },
  {
    week: 8,
    title: "開學銜接週",
    chinese: "橋梁書閱讀、總複習",
    math: "綜合練習與錯題本",
    english: "常用句複習",
    societyNature: "開學適應、小報告"
  }
];

const wordSets = [
  ["開", "學", "同", "師", "友", "問", "答", "說", "聽", "看"],
  ["家", "事", "做", "幫", "忙", "早", "晚", "飯", "房", "間"],
  ["山", "水", "花", "草", "天", "地", "風", "雨", "雲", "陽"],
  ["路", "車", "站", "店", "買", "賣", "走", "跑", "近", "遠"],
  ["書", "本", "句", "段", "意", "想", "記", "寫", "讀", "習"],
  ["公", "園", "橋", "河", "海", "樹", "鳥", "魚", "光", "影"],
  ["新", "舊", "快", "慢", "長", "短", "高", "低", "前", "後"],
  ["準", "備", "整", "理", "課", "業", "功", "夫", "安", "全"]
];

const readingTexts = [
  "今天早上，小晴背著書包去上學。她在校門口遇到老師，開心地說早安。",
  "爸爸和我一起整理房間。我負責把書放回書架，也把玩具收到盒子裡。",
  "午後下了一場雨，樹葉變得亮亮的。小明站在窗邊，看見天空慢慢變藍。",
  "社區公園裡有許多人。有的人散步，有的人打球，也有人坐在椅子上聊天。",
  "妹妹把糖放進水裡攪一攪，糖慢慢不見了。她好奇地問：糖跑去哪裡了？"
];

function pickMany(items, count) {
  const copy = [...items];
  const picked = [];
  while (picked.length < count && copy.length) {
    const index = Math.floor(Math.random() * copy.length);
    picked.push(copy.splice(index, 1)[0]);
  }
  return picked;
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeMathProblems(week) {
  const problems = [];
  const applications = [];

  if (week <= 2) {
    for (let i = 0; i < 6; i += 1) {
      const a = randomNumber(120, 899);
      const b = randomNumber(40, 399);
      problems.push(`${a} + ${b} =`);
    }
    for (let i = 0; i < 4; i += 1) {
      const a = randomNumber(300, 999);
      const b = randomNumber(80, Math.min(499, a - 20));
      problems.push(`${a} - ${b} =`);
    }
    applications.push("小美有 236 張貼紙，哥哥又給她 148 張，現在共有幾張？");
    applications.push("書店原有 732 本故事書，賣出 216 本，還剩幾本？");
  } else if (week === 3) {
    for (let i = 0; i < 10; i += 1) {
      problems.push(`請寫出 ${randomNumber(1000, 9999)} 的千位、百位、十位、個位。`);
    }
    applications.push("把 4860、4086、4680、4806 由小到大排列。");
    applications.push("一個數比 5000 大，比 6000 小，百位是 3，十位是 8，請寫出一個可能的數。");
  } else if (week === 4) {
    for (let i = 0; i < 6; i += 1) {
      problems.push(`${randomNumber(1000, 7999)} + ${randomNumber(600, 2999)} =`);
    }
    for (let i = 0; i < 4; i += 1) {
      const a = randomNumber(3000, 9999);
      const b = randomNumber(600, a - 500);
      problems.push(`${a} - ${b} =`);
    }
    applications.push("園遊會賣出 1258 張園遊券，下午又賣出 2369 張，全天共賣出幾張？");
    applications.push("圖書館有 6420 本書，借出 1875 本，館內還有幾本？");
  } else if (week === 5) {
    for (let i = 0; i < 6; i += 1) {
      problems.push(`${randomNumber(2, 9)} 公分 ${randomNumber(1, 9)} 毫米 = 多少毫米？`);
    }
    for (let i = 0; i < 4; i += 1) {
      problems.push(`${randomNumber(20, 90)} 毫米 = 多少公分多少毫米？`);
    }
    applications.push("鉛筆長 12 公分 5 毫米，橡皮擦長 4 公分 8 毫米，兩樣東西合起來多長？");
    applications.push("一條緞帶長 30 公分，剪掉 8 公分 6 毫米，還剩多長？");
  } else if (week === 6) {
    for (let i = 0; i < 10; i += 1) {
      problems.push(`${randomNumber(2, 9)} × ${randomNumber(2, 9)} =`);
    }
    applications.push("每盒有 8 顆球，6 盒共有幾顆球？");
    applications.push("一排有 7 張椅子，排成 5 排，共有幾張椅子？");
  } else if (week === 7) {
    for (let i = 0; i < 10; i += 1) {
      const divisor = randomNumber(2, 9);
      const quotient = randomNumber(2, 9);
      problems.push(`${divisor * quotient} ÷ ${divisor} =`);
    }
    applications.push("24 顆糖平均分給 6 個人，每人可以分到幾顆？");
    applications.push("36 本書每 4 本綁成一疊，可以綁成幾疊？");
  } else {
    for (let i = 0; i < 4; i += 1) problems.push(`${randomNumber(1000, 7999)} + ${randomNumber(500, 2999)} =`);
    for (let i = 0; i < 3; i += 1) problems.push(`${randomNumber(3000, 9999)} - ${randomNumber(500, 2499)} =`);
    for (let i = 0; i < 3; i += 1) problems.push(`${randomNumber(2, 9)} × ${randomNumber(2, 9)} =`);
    applications.push("請選一題今天錯的題目，寫出錯的原因和正確做法。");
    applications.push("自己編一題加法或乘法應用題，並寫出答案。");
  }

  return { problems, applications };
}

function renderChinese(week) {
  const words = pickMany(wordSets[week - 1], 5);
  const text = readingTexts[Math.floor(Math.random() * readingTexts.length)];
  return `
    <p><strong>今日生字：</strong></p>
    <div class="word-bank">${words.map(word => `<span>${word}</span>`).join("")}</div>
    <ol>
      <li>每個生字寫 5 次。</li>
      <li>每個生字造 1 個詞。</li>
      <li>選 2 個詞語各造 1 句。</li>
      <li>朗讀短文 2 次：${text}</li>
      <li>閱讀回答：主角是誰？發生什麼事？心情或結果如何？</li>
    </ol>
  `;
}

function renderMath(week) {
  const { problems, applications } = makeMathProblems(week);
  return `
    <p><strong>計算或操作題</strong></p>
    <ol>${problems.map(problem => `<li>${problem} <span class="answer-line"></span></li>`).join("")}</ol>
    <p><strong>應用題</strong></p>
    <ol>${applications.map(problem => `<li>${problem}</li>`).join("")}</ol>
    <p><strong>訂正區：</strong>我錯的題目是 <span class="answer-line"></span>，原因是 <span class="answer-line"></span>。</p>
  `;
}

function generatePractice() {
  const week = Number(document.querySelector("#weekSelect").value);
  document.querySelector("#chineseOutput").innerHTML = renderChinese(week);
  document.querySelector("#mathOutput").innerHTML = renderMath(week);
}

function init() {
  const today = new Date();
  document.querySelector("#todayText").textContent = today.toLocaleDateString("zh-TW", {
    month: "long",
    day: "numeric",
    weekday: "short"
  });

  const weekSelect = document.querySelector("#weekSelect");
  weekSelect.innerHTML = plans.map(plan => `<option value="${plan.week}">第 ${plan.week} 週：${plan.title}</option>`).join("");

  document.querySelector("#weekCards").innerHTML = plans.map(plan => `
    <article class="week-card">
      <h3>第 ${plan.week} 週</h3>
      <ul>
        <li>國語：${plan.chinese}</li>
        <li>數學：${plan.math}</li>
        <li>英文：${plan.english}</li>
        <li>社會自然：${plan.societyNature}</li>
      </ul>
    </article>
  `).join("");

  document.querySelector("#generateBtn").addEventListener("click", generatePractice);
  document.querySelector("#printBtn").addEventListener("click", () => window.print());
  generatePractice();
}

init();
