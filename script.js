const plans = [
  { week: 1, title: "二年級複習與開學準備", chinese: "朗讀短文、標自然段、生字端正", math: "二位數與三位數加減、九九乘法暖身", english: "字母、問候、自我介紹", societyNature: "家庭、學校、生活觀察" },
  { week: 2, title: "句子變完整", chinese: "造詞、擴句、人物與事情", math: "進位加法、退位減法", english: "數字、顏色、教室用語", societyNature: "時間、規則、植物觀察" },
  { week: 3, title: "閱讀理解起步", chinese: "人、時、地、事四要素", math: "10000 以內的數", english: "I am... / This is...", societyNature: "家人分工、水的生活用途" },
  { week: 4, title: "生活日記", chinese: "80 到 100 字日記", math: "四位數加減入門", english: "What is this? 問答", societyNature: "社區地點、溶解實驗" },
  { week: 5, title: "找重點", chinese: "重點句、摘要兩句", math: "長度：公分與毫米", english: "動物、物品分類", societyNature: "社區地圖、天氣觀察" },
  { week: 6, title: "看圖說故事", chinese: "看圖寫 3 到 5 句", math: "乘法應用題", english: "簡單問答跟讀", societyNature: "交通安全、實驗記錄" },
  { week: 7, title: "整理與表達", chinese: "120 字暑假小記", math: "除法概念、平均分", english: "30 秒自我介紹", societyNature: "節慶、自然圖表" },
  { week: 8, title: "開學銜接週", chinese: "橋梁書閱讀、總複習", math: "綜合練習與錯題本", english: "常用句複習", societyNature: "開學適應、小報告" }
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
  "妹妹把糖放進水裡攪一攪，糖慢慢不見了。她好奇地問：糖跑去哪裡了？",
  "阿宏第一次自己整理書包。他把鉛筆盒、聯絡簿和水壺一樣一樣放進去。",
  "我們走到巷口的小店買早餐。老闆笑著說早安，熱熱的飯糰香香的。",
  "小恩在公園看見一隻小鳥。牠跳到樹枝上，歪著頭，好像正在聽聲音。"
];

const englishDays = [
  { words: ["hello", "teacher", "friend"], lines: ["Hello, teacher.", "I am ready.", "This is my friend."] },
  { words: ["red", "blue", "green"], lines: ["It is red.", "I like blue.", "Show me green."] },
  { words: ["one", "two", "three"], lines: ["One, two, three.", "I have two pencils.", "How many?"] },
  { words: ["book", "bag", "pencil"], lines: ["This is my book.", "That is my bag.", "I have a pencil."] },
  { words: ["cat", "dog", "bird"], lines: ["It is a cat.", "I like dogs.", "The bird is small."] },
  { words: ["run", "jump", "walk"], lines: ["I can run.", "Can you jump?", "Let us walk."] },
  { words: ["happy", "sad", "tired"], lines: ["I am happy.", "Are you tired?", "He is sad."] },
  { words: ["morning", "afternoon", "night"], lines: ["Good morning.", "Good afternoon.", "Good night."] }
];

const observationTasks = [
  "畫出家裡到學校或附近便利商店的路線，標出 3 個地點。",
  "訪問一位家人：今天做了哪些家事？把答案寫成 3 句。",
  "觀察一盆植物 5 分鐘，畫葉子形狀，寫下顏色和大小。",
  "做溶解觀察：糖、鹽、沙各一小匙放水裡，記錄哪一個會不見。",
  "觀察今天的天空，記錄天氣、雲量、溫度感覺。",
  "找出家中 3 個會用到水的地方，寫出節水方法。",
  "到社區或家附近看招牌，記錄 3 個商店名稱和用途。",
  "整理開學物品清單：文具、書包、水壺、衛生紙，各檢查一次。"
];

const progressItems = [
  { id: "chineseTablet", label: "國語平板" },
  { id: "chineseWorkbook", label: "國語作業本" },
  { id: "mathTablet", label: "數學平板" },
  { id: "mathWorkbook", label: "數學作業本" },
  { id: "englishTablet", label: "英文平板" },
  { id: "societyNature", label: "社會或自然" }
];

const PARENT_PASSWORD = "0913";
const STUDENT_ID = "hehe";
const CLOUD_CONFIG = window.CLOUD_CONFIG || {};

