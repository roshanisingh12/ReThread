// ════════════════════════════════════════
// NGO DASHBOARD
// ════════════════════════════════════════
function renderNGO() {
    const needs = [
        { cat: 'Winter Clothes', emoji: '🧥', need: 50, recv: 32, urgency: 'High' },
        { cat: "Children's Wear", emoji: '👶', need: 30, recv: 30, urgency: 'Low' },
        { cat: 'Blankets', emoji: '🛏️', need: 40, recv: 15, urgency: 'High' },
        { cat: 'Footwear', emoji: '👟', need: 20, recv: 8, urgency: 'Medium' },
        { cat: 'Adult Clothing', emoji: '👔', need: 25, recv: 20, urgency: 'Medium' },
    ];
    const incoming = [
        { type: 'Winter Jackets', qty: 10, from: 'Mumbai', via: 'Pune Hub', vol: 'Rahul K.', eta: 'Tomorrow 10am', status: 'In Transit', cls: 'badge-yellow' },
        { type: "Children's Clothes", qty: 15, from: 'Bengaluru', via: 'India Post', vol: 'Anita M.', eta: 'Dec 28', status: 'Picked Up', cls: 'badge-purple' },
        { type: 'Blankets', qty: 8, from: 'Delhi', via: 'Flipkart Returns', vol: 'Suresh P.', eta: 'Jan 2', status: 'Assigned', cls: 'badge-blue' },
    ];
    return `
<div id="ngo-page">
  <div class="container" style="padding-top:90px;padding-bottom:60px">
    <div class="ngo-header fade-up">
      <div class="ngo-logo">🏕️</div>
      <div>
        <div class="ngo-name">Shimla Mountain Relief Camp</div>
        <div class="ngo-verified">✅ Verified NGO</div>
        <div style="font-size:13px;color:rgba(255,255,255,0.55);margin-top:6px">Registration: NGO-HP-2018-01234 · Active since 2018</div>
      </div>
      <div style="margin-left:auto">
        <button class="btn btn-outline-white btn-sm" onclick="showToast('blue','📊 Report','Generating impact report...')">Download Report</button>
      </div>
    </div>

    <!-- SURPLUS ALERT -->
    <div class="surplus-alert fade-up">
      <span class="surplus-alert-icon">🔔</span>
      <div class="surplus-alert-content">
        <div class="surplus-alert-title">Mumbai has 200 surplus winter items — route here?</div>
        <div class="surplus-alert-desc">AI matched 200 winter items from Mumbai surplus to your current high need. Estimated delivery: 3 days via India Post.</div>
      </div>
      <button class="btn btn-orange btn-sm" onclick="showToast('green','✅ Route Accepted!','200 winter items routed to your camp. ETA: 3 days.')">Accept Route</button>
    </div>

    <div class="grid-2" style="gap:32px;align-items:start">
      <!-- NEEDS -->
      <div class="card card-white fade-up">
        <h2 style="font-size:18px;font-weight:700;color:var(--dark-navy);margin-bottom:20px">📋 Current Needs</h2>
        <div class="needs-table-wrap">
          <table class="needs-table">
            <thead><tr><th>Category</th><th>Need</th><th>Received</th><th>Gap</th><th>Progress</th><th>Urgency</th></tr></thead>
            <tbody>
              ${needs.map(n => {
        const gap = n.need - n.recv;
        const pct = Math.round((n.recv / n.need) * 100);
        const cls = n.urgency === 'High' ? 'badge-red' : n.urgency === 'Medium' ? 'badge-yellow' : 'badge-green';
        return `<tr>
                  <td><span>${n.emoji} ${n.cat}</span></td>
                  <td><strong>${n.need}</strong></td>
                  <td>${n.recv}</td>
                  <td><strong style="color:${gap > 0 ? 'var(--accent-orange)' : 'var(--primary-green)'}">${gap > 0 ? gap : '✓ 0'}</strong></td>
                  <td style="min-width:100px"><div class="progress-bar-wrap"><div class="progress-bar-fill ${pct >= 100 ? '' : pct < 50 ? 'orange' : ''}" style="width:${Math.min(pct, 100)}%"></div></div></td>
                  <td><select class="needs-urgency-select"><option ${n.urgency === 'High' ? 'selected' : ''}>High</option><option ${n.urgency === 'Medium' ? 'selected' : ''}>Medium</option><option ${n.urgency === 'Low' ? 'selected' : ''}>Low</option></select></td>
                </tr>`;
    }).join('')}
            </tbody>
          </table>
        </div>
        <button class="btn btn-primary" style="margin-top:20px" onclick="showToast('green','✅ Needs Updated!','Your needs list has been broadcast to all nearby donors.')">Update Needs</button>
      </div>

      <!-- INCOMING + IMPACT -->
      <div style="display:flex;flex-direction:column;gap:24px">
        <div class="card card-white fade-up fade-up-delay-2">
          <h2 style="font-size:18px;font-weight:700;color:var(--dark-navy);margin-bottom:20px">📦 Incoming Donations</h2>
          <div class="table-wrap">
            <table>
              <thead><tr><th>Type</th><th>Qty</th><th>From</th><th>Via</th><th>Volunteer</th><th>ETA</th><th>Status</th></tr></thead>
              <tbody>
                ${incoming.map(i => `<tr>
                  <td>${i.type}</td><td>${i.qty}</td><td>${i.from}</td><td>${i.via}</td>
                  <td>${i.vol}</td><td>${i.eta}</td>
                  <td><span class="badge ${i.cls}">${i.status}</span></td>
                </tr>`).join('')}
              </tbody>
            </table>
          </div>
        </div>
        <div class="card card-white fade-up fade-up-delay-3">
          <h2 style="font-size:18px;font-weight:700;color:var(--dark-navy);margin-bottom:20px">📊 Impact This Month</h2>
          <div class="grid-3" style="gap:16px">
            <div style="text-align:center;background:var(--light-green);border-radius:var(--radius);padding:20px">
              <div style="font-size:32px;font-weight:900;color:var(--primary-green)">340</div>
              <div style="font-size:12px;color:var(--muted-gray);margin-top:4px">Families Served</div>
            </div>
            <div style="text-align:center;background:var(--light-blue);border-radius:var(--radius);padding:20px">
              <div style="font-size:32px;font-weight:900;color:#1565C0">892</div>
              <div style="font-size:12px;color:var(--muted-gray);margin-top:4px">Items Received</div>
            </div>
            <div style="text-align:center;background:#FFF3E0;border-radius:var(--radius);padding:20px">
              <div style="font-size:32px;font-weight:900;color:var(--accent-orange)">4/5</div>
              <div style="font-size:12px;color:var(--muted-gray);margin-top:4px">Categories Met</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
}
