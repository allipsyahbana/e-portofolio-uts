/* ================================================================
   MAIN SCRIPT E-PORTFOLIO
   ================================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initSmoothScroll();
  initActiveNav();
  initStatsCounter();
  initAnalysisTabs();
  initGallery();
  initLightbox();
  initRevealAnimations();
  document.getElementById('year').textContent = new Date().getFullYear();
});

/* ---------- NAVBAR SCROLL ---------- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ---------- MOBILE MENU ---------- */
function initMobileMenu() {
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');
  toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
    const icon = toggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      const icon = toggle.querySelector('i');
      icon.classList.add('fa-bars');
      icon.classList.remove('fa-xmark');
    });
  });
}

/* ---------- SMOOTH SCROLL ---------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = 70;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

/* ---------- ACTIVE NAV LINK ---------- */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(section => observer.observe(section));
}

/* ---------- STATS COUNTER ---------- */
function initStatsCounter() {
  const counters = document.querySelectorAll('[data-count]');
  const animate = (el) => {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1500;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    };
    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animate(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

/* ---------- ANALYSIS TABS ---------- */
function initAnalysisTabs() {
  const buttons = document.querySelectorAll('.tab-btn');
  const container = document.getElementById('analysisContent');

  const renderPanel = (key) => {
    const data = PORTFOLIO_DATA.analysis[key];
    if (!data) return;

    container.innerHTML = `
      <div class="analysis-panel">
        <div class="analysis-main">
          <div class="analysis-intro">
            <h3>${data.title}</h3>
            ${data.intro.map(p => `<p>${p}</p>`).join('')}
          </div>

          <div class="pros-cons">
            <div class="pc-card pros">
              <h4><i class="fa-solid fa-circle-check"></i> Kelebihan</h4>
              <ul>${data.pros.map(i => `<li>${i}</li>`).join('')}</ul>
            </div>
            <div class="pc-card cons">
              <h4><i class="fa-solid fa-triangle-exclamation"></i> Kekurangan</h4>
              <ul>${data.cons.map(i => `<li>${i}</li>`).join('')}</ul>
            </div>
          </div>

          <div class="reflection-box">
            <h4><i class="fa-solid fa-lightbulb"></i> Refleksi</h4>
            <p>${data.reflection}</p>
          </div>
        </div>

        <div class="analysis-side">
          <div class="artefak-card">
            <h4><i class="fa-solid fa-folder-open"></i> Artefak Pendukung</h4>
            <div class="artefak-list" style="margin-top: 16px;">
              ${data.artefacts.map(a => renderArtefak(a)).join('')}
            </div>
          </div>
        </div>
      </div>
    `;

    // Bind klik artefak
     // Bind klik untuk BUKA file di tab baru
    container.querySelectorAll('.artefak-item').forEach(item => {
      item.addEventListener('click', (e) => {
        // Jika yang diklik adalah tombol "Preview", jangan buka tab baru
        if (e.target.closest('.btn-preview')) return;

        const href = item.dataset.href;
        if (href) {
          window.open(href, '_blank');
        } else {
          alert('File belum tersedia. Silakan tambahkan di folder assets/files.');
        }
      });
    });

    // Bind klik untuk tombol "Lihat" (Preview PDF)
    container.querySelectorAll('.btn-preview').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation(); // Mencegah tab baru terbuka
        const fileUrl = btn.dataset.file;
        const title = btn.dataset.title;
        
        // Tampilkan Modal
        const modal = document.getElementById('pdfModal');
        const iframe = document.getElementById('pdfModalIframe');
        const modalTitle = document.getElementById('pdfModalTitle');

        if(modal && iframe) {
          modalTitle.textContent = title;
          iframe.src = fileUrl;
          modal.classList.add('open');
        }
      });
    });
  };

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderPanel(btn.dataset.tab);
    });
  });

  // Render panel awal
  renderPanel('produk');
}

function renderArtefak(a) {
  const icons = {
    pdf: 'fa-file-pdf',
    ppt: 'fa-file-powerpoint',
    image: 'fa-file-image',
    excel: 'fa-file-excel',
    zip: 'fa-file-zipper',
    doc: 'fa-file-word',
    default: 'fa-file'
  };
  const icon = icons[a.type] || icons.default;
  
  // Jika PDF, tampilkan tombol "Lihat" di sebelah kiri tombol buka
  const previewBtn = a.type === 'pdf' 
    ? `<button class="btn-preview" data-file="assets/files/${a.name}" data-title="${a.name}" title="Lihat Dokumen">
         <i class="fa-solid fa-eye"></i>
       </button>` 
    : '';

  return `
    <div class="artefak-item" data-href="assets/files/${a.name}">
      <div class="file-icon"><i class="fa-solid ${icon}"></i></div>
      <div class="file-info">
        <div class="file-name">${a.name}</div>
        <div class="file-meta">${a.size} • ${a.desc}</div>
      </div>
      <div class="file-action" style="display:flex; gap:10px; align-items:center;">
        ${previewBtn}
        <i class="fa-solid fa-arrow-up-right-from-square"></i>
      </div>
    </div>
  `;
}

