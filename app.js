// ============ B2 First Trainer — lógica ============

// ---------- Estado persistente (localStorage) ----------
const store = {
  load() {
    try { return JSON.parse(localStorage.getItem("fce_state")) || {}; }
    catch { return {}; }
  },
  save(state) { localStorage.setItem("fce_state", JSON.stringify(state)); }
};

let S = Object.assign({
  xp: 0,
  completed: {},        // { exerciseId: bestScorePct }
  streakDays: 0,
  lastVisit: null,
  drafts: {}            // { taskId: texto }
}, store.load());

// Migración: ids antiguos (una sola batería) → ids con índice de batería
(function migrateIds() {
  const map = { mcCloze: "mcCloze0", openCloze: "openCloze0", wordForm: "wordForm0", transform: "transform0", reading: "reading0", grammar: "grammar0" };
  let changed = false;
  for (const [oldId, newId] of Object.entries(map)) {
    if (S.completed[oldId] !== undefined) {
      S.completed[newId] = Math.max(S.completed[newId] || 0, S.completed[oldId]);
      delete S.completed[oldId];
      changed = true;
    }
  }
  if (changed) store.save(S);
})();

function persist() { store.save(S); updatePills(); }

// Racha diaria
(function updateStreak() {
  const today = new Date().toISOString().slice(0, 10);
  if (S.lastVisit !== today) {
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    S.streakDays = (S.lastVisit === yesterday) ? S.streakDays + 1 : 1;
    S.lastVisit = today;
    persist();
  }
})();

function addXP(n) {
  S.xp += n;
  persist();
  toast(`+${n} XP ⭐`);
}

function markCompleted(id, pct) {
  const prev = S.completed[id] || 0;
  if (pct > prev) S.completed[id] = pct;
  persist();
}

function updatePills() {
  document.getElementById("xpPill").textContent = `⭐ ${S.xp} XP`;
  document.getElementById("streakPill").textContent = `🔥 Racha: ${S.streakDays} día${S.streakDays === 1 ? "" : "s"}`;
}

// ---------- Utilidades ----------
const main = document.getElementById("main");

function toast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(t._h);
  t._h = setTimeout(() => t.classList.remove("show"), 2200);
}

function el(html) {
  const d = document.createElement("div");
  d.innerHTML = html.trim();
  return d.firstElementChild;
}

