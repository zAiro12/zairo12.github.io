# 🌐 zairo12.github.io

Portfolio personale di **Luca Airoldi** — Software Developer & Systems Administrator.

[![Deploy to GitHub Pages](https://github.com/zAiro12/zairo12.github.io/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/zAiro12/zairo12.github.io/actions/workflows/pages/pages-build-deployment)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 🚀 Demo

👉 **[zairo12.github.io](https://zairo12.github.io)**

---

## 📖 Descrizione

Sito portfolio statico, costruito da zero con HTML, CSS vanilla e JavaScript puro — nessun framework, nessuna dipendenza esterna.

Il sito include:

- **Hero** — presentazione con avatar, ruolo e link rapidi
- **Chi sono** — background, interessi e punti di forza
- **Skills** — tecnologie raggruppate per categoria (linguaggi, framework, DevOps, hardware, …)
- **Progetti** — feed live dei repository pubblici GitHub, con lingua, stelle e fork
- **Contatti** — email e link ai profili social

---

## 🗂️ Struttura del repository

```
zairo12.github.io/
├── index.html   # Struttura e contenuto della pagina
├── style.css    # Stili (dark theme, responsive, CSS custom properties)
├── script.js    # Logica client: toggle nav, scroll spy, fetch GitHub API
├── .gitignore
├── LICENSE
└── README.md
```

---

## 🛠️ Tecnologie

| Area | Stack |
|---|---|
| Markup | HTML5 semantico |
| Stile | CSS3 — custom properties, Grid, Flexbox |
| Script | JavaScript ES2020+ (Fetch API, IntersectionObserver, localStorage) |
| Hosting | GitHub Pages |
| Dati | GitHub REST API v3 |

---

## ⚙️ Esecuzione locale

Non sono necessari build tool o dipendenze npm. Basta aprire il file direttamente nel browser oppure usare un server locale:

```bash
# Con Python (disponibile su quasi tutti i sistemi)
python -m http.server 8080
# → apri http://localhost:8080
```

```bash
# Con Node.js (npx, senza installazione)
npx serve .
# → apri l'URL indicato nel terminale
```

---

## 🌍 Deploy

Il sito viene pubblicato automaticamente su **GitHub Pages** dal branch `main`.  
Ogni push al branch `main` aggiorna immediatamente il sito live.

---

## 📬 Contatti

- GitHub: [@zAiro12](https://github.com/zAiro12)
- Sito: [zairo12.github.io](https://zairo12.github.io)

---

## 📄 Licenza

Distribuito sotto licenza **MIT** — vedi il file [LICENSE](LICENSE) per i dettagli.
