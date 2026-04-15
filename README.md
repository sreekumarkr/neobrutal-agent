# AI Academy

A loud, neobrutalist guide to modern AI. Hand-coded, zero build step, zero dependencies.

**Live site:** https://sreekumarkr.github.io/neobrutal-agent/

## What's inside

Six content pages covering the whole stack:

- **Home** — intro, timeline, interactive demo callouts
- **Foundations** — AI vs ML vs DL, neural networks, training, key terms
- **LLMs** — tokens, embeddings, transformers, context windows, model comparison
- **Agents** — the ReAct loop, tool use, memory, multi-agent systems
- **Tutorial** — step-by-step: build your first real AI agent in Python
- **Frameworks** — LangChain, LlamaIndex, Claude Agent SDK, CrewAI, and more
- **Glossary** — 40+ terms, searchable

Plus interactive bits:

- A live tokenizer — type a sentence, see it chunked into tokens
- An animated Think → Act → Observe agent loop
- A pulsing neural-net SVG diagram
- Search-as-you-type glossary filter
- Scroll-triggered reveals and a floating back-to-top button

## Run locally

Clone, then open `index.html` in any browser. That's it.

```bash
git clone git@github.com:sreekumarkr/neobrutal-agent.git
cd neobrutal-agent
open index.html
```

Or serve it with any static file server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Stack

- Plain HTML, CSS, and vanilla JavaScript
- No frameworks, no build step, no package.json
- Total size: ~60KB, loads instantly on any network

## Design system

Neobrutalism — chunky 4px borders, hard offset shadows, bright colors on a warm cream background. Palette:

| Token | Color |
|-------|-------|
| bg | `#fef6e4` |
| ink | `#0a0a0a` |
| pink | `#ff6b9d` |
| yellow | `#ffe45e` |
| blue | `#7dd3fc` |
| green | `#a3e635` |
| orange | `#fb923c` |
| purple | `#c084fc` |

All variables live in `styles.css`.

## File layout

```
neobrutal-agent/
├── index.html          # home
├── fundamentals.html   # AI foundations
├── llms.html           # Large Language Models
├── agents.html         # AI Agents
├── tutorial.html       # Build your first agent
├── frameworks.html     # Framework comparison
├── glossary.html       # A-Z terms
├── styles.css          # shared design system
├── script.js           # interactive bits
├── favicon.svg         # yellow-square favicon
└── README.md
```

## License

MIT. Fork it, remix it, teach with it.

---

Built loud. No trackers, no ads, no fluff.
