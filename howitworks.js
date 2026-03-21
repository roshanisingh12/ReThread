// ════════════════════════════════════════
// HOW IT WORKS — DEEP DIVE
// ════════════════════════════════════════
function renderHowItWorks() {
    return `
<div id="howitworks-page">
  <div class="page-header">
    <div class="container">
      <span class="section-label">Under the Hood</span>
      <h1 class="section-title">How ReThread Works</h1>
      <p class="section-subtitle">From ClothID to AI matching to green credits — here's the technology that makes zero-waste fashion possible.</p>
    </div>
  </div>

  <!-- SECTION 1: ClothID -->
  <div class="section container">
    <div class="grid-2">
      <div class="fade-up">
        <span class="section-label">ClothID System</span>
        <h2 class="section-title">Every Cloth Gets an Identity</h2>
        <p class="section-subtitle">A unique QR code assigned to each garment at the time of registration. Scan it anytime to reveal its complete lifecycle story.</p>
      </div>
      <div class="cloth-id-visual fade-up fade-up-delay-2">
        <div class="qr-display">⬛</div>
        <div>
          <p style="font-size:14px;color:rgba(255,255,255,0.6);margin-bottom:16px">Scanning reveals:</p>
          <ul class="cloth-id-list">
            ${['Where made + material', 'Water used in production (2,700L avg)', 'Carbon footprint tracker', 'Full wear + wash history', 'Current health score (0–100)', 'Complete journey timeline', 'Recycling eligibility status'].map(i => `
            <li class="cloth-id-item"><div class="cloth-id-item-dot"></div>${i}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- SECTION 2: AI Matching -->
  <div class="section bg-green">
    <div class="container">
      <div style="text-align:center;margin-bottom:48px">
        <span class="section-label">AI Engine</span>
        <h2 class="section-title" style="text-align:center">AI Matching Engine</h2>
        <p class="section-subtitle" style="margin:0 auto;text-align:center">8-step intelligent routing that ensures your donation reaches exactly the right hands.</p>
      </div>
      <div class="flowchart-wrapper" style="max-width:480px">
        ${[
            ['DONATION ARRIVES', 'active-flow'],
            ['AI reads: Type, Qty, Condition', ''],
            ['Checks: Zone demand map', ''],
            ['Finds: Best matched NGO', ''],
            ['Checks: Distance + urgency', ''],
            ['Bundles: Nearby donations', ''],
            ['Assigns: Best volunteer', ''],
            ['Routes: Cheapest path', ''],
            ['DELIVERED ✅', 'active-flow-orange'],
        ].map(([s, cls], i) => `
        <div class="flow-step">
          <div class="flow-box ${cls} fade-up" style="transition-delay:${i * 0.08}s">${s}</div>
          ${i < 8 ? '<div class="flow-arrow"></div>' : ''}
        </div>`).join('')}
      </div>
    </div>
  </div>

  <!-- SECTION 3: Health Algorithm -->
  <div class="section container">
    <div class="grid-2">
      <div class="fade-up">
        <span class="section-label">Health Score</span>
        <h2 class="section-title">Fabric Health Algorithm</h2>
        <p class="section-subtitle">A proprietary formula that continuously monitors your garment's condition and tells you the optimal time to donate, sell or recycle.</p>
        <div style="margin-top:24px;display:flex;flex-direction:column;gap:12px">
          ${[
            { pct: 100, label: 'New — Perfect condition. Keep wearing!', color: 'var(--primary-green)' },
            { pct: 75, label: 'Good — Wearable. Can donate when ready.', color: '#66BB6A' },
            { pct: 50, label: 'Fair — Donate Soon. Donation Score rising.', color: 'var(--warning-yellow)' },
            { pct: 25, label: 'Poor — Recycle. Journey almost complete.', color: '#EF5350' },
        ].map(h => `
          <div style="display:flex;align-items:center;gap:12px">
            <div style="font-size:13px;font-weight:700;color:${h.color};min-width:36px">${h.pct}%</div>
            <div style="flex:1">
              <div class="progress-bar-wrap"><div class="progress-bar-fill" style="width:${h.pct}%;background:${h.color}"></div></div>
            </div>
            <div style="font-size:12px;color:var(--muted-gray);min-width:200px">${h.label}</div>
          </div>`).join('')}
        </div>
      </div>
      <div class="health-formula fade-up fade-up-delay-2">
        <div class="formula-title">Health Score Formula</div>
        <div class="formula-line"><span>Starting Score</span><span class="formula-op">→</span><span class="formula-value start">100</span></div>
        <div class="formula-line"><span>Each wear</span><span class="formula-op">−</span><span class="formula-value negative">0.5 pts</span></div>
        <div class="formula-line"><span>Each wash (cold)</span><span class="formula-op">−</span><span class="formula-value negative">1.2 pts</span></div>
        <div class="formula-line"><span>Hot wash penalty</span><span class="formula-op">−</span><span class="formula-value negative">5.0 pts</span></div>
        <div class="formula-line"><span>Damage event</span><span class="formula-op">−</span><span class="formula-value negative">10 pts</span></div>
        <div class="formula-line"><span>Repair bonus</span><span class="formula-op">+</span><span class="formula-value positive">8.0 pts</span></div>
        <div style="padding:16px;background:var(--light-green);border-radius:var(--radius);margin-top:16px;font-size:14px;color:var(--dark-navy)">
          <strong>Example:</strong> 47 wears × −0.5 = −23.5 · 23 washes × −1.2 = −27.6 · 2 repairs × +8 = +16 · Final: <strong>100 − 23.5 − 27.6 + 16 = 64.9%</strong>
        </div>
      </div>
    </div>
  </div>

  <!-- SECTION 4: Green Credits -->
  <div class="section bg-card">
    <div class="container">
      <div style="text-align:center;margin-bottom:48px">
        <span class="section-label">Rewards</span>
        <h2 class="section-title" style="text-align:center">Green Credits System</h2>
        <p class="section-subtitle" style="margin:0 auto;text-align:center">Earn credits for every sustainable action. Spend them on rewards that matter.</p>
      </div>
      <div class="credits-grid fade-up">
        <div class="credits-card">
          <div class="credits-card-title">🌱 How to Earn</div>
          ${[['Donate clothes', '+ 50 credits'], ['Volunteer pickup', '+ 30 credits'], ['Repair instead of replace', '+ 40 credits'], ['Recycle at end of life', '+ 60 credits'], ['Refer a donor', '+ 25 credits'], ['List on marketplace', '+ 15 credits']].map(([a, c]) => `
          <div class="credits-item"><span class="credits-action">${a}</span><span class="credits-amount earn">${c}</span></div>`).join('')}
        </div>
        <div class="credits-card">
          <div class="credits-card-title">🎁 How to Spend</div>
          ${[['Discount at eco brands', '100 credits'], ['Free pickup for donations', '75 credits'], ['Priority marketplace listing', '50 credits'], ['Plant a tree (via GreenSpace)', '100 credits'], ['Digital impact certificate', '200 credits'], ['ReThread merchandise', '300 credits']].map(([a, c]) => `
          <div class="credits-item"><span class="credits-action">${a}</span><span class="credits-amount spend">${c}</span></div>`).join('')}
        </div>
      </div>
    </div>
  </div>
</div>`;
}
