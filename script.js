// =====================================
// AI ACADEMY — interactive bits
// =====================================

// Reveal-on-scroll
(() => {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || !els.length) {
    els.forEach(e => e.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(e => io.observe(e));
})();

// Tokenizer demo (very rough — splits into word-ish tokens & subwords)
function runTokenizer() {
  const input = document.getElementById('tok-input');
  const out = document.getElementById('tok-out');
  const count = document.getElementById('tok-count');
  if (!input || !out) return;

  const colors = ['pink', 'yellow', 'blue', 'green', 'orange', 'purple'];
  const palette = {
    pink: '#ff6b9d', yellow: '#ffe45e', blue: '#7dd3fc',
    green: '#a3e635', orange: '#fb923c', purple: '#c084fc'
  };

  const render = () => {
    const text = input.value || '';
    // pseudo-tokenization: split on word boundaries, then break long words
    const words = text.match(/\S+|\s+/g) || [];
    const tokens = [];
    for (const w of words) {
      if (/^\s+$/.test(w)) continue;
      if (w.length <= 4) {
        tokens.push(w);
      } else {
        // break into ~4-char subwords with ## prefix for continuations
        for (let i = 0; i < w.length; i += 4) {
          const chunk = w.slice(i, i + 4);
          tokens.push(i === 0 ? chunk : '##' + chunk);
        }
      }
    }
    out.innerHTML = '';
    tokens.forEach((t, i) => {
      const span = document.createElement('span');
      span.className = 'tok';
      span.textContent = t;
      span.style.background = palette[colors[i % colors.length]];
      out.appendChild(span);
    });
    if (count) count.textContent = tokens.length;
  };

  input.addEventListener('input', render);
  render();
}

// Agent loop animation
function runAgentLoop() {
  const nodes = document.querySelectorAll('.agent-loop .loop-node');
  if (!nodes.length) return;
  let i = 0;
  setInterval(() => {
    nodes.forEach(n => n.classList.remove('active'));
    nodes[i].classList.add('active');
    i = (i + 1) % nodes.length;
  }, 1100);
}

// Glossary search
function runGlossary() {
  const search = document.getElementById('glossary-search');
  const terms = document.querySelectorAll('.term');
  if (!search) return;
  search.addEventListener('input', () => {
    const q = search.value.trim().toLowerCase();
    terms.forEach(t => {
      const txt = t.textContent.toLowerCase();
      t.classList.toggle('hide', q && !txt.includes(q));
    });
  });
}

// Neural net node pulse
function runNeuralNet() {
  const nodes = document.querySelectorAll('.nn-node');
  if (!nodes.length) return;
  let i = 0;
  setInterval(() => {
    nodes.forEach(n => n.setAttribute('fill', '#fff'));
    const batch = [nodes[i % nodes.length], nodes[(i + 3) % nodes.length], nodes[(i + 5) % nodes.length]];
    batch.forEach(n => n && n.setAttribute('fill', '#a3e635'));
    i++;
  }, 600);
}

// Back to top
function runBackToTop() {
  const btn = document.getElementById('to-top');
  if (!btn) return;
  const toggle = () => btn.classList.toggle('show', window.scrollY > 600);
  window.addEventListener('scroll', toggle, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  toggle();
}

document.addEventListener('DOMContentLoaded', () => {
  runTokenizer();
  runAgentLoop();
  runGlossary();
  runNeuralNet();
  runBackToTop();
});
