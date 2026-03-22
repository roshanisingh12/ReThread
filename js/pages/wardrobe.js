// ════════════════════════════════════════
// WARDROBE PAGE
// ════════════════════════════════════════
const wardrobeItems = [
    { id: 1, icon: '👖', name: 'Blue Denim Jacket', brand: "Levi's", worn: 47, health: 68, healthClass: 'yellow', score: 71, days: 45, status: 'donate' },
    { id: 2, icon: '👔', name: 'White Formal Shirt', brand: 'Arrow', worn: 12, health: 91, healthClass: '', score: 28, days: 3, status: 'active' },
    { id: 3, icon: '👟', name: 'Running Shoes', brand: 'Nike', worn: 89, health: 32, healthClass: 'red', score: 88, days: 14, status: 'recycle' },
    { id: 4, icon: '🧣', name: 'Woolen Scarf', brand: 'Fab India', worn: 22, health: 78, healthClass: '', score: 45, days: 20, status: 'active' },
    { id: 5, icon: '🩳', name: 'Cotton Shorts', brand: 'H&M', worn: 35, health: 61, healthClass: 'yellow', score: 64, days: 8, status: 'donate' },
    { id: 6, icon: '🎽', name: 'Sports T-Shirt', brand: 'Adidas', worn: 56, health: 55, healthClass: 'yellow', score: 70, days: 30, status: 'donate' },
];

function renderWardrobe() {
    return `
<div id="wardrobe-page">
  <div class="page-header">
    <div class="container">
      <span class="section-label">Digital Wardrobe</span>
      <h1 class="section-title">My Digital Wardrobe</h1>
      <p class="section-subtitle">Track every item's health, lifespan and donation readiness in one place.</p>
    </div>
  </div>
  <div class="container section">
    <!-- STATS -->
    <div class="wardrobe-stats-bar">
      <div class="wardrobe-stat"><div class="wardrobe-stat-num">24</div><div class="wardrobe-stat-label">Items Tracked</div></div>
      <div class="wardrobe-stat"><div class="wardrobe-stat-num green">18</div><div class="wardrobe-stat-label">Active</div></div>
      <div class="wardrobe-stat"><div class="wardrobe-stat-num orange">4</div><div class="wardrobe-stat-label">Donate Soon</div></div>
      <div class="wardrobe-stat"><div class="wardrobe-stat-num" style="color:#C62828">2</div><div class="wardrobe-stat-label">Recycling</div></div>
      <div class="wardrobe-stat"><div class="wardrobe-stat-num green">84 kg</div><div class="wardrobe-stat-label">CO₂ Saved</div></div>
      <div class="wardrobe-stat"><div class="wardrobe-stat-num">71%</div><div class="wardrobe-stat-label">Usage Rate</div></div>
    </div>
    <!-- TOOLBAR -->
    <div class="wardrobe-toolbar">
      <div class="search-input-wrap">
        <span class="search-icon">🔍</span>
        <input type="text" placeholder="Search your wardrobe..." oninput="filterWardrobe(this.value)"/>
      </div>
      <div class="filter-chips">
        <div class="chip active" onclick="filterChip(this,'all')">All</div>
        <div class="chip" onclick="filterChip(this,'active')">Active</div>
        <div class="chip" onclick="filterChip(this,'donate')">Donate Soon</div>
        <div class="chip" onclick="filterChip(this,'recycle')">Recycle</div>
      </div>
      <button class="btn btn-orange btn-sm" onclick="showToast('blue','👕 Add Item','Use QR scan or manual entry to add a cloth item!')">+ Add Item</button>
    </div>
    <!-- GRID -->
    <div class="grid-3" id="wardrobe-grid">
      ${wardrobeItems.map(item => renderClothCard(item)).join('')}
    </div>
  </div>

  <!-- PASSPORT MODAL -->
  <div class="passport-modal" id="passport-modal">
    <div class="passport-modal-overlay" onclick="closePassport()"></div>
    <div class="passport-modal-content" id="passport-modal-content"></div>
  </div>
</div>`;
}

