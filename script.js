// =============================
// Mobile Navigation Toggle
// =============================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const isOpen = navLinks.classList.contains('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  });
});

// Also close menu on hashchange (e.g., when clicking logo to navigate to #hero)
window.addEventListener('hashchange', () => {
  navLinks.classList.remove('open');
  navToggle.setAttribute('aria-expanded', false);
});
// =============================
// Active nav link on scroll
// =============================
const sections = document.querySelectorAll('section[id]');

const observer = new IntersectionObserver((entries) => {
  // Determine the single "best" (most visible / closest to top) intersecting section
  let bestEntry = null;

  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    }
  // Determine the single "best" (most visible / closest to top) intersecting section
  let bestEntry = null;

  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    }

    if (!bestEntry) {
      bestEntry = entry;
      return;
    }

    if (entry.intersectionRatio > bestEntry.intersectionRatio) {
      bestEntry = entry;
    } else if (entry.intersectionRatio === bestEntry.intersectionRatio &&
               entry.boundingClientRect.top < bestEntry.boundingClientRect.top) {
      bestEntry = entry;
    }
  });

  if (!bestEntry) {
    return;
  }

  const id = bestEntry.target.getAttribute('id');
  const link = document.querySelector(`.nav-links a[href="#${id}"]`);
  if (!link) {
    return;
  }

  const allLinks = document.querySelectorAll('.nav-links a');
  allLinks.forEach(a => {
    a.classList.remove('active');
    a.removeAttribute('aria-current');
  });

  link.classList.add('active');
  link.setAttribute('aria-current', 'page');

  if (!bestEntry) {
    return;
  }

  const id = bestEntry.target.getAttribute('id');
  const link = document.querySelector(`.nav-links a[href="#${id}"]`);
  if (!link) {
    return;
  }

  const allLinks = document.querySelectorAll('.nav-links a');
  allLinks.forEach(a => {
    a.classList.remove('active');
    a.removeAttribute('aria-current');
  });

  link.classList.add('active');
  link.setAttribute('aria-current', 'page');
}, { threshold: 0.4 });

sections.forEach(s => observer.observe(s));

// =============================
// Fetch GitHub projects
// =============================
const GITHUB_USER = 'zAiro12';
const EXCLUDED_REPOS = ['zairo.github.io', 'zAiro12'];

const LANG_COLORS = {
  Go: '#00ADD8',
  HTML: '#E34F26',
  Vue: '#41B883',
  JavaScript: '#F7DF1E',
  TypeScript: '#3178C6',
  Java: '#ED8B00',
  Python: '#3776AB',
  'C++': '#F34B7D',
  'C#': '#239120',
};

function getLangDot(lang) {
  const color = LANG_COLORS[lang] || '#6e7681';
  return `<span class="lang-dot" style="background:${color}"></span>`;
}

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function renderProjects(repos) {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  if (!repos || repos.length === 0) {
    grid.innerHTML = '<p style="color:var(--text-muted)">Impossibile caricare i progetti. <a href="https://github.com/zAiro12" target="_blank" rel="noopener">Visita il profilo GitHub</a>.</p>';
    return;
  }

  function getSafeRepoUrl(repo) {
    const rawUrl = repo && repo.html_url;
    if (!rawUrl) {
      return '#';
    }

    try {
      const parsed = new URL(rawUrl);
      if (parsed.protocol === 'https:' && parsed.hostname === 'github.com') {
        return escapeHtml(parsed.toString());
      }
    } catch (e) {
      // Ignore invalid URLs and fall back to a safe default below.
    }

    return '#';
  }

  grid.innerHTML = repos.map(repo => {
    const lang = escapeHtml(repo.language || '');
    const desc = escapeHtml(repo.description || 'Nessuna descrizione disponibile.');
    const name = escapeHtml(repo.name || '');
    const stars = repo.stargazers_count || 0;
    const forks = repo.forks_count || 0;
    const url = getSafeRepoUrl(repo);

    return `
      <a class="project-card" href="${url}" target="_blank" rel="noopener noreferrer">
        <div class="project-header">
          <span class="project-name">${name}</span>
          <svg class="project-icon" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
              0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52
              -.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07
              -1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12
              0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82
              2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25
              .54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
          </svg>
        </div>
        <p class="project-desc">${desc}</p>
        <div class="project-footer">
          ${lang ? `<span class="project-lang">${getLangDot(lang)}<span>${lang}</span></span>` : ''}
          ${stars > 0 ? `<span>⭐ ${stars}</span>` : ''}
          ${forks > 0 ? `<span>🍴 ${forks}</span>` : ''}
        </div>
      </a>
    `;
  }).join('');
}

async function loadProjects() {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const filtered = data
      .filter(r => !r.fork && !EXCLUDED_REPOS.includes(r.name))
      .sort((a, b) => (b.stargazers_count + b.forks_count) - (a.stargazers_count + a.forks_count))
      .slice(0, 9);
    renderProjects(filtered);
  } catch {
    renderProjects(null);
  }
}

loadProjects();