const mathVideoLinks = [
  { title: "10000 以內的數", url: "https://www.junyiacademy.org/topics/k-m3a" },
  { title: "四位數的加減", url: "https://www.junyiacademy.org/topics/k-m3a" },
  { title: "毫米與長度", url: "https://www.junyiacademy.org/topics/k-m3a" },
  { title: "乘法練習", url: "https://www.junyiacademy.org/topics/k-m3a" }
];

function todayKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function storageKey(dateText = todayKey()) {
  return `hehe-summer-progress:${dateText}`;
}

function cloudEnabled() {
  return Boolean(CLOUD_CONFIG.databaseURL && CLOUD_CONFIG.databaseURL.startsWith("https://"));
}

function cloudUrl(dateText = todayKey()) {
  const base = CLOUD_CONFIG.databaseURL.replace(/\/$/, "");
  return `${base}/summerProgress/${STUDENT_ID}/${dateText}.json`;
}

function updateSyncStatus(message) {
  const status = document.querySelector("#syncStatus");
  if (!status) return;
  if (!cloudEnabled()) {
    status.textContent = "雲端同步：尚未設定資料庫，目前使用本機資料。";
    status.classList.add("offline");
    return;
  }
  status.textContent = message || "雲端同步：已連線 Firebase。";
  status.classList.remove("offline");
}

function loadProgress(dateText = todayKey()) {
  const empty = { checks: {}, note: "", photos: [], savedAt: "" };
  try {
    return { ...empty, ...JSON.parse(localStorage.getItem(storageKey(dateText)) || "{}") };
  } catch {
    return empty;
  }
}

function saveProgress(data, dateText = todayKey()) {
  localStorage.setItem(storageKey(dateText), JSON.stringify(data));
  pushCloudProgress(data, dateText);
}

async function pushCloudProgress(data, dateText = todayKey()) {
  if (!cloudEnabled()) {
    updateSyncStatus();
    return;
  }
  try {
    await fetch(cloudUrl(dateText), {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, syncedAt: new Date().toISOString() })
    });
    updateSyncStatus(`雲端同步：已更新 ${new Date().toLocaleTimeString("zh-TW", { hour: "2-digit", minute: "2-digit" })}`);
  } catch {
    updateSyncStatus("雲端同步：連線失敗，已先保存在這台裝置。");
  }
}

