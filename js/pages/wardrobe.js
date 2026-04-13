// ════════════════════════════════════════
// MY DONATIONS PAGE (Replaces Wardrobe)
// ════════════════════════════════════════

let myDonations = [
    { id: "RT-2024-62527", item: "Men's Winter Jacket", ngo: "Aasra Relief Camp", status: "Picked Up", date: "Apr 13, 2026" },
    { id: "RT-2024-00123", item: "Blue Denim Jacket", ngo: "Dharavi Hope Center", status: "Delivered", date: "Oct 12, 2024" },
    { id: "RT-2024-00456", item: "Running Shoes", ngo: "Mumbai Relief Hub", status: "In Transit", date: "Nov 02, 2024" }
];

function renderWardrobe() {
    return `
<div id="donations-page">
  <div class="page-header" style="background:#f8fafc; padding:60px 0 40px;">
    <div class="container">
      <span class="section-label" style="background:var(--light-green); color:var(--primary-green); padding:4px 12px; border-radius:50px; font-size:12px; font-weight:700; text-transform:uppercase;">Tracking</span>
      <h1 class="section-title" style="font-size:36px; font-weight:800; color:var(--dark-navy); margin:12px 0;">My Donations</h1>
      <p class="section-subtitle" style="color:var(--muted-gray); font-size:16px; max-width:600px;">Track your clothes from pickup to the exact moment they reach someone in need.</p>
    </div>
  </div>
  <div class="container section">
    
    <div class="wardrobe-toolbar" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:32px;">
      <div class="filter-chips" style="display:flex; gap:12px;">
        <div class="chip active" onclick="filterChip(this,'all')">All</div>
        <div class="chip" onclick="filterChip(this,'transit')">In Transit</div>
        <div class="chip" onclick="filterChip(this,'delivered')">Delivered</div>
      </div>
      <button class="btn btn-primary" onclick="showPage('donate')" style="border-radius:12px; padding:10px 20px;">+ Donate Again</button>
    </div>

    <div class="grid-2" id="donations-grid" style="gap:24px;">
      ${myDonations.map(don => renderDonationCard(don)).join('')}
    </div>

    <!-- QR Modal -->
    <div class="modal-overlay" id="qr-modal">
      <div class="modal" style="text-align:center; padding:32px; border-radius:16px;">
        <h3 style="font-weight:800; font-size:24px; color:var(--dark-navy); margin-bottom:8px;" id="qr-modal-id">RT-...</h3>
        <p style="color:var(--muted-gray); font-size:14px; margin-bottom:24px;">Show this to the volunteer during pickup.</p>
        <div id="qr-modal-canvas" style="display:flex; justify-content:center; margin-bottom:24px; padding:16px; background:#f9f9f9; border-radius:12px; width:fit-content; margin:0 auto;"></div>
        <button class="btn btn-outline-green" style="width:100%; justify-content:center; border-radius:12px;" onclick="closeQRModal()">Close</button>
      </div>
    </div>
  </div>
</div>`;
}

function renderDonationCard(don) {
    let progress = don.status === "Delivered" ? 100 : don.status === "In Transit" ? 50 : 20;
    let statusColor = don.status === "Delivered" ? 'var(--primary-green)' : 'var(--muted-gray)';
    
    return `
  <div class="clothing-card fade-up" style="background:#fff; border-radius:16px; border:1px solid var(--border-color); box-shadow:0 4px 12px rgba(0,0,0,0.03); cursor:default; overflow:hidden;">
    <div class="clothing-card-body" style="padding:24px;">
      <div style="display:flex; justify-content:space-between; align-items:start; margin-bottom:20px;">
        <div>
          <div class="clothing-card-name" style="font-size:18px; font-weight:800; color:var(--dark-navy);">${don.item}</div>
          <div class="clothing-card-brand" style="font-size:14px; color:var(--muted-gray); margin-top:4px;">${don.ngo}</div>
        </div>
        <div style="font-size:12px; font-weight:700; color:var(--muted-gray); letter-spacing:0.5px;">${don.id}</div>
      </div>
      
      <!-- Stepper timeline -->
      <div style="margin:30px 0;">
        <div style="display:flex; justify-content:space-between; font-size:11px; font-weight:700; color:var(--muted-gray); margin-bottom:12px; text-transform:uppercase; letter-spacing:0.5px;">
          <span style="color:${progress >= 20 ? 'var(--primary-green)' : ''}">Picked Up</span>
          <span style="color:${progress >= 50 ? 'var(--primary-green)' : ''}">Transit</span>
          <span style="color:${progress >= 100 ? 'var(--primary-green)' : ''}">Delivered</span>
        </div>
        <div class="progress-bar-wrap" style="height:6px; background:#e2e8f0; border-radius:10px;">
          <div class="progress-bar-fill" style="width:${progress}%; height:100%; background:var(--primary-green); border-radius:10px; transition:width 1s ease;"></div>
        </div>
      </div>
      
      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:24px;">
        <div style="font-size:13px; color:var(--muted-gray); font-weight:500;">${don.date}</div>
        <button class="btn btn-outline-green btn-sm" style="border-radius:10px; padding:6px 16px; font-weight:700;" onclick="openQRModal('${don.id}')">View QR</button>
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
        new QRCode(canvas, { text: id, width: 180, height: 180 });
    } else {
        canvas.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?data=${id}&size=180x180" alt="QR Code"/>`;
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