/* ---------- GALLERY ---------- */
/* ---------- GALLERY ---------- */
function initGallery() {
  const grid = document.getElementById('galleryGrid');
  const filters = document.querySelectorAll('.filter-btn');

  const render = (filter = 'all') => {
    const items = PORTFOLIO_DATA.gallery.filter(
      g => filter === 'all' || g.category === filter
    );

    if (items.length === 0) {
      grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:40px 0;">Belum ada dokumentasi pada kategori ini.</p>`;
      return;
    }

    grid.innerHTML = items.map((item) => {
      
      // JIKA ITEM ADALAH KOLEKSI PDF (Hasil Kerja Murid)
      if (item.isPdfGallery && item.pdfs) {
        return `
          <div class="gallery-item pdf-collection" style="grid-column: 1 / -1; aspect-ratio: auto; padding: 24px;">
            <div style="margin-bottom: 20px;">
              <span class="cat" style="position:static; display:inline-block; margin-bottom:10px;">Hasil Kerja</span>
              <h4 style="font-size: 1.2rem; font-weight:700;">${item.title}</h4>
            </div>
            <div class="pdf-grid" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
              ${item.pdfs.map((pdfUrl, index) => `
                <div class="pdf-card" style="background:var(--bg-alt); border-radius:12px; overflow:hidden; border:1px solid var(--border);">
                  <iframe src="${pdfUrl}" width="100%" height="350" style="border:none; background: #fff;"></iframe>
                  <div style="padding: 12px 16px; display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-size:0.85rem; font-weight:600;">LKPD Murid ${index + 1}</span>
                    <a href="${pdfUrl}" target="_blank" style="color: var(--accent); font-size: 0.85rem;">
                      <i class="fa-solid fa-up-right-from-square"></i> Buka
                    </a>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }

      // JIKA ITEM ADALAH GAMBAR BIASA (Praktik)
      return `
        <div class="gallery-item" data-img="${item.img}" data-title="${item.title}">
          <div class="gallery-placeholder">
            <i class="fa-solid fa-image"></i>
          </div>
          <div class="gallery-overlay">
            <span class="cat">${item.category}</span>
            <h5>${item.title}</h5>
          </div>
        </div>
      `;
    }).join('');

    // Render gambar biasa & pasang klik lightbox
    grid.querySelectorAll('.gallery-item[data-img]').forEach(el => {
      const imgPath = el.dataset.img;
      const img = new Image();
      img.onload = () => {
        const placeholder = el.querySelector('.gallery-placeholder');
        if (placeholder) {
          const realImg = document.createElement('img');
          realImg.src = imgPath;
          realImg.alt = el.dataset.title;
          placeholder.replaceWith(realImg);
        }
      };
      img.src = imgPath;

      el.addEventListener('click', () => {
        openLightbox(imgPath, el.dataset.title);
      });
    });
  };

  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      render(btn.dataset.filter);
    });
  });

  render('all');
}
/* ---------- LIGHTBOX ---------- */
function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const closeBtn = document.getElementById('lightboxClose');

  closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('open');
  });

  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) lightbox.classList.remove('open');
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') lightbox.classList.remove('open');
  });

  window.openLightbox = (src, title) => {
    lightboxImg.src = src;
    lightboxImg.alt = title || 'Preview';
    lightbox.classList.add('open');
  };
}

function openLightbox(src, title) {
  if (window.openLightbox) window.openLightbox(src, title);
}

/* ---------- REVEAL ANIMATIONS ---------- */
function initRevealAnimations() {
  const targets = document.querySelectorAll(
    '.section-header, .stat-card, .reflection-card, .analysis-nav'
  );
  targets.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  targets.forEach(el => observer.observe(el));
}
/* ---------- AVATAR FALLBACK ---------- */
function createAvatarFallback() {
  const div = document.createElement('div');
  div.className = 'avatar-fallback';
  div.textContent = 'AM';
  return div;
}
window.createAvatarFallback = createAvatarFallback;