async function pullCloudProgress(dateText = todayKey()) {
  if (!cloudEnabled()) {
    updateSyncStatus();
    return loadProgress(dateText);
  }
  try {
    updateSyncStatus("雲端同步：讀取中...");
    const response = await fetch(cloudUrl(dateText), { cache: "no-store" });
    if (!response.ok) throw new Error("cloud read failed");
    const remote = await response.json();
    if (remote) {
      localStorage.setItem(storageKey(dateText), JSON.stringify(remote));
      updateSyncStatus(`雲端同步：已讀取 ${dateText}`);
      return loadProgress(dateText);
    }
    updateSyncStatus(`雲端同步：${dateText} 尚無資料。`);
  } catch {
    updateSyncStatus("雲端同步：讀取失敗，顯示這台裝置的資料。");
  }
  return loadProgress(dateText);
}

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
    for (let i = 0; i < 6; i += 1) problems.push(`${randomNumber(120, 899)} + ${randomNumber(40, 399)} =`);
    for (let i = 0; i < 4; i += 1) {
      const a = randomNumber(300, 999);
      problems.push(`${a} - ${randomNumber(80, Math.min(499, a - 20))} =`);
    }
    applications.push("小美有 236 張貼紙，哥哥又給她 148 張，現在共有幾張？");
    applications.push("書店有 732 本故事書，賣出 216 本，還剩幾本？");
  } else if (week === 3) {
    for (let i = 0; i < 10; i += 1) problems.push(`請寫出 ${randomNumber(1000, 9999)} 的千位、百位、十位、個位。`);
    applications.push("把 4860、4086、4680、4806 由小到大排列。");
    applications.push("一個數比 5000 大，比 6000 小，百位是 3，十位是 8，請寫出一個可能的數。");
  } else if (week === 4) {
    for (let i = 0; i < 6; i += 1) problems.push(`${randomNumber(1000, 7999)} + ${randomNumber(600, 2999)} =`);
    for (let i = 0; i < 4; i += 1) {
      const a = randomNumber(3000, 9999);
      problems.push(`${a} - ${randomNumber(600, a - 500)} =`);
    }
    applications.push("園遊會上午賣出 1258 張園遊券，下午又賣出 2369 張，全天共賣出幾張？");
    applications.push("圖書館有 6420 本書，借出 1875 本，館內還有幾本？");
  } else if (week === 5) {
    for (let i = 0; i < 6; i += 1) problems.push(`${randomNumber(2, 9)} 公分 ${randomNumber(1, 9)} 毫米 = 多少毫米？`);
    for (let i = 0; i < 4; i += 1) problems.push(`${randomNumber(20, 90)} 毫米 = 多少公分多少毫米？`);
    applications.push("鉛筆長 12 公分 5 毫米，橡皮擦長 4 公分 8 毫米，兩樣合起來多長？");
    applications.push("一條緞帶長 30 公分，剪掉 8 公分 6 毫米，還剩多長？");
  } else if (week === 6) {
    for (let i = 0; i < 10; i += 1) problems.push(`${randomNumber(2, 9)} × ${randomNumber(2, 9)} =`);
    applications.push("每盒有 8 顆球，6 盒共有幾顆球？");
    applications.push("一排有 7 張椅子，排成 5 排，共有幾張椅子？");
  } else if (week === 7) {
    for (let i = 0; i < 10; i += 1) {
      const divisor = randomNumber(2, 9);
      problems.push(`${divisor * randomNumber(2, 9)} ÷ ${divisor} =`);
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

function makeDayMaterials() {
  const days = [];
  for (let week = 1; week <= 8; week += 1) {
    for (let day = 1; day <= 5; day += 1) {
      days.push({
        week,
        day,
        words: pickMany(wordSets[week - 1], 5),
        reading: readingTexts[(week + day - 2) % readingTexts.length],
        english: englishDays[(week + day - 2) % englishDays.length],
        task: observationTasks[(week + day - 2) % observationTasks.length],
        mathLink: mathVideoLinks[(week - 1) % mathVideoLinks.length]
      });
    }
  }
  return days;
}

const dayMaterials = makeDayMaterials();

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
      <li>閱讀回答：主角是誰？發生什麼事？結果如何？</li>
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

function renderMaterials() {
  const index = Number(document.querySelector("#daySelect").value);
  const item = dayMaterials[index];
  const math = makeMathProblems(item.week);
  document.querySelector("#materialsOutput").innerHTML = `
    <article class="material-card">
      <h3>國語平板素材</h3>
      <p class="read-box">${item.reading}</p>
      <ol><li>聽家長或平板朗讀 1 次。</li><li>自己朗讀 2 次。</li><li>口頭回答：誰？在哪裡？做了什麼？</li></ol>
      <div class="link-list">
        <a href="https://stroke-order.learningweb.moe.edu.tw/" target="_blank" rel="noreferrer"><strong>查筆順</strong><span>教育部國字標準字體筆順學習網</span></a>
        <a href="https://dict.mini.moe.edu.tw/" target="_blank" rel="noreferrer"><strong>查字義</strong><span>教育部國語小字典</span></a>
      </div>
    </article>
    <article class="material-card">
      <h3>國語作業本素材</h3>
      <p><strong>今日生字</strong></p>
      <div class="word-bank">${item.words.map(word => `<span>${word}</span>`).join("")}</div>
      <ol><li>每字 5 次。</li><li>每字造 1 個詞。</li><li>選 2 個詞造句。</li><li>寫閱讀題答案 3 句。</li></ol>
    </article>
    <article class="material-card">
      <h3>數學平板素材</h3>
      <p class="prompt-box">今天先看或練習：${plans[item.week - 1].math}</p>
      <div class="link-list"><a href="${item.mathLink.url}" target="_blank" rel="noreferrer"><strong>${item.mathLink.title}</strong><span>均一教育平台類康軒三年級數學</span></a></div>
    </article>
    <article class="material-card">
      <h3>數學作業本素材</h3>
      <ol>${math.problems.slice(0, 8).map(problem => `<li>${problem} <span class="answer-line"></span></li>`).join("")}</ol>
      <p><strong>應用題：</strong>${math.applications[0]}</p>
    </article>
    <article class="material-card">
      <h3>英文平板素材</h3>
      <p><strong>今日單字</strong></p>
      <div class="tag-row">${item.english.words.map(word => `<span>${word}</span>`).join("")}</div>
      <ol>${item.english.lines.map(line => `<li>跟讀 3 次：${line}</li>`).join("")}</ol>
      <div class="link-list"><a href="https://945cloud.knsh.com.tw/CD/E/Study/kWW1/" target="_blank" rel="noreferrer"><strong>Wonder World 1 學習評量</strong><span>康軒國小英語線上聽</span></a></div>
    </article>
    <article class="material-card">
      <h3>社會或自然素材</h3>
      <p class="prompt-box">${item.task}</p>
      <ol><li>畫一張小圖或拍一張照片。</li><li>寫下「我看到」、「我想到」、「我想問」。</li><li>用 1 分鐘說給家人聽。</li></ol>
    </article>
  `;
}

function renderProgressControls() {
  const data = loadProgress();
  document.querySelector("#studentChecklist").innerHTML = progressItems.map(item => `
    <label><input type="checkbox" data-progress-id="${item.id}" ${data.checks[item.id] ? "checked" : ""}> ${item.label}</label>
  `).join("");
  document.querySelector("#studentNote").value = data.note || "";
  renderPhotoPreview("#studentPhotoPreview", data.photos || [], true);
  updateStudentPercent();
}

function collectProgress() {
  const current = loadProgress();
  const checks = {};
  document.querySelectorAll("[data-progress-id]").forEach(input => {
    checks[input.dataset.progressId] = input.checked;
  });
  return {
    ...current,
    checks,
    note: document.querySelector("#studentNote").value.trim(),
    savedAt: new Date().toISOString()
  };
}

function updateStudentPercent() {
  const checked = document.querySelectorAll("[data-progress-id]:checked").length;
  const percent = Math.round((checked / progressItems.length) * 100);
  document.querySelector("#studentPercent").textContent = `${percent}%`;
}

function renderPhotoPreview(targetSelector, photos, allowDelete) {
  const target = document.querySelector(targetSelector);
  if (!photos.length) {
    target.innerHTML = `<p class="read-box">尚未上傳照片。</p>`;
    return;
  }
  target.innerHTML = photos.map((photo, index) => `
    <div class="photo-card">
      <img src="${photo.dataUrl}" alt="手寫作業照片 ${index + 1}">
      ${allowDelete ? `<button type="button" class="secondary" data-delete-photo="${index}">刪除照片</button>` : ""}
    </div>
  `).join("");
}

function resizeImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      const image = new Image();
      image.onerror = reject;
      image.onload = () => {
        const maxSize = 1200;
        const scale = Math.min(1, maxSize / Math.max(image.width, image.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(image.width * scale);
        canvas.height = Math.round(image.height * scale);
        const ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.78));
      };
      image.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

async function addPhotos(files) {
  const data = collectProgress();
  const photos = data.photos || [];
  for (const file of [...files].slice(0, 3)) {
    if (!file.type.startsWith("image/")) continue;
    photos.push({ dataUrl: await resizeImage(file), createdAt: new Date().toISOString() });
  }
  data.photos = photos.slice(-6);
  saveProgress(data);
  renderPhotoPreview("#studentPhotoPreview", data.photos, true);
  renderParentDashboard();
}

async function renderParentDashboard() {
  const dateText = document.querySelector("#parentDate").value || todayKey();
  const data = await pullCloudProgress(dateText);
  const done = progressItems.filter(item => data.checks[item.id]).length;
  const percent = Math.round((done / progressItems.length) * 100);
  const photos = data.photos || [];

  document.querySelector("#parentPercent").textContent = `${percent}%`;
  document.querySelector("#parentDoneCount").textContent = `${done} / ${progressItems.length}`;
  document.querySelector("#parentPhotoCount").textContent = `${photos.length} 張`;
  document.querySelector("#parentNote").textContent = data.note || "尚無留言。";
  document.querySelector("#parentProgressList").innerHTML = progressItems.map(item => `
    <div class="progress-row ${data.checks[item.id] ? "done" : ""}">
      <span>${item.label}</span>
      <strong>${data.checks[item.id] ? "完成" : "未完成"}</strong>
    </div>
  `).join("");
  renderPhotoPreview("#parentPhotoGallery", photos, false);
}

function generatePractice() {
  const week = Number(document.querySelector("#weekSelect").value);
  document.querySelector("#chineseOutput").innerHTML = renderChinese(week);
  document.querySelector("#mathOutput").innerHTML = renderMath(week);
}

function switchView(viewId) {
  document.querySelectorAll(".view").forEach(view => view.classList.toggle("active", view.id === viewId));
  document.querySelectorAll(".tab-button").forEach(button => button.classList.toggle("active", button.dataset.view === viewId));
  if (viewId === "parentView") {
    if (sessionStorage.getItem("parentAuthed") === "yes") {
      showParentDashboard();
    } else {
      showParentLogin();
    }
  }
}

function showParentLogin(message = "") {
  document.querySelector("#parentLogin").classList.remove("locked");
  document.querySelector("#parentDashboard").classList.add("locked");
  document.querySelector("#parentLoginMessage").textContent = message;
}

function showParentDashboard() {
  document.querySelector("#parentLogin").classList.add("locked");
  document.querySelector("#parentDashboard").classList.remove("locked");
  renderParentDashboard();
}

function loginParent() {
  const input = document.querySelector("#parentPassword");
  if (input.value === PARENT_PASSWORD) {
    sessionStorage.setItem("parentAuthed", "yes");
    input.value = "";
    showParentDashboard();
  } else {
    showParentLogin("密碼錯誤，請再試一次。");
  }
}

function logoutParent() {
  sessionStorage.removeItem("parentAuthed");
  showParentLogin("已登出家長後台。");
}

function init() {
  const now = new Date();
  document.querySelector("#todayText").textContent = now.toLocaleDateString("zh-TW", { month: "long", day: "numeric", weekday: "short" });
  document.querySelector("#parentDate").value = todayKey(now);

  document.querySelector("#weekSelect").innerHTML = plans.map(plan => `<option value="${plan.week}">第 ${plan.week} 週：${plan.title}</option>`).join("");
  document.querySelector("#daySelect").innerHTML = dayMaterials.map((item, index) => `<option value="${index}">第 ${item.week} 週，第 ${item.day} 天</option>`).join("");
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

  document.querySelectorAll(".tab-button").forEach(button => button.addEventListener("click", () => switchView(button.dataset.view)));
  document.querySelector("#parentLoginBtn").addEventListener("click", loginParent);
  document.querySelector("#parentPassword").addEventListener("keydown", event => {
    if (event.key === "Enter") loginParent();
  });
  document.querySelector("#parentLogoutBtn").addEventListener("click", logoutParent);
  document.querySelector("#generateBtn").addEventListener("click", generatePractice);
  document.querySelector("#printBtn").addEventListener("click", () => window.print());
  document.querySelector("#daySelect").addEventListener("change", renderMaterials);
  document.querySelector("#studentChecklist").addEventListener("change", () => {
    updateStudentPercent();
    saveProgress(collectProgress());
    renderParentDashboard();
  });
  document.querySelector("#studentNote").addEventListener("input", () => saveProgress(collectProgress()));
  document.querySelector("#saveProgressBtn").addEventListener("click", () => {
    saveProgress(collectProgress());
    document.querySelector("#saveMessage").textContent = "今天進度已儲存。";
    renderParentDashboard();
  });
  document.querySelector("#clearTodayBtn").addEventListener("click", () => {
    localStorage.removeItem(storageKey());
    document.querySelector("#saveMessage").textContent = "今天資料已清除。";
    renderProgressControls();
    renderParentDashboard();
  });
  document.querySelector("#photoInput").addEventListener("change", event => addPhotos(event.target.files));
  document.querySelector("#studentPhotoPreview").addEventListener("click", event => {
    const button = event.target.closest("[data-delete-photo]");
    if (!button) return;
    const data = loadProgress();
    data.photos.splice(Number(button.dataset.deletePhoto), 1);
    saveProgress(data);
    renderPhotoPreview("#studentPhotoPreview", data.photos, true);
    renderParentDashboard();
  });
  document.querySelector("#refreshParentBtn").addEventListener("click", renderParentDashboard);
  document.querySelector("#parentDate").addEventListener("change", renderParentDashboard);

  generatePractice();
  renderMaterials();
  renderProgressControls();
  updateSyncStatus();
  if (sessionStorage.getItem("parentAuthed") === "yes") {
    showParentDashboard();
  } else {
    showParentLogin();
  }
}

init();
