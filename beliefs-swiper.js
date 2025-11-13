
// Wait for DOM and beliefsData, then render beliefs section
function renderBeliefsSection() {
  const beliefsGrid = document.querySelector('.beliefs-grid');
  if (!beliefsGrid || typeof beliefsData === 'undefined') {
    setTimeout(renderBeliefsSection, 100);
    return;
  }
  if (window.innerWidth <= 768) {
    beliefsGrid.classList.add('swiper', 'beliefs-swiper');
    beliefsGrid.innerHTML = `
      <div class="swiper-wrapper">
        ${beliefsData.map(belief => `
          <div class="swiper-slide">
            <div class="belief-card">
              <i class="${belief.icon}"></i>
              <h3>${belief.title}</h3>
              <p>${belief.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>
      <div class="beliefs-swiper-navigation">
        <button class="beliefs-prev">Previous</button>
        <span class="beliefs-mobile-count">1 of ${beliefsData.length}</span>
        <button class="beliefs-next">Next</button>
      </div>
    `;
    const swiper = new Swiper('.beliefs-swiper', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: false,
      centeredSlides: true,
      autoplay: false,
    });
    const countSpan = document.querySelector('.beliefs-mobile-count');
    function updateCount() {
      countSpan.textContent = `${swiper.realIndex + 1} of ${beliefsData.length}`;
    }
    updateCount();
    swiper.on('slideChange', updateCount);
    document.querySelector('.beliefs-prev').addEventListener('click', () => {
      swiper.slidePrev();
      updateCount();
    });
    document.querySelector('.beliefs-next').addEventListener('click', () => {
      swiper.slideNext();
      updateCount();
    });
  } else {
    beliefsGrid.classList.remove('swiper', 'beliefs-swiper');
    // Render 8 cards per page: 2 rows x 4 columns
    let html = '';
    let pageCount = Math.ceil(beliefsData.length / 8);
    for (let p = 0; p < pageCount; p++) {
      html += '<div class="beliefs-desktop-grid">';
      for (let i = p * 8; i < Math.min((p + 1) * 8, beliefsData.length); i++) {
        const belief = beliefsData[i];
        html += `
          <div class="belief-card">
            <i class="${belief.icon}"></i>
            <h3>${belief.title}</h3>
            <p>${belief.desc}</p>
          </div>
        `;
      }
      html += '</div>';
    }
    // Add circular numbered navigation buttons
    html += `<div class="beliefs-desktop-nav">`;
    for (let p = 0; p < pageCount; p++) {
      html += `<button class="beliefs-page-btn" data-page="${p}">${p + 1}</button>`;
    }
    html += `</div>`;
    beliefsGrid.innerHTML = html;
    // Navigation logic
    const allRows = Array.from(document.querySelectorAll('.beliefs-desktop-grid'));
    let currentRow = 0;
    function showRow(idx) {
      allRows.forEach((row, i) => row.style.display = i === idx ? 'grid' : 'none');
    }
    showRow(0);
    // Add event listeners for numbered buttons
    document.querySelectorAll('.beliefs-page-btn').forEach(btn => {
      btn.onclick = function() {
        currentRow = parseInt(this.getAttribute('data-page'));
        showRow(currentRow);
        document.querySelectorAll('.beliefs-page-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
      };
    });
    // Set first button as active
    document.querySelector('.beliefs-page-btn').classList.add('active');
  }
}

document.addEventListener('DOMContentLoaded', renderBeliefsSection);