function norm(s) {
  return s.trim().toLowerCase().replace(/\s+/g, " ").replace(/[’']/g, "'");
}

function banner(scored, total) {
  const pct = Math.round((scored / total) * 100);
  const cls = pct >= 75 ? "good" : pct >= 50 ? "mid" : "bad";
  const msg = pct >= 75 ? "¡Genial! Nivel de aprobado holgado 🎉"
    : pct >= 50 ? "Bien, pero repasa los fallos 💪"
    : "No te desanimes: revisa las respuestas y vuelve a intentarlo 🔁";
  return `<div class="result-banner ${cls}">${scored}/${total} correctas (${pct}%) — ${msg}</div>`;
}

// Selector de batería (Texto 1 / Texto 2 / …) con marca de superado
function setPickerHTML(sets, current, baseId) {
  return `<div class="tabs" data-setpicker>
    ${sets.map((s, i) => {
      const done = (S.completed[baseId + i] || 0) >= 75 ? " ✅" : "";
      return `<button class="tab-btn ${i === current ? "active" : ""}" data-set="${i}">${s.name}${done}</button>`;
    }).join("")}
  </div>`;
}

function bindSetPicker(container, rerender) {
  container.querySelectorAll("[data-setpicker] .tab-btn").forEach(b => {
    b.addEventListener("click", () => rerender(+b.dataset.set));
  });
}

// ---------- Navegación ----------
const views = {};
document.querySelectorAll(".nav-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    stopSpeech();
    views[btn.dataset.view]();
    main.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// ---------- Vista: Inicio ----------
function moduleIds() {
  return {
    reading: [
      ...DATA.mcCloze.sets.map((_, i) => "mcCloze" + i),
      ...DATA.openCloze.sets.map((_, i) => "openCloze" + i),
      ...DATA.wordFormation.sets.map((_, i) => "wordForm" + i),
      ...DATA.transformations.sets.map((_, i) => "transform" + i),
      ...DATA.reading.sets.map((_, i) => "reading" + i)
    ],
    listening: DATA.listening.map((_, i) => "listen" + i),
    grammar: DATA.grammar.sets.map((_, i) => "grammar" + i)
  };
}

views.home = function () {
  const ids = moduleIds();
  const nRU = ids.reading.length;
  const modules = [
    { view: "reading", emoji: "📖", name: "Reading & Use of English", desc: `${nRU} ejercicios: cloze, word formation, transformaciones y lecturas.`, ids: ids.reading },
    { view: "writing", emoji: "✍️", name: "Writing", desc: "Essay, article, email y review con guías y corrector de extensión.", ids: [] },
    { view: "listening", emoji: "🎧", name: "Listening", desc: `${DATA.listening.length} audios con preguntas de comprensión.`, ids: ids.listening },
    { view: "speaking", emoji: "🗣️", name: "Speaking", desc: "Las 4 partes del oral con temporizador real.", ids: [] },
    { view: "vocab", emoji: "🃏", name: "Vocabulario", desc: `${DATA.flashcards.length} flashcards de phrasal verbs y expresiones B2.`, ids: [] },
    { view: "grammar", emoji: "🧩", name: "Gramática", desc: `${DATA.grammar.sets.length} quizzes de las estructuras que más caen.`, ids: ids.grammar }
  ];

  main.innerHTML = `
    <div class="view-header">
      <h2>¡Hola! 👋 Tu entrenamiento para el B2 First</h2>
      <p class="sub">Practica un poco cada día: la racha 🔥 y los puntos ⭐ crecen con cada ejercicio. Empieza por el módulo que más te cueste.</p>
    </div>
    <div class="grid" id="homeGrid"></div>
    <div class="card">
      <h3>📋 Así es el examen real</h3>
      <p class="hint">Cuatro pruebas. Necesitas una media de 160 puntos (escala Cambridge) para aprobar el B2.</p>
      <div class="exam-info">
        ${DATA.examParts.map(p => `
          <div class="exam-part">
            <strong>${p.name}</strong>
            ⏱️ ${p.time}<br>📊 ${p.weight}<br>📝 ${p.detail}
          </div>`).join("")}
      </div>
    </div>
    <div class="card">
      <h3>💡 Consejo del día</h3>
      <p>${dailyTip()}</p>
    </div>`;

  const grid = document.getElementById("homeGrid");
  modules.forEach(m => {
    const pct = m.ids.length
      ? Math.round(m.ids.reduce((a, id) => a + (S.completed[id] || 0), 0) / m.ids.length)
      : null;
    const card = el(`
      <div class="module-card">
        <div class="emoji">${m.emoji}</div>
        <h4>${m.name}</h4>
        <p>${m.desc}</p>
        ${pct !== null ? `<div class="bar"><div style="width:${pct}%"></div></div>` : ""}
      </div>`);
    card.addEventListener("click", () => {
      document.querySelector(`.nav-btn[data-view="${m.view}"]`).click();
    });
    grid.appendChild(card);
  });
};

function dailyTip() {
  const tips = [
    "En el Use of English Part 4, la respuesta casi siempre tiene entre 2 y 5 palabras. Si te salen 6, algo sobra.",
    "En el Writing, cuenta las palabras SIEMPRE. Menos de 140 penaliza; más de 190 suele traer errores extra.",
    "En el Listening escucharás cada audio DOS veces. Usa la primera para responder y la segunda para confirmar.",
    "En el Speaking, quedarte en silencio es peor que equivocarte. Usa 'Well, let me think…' para ganar tiempo.",
    "Lee las preguntas ANTES que el texto en Reading Part 5: sabrás qué buscar.",
    "Aprende phrasal verbs en frases completas, nunca en listas sueltas: se te quedarán mejor.",
    "10 minutos al día valen más que 2 horas el domingo. ¡Por eso existe la racha! 🔥"
  ];
  return tips[new Date().getDate() % tips.length];
}

// ---------- Vista: Reading & Use of English ----------
views.reading = function () {
  main.innerHTML = `
    <div class="view-header">
      <h2>📖 Reading &amp; Use of English</h2>
      <p class="sub">La prueba más larga del examen (40% de la nota). Practica cada parte por separado: cada una tiene varias baterías de ejercicios.</p>
    </div>
    <div class="tabs" id="ruTabs">
      <button class="tab-btn active" data-tab="p1">Part 1 · Cloze</button>
      <button class="tab-btn" data-tab="p2">Part 2 · Open cloze</button>
      <button class="tab-btn" data-tab="p3">Part 3 · Word formation</button>
      <button class="tab-btn" data-tab="p4">Part 4 · Transformations</button>
      <button class="tab-btn" data-tab="p5">Part 5 · Reading</button>
    </div>
    <div id="ruContent"></div>`;

  const tabs = { p1: renderMcCloze, p2: renderOpenCloze, p3: renderWordFormation, p4: renderTransformations, p5: renderReading };
  document.querySelectorAll("#ruTabs .tab-btn").forEach(b => {
    b.addEventListener("click", () => {
      document.querySelectorAll("#ruTabs .tab-btn").forEach(x => x.classList.remove("active"));
      b.classList.add("active");
      tabs[b.dataset.tab](0);
    });
  });
  renderMcCloze(0);
};

function gapTextHTML(parts, gapHTML) {
  // parts alterna texto y números de hueco
  return parts.map(p => typeof p === "number" ? gapHTML(p) : p.replace(/\n\n/g, "<br><br>")).join("");
}

function renderMcCloze(setIdx) {
  const D = DATA.mcCloze;
  const set = D.sets[setIdx];
  const c = document.getElementById("ruContent");
  c.innerHTML = `
    ${setPickerHTML(D.sets, setIdx, "mcCloze")}
    <div class="card">
      <h3>${D.title} — ${set.name}</h3>
      <p class="hint">${D.instructions}</p>
      <p class="gap-text">${gapTextHTML(set.text, i => `
        <select class="gap-select" data-gap="${i}">
          <option value="">(${i + 1}) …</option>
          ${set.gaps[i].options.map((o, j) => `<option value="${j}">${"ABCD"[j]} ${o}</option>`).join("")}
        </select>`)}</p>
      <br><button class="btn" id="checkP1">Corregir</button>
      <div id="resP1"></div>
    </div>`;
  bindSetPicker(c, renderMcCloze);

  document.getElementById("checkP1").addEventListener("click", () => {
    let ok = 0;
    c.querySelectorAll(".gap-select").forEach(sel => {
      const g = set.gaps[+sel.dataset.gap];
      const right = +sel.value === g.answer;
      sel.classList.remove("gap-correct", "gap-wrong");
      sel.classList.add(right ? "gap-correct" : "gap-wrong");
      if (right) ok++; else sel.title = `Correcta: ${g.options[g.answer]}`;
    });
    finishExercise("mcCloze" + setIdx, ok, set.gaps.length, "resP1");
  });
}

function renderOpenCloze(setIdx) {
  const D = DATA.openCloze;
  const set = D.sets[setIdx];
  const c = document.getElementById("ruContent");
  c.innerHTML = `
    ${setPickerHTML(D.sets, setIdx, "openCloze")}
    <div class="card">
      <h3>${D.title} — ${set.name}</h3>
      <p class="hint">${D.instructions}</p>
      <p class="gap-text">${gapTextHTML(set.text, i =>
        `<input class="gap-input" data-gap="${i}" placeholder="(${i + 1})" autocomplete="off">`)}</p>
      <br><button class="btn" id="checkP2">Corregir</button>
      <div id="resP2"></div>
    </div>`;
  bindSetPicker(c, renderOpenCloze);

  document.getElementById("checkP2").addEventListener("click", () => {
    let ok = 0;
    c.querySelectorAll(".gap-input").forEach(inp => {
      const g = set.gaps[+inp.dataset.gap];
      const right = g.answers.includes(norm(inp.value));
      inp.classList.remove("gap-correct", "gap-wrong");
      inp.classList.add(right ? "gap-correct" : "gap-wrong");
      if (right) ok++; else inp.title = `Correcta: ${g.answers[0]}`;
    });
    finishExercise("openCloze" + setIdx, ok, set.gaps.length, "resP2");
  });
}

function renderWordFormation(setIdx) {
  const D = DATA.wordFormation;
  const set = D.sets[setIdx];
  const c = document.getElementById("ruContent");
  c.innerHTML = `
    ${setPickerHTML(D.sets, setIdx, "wordForm")}
    <div class="card">
      <h3>${D.title} — ${set.name}</h3>
      <p class="hint">${D.instructions}</p>
      ${set.items.map((it, i) => `
        <div class="question">
          <div class="q-text">${i + 1}. ${it.sentence.replace("___", `<input class="gap-input" data-i="${i}" autocomplete="off">`)}
            <span style="color:var(--primary);font-weight:700"> ${it.root}</span></div>
        </div>`).join("")}
      <button class="btn" id="checkP3">Corregir</button>
      <div id="resP3"></div>
    </div>`;
  bindSetPicker(c, renderWordFormation);

  document.getElementById("checkP3").addEventListener("click", () => {
    let ok = 0;
    c.querySelectorAll(".gap-input").forEach(inp => {
      const it = set.items[+inp.dataset.i];
      const right = it.answers.includes(norm(inp.value));
      inp.classList.remove("gap-correct", "gap-wrong");
      inp.classList.add(right ? "gap-correct" : "gap-wrong");
      if (right) ok++; else inp.title = `Correcta: ${it.answers[0]}`;
    });
    finishExercise("wordForm" + setIdx, ok, set.items.length, "resP3");
  });
}

function renderTransformations(setIdx) {
  const D = DATA.transformations;
  const set = D.sets[setIdx];
  const c = document.getElementById("ruContent");
  c.innerHTML = `
    ${setPickerHTML(D.sets, setIdx, "transform")}
    <div class="card">
      <h3>${D.title} — ${set.name}</h3>
      <p class="hint">${D.instructions}</p>
      ${set.items.map((it, i) => `
        <div class="question">
          <div class="q-text">${i + 1}. ${it.first}</div>
          <div style="margin:4px 0;color:var(--primary);font-weight:700">${it.key}</div>
          <div>${it.second.replace("___", `<input class="gap-input" style="width:240px" data-i="${i}" autocomplete="off">`)}</div>
          <div class="answer-note" id="noteT${i}"></div>
        </div>`).join("")}
      <button class="btn" id="checkP4">Corregir</button>
      <div id="resP4"></div>
    </div>`;
  bindSetPicker(c, renderTransformations);

  document.getElementById("checkP4").addEventListener("click", () => {
    let ok = 0;
    c.querySelectorAll(".gap-input").forEach(inp => {
      const it = set.items[+inp.dataset.i];
      const right = it.answers.includes(norm(inp.value));
      inp.classList.remove("gap-correct", "gap-wrong");
      inp.classList.add(right ? "gap-correct" : "gap-wrong");
      if (right) ok++;
      else document.getElementById(`noteT${inp.dataset.i}`).textContent = `✔️ Respuesta: ${it.answers[0]}`;
    });
    finishExercise("transform" + setIdx, ok, set.items.length, "resP4");
  });
}

function renderReading(setIdx) {
  const D = DATA.reading;
  const set = D.sets[setIdx];
  const c = document.getElementById("ruContent");
  c.innerHTML = `
    ${setPickerHTML(D.sets, setIdx, "reading")}
    <div class="card">
      <h3>${D.title} — ${set.name}</h3>
      <p class="hint">${D.instructions}</p>
      <div class="reading-passage">
        <h4>${set.passageTitle}</h4>
        ${set.passage.map(p => `<p>${p}</p>`).join("")}
      </div>
      <div id="readingQs"></div>
      <button class="btn" id="checkP5">Corregir</button>
      <div id="resP5"></div>
    </div>`;
  bindSetPicker(c, renderReading);
  renderMCQuestions(document.getElementById("readingQs"), set.questions, "rq");

  document.getElementById("checkP5").addEventListener("click", () => {
    const ok = gradeMCQuestions(set.questions, "rq");
    finishExercise("reading" + setIdx, ok, set.questions.length, "resP5");
  });
}

// Preguntas tipo test reutilizables
function renderMCQuestions(container, questions, prefix) {
  container.innerHTML = questions.map((q, i) => `
    <div class="question" data-q="${prefix}${i}">
      <div class="q-text">${i + 1}. ${q.q}</div>
      <div class="options">
        ${q.options.map((o, j) => `<div class="option" data-i="${j}">${"ABCD"[j]}) ${o}</div>`).join("")}
      </div>
    </div>`).join("");

  container.querySelectorAll(".question").forEach(qEl => {
    qEl.querySelectorAll(".option").forEach(opt => {
      opt.addEventListener("click", () => {
        if (qEl.dataset.graded) return;
        qEl.querySelectorAll(".option").forEach(o => o.classList.remove("selected"));
        opt.classList.add("selected");
      });
    });
  });
}

function gradeMCQuestions(questions, prefix) {
  let ok = 0;
  questions.forEach((q, i) => {
    const qEl = document.querySelector(`[data-q="${prefix}${i}"]`);
    qEl.dataset.graded = "1";
    qEl.querySelectorAll(".option").forEach(opt => {
      const j = +opt.dataset.i;
      if (j === q.answer) opt.classList.add("correct");
      else if (opt.classList.contains("selected")) opt.classList.add("wrong");
    });
    const sel = qEl.querySelector(".option.selected");
    if (sel && +sel.dataset.i === q.answer) ok++;
  });
  return ok;
}

function finishExercise(id, ok, total, resId) {
  const pct = Math.round((ok / total) * 100);
  document.getElementById(resId).innerHTML = banner(ok, total);
  const isNewBest = pct > (S.completed[id] || 0);
  markCompleted(id, pct);
  if (isNewBest) addXP(ok * 5);
}

// ---------- Vista: Writing ----------
views.writing = function () {
  const W = DATA.writing;
  main.innerHTML = `
    <div class="view-header">
      <h2>✍️ Writing</h2>
      <p class="sub">Dos textos de 140-190 palabras en 80 minutos. El essay es obligatorio; el segundo lo eliges tú. Tus borradores se guardan automáticamente.</p>
    </div>
    <div class="tabs" id="wTabs">
      ${W.tasks.map((t, i) => `<button class="tab-btn ${i === 0 ? "active" : ""}" data-i="${i}">${t.label}</button>`).join("")}
    </div>
    <div id="wContent"></div>`;

  document.querySelectorAll("#wTabs .tab-btn").forEach(b => {
    b.addEventListener("click", () => {
      document.querySelectorAll("#wTabs .tab-btn").forEach(x => x.classList.remove("active"));
      b.classList.add("active");
      renderWritingTask(+b.dataset.i);
    });
  });
  renderWritingTask(0);
};

function renderWritingTask(i) {
  const t = DATA.writing.tasks[i];
  const c = document.getElementById("wContent");
  c.innerHTML = `
    <div class="card">
      <h3>📝 La tarea</h3>
      <p style="white-space:pre-line">${t.prompt}</p>
    </div>
    <div class="card">
      <div class="writing-guide">
        <strong>🗺️ Cómo estructurarlo:</strong>
        <ul>${t.guide.map(g => `<li>${g}</li>`).join("")}</ul>
      </div>
      <details style="margin-bottom:16px">
        <summary style="cursor:pointer;font-weight:600">💬 Frases útiles (haz clic)</summary>
        <ul class="useful-phrases" style="margin-top:10px">${t.phrases.map(p => `<li>${p}</li>`).join("")}</ul>
      </details>
      <textarea class="writing-area" id="wArea" placeholder="Escribe aquí tu texto en inglés…"></textarea>
      <div class="word-count" id="wCount">0 palabras (objetivo: ${t.min}–${t.max})</div>
      <h3>✅ Revisa antes de darlo por terminado</h3>
      <div class="checklist" id="wCheck">
        ${DATA.writing.checklist.map((item, j) => `<label><input type="checkbox" data-j="${j}"> ${item}</label>`).join("")}
      </div>
      <br>
      <button class="btn accent" id="wDone">He terminado ✔️</button>
      <button class="btn secondary" id="wClear">Borrar borrador</button>
    </div>`;

  const area = document.getElementById("wArea");
  const count = document.getElementById("wCount");
  area.value = S.drafts[t.id] || "";

  function updateCount() {
    const n = area.value.trim() ? area.value.trim().split(/\s+/).length : 0;
    count.textContent = `${n} palabras (objetivo: ${t.min}–${t.max})`;
    count.classList.toggle("in-range", n >= t.min && n <= t.max);
  }
  updateCount();

  let saveTimer;
  area.addEventListener("input", () => {
    updateCount();
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => { S.drafts[t.id] = area.value; persist(); }, 600);
  });

  document.getElementById("wDone").addEventListener("click", () => {
    const n = area.value.trim() ? area.value.trim().split(/\s+/).length : 0;
    const checks = [...document.querySelectorAll("#wCheck input")].filter(x => x.checked).length;
    if (n < t.min) { toast(`Te faltan palabras: llevas ${n} y el mínimo es ${t.min} ✍️`); return; }
    if (checks < DATA.writing.checklist.length) { toast("Repasa la checklist completa antes de terminar ✅"); return; }
    markCompleted("writing_" + t.id, 100);
    addXP(40);
    toast("¡Writing completado! Pídele a tu profesor/a (o a una IA) que te lo corrija 🎉");
  });

  document.getElementById("wClear").addEventListener("click", () => {
    if (area.value && !confirm("¿Seguro que quieres borrar este borrador?")) return;
    area.value = "";
    delete S.drafts[t.id];
    persist();
    updateCount();
  });
}

// ---------- Vista: Listening ----------
let currentUtterance = null;
function stopSpeech() {
  if (window.speechSynthesis) speechSynthesis.cancel();
  currentUtterance = null;
}

function getEnglishVoice() {
  const voices = speechSynthesis.getVoices();
  return voices.find(v => v.lang === "en-GB") || voices.find(v => v.lang.startsWith("en")) || null;
}

views.listening = function () {
  main.innerHTML = `
    <div class="view-header">
      <h2>🎧 Listening</h2>
      <p class="sub">Pulsa ▶️ para escuchar cada grabación (voz sintética en inglés). En el examen real cada audio suena DOS veces: aquí también puedes repetirlo. No leas la transcripción hasta corregir.</p>
    </div>
    <div id="lContent"></div>`;

  const c = document.getElementById("lContent");
  DATA.listening.forEach((rec, r) => {
    const done = (S.completed["listen" + r] || 0) >= 75 ? " ✅" : "";
    const card = el(`
      <div class="card">
        <h3>${rec.title}${done}</h3>
        <div class="audio-controls">
          <button class="btn" data-act="play">▶️ Reproducir</button>
          <button class="btn secondary" data-act="stop">⏹️ Parar</button>
          <span class="listening-status" data-status>Listo para reproducir</span>
        </div>
        <details style="margin-bottom:16px">
          <summary style="cursor:pointer;color:var(--muted)">📜 Ver transcripción (solo después de corregir)</summary>
          <p style="margin-top:8px;font-style:italic">${rec.script}</p>
        </details>
        <div data-qs></div>
        <button class="btn" data-act="check">Corregir</button>
        <div data-res></div>
      </div>`);
    c.appendChild(card);

    const status = card.querySelector("[data-status]");
    renderMCQuestions(card.querySelector("[data-qs]"), rec.questions, "lq" + r);

    card.querySelector('[data-act="play"]').addEventListener("click", () => {
      if (!window.speechSynthesis) { toast("Tu navegador no soporta síntesis de voz 😕"); return; }
      stopSpeech();
      const u = new SpeechSynthesisUtterance(rec.script);
      const voice = getEnglishVoice();
      if (voice) u.voice = voice;
      u.lang = "en-GB";
      u.rate = 0.92;
      u.onstart = () => status.textContent = "🔊 Reproduciendo…";
      u.onend = () => status.textContent = "Terminado. Puedes repetirlo.";
      currentUtterance = u;
      speechSynthesis.speak(u);
    });
    card.querySelector('[data-act="stop"]').addEventListener("click", () => {
      stopSpeech();
      status.textContent = "Detenido";
    });
    card.querySelector('[data-act="check"]').addEventListener("click", () => {
      stopSpeech();
      const ok = gradeMCQuestions(rec.questions, "lq" + r);
      const resDiv = card.querySelector("[data-res]");
      resDiv.innerHTML = banner(ok, rec.questions.length);
      const id = "listen" + r;
      const pct = Math.round((ok / rec.questions.length) * 100);
      const isNewBest = pct > (S.completed[id] || 0);
      markCompleted(id, pct);
      if (isNewBest) addXP(ok * 5);
    });
  });

  // Algunas plataformas cargan las voces de forma asíncrona
  if (window.speechSynthesis && speechSynthesis.getVoices().length === 0) {
    speechSynthesis.onvoiceschanged = () => {};
  }
};

// ---------- Vista: Speaking ----------
let speakingTimer = null;

views.speaking = function () {
  clearInterval(speakingTimer);
  main.innerHTML = `
    <div class="view-header">
      <h2>🗣️ Speaking</h2>
      <p class="sub">14 minutos en parejas. Practica en voz alta con el temporizador: la clave es hablar SIN parar el tiempo indicado. Grábate con el móvil y escúchate.</p>
    </div>
    <div class="tabs" id="sTabs">
      ${DATA.speaking.parts.map((p, i) => `<button class="tab-btn ${i === 0 ? "active" : ""}" data-i="${i}">${p.title.split("·")[0].trim()}</button>`).join("")}
    </div>
    <div id="sContent"></div>
    <div class="card">
      <h3>🎯 Trucos para el examen oral</h3>
      <ul style="padding-left:20px">${DATA.speaking.tips.map(t => `<li style="margin-bottom:6px">${t}</li>`).join("")}</ul>
    </div>`;

  document.querySelectorAll("#sTabs .tab-btn").forEach(b => {
    b.addEventListener("click", () => {
      document.querySelectorAll("#sTabs .tab-btn").forEach(x => x.classList.remove("active"));
      b.classList.add("active");
      renderSpeakingPart(+b.dataset.i);
    });
  });
  renderSpeakingPart(0);
};

function renderSpeakingPart(i) {
  clearInterval(speakingTimer);
  const p = DATA.speaking.parts[i];
  const c = document.getElementById("sContent");
  let promptIdx = Math.floor(Math.random() * p.prompts.length);

  c.innerHTML = `
    <div class="card">
      <h3>${p.title}</h3>
      <p class="hint">${p.desc}</p>
      <div class="speaking-prompt" id="sPrompt"></div>
      <div class="timer-display" id="sTimer">${fmtTime(p.seconds)}</div>
      <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
        <button class="btn accent" id="sStart">▶️ Empezar a hablar</button>
        <button class="btn secondary" id="sReset">🔄 Reiniciar</button>
        <button class="btn secondary" id="sNext">🎲 Otra pregunta</button>
      </div>
    </div>`;

  const promptEl = document.getElementById("sPrompt");
  const timerEl = document.getElementById("sTimer");
  const show = () => promptEl.textContent = p.prompts[promptIdx];
  show();

  let remaining = p.seconds;
  document.getElementById("sStart").addEventListener("click", () => {
    clearInterval(speakingTimer);
    remaining = p.seconds;
    timerEl.style.color = "";
    speakingTimer = setInterval(() => {
      remaining--;
      timerEl.textContent = fmtTime(remaining);
      if (remaining <= 10) timerEl.style.color = "var(--danger)";
      if (remaining <= 0) {
        clearInterval(speakingTimer);
        timerEl.textContent = "⏰ ¡Tiempo!";
        markCompleted("speak" + i, 100);
        addXP(15);
      }
    }, 1000);
  });
  document.getElementById("sReset").addEventListener("click", () => {
    clearInterval(speakingTimer);
    remaining = p.seconds;
    timerEl.style.color = "";
    timerEl.textContent = fmtTime(p.seconds);
  });
  document.getElementById("sNext").addEventListener("click", () => {
    promptIdx = (promptIdx + 1) % p.prompts.length;
    show();
  });
}

function fmtTime(s) {
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

// ---------- Vista: Vocabulario (flashcards) ----------
views.vocab = function () {
  let idx = 0;
  let known = new Set(JSON.parse(localStorage.getItem("fce_known_cards") || "[]"));
  const cards = DATA.flashcards;

  main.innerHTML = `
    <div class="view-header">
      <h2>🃏 Vocabulario B2</h2>
      <p class="sub">${cards.length} phrasal verbs y expresiones que caen constantemente en el examen. Haz clic en la tarjeta para ver el significado. Marca las que ya domines.</p>
    </div>
    <div class="card">
      <div class="flashcard-wrap">
        <div class="flashcard" id="fCard">
          <div class="flashcard-inner">
            <div class="flash-face flash-front" id="fFront"></div>
            <div class="flash-face flash-back">
              <div class="meaning" id="fMeaning"></div>
              <div class="example" id="fExample"></div>
            </div>
          </div>
        </div>
        <div class="flash-nav">
          <button class="btn secondary small" id="fPrev">← Anterior</button>
          <span class="flash-counter" id="fCounter"></span>
          <button class="btn secondary small" id="fNext">Siguiente →</button>
        </div>
        <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center">
          <button class="btn accent small" id="fKnown">✅ Ya me la sé</button>
          <button class="btn secondary small" id="fShuffle">🔀 Barajar</button>
          <button class="btn secondary small" id="fPending">🎯 Solo pendientes</button>
        </div>
        <p class="hint" id="fStats"></p>
      </div>
    </div>`;

  const cardEl = document.getElementById("fCard");
  let order = cards.map((_, i) => i);
  let onlyPending = false;

  function rebuildOrder() {
    order = cards.map((_, i) => i).filter(i => !onlyPending || !known.has(i));
    if (order.length === 0) order = cards.map((_, i) => i);
    if (idx >= order.length) idx = 0;
  }

  function render() {
    const c = cards[order[idx]];
    cardEl.classList.remove("flipped");
    document.getElementById("fFront").textContent = c.front;
    document.getElementById("fMeaning").textContent = c.meaning;
    document.getElementById("fExample").textContent = c.example;
    document.getElementById("fCounter").textContent = `${idx + 1} / ${order.length}`;
    document.getElementById("fStats").textContent = `Dominadas: ${known.size} de ${cards.length} 🌟`;
    document.getElementById("fKnown").textContent = known.has(order[idx]) ? "⭐ Dominada" : "✅ Ya me la sé";
    document.getElementById("fPending").textContent = onlyPending ? "📚 Ver todas" : "🎯 Solo pendientes";
  }

  cardEl.addEventListener("click", () => cardEl.classList.toggle("flipped"));
  document.getElementById("fPrev").addEventListener("click", () => { idx = (idx - 1 + order.length) % order.length; render(); });
  document.getElementById("fNext").addEventListener("click", () => { idx = (idx + 1) % order.length; render(); });
  document.getElementById("fShuffle").addEventListener("click", () => {
    order.sort(() => Math.random() - 0.5);
    idx = 0;
    render();
    toast("Tarjetas barajadas 🔀");
  });
  document.getElementById("fPending").addEventListener("click", () => {
    onlyPending = !onlyPending;
    idx = 0;
    rebuildOrder();
    render();
  });
  document.getElementById("fKnown").addEventListener("click", () => {
    const real = order[idx];
    if (!known.has(real)) {
      known.add(real);
      addXP(3);
    } else {
      known.delete(real);
    }
    localStorage.setItem("fce_known_cards", JSON.stringify([...known]));
    markCompleted("vocab", Math.round(known.size / cards.length * 100));
    if (onlyPending) rebuildOrder();
    render();
  });

  render();
};

// ---------- Vista: Gramática ----------
views.grammar = function (setIdx) {
  setIdx = setIdx || 0;
  const D = DATA.grammar;
  const set = D.sets[setIdx];

  main.innerHTML = `
    <div class="view-header">
      <h2>🧩 Gramática B2</h2>
      <p class="sub">Las estructuras que más aparecen en el examen. Cada pregunta trae una mini-explicación al corregir.</p>
    </div>
    ${setPickerHTML(D.sets, setIdx, "grammar")}
    <div class="card">
      <div id="gQs"></div>
      <button class="btn" id="gCheck">Corregir</button>
      <div id="gRes"></div>
    </div>`;

  bindSetPicker(main, views.grammar);
  renderMCQuestions(document.getElementById("gQs"), set.items, "gq");
  document.getElementById("gCheck").addEventListener("click", () => {
    const ok = gradeMCQuestions(set.items, "gq");
    set.items.forEach((q, i) => {
      const qEl = document.querySelector(`[data-q="gq${i}"]`);
      if (!qEl.querySelector(".answer-note")) {
        qEl.insertAdjacentHTML("beforeend", `<div class="answer-note">💡 ${q.note}</div>`);
      }
    });
    finishExercise("grammar" + setIdx, ok, set.items.length, "gRes");
  });
};

// ---------- Vista: Progreso ----------
views.progress = function () {
  const sections = [
    ...DATA.mcCloze.sets.map((s, i) => ({ label: `📖 Cloze · ${s.name}`, id: "mcCloze" + i })),
    ...DATA.openCloze.sets.map((s, i) => ({ label: `📖 Open cloze · ${s.name}`, id: "openCloze" + i })),
    ...DATA.wordFormation.sets.map((s, i) => ({ label: `📖 Word formation · ${s.name}`, id: "wordForm" + i })),
    ...DATA.transformations.sets.map((s, i) => ({ label: `📖 Transformations · ${s.name}`, id: "transform" + i })),
    ...DATA.reading.sets.map((s, i) => ({ label: `📖 ${s.name}`, id: "reading" + i })),
    ...DATA.listening.map((rec, i) => ({ label: `🎧 ${rec.title.split("·")[0].trim()}`, id: "listen" + i })),
    ...DATA.grammar.sets.map((s, i) => ({ label: `🧩 Gramática · ${s.name}`, id: "grammar" + i })),
    { label: "🃏 Vocabulario", id: "vocab" },
    ...DATA.writing.tasks.map(t => ({ label: `✍️ ${t.label.split("·")[1].trim()}`, id: "writing_" + t.id }))
  ];

  const done = sections.filter(s => (S.completed[s.id] || 0) >= 75).length;
  const level = Math.floor(S.xp / 100) + 1;

  main.innerHTML = `
    <div class="view-header">
      <h2>📊 Mi progreso</h2>
      <p class="sub">Tu mejor resultado en cada ejercicio. Con un 75% o más se considera superado (verde en la barra).</p>
    </div>
    <div class="big-stats">
      <div class="big-stat"><div class="num">${S.xp}</div><div class="lbl">⭐ Puntos XP</div></div>
      <div class="big-stat"><div class="num">${level}</div><div class="lbl">🏆 Nivel</div></div>
      <div class="big-stat"><div class="num">${S.streakDays}</div><div class="lbl">🔥 Días de racha</div></div>
      <div class="big-stat"><div class="num">${done}/${sections.length}</div><div class="lbl">✅ Ejercicios superados</div></div>
    </div>
    <div class="card">
      <h3>Detalle por ejercicio</h3><br>
      ${sections.map(s => {
        const pct = S.completed[s.id] || 0;
        return `
          <div class="progress-row">
            <div class="label">${s.label}</div>
            <div class="bar"><div style="width:${pct}%"></div></div>
            <div class="pct">${pct}%</div>
          </div>`;
      }).join("")}
    </div>
    <div class="card">
      <h3>🔁 ¿Empezar de cero?</h3>
      <p class="hint">Borra todo el progreso, los puntos y los borradores de writing. No se puede deshacer.</p>
      <button class="btn secondary" id="resetAll">Borrar todo mi progreso</button>
    </div>`;

  document.getElementById("resetAll").addEventListener("click", () => {
    if (!confirm("¿Seguro? Se borrará TODO tu progreso y tus borradores.")) return;
    localStorage.removeItem("fce_state");
    localStorage.removeItem("fce_known_cards");
    S = { xp: 0, completed: {}, streakDays: 1, lastVisit: new Date().toISOString().slice(0, 10), drafts: {} };
    persist();
    views.progress();
    toast("Progreso reiniciado. ¡A por ello desde cero! 💪");
  });
};

// ---------- Arranque ----------
updatePills();
views.home();