function renderClothCard(item) {
    const healthColor = item.health >= 70 ? 'var(--primary-green)' : item.health >= 40 ? 'var(--warning-yellow)' : '#C62828';
    return `
  <div class="clothing-card fade-up" onclick="openPassport(${item.id})">
    <div class="clothing-card-img">
      <span style="font-size:60px">${item.icon}</span>
      <div class="clothing-worn-badge">Worn ${item.worn}×</div>
    </div>
    <div class="clothing-card-body">
      <div class="clothing-card-name">${item.name}</div>
      <div class="clothing-card-brand">${item.brand}</div>
      <div class="clothing-health-section">
        <div class="clothing-health-header">
          <span>Fabric Health</span>
          <span class="clothing-health-pct" style="color:${healthColor}">${item.health}%</span>
        </div>
        <div class="progress-bar-wrap">
          <div class="progress-bar-fill ${item.healthClass}" style="width:${item.health}%"></div>
        </div>
      </div>
      <div class="clothing-card-meta">
        <span>${item.days} days since worn</span>
        <span class="badge ${item.score > 70 ? 'badge-orange' : item.score > 40 ? 'badge-yellow' : 'badge-green'}">Score: ${item.score}</span>
      </div>
      <div class="clothing-card-actions">
        <button class="clothing-action-btn" onclick="event.stopPropagation();showToast('blue','👕 Logged!','Wear count updated for ${item.name}')">Wear</button>
        <button class="clothing-action-btn" onclick="event.stopPropagation();showToast('blue','🫧 Logged!','Wash count updated')">Wash</button>
        <button class="clothing-action-btn donate" onclick="event.stopPropagation();showPage('donate')">Donate</button>
      </div>
    </div>
  </div>`;
}

