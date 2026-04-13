// ════════════════════════════════════════
// NGO DASHBOARD
// ════════════════════════════════════════

function renderNGO() {
    const needs = [
        { cat: 'Adult Winter Wear', emoji: '🧥', need: 50, urgency: 'Critical', color: 'badge-red' },
        { cat: "Children's Clothing", emoji: '👶', need: 30, urgency: 'Urgent', color: 'badge-orange' },
        { cat: 'Blankets', emoji: '🛏️', need: 40, urgency: 'Critical', color: 'badge-red' },
        { cat: 'Footwear', emoji: '👟', need: 20, urgency: 'Normal', color: 'badge-green' }
    ];
    
    // Quick calculations for the mock dashboard
    const monthDonations = 892;
    const pendingPickups = 4;
    
    return `
<div id="ngo-page">
  <div class="page-header" style="padding-top:20px; padding-bottom:40px;">
    <div class="container">
      <div class="ngo-header fade-up" style="display:flex; align-items:center; gap:24px; padding-top:24px;">
        <div style="font-size:64px; background:var(--card-bg); padding:16px; border-radius:16px;">🏕️</div>
        <div>
          <h1 class="section-title" style="margin:0; font-size:32px; color:#fff;">Aasra Relief Camp</h1>
          <div style="display:flex; gap:12px; align-items:center; margin-top:8px;">
            <div class="badge badge-green">✅ Verified NGO</div>
            <div style="font-size:14px; color:rgba(255,255,255,0.65);">ID: NGO-2018-4001 · Pune</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container section">
    
    <!-- DASHBOARD STATS -->
    <h2 style="font-size:20px; font-weight:700; color:var(--dark-navy); margin-bottom:16px;">Overview (This Month)</h2>
    <div class="grid-3" style="margin-bottom:32px;">
      <div class="card card-white fade-up" style="text-align:center; padding:32px;">
        <div style="font-size:48px; font-weight:900; color:var(--primary-green);">${monthDonations}</div>
        <div style="font-size:14px; font-weight:600; color:var(--muted-gray); margin-top:8px;">Total Items Received</div>
      </div>
      <div class="card card-white fade-up fade-up-delay-1" style="text-align:center; padding:32px;">
        <div style="font-size:48px; font-weight:900; color:var(--accent-orange);">${pendingPickups}</div>
        <div style="font-size:14px; font-weight:600; color:var(--muted-gray); margin-top:8px;">Pending Pickups</div>
      </div>
      <div class="card card-white fade-up fade-up-delay-2" style="text-align:center; padding:32px;">
        <div style="font-size:48px; font-weight:900; color:#1565C0;">340</div>
        <div style="font-size:14px; font-weight:600; color:var(--muted-gray); margin-top:8px;">Families Served</div>
      </div>
    </div>

    <div class="grid-2" style="gap:32px; align-items:start;">
      <!-- CURRENT NEEDS BOARD -->
      <div class="card card-white fade-up">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
          <h2 style="font-size:18px; font-weight:700; color:var(--dark-navy); margin:0;">📋 Current Needs Board</h2>
          <button class="btn btn-outline-green btn-sm" onclick="showToast('blue','Post Need','Add need functionality')">+ Post</button>
        </div>
        
        <div style="display:flex; flex-direction:column; gap:12px;">
          ${needs.map(n => `
          <div style="border:1px solid var(--border-color); padding:16px; border-radius:8px; display:flex; justify-content:space-between; align-items:center;">
            <div style="display:flex; align-items:center; gap:16px;">
              <div style="font-size:24px;">${n.emoji}</div>
              <div>
                <div style="font-weight:700; font-size:15px; color:var(--dark-navy);">${n.cat}</div>
                <div style="font-size:13px; color:var(--muted-gray); margin-top:4px;">Qty Needed: ${n.need}</div>
              </div>
            </div>
            <div class="badge ${n.color}">${n.urgency}</div>
          </div>`).join('')}
        </div>
        <div style="font-size:13px; color:var(--muted-gray); margin-top:16px;">
          * Donors map relies on these urgency badges for live routing.
        </div>
      </div>

      <!-- ITEMS BY CATEGORY (MOCK CHART) -->
      <div class="card card-white fade-up fade-up-delay-1">
        <h2 style="font-size:18px; font-weight:700; color:var(--dark-navy); margin-bottom:20px;">📊 Items Received by Category</h2>
        <div style="display:flex; flex-direction:column; gap:20px;">
          
          <div>
            <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:13px; font-weight:600;">
              <span>Children's Clothing</span><span>410 items (46%)</span>
            </div>
            <div class="progress-bar-wrap" style="height:12px;"><div class="progress-bar-fill" style="width:46%; background:#42A5F5;"></div></div>
          </div>
          
          <div>
            <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:13px; font-weight:600;">
              <span>Winter Wear</span><span>250 items (28%)</span>
            </div>
            <div class="progress-bar-wrap" style="height:12px;"><div class="progress-bar-fill" style="width:28%; background:var(--primary-green);"></div></div>
          </div>
          
          <div>
            <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:13px; font-weight:600;">
              <span>Blankets</span><span>142 items (16%)</span>
            </div>
            <div class="progress-bar-wrap" style="height:12px;"><div class="progress-bar-fill" style="width:16%; background:var(--accent-orange);"></div></div>
          </div>
          
          <div>
            <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:13px; font-weight:600;">
              <span>Footwear</span><span>90 items (10%)</span>
            </div>
            <div class="progress-bar-wrap" style="height:12px;"><div class="progress-bar-fill" style="width:10%; background:#78909C;"></div></div>
          </div>

        </div>
      </div>
    </div>

  </div>
</div>`;
}
