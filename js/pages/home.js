// ════════════════════════════════════════
// HOME PAGE HTML
// ════════════════════════════════════════
function renderHome() {
  return `
<div id="home-page">

<!-- ── HERO ──────────────────────────────── -->
<section id="hero">
  <div class="container" style="display:flex;gap:60px;align-items:center;padding-top:40px;padding-bottom:60px;flex-wrap:wrap">
    <div class="hero-content">
      <div class="hero-label">🌱 Sustainable Donation</div>
      <h1 class="hero-headline">
        Give your clothes a<br/>
        <span style="color:var(--primary-green)">second life.</span>
      </h1>
      <p class="hero-subtitle">AI matches your unused clothing to the NGO that needs it most — right in your city.</p>
      <div class="hero-ctas">
        <button class="btn btn-primary btn-lg" onclick="showPage('donate')">Donate Now →</button>
        <button class="btn btn-outline-green btn-lg" onclick="showPage('howitworks')">See how it works</button>
      </div>
    </div>
    <div class="hero-visual" style="flex:1;min-width:280px">
      <div style="position:relative;display:inline-block">
        <div class="hero-float-badge badge-tl fade-up"><span>🤖</span> AI Matched</div>
        <div class="hero-float-badge badge-tr fade-up fade-up-delay-2"><span>📍</span> 1.8 km away</div>
        <div class="hero-float-badge badge-br fade-up fade-up-delay-3"><span>👕</span> Winter Need</div>
        <div class="phone-mockup">
          <div class="phone-screen">
            <div class="phone-notch"></div>
            <div class="phone-app">
              <div class="phone-app-header">
                <span class="phone-app-title">AI Vision Scan</span>
              </div>
              <div class="phone-clothes-card" style="text-align:center;padding:30px 15px">
                <div style="font-size:70px;margin-bottom:10px">🧥</div>
                <div style="font-weight:800;font-size:20px;color:#E2E8F0">Men's Winter Jacket</div>
                <div style="color:#94A3B8;font-size:15px;margin-top:6px;margin-bottom:24px">Condition: Good</div>
                <div style="background:rgba(74, 222, 128, 0.15);color:#4ADE80;padding:12px;border-radius:10px;font-size:14px;font-weight:700">
                  🎯 Match: Aasra NGO (1.8 km)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ── STATS ROW ──────────────────────────── -->
<section id="stats-row">
  <div class="container">
    <div class="stats-grid" style="grid-template-columns: repeat(3, 1fr);">
      <div class="stat-item fade-up">
        <div class="stat-number"><span class="counter" data-target="12400">0</span><span>+</span></div>
        <div class="stat-label">Items Donated</div>
      </div>
      <div class="stat-item fade-up fade-up-delay-1">
        <div class="stat-number"><span class="counter" data-target="87">0</span></div>
        <div class="stat-label">NGOs Onboarded</div>
      </div>
      <div class="stat-item fade-up fade-up-delay-2">
        <div class="stat-number"><span class="counter" data-target="31000">0</span><span>+</span></div>
        <div class="stat-label">Beneficiaries Clothed</div>
      </div>
    </div>
  </div>
</section>

<!-- ── HOW IT WORKS ───────────────────────── -->
<section id="how-it-works" class="section">
  <div class="container">
    <div style="text-align:center;margin-bottom:0">
      <span class="section-label">Simple Process</span>
      <h2 class="section-title" style="text-align:center">From Your Wardrobe to<br/> Someone Who Needs It</h2>
    </div>
    <div class="steps-container">
      <div class="step-item fade-up">
        <div class="step-icon step-icon-green" style="position:relative">
          <span>👕</span>
          <span class="step-number">1</span>
        </div>
        <div class="step-title">Add Clothes</div>
        <div class="step-desc">Scan QR or manually add to digital wardrobe</div>
      </div>
      <div class="step-item fade-up fade-up-delay-1">
        <div class="step-icon step-icon-green" style="position:relative">
          <span>🤖</span>
          <span class="step-number">2</span>
        </div>
        <div class="step-title">AI Tracks Lifespan</div>
        <div class="step-desc">Wear count, wash history, fabric health monitored</div>
      </div>
      <div class="step-item fade-up fade-up-delay-2">
        <div class="step-icon step-icon-orange" style="position:relative">
          <span>🔔</span>
          <span class="step-number">3</span>
        </div>
        <div class="step-title">Smart Alert</div>
        <div class="step-desc">AI tells you exactly when to donate each item</div>
      </div>
      <div class="step-item fade-up fade-up-delay-3">
        <div class="step-icon step-icon-green" style="position:relative">
          <span>📍</span>
          <span class="step-number">4</span>
        </div>
        <div class="step-title">Nearest Micro-Hub</div>
        <div class="step-desc">Drop at kirana store, apartment gate or petrol pump</div>
      </div>
      <div class="step-item fade-up fade-up-delay-4">
        <div class="step-icon step-icon-orange" style="position:relative">
          <span>🚗</span>
          <span class="step-number">5</span>
        </div>
        <div class="step-title">Volunteer Picks Up</div>
        <div class="step-desc">Bundled with nearby donations for one efficient trip</div>
      </div>
      <div class="step-item fade-up fade-up-delay-5">
        <div class="step-icon step-icon-green" style="position:relative">
          <span>❤️</span>
          <span class="step-number">6</span>
        </div>
        <div class="step-title">Reaches Right Person</div>
        <div class="step-desc">AI matched to exact NGO need in same neighbourhood</div>
      </div>
    </div>
  </div>
</section>

<!-- ── DISTRIBUTION MODEL ─────────────────── -->
<section id="distribution" class="section bg-dark">
  <div class="container">
    <div style="text-align:center;margin-bottom:48px">
      <span class="section-label">Our Model</span>
      <h2 class="section-title" style="text-align:center;color:#fff">How We Cut Shipping<br/>Costs by 90%</h2>
    </div>
    <div class="grid-3 dist-cards">
      <div class="dist-card green fade-up">
        <div class="dist-card-tag">Layer 1</div>
        <div class="dist-card-title">Hyperlocal</div>
        <div class="dist-card-range">📍 0–5 km radius</div>
        <div class="dist-card-desc">Micro-hubs at kirana stores, apartments, petrol pumps. Volunteer pickup and drop.</div>
        <span class="dist-cost-badge green">Cost: ZERO 🟢</span>
      </div>
      <div class="dist-card orange fade-up fade-up-delay-2">
        <div class="dist-card-tag">Layer 2</div>
        <div class="dist-card-title">Regional</div>
        <div class="dist-card-range">📍 5–50 km radius</div>
        <div class="dist-card-desc">AI bundles nearby donations going to same NGO into one trip.</div>
        <span class="dist-cost-badge orange">75% Cheaper 🟠</span>
      </div>
      <div class="dist-card blue fade-up fade-up-delay-3">
        <div class="dist-card-tag">Layer 3</div>
        <div class="dist-card-title">National</div>
        <div class="dist-card-range">📍 50km+</div>
        <div class="dist-card-desc">Piggybacks on Flipkart and Zomato return trips + India Post. Pre-positions seasonal clothes.</div>
        <span class="dist-cost-badge blue">85% Cheaper 🔵</span>
      </div>
    </div>
    <div class="dist-rules">
      <div class="dist-rule fade-up">
        <div class="dist-rule-num">01</div>
        <div class="dist-rule-title">Match Locally First</div>
        <div class="dist-rule-desc">80% of donations never leave 5 km radius</div>
      </div>
      <div class="dist-rule fade-up fade-up-delay-1">
        <div class="dist-rule-num">02</div>
        <div class="dist-rule-title">Bundle Before Shipping</div>
        <div class="dist-rule-desc">4 donations per trip instead of 1</div>
      </div>
      <div class="dist-rule fade-up fade-up-delay-2">
        <div class="dist-rule-num">03</div>
        <div class="dist-rule-title">Predict Before Needed</div>
        <div class="dist-rule-desc">Winter clothes moved in September, not November</div>
      </div>
      <div class="dist-rule fade-up fade-up-delay-3">
        <div class="dist-rule-num">04</div>
        <div class="dist-rule-title">Use Existing Fleets</div>
        <div class="dist-rule-desc">Zomato/Flipkart return trips = free delivery</div>
      </div>
    </div>
  </div>
</section>

<!-- ── CLOTHING LIFESPAN ───────────────────── -->
<section id="lifespan" class="section">
  <div class="container">
    <div class="grid-2">
      <div class="fade-up">
        <span class="section-label">Digital Passport</span>
        <h2 class="section-title">Every Cloth Has a Story</h2>
        <p class="section-subtitle">ReThread gives each piece of clothing a digital passport — tracking every wear, every wash, every repair from wardrobe to the hands of someone who truly needs it.</p>
        <div class="features-list" style="margin-top:24px">
          ${['Digital Clothing Passport (QR)', 'Wear Count Tracker', 'Fabric Health Score (0–100)', 'Wash & Repair History', 'Smart Donation Alerts', 'End-to-End Journey Tracking', 'Recycling Router'].map(f => `
          <div class="feature-item">
            <div class="feature-check">✓</div>
            <span>${f}</span>
          </div>`).join('')}
        </div>
      </div>
      <div class="fade-up fade-up-delay-2">
        <div class="cloth-passport-card">
          <div class="passport-header">
            <div class="passport-img">👖</div>
            <div>
              <div class="passport-name">Blue Denim Jacket</div>
              <div class="passport-brand">Levi's · Bought Jan 2022</div>
            </div>
            <div class="passport-qr" style="color:#fff;font-size:18px">⬛</div>
          </div>
          <div class="passport-stats">
            <div class="passport-stat"><div class="passport-stat-num">47</div><div class="passport-stat-label">Worn</div></div>
            <div class="passport-stat"><div class="passport-stat-num">23</div><div class="passport-stat-label">Washed</div></div>
            <div class="passport-stat"><div class="passport-stat-num">2</div><div class="passport-stat-label">Repairs</div></div>
          </div>
          <div class="passport-health">
            <div class="passport-health-header">
              <span>Fabric Health</span>
              <span class="passport-health-score">68%</span>
            </div>
            <div class="progress-bar-wrap">
              <div class="progress-bar-fill yellow" id="passport-health-bar" style="width:0%"></div>
            </div>
          </div>
          <div class="passport-score-row">
            <div>
              <div style="font-size:12px;color:var(--muted-gray);margin-bottom:4px">Donation Score</div>
              <div class="passport-donation-score">71/100</div>
            </div>
            <div class="passport-status">🔔 Donate Soon</div>
          </div>
          <div class="passport-meta">
            <div class="passport-meta-item">💰 ₹74/wear</div>
            <div class="passport-meta-item">🌱 8.5 kg CO₂ saved</div>
          </div>
          <div class="passport-actions">
            <button class="passport-action-btn donate" onclick="showPage('donate')" style="flex:2">Donate</button>
            <button class="passport-action-btn fix">Fix</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ── AI MATCHING ────────────────────────── -->
<section id="ai-matching" class="section bg-green">
  <div class="container">
    <div style="text-align:center">
      <span class="section-label">AI Engine</span>
      <h2 class="section-title" style="text-align:center">Zero Mismatch.<br/>Every Single Time.</h2>
    </div>
    <div class="flowchart-wrapper">
      ${['DONATION RECEIVED', 'AI READS TYPE + CONDITION', 'CHECKS ZONE DEMAND MAP', 'MATCHES NEAREST NGO NEED', 'BUNDLES WITH NEARBY DONATIONS', 'ASSIGNS BEST VOLUNTEER', 'DELIVERED SAME DAY'].map((s, i) => `
      <div class="flow-step">
        <div class="flow-box ${i === 0 ? 'active-flow' : i === 6 ? 'active-flow-orange' : ''} fade-up" style="transition-delay:${i * 0.1}s">${s}</div>
        ${i < 6 ? '<div class="flow-arrow"></div>' : ''}
      </div>`).join('')}
    </div>
    <div class="grid-3 ai-cards">
      <div class="card card-white fade-up">
        <div class="icon-box icon-box-green" style="margin-bottom:16px">🧠</div>
        <h3 style="font-size:17px;font-weight:700;color:var(--dark-navy);margin-bottom:10px">Smart Matching</h3>
        <p style="font-size:14px;color:var(--muted-gray);line-height:1.7">Winter clothes to cold regions. Kids clothes to orphanages. Blankets to flood relief. AI decides in milliseconds.</p>
      </div>
      <div class="card card-white fade-up fade-up-delay-2">
        <div class="icon-box icon-box-orange" style="margin-bottom:16px">📦</div>
        <h3 style="font-size:17px;font-weight:700;color:var(--dark-navy);margin-bottom:10px">Bundle Algorithm</h3>
        <p style="font-size:14px;color:var(--muted-gray);line-height:1.7">Groups nearby donations into single volunteer trips. Cuts trips by 75%. Saves time, fuel and money.</p>
      </div>
      <div class="card card-white fade-up fade-up-delay-3">
        <div class="icon-box icon-box-blue" style="margin-bottom:16px">📡</div>
        <h3 style="font-size:17px;font-weight:700;color:var(--dark-navy);margin-bottom:10px">Live Tracking</h3>
        <p style="font-size:14px;color:var(--muted-gray);line-height:1.7">Donor tracks exactly where their clothes reached — city, NGO name, family count. Full transparency always.</p>
      </div>
    </div>
  </div>
</section>

<!-- ── ZONE DEMAND MAP ────────────────────── -->
<section id="zone-map" class="section">
  <div class="container">
    <div style="text-align:center;margin-bottom:40px">
      <span class="section-label">Live Intelligence</span>
      <h2 class="section-title" style="text-align:center">Real-Time Demand<br/>Across India</h2>
    </div>
    <div class="india-map-container fade-up">
      <div style="display:flex;gap:32px;flex-wrap:wrap">
        <svg class="india-map-svg" viewBox="0 0 400 460" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Main India outline — traced from real lat/lon (x=(lon−68.7)×12.54+20, y=(35.7−lat)×14.86+20) -->
          <path d="
            M 78,52
            L 110,28 L 145,36 L 182,108
            L 238,118 L 278,145
            L 314,152 L 370,138
            L 372,162 L 358,188 L 345,215 L 330,232
            L 312,218 L 280,240 L 262,248
            L 248,274 L 235,300 L 220,328
            L 205,358 L 195,388 L 175,422 L 132,436
            L 120,429 L 109,409 L 96,366
            L 82,326 L 70,270
            L 71,252 L 72,240 L 69,225
            L 58,220 L 44,247 L 30,220
            L 22,207 L 20,194
            L 36,182 L 40,140
            L 72,110 L 90,94 L 98,77 L 88,57
            Z"
            fill="#E8F5E9" stroke="#1B6B3A" stroke-width="2.5" stroke-linejoin="round"/>

          <!-- High need zones (red) -->
          <ellipse cx="127" cy="118" rx="26" ry="19" fill="#E53935" opacity="0.55"/>   <!-- Delhi -->
          <ellipse cx="267" cy="222" rx="20" ry="15" fill="#E53935" opacity="0.55"/>   <!-- Kolkata -->
          <ellipse cx="165" cy="352" rx="19" ry="14" fill="#E53935" opacity="0.55"/>   <!-- Chennai -->

          <!-- Medium need zones (orange) -->
          <ellipse cx="70"  cy="265" rx="22" ry="16" fill="#FB8C00" opacity="0.55"/>   <!-- Mumbai -->
          <ellipse cx="143" cy="292" rx="20" ry="15" fill="#FB8C00" opacity="0.55"/>   <!-- Hyderabad -->

          <!-- Surplus zone (green) -->
          <ellipse cx="131" cy="356" rx="19" ry="14" fill="#1B6B3A" opacity="0.55"/>   <!-- Bengaluru -->

          <!-- City dots -->
          <circle cx="127" cy="118" r="5.5" fill="#E53935"/>   <!-- Delhi   28.6°N 77.2°E -->
          <circle cx="267" cy="222" r="5.5" fill="#E53935"/>   <!-- Kolkata 22.6°N 88.4°E -->
          <circle cx="70"  cy="265" r="5.5" fill="#FB8C00"/>   <!-- Mumbai  19.1°N 72.9°E -->
          <circle cx="143" cy="292" r="5.5" fill="#FB8C00"/>   <!-- Hyderabad 17.4°N 78.5°E -->
          <circle cx="131" cy="356" r="5.5" fill="#1B6B3A"/>   <!-- Bengaluru 13.0°N 77.6°E -->
          <circle cx="165" cy="352" r="5.5" fill="#E53935"/>   <!-- Chennai  13.1°N 80.3°E -->

          <!-- City labels -->
          <text x="82"  y="112" font-size="9.5" fill="#0D1B2A" font-weight="700">Delhi</text>
          <text x="272" y="220" font-size="9.5" fill="#0D1B2A" font-weight="700">Kolkata</text>
          <text x="8"   y="268" font-size="9.5" fill="#0D1B2A" font-weight="700">Mumbai</text>
          <text x="148" y="289" font-size="9.5" fill="#0D1B2A" font-weight="700">Hyderabad</text>
          <text x="40"  y="366" font-size="9.5" fill="#0D1B2A" font-weight="700">Bengaluru</text>
          <text x="170" y="349" font-size="9.5" fill="#0D1B2A" font-weight="700">Chennai</text>
        </svg>
        <div style="flex:1;min-width:260px">
          <div class="zone-popup fade-up fade-up-delay-2">
            <div class="zone-popup-title">📍 Dharavi, Mumbai</div>
            <div class="zone-need-row">
              <span class="zone-need-label">Winter Wear</span>
              <div class="zone-need-bar"><div class="progress-bar-wrap"><div class="progress-bar-fill" style="width:20%"></div></div></div>
              <span class="zone-need-pct low">20%</span>
            </div>
            <div class="zone-need-row">
              <span class="zone-need-label">Children's</span>
              <div class="zone-need-bar"><div class="progress-bar-wrap"><div class="progress-bar-fill orange" style="width:80%"></div></div></div>
              <span class="zone-need-pct high">80% ⚠️</span>
            </div>
            <div class="zone-need-row">
              <span class="zone-need-label">Blankets</span>
              <div class="zone-need-bar"><div class="progress-bar-wrap"><div class="progress-bar-fill orange" style="width:60%"></div></div></div>
              <span class="zone-need-pct medium">60%</span>
            </div>
            <div style="font-size:12px;color:var(--muted-gray);margin:12px 0">Nearest surplus: 1.2 km away</div>
            <button class="btn btn-primary btn-sm" style="width:100%;justify-content:center" onclick="showPage('donate')">Route Donation Here →</button>
          </div>
          <div style="margin-top:20px;display:flex;flex-direction:column;gap:10px">
            <div onclick="updateZonePopup(this,'Delhi NCR','High','55%','30%','70%')" style="background:var(--card-bg);border-radius:10px;padding:12px 16px;cursor:pointer;border:1.5px solid #E53935;transition:0.3s">
              <div style="font-size:13px;font-weight:700;color:var(--dark-navy)">🔴 Delhi NCR — HIGH NEED</div>
              <div style="font-size:12px;color:var(--muted-gray);margin-top:2px">Winter Wear urgency</div>
            </div>
            <div onclick="updateZonePopup(this,'Shimla','High','90%','40%','50%')" style="background:var(--card-bg);border-radius:10px;padding:12px 16px;cursor:pointer;border:1.5px solid #E53935;transition:0.3s">
              <div style="font-size:13px;font-weight:700;color:var(--dark-navy)">🔴 Shimla — HIGH NEED</div>
              <div style="font-size:12px;color:var(--muted-gray);margin-top:2px">Blankets & winter clothes</div>
            </div>
            <div onclick="updateZonePopup(this,'Bengaluru','Low','15%','5%','10%')" style="background:var(--card-bg);border-radius:10px;padding:12px 16px;cursor:pointer;border:1.5px solid var(--primary-green);transition:0.3s">
              <div style="font-size:13px;font-weight:700;color:var(--dark-navy)">🟢 Bengaluru — SURPLUS</div>
              <div style="font-size:12px;color:var(--muted-gray);margin-top:2px">Ready to route outward</div>
            </div>
          </div>
        </div>
      </div>
      <div class="map-legend">
        <div class="map-legend-item"><div class="legend-dot red"></div>High Need Zone</div>
        <div class="map-legend-item"><div class="legend-dot orange"></div>Medium Need</div>
        <div class="map-legend-item"><div class="legend-dot green"></div>Surplus Available</div>
      </div>
    </div>
  </div>
</section>

<!-- ── MICRO-HUB ───────────────────────────── -->
<section id="micro-hub" class="section bg-card">
  <div class="container">
    <div style="text-align:center">
      <span class="section-label">Drop Points</span>
      <h2 class="section-title" style="text-align:center">Everywhere You Go</h2>
      <p class="section-subtitle" style="margin:0 auto;text-align:center">Over 9,400 drop points across India. No special trips needed.</p>
    </div>
    <div class="hub-grid">
      ${[
      ['🏪', 'Kirana Stores', '2,400 hubs'],
      ['🏢', 'Apartment Gates', '1,800 hubs'],
      ['⛽', 'Petrol Pumps', '900 hubs'],
      ['🏫', 'Schools & Colleges', '650 hubs'],
      ['🕌', 'Religious Places', '480 hubs'],
      ['📮', 'Post Offices', '3,200 hubs']
    ].map(([e, t, c]) => `
      <div class="hub-item fade-up">
        <span class="hub-emoji">${e}</span>
        <div class="hub-type">${t}</div>
        <span class="hub-count">${c}</span>
      </div>`).join('')}
    </div>
  </div>
</section>

<!-- ── PARTNERS ────────────────────────────── -->
<section id="partners" class="section">
  <div class="container">
    <div style="text-align:center">
      <span class="section-label">Logistics Network</span>
      <h2 class="section-title" style="text-align:center">Our Logistics Partners</h2>
      <p class="section-subtitle" style="margin:0 auto;text-align:center">Return trip pickups mean zero extra cost for delivery.</p>
    </div>
    <div class="partner-logos">
      ${['📦 Flipkart', '🛵 Zomato', '🛒 Swiggy', '✉️ India Post', '🚚 Porter', '🏃 Dunzo', '📬 Delhivery', '🛺 Rapido'].map(p => `
      <div class="partner-logo-item fade-up">${p}</div>`).join('')}
    </div>
  </div>
</section>

<!-- ── IMPACT ──────────────────────────────── -->
<section id="impact" class="section bg-dark">
  <div class="container">
    <div style="text-align:center;margin-bottom:48px">
      <span class="section-label">Our Impact</span>
      <h2 class="section-title" style="text-align:center;color:#fff">Numbers That Matter</h2>
    </div>
    <div class="impact-numbers">
      <div class="impact-num-card fade-up">
        <div class="impact-big-number"><span class="counter green" data-target="50000">0</span><span class="green">+</span></div>
        <div class="impact-num-label">Clothes Tracked</div>
      </div>
      <div class="impact-num-card fade-up fade-up-delay-1">
        <div class="impact-big-number"><span class="counter orange" data-target="5000">0</span></div>
        <div class="impact-num-label">Families Helped</div>
      </div>
      <div class="impact-num-card fade-up fade-up-delay-2">
        <div class="impact-big-number"><span class="counter green" data-target="180">0</span><span class="green">T</span></div>
        <div class="impact-num-label">CO₂ Saved</div>
      </div>
      <div class="impact-num-card fade-up fade-up-delay-3">
        <div class="impact-big-number"><span class="counter orange" data-target="35">0</span><span class="orange">M L</span></div>
        <div class="impact-num-label">Water Saved</div>
      </div>
    </div>
    <div class="impact-progress-wrap fade-up">
      <div class="impact-prog-header">
        <div class="impact-prog-title">Annual Donation Target</div>
        <div class="impact-prog-nums">67,400 / 100,000</div>
      </div>
      <div class="impact-prog-bar-wrap">
        <div class="impact-prog-bar-fill" id="impact-prog" style="width:0%"></div>
      </div>
    </div>
  </div>
</section>

<!-- ── TESTIMONIALS ────────────────────────── -->
<section id="testimonials" class="section">
  <div class="container">
    <div style="text-align:center;margin-bottom:48px">
      <span class="section-label">Stories</span>
      <h2 class="section-title" style="text-align:center">Why People Love ReThread</h2>
    </div>
    <div class="grid-3">
      <div class="testimonial-card fade-up">
        <div class="testimonial-quote">"</div>
        <p class="testimonial-text">I donated 12 items last month. ReThread showed me exactly which family in Dharavi received my daughter's winter clothes. I cried.</p>
        <div class="testimonial-author">
          <div class="testimonial-avatar" style="background:linear-gradient(135deg,#E65100,#FF7043)">P</div>
          <div><div class="testimonial-name">Priya S.</div><div class="testimonial-role">Donor · Mumbai</div></div>
        </div>
      </div>
      <div class="testimonial-card fade-up fade-up-delay-2">
        <div class="testimonial-quote">"</div>
        <p class="testimonial-text">I do 4 pickups a week on my way to office. Takes 20 minutes. The app routes everything perfectly.</p>
        <div class="testimonial-author">
          <div class="testimonial-avatar" style="background:linear-gradient(135deg,#1B6B3A,#43A047)">R</div>
          <div><div class="testimonial-name">Rahul K.</div><div class="testimonial-role">Volunteer · Pune</div></div>
        </div>
      </div>
      <div class="testimonial-card fade-up fade-up-delay-3">
        <div class="testimonial-quote">"</div>
        <p class="testimonial-text">Earlier we got random donations. Now we get exactly what we asked for, exactly when we need it.</p>
        <div class="testimonial-author">
          <div class="testimonial-avatar" style="background:linear-gradient(135deg,#1565C0,#42A5F5)">M</div>
          <div><div class="testimonial-name">Sister Maria</div><div class="testimonial-role">NGO Director · Shimla</div></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ── FOOTER ──────────────────────────────── -->
<footer id="footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <div class="footer-logo">
          <div class="footer-logo-icon">♻️</div>
          <span class="footer-logo-text">ReThread</span>
        </div>
        <p class="footer-tagline">Turning fashion waste into human dignity. One garment at a time.</p>
        <div class="footer-socials">
          <a class="footer-social" href="#">📷</a>
          <a class="footer-social" href="#">🐦</a>
          <a class="footer-social" href="#">💼</a>
          <a class="footer-social" href="#">💻</a>
        </div>
      </div>
      <div>
        <div class="footer-col-title">Platform</div>
        <div class="footer-links">
          <span class="footer-link" onclick="showPage('donate')">→ Donate Clothes</span>
          <span class="footer-link" onclick="showPage('wardrobe')">→ Track Wardrobe</span>
          <span class="footer-link" onclick="showPage('volunteer')">→ Volunteer</span>
          <span class="footer-link" onclick="showPage('howitworks')">→ How It Works</span>
        </div>
      </div>
      <div>
        <div class="footer-col-title">Company</div>
        <div class="footer-links">
          <span class="footer-link" onclick="showPage('howitworks')">→ About Us</span>
          <span class="footer-link" onclick="showPage('howitworks')">→ How It Works</span>
          <a class="footer-link" href="#">→ Impact Report</a>
          <a class="footer-link" href="#">→ Blog</a>
          <a class="footer-link" href="#">→ Careers</a>
          <a class="footer-link" href="#">→ Press Kit</a>
        </div>
      </div>
      <div>
        <div class="footer-col-title">Contact</div>
        <div class="footer-contact-item"><span class="footer-contact-icon">📧</span>hello@rethread.in</div>
        <div class="footer-contact-item"><span class="footer-contact-icon">📞</span>+91 98765 43210</div>
        <div class="footer-contact-item"><span class="footer-contact-icon">📍</span>Pune, Maharashtra</div>
        <div class="newsletter-input-wrap" style="margin-top:20px">
          <input class="newsletter-input" type="email" placeholder="Your email address"/>
          <button class="newsletter-btn" onclick="showToast('green','📬 Subscribed!','Welcome to ReThread updates')">Subscribe</button>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span class="footer-bottom-left">© 2025 ReThread. All rights reserved.</span>
      <div class="footer-bottom-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
      <div class="carbon-badge">🌱 Carbon Neutral Website</div>
    </div>
  </div>
</footer>
</div>`;
}