function openPassport(id) {
    const item = wardrobeItems.find(i => i.id === id) || wardrobeItems[0];
    const modal = document.getElementById('passport-modal');
    document.getElementById('passport-modal-content').innerHTML = `
    <div class="passport-modal-header">
      <div class="passport-modal-img">${item.icon}</div>
      <div>
        <div class="passport-modal-name">${item.name}</div>
        <div class="passport-modal-brand">${item.brand} · Purchase: ₹2,499</div>
      </div>
      <button class="passport-modal-close" onclick="closePassport()">✕</button>
    </div>
    <div class="passport-modal-tabs">
      <div class="passport-tab active" onclick="switchTab(this,'tab-overview')">Overview</div>
      <div class="passport-tab" onclick="switchTab(this,'tab-health')">Health Timeline</div>
      <div class="passport-tab" onclick="switchTab(this,'tab-repair')">Repair Log</div>
      <div class="passport-tab" onclick="switchTab(this,'tab-journey')">Journey</div>
    </div>
    <div class="passport-tab-content">
      <div class="passport-tab-panel active" id="tab-overview">
        <div class="overview-stats-grid">
          <div class="overview-stat"><div class="overview-stat-num">${item.worn}</div><div class="overview-stat-label">Times Worn</div></div>
          <div class="overview-stat"><div class="overview-stat-num">${Math.round(item.worn / 2)}</div><div class="overview-stat-label">Times Washed</div></div>
          <div class="overview-stat"><div class="overview-stat-num">2</div><div class="overview-stat-label">Repairs</div></div>
          <div class="overview-stat"><div class="overview-stat-num">₹53</div><div class="overview-stat-label">Cost / Wear</div></div>
          <div class="overview-stat"><div class="overview-stat-num">${item.days}d</div><div class="overview-stat-label">Last Worn</div></div>
          <div class="overview-stat"><div class="overview-stat-num">1.2yr</div><div class="overview-stat-label">Est. Life Left</div></div>
        </div>
        <div style="background:var(--card-bg);border-radius:var(--radius);padding:16px;margin-bottom:16px">
          <div style="font-size:13px;font-weight:600;color:var(--muted-gray);margin-bottom:8px">FABRIC HEALTH — ${item.health}%</div>
          <div class="progress-bar-wrap" style="height:12px"><div class="progress-bar-fill ${item.healthClass}" style="width:${item.health}%"></div></div>
        </div>
        <div style="display:flex;gap:8px;margin-top:20px">
          <button class="btn btn-primary btn-sm" onclick="showPage('donate')">Donate Now</button>
          <button class="btn btn-outline-green btn-sm" onclick="closePassport();showPage('marketplace')">List for Sale</button>
          <button class="btn btn-sm" style="border:1.5px solid var(--border-color);background:transparent;border-radius:50px" onclick="showToast('blue','🔧 Repair Shops','Showing nearest tailors and repair shops')">Find Repair Shop</button>
        </div>
      </div>
      <div class="passport-tab-panel" id="tab-health">
        <div style="background:var(--card-bg);border-radius:var(--radius);padding:24px;text-align:center">
          <div style="font-size:13px;color:var(--muted-gray);margin-bottom:16px">Health Score Over Time</div>
          <svg viewBox="0 0 300 120" style="width:100%;max-width:300px">
            <polyline points="0,20 50,35 90,50 110,60 150,55 180,75 220,80 260,90 300,85" fill="none" stroke="var(--primary-green)" stroke-width="2.5" stroke-linecap="round"/>
            <polyline points="0,20 50,35 90,50 110,60 150,55 180,75 220,80 260,90 300,85" fill="rgba(27,107,58,0.08)"/>
            ${[0, 50, 100, 150, 200, 250, 300].map(x => `<circle cx="${x === 300 ? 300 : x}" cy="${[20, 35, 50, 60, 55, 75, 80, 90, 85][Math.round(x / 300 * 8)] || 85}" r="3" fill="var(--primary-green)"/>`).join('')}
            <text x="0" y="115" font-size="9" fill="#546E7A">Jan</text>
            <text x="240" y="115" font-size="9" fill="#546E7A">Now</text>
          </svg>
          <div style="margin-top:12px;font-size:13px;color:var(--muted-gray)">Score drops after each wash, recovers after repair</div>
        </div>
      </div>
      <div class="passport-tab-panel" id="tab-repair">
        <div class="timeline">
          <div class="timeline-item"><div class="timeline-dot green">🔧</div><div><div class="timeline-title">Button replaced</div><div class="timeline-date">March 2024</div><div class="timeline-desc">Front button replaced at local tailor. Cost: ₹20</div></div></div>
          <div class="timeline-item"><div class="timeline-dot orange">🔗</div><div><div class="timeline-title">Zip fixed</div><div class="timeline-date">July 2024</div><div class="timeline-desc">Zip slider repaired. Cost: ₹50</div></div></div>
        </div>
        <button class="btn btn-outline-green btn-sm" style="margin-top:12px" onclick="showToast('blue','🔧 Add Repair','Log a new repair entry for this item')">+ Add Repair Log</button>
      </div>
      <div class="passport-tab-panel" id="tab-journey">
        <div class="timeline">
          <div class="timeline-item"><div class="timeline-dot green">🎁</div><div><div class="timeline-title">Donated by You</div><div class="timeline-date">Dec 10, 2024 · 10:30 AM</div></div></div>
          <div class="timeline-item"><div class="timeline-dot orange">🚗</div><div><div class="timeline-title">Pickup by Rahul K.</div><div class="timeline-date">Dec 11, 2024 · 9:45 AM</div></div></div>
          <div class="timeline-item"><div class="timeline-dot blue">📦</div><div><div class="timeline-title">In Transit — Pune Hub</div><div class="timeline-date">Dec 12, 2024</div></div></div>
          <div class="timeline-item"><div class="timeline-dot green">✅</div><div><div class="timeline-title">NGO Received — Shimla Camp</div><div class="timeline-date">Dec 15, 2024</div><div class="timeline-desc">Given to a family of 4 in Shimla</div></div></div>
        </div>
      </div>
    </div>`;
    modal.classList.add('open');
}

function closePassport() { document.getElementById('passport-modal').classList.remove('open'); }

function switchTab(el, tabId) {
    el.closest('.passport-modal-content').querySelectorAll('.passport-tab').forEach(t => t.classList.remove('active'));
    el.closest('.passport-modal-content').querySelectorAll('.passport-tab-panel').forEach(p => p.classList.remove('active'));
    el.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

function filterChip(el, filter) {
    document.querySelectorAll('.filter-chips .chip').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
}

function filterWardrobe(val) { }
