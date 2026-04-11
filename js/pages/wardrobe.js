// ════════════════════════════════════════
// MY DONATIONS PAGE (Replaces Wardrobe)
// ════════════════════════════════════════

let myDonations = [
    { id: "RT-2024-00123", item: "Blue Denim Jacket", ngo: "Dharavi Hope Center", status: "Delivered", date: "Oct 12, 2024" },
    { id: "RT-2024-00456", item: "Running Shoes", ngo: "Mumbai Relief Hub", status: "In Transit", date: "Nov 02, 2024" }
];

function renderWardrobe() {
    return `
<div id="donations-page">
  <div class="page-header">
    <div class="container">
      <span class="section-label">Tracking</span>
      <h1 class="section-title">My Donations</h1>
      <p class="section-subtitle">Track your clothes from pickup to the exact moment they reach someone in need.</p>
    </div>
  </div>
  <div class="container section">
    
    <div class="wardrobe-toolbar" style="margin-bottom:24px; justify-content:space-between">
      <div class="filter-chips">
        <div class="chip active" onclick="filterChip(this,'all')">All</div>
        <div class="chip" onclick="filterChip(this,'transit')">In Transit</div>
        <div class="chip" onclick="filterChip(this,'delivered')">Delivered</div>
      </div>
      <button class="btn btn-primary btn-sm" onclick="showPage('donate')">+ Donate Again</button>
    </div>

    <div class="grid-2" id="donations-grid">
      ${myDonations.map(don => renderDonationCard(don)).join('')}
    </div>

    <!-- QR Modal -->
    <div class="modal-overlay" id="qr-modal">
      <div class="modal" style="text-align:center; padding:32px;">
        <h3 style="font-weight:800; font-size:24px; color:var(--dark-navy); margin-bottom:8px;" id="qr-modal-id">RT-...</h3>
        <p style="color:var(--muted-gray); font-size:14px; margin-bottom:24px;">Show this to the volunteer during pickup.</p>
        <div id="qr-modal-canvas" style="display:flex; justify-content:center; margin-bottom:24px;"></div>
        <button class="btn btn-outline-green" style="width:100%; justify-content:center;" onclick="closeQRModal()">Close</button>
      </div>
    </div>
  </div>
</div>`;
}

function renderDonationCard(don) {
    let progress = don.status === "Delivered" ? 100 : don.status === "In Transit" ? 50 : 25;
    return `
  <div class="clothing-card fade-up" style="cursor:default;">
    <div class="clothing-card-body">
      <div style="display:flex; justify-content:space-between; align-items:start;">
        <div>
          <div class="clothing-card-name">${don.item}</div>
          <div class="clothing-card-brand">${don.ngo}</div>
        </div>
        <div style="font-size:12px; font-weight:700; color:var(--muted-gray);">${don.id}</div>
      </div>
      
      <!-- Stepper timeline -->
      <div style="margin:24px 0;">
        <div style="display:flex; justify-content:space-between; font-size:11px; font-weight:600; color:var(--muted-gray); margin-bottom:8px;">
          <span style="color:${progress >= 25 ? 'var(--primary-green)' : ''}">Picked Up</span>
          <span style="color:${progress >= 50 ? 'var(--primary-green)' : ''}">Transit</span>
          <span style="color:${progress >= 100 ? 'var(--primary-green)' : ''}">Delivered</span>
        </div>
        <div class="progress-bar-wrap">
          <div class="progress-bar-fill" style="width:${progress}%; background:var(--primary-green);"></div>
        </div>
      </div>
      
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <div style="font-size:12px; color:var(--muted-gray);">${don.date}</div>
        <button class="btn btn-outline-green btn-sm" onclick="openQRModal('${don.id}')">View QR</button>
      </div>
    </div>
  </div>`;
}

function openQRModal(id) {
    document.getElementById('qr-modal').classList.add('open');
    document.getElementById('qr-modal-id').textContent = id;
    const canvas = document.getElementById('qr-modal-canvas');
    canvas.innerHTML = '';
    if (typeof QRCode !== 'undefined') {
        new QRCode(canvas, { text: id, width: 200, height: 200 });
    } else {
        canvas.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?data=${id}&size=200x200" alt="QR Code"/>`;
    }
}

function closeQRModal() {
    document.getElementById('qr-modal').classList.remove('open');
}

function filterChip(el, filter) {
    document.querySelectorAll('.filter-chips .chip').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
}

// Called from donate.js successfully
function addNewDonation(state) {
    if (!state || !state.id) return;
    myDonations.unshift({
        id: state.id,
        item: state.analysis?.item_type || "Clothing Item",
        ngo: state.ngo?.name || "Local NGO",
        status: "Picked Up",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    });
}
