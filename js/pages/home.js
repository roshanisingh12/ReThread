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
      <div class="hero-label">🌱 Sustainability Meets Technology</div>
      <h1 class="hero-headline">
        Right Clothes.<br/>
        <span>Right People.</span><br/>
        <span class="orange">Right Now.</span>
      </h1>
      <p class="hero-subtitle">AI-powered platform that tracks your clothing's entire lifespan, matches donations intelligently and ensures zero waste, zero mismatch — even across 500 cities.</p>
      <div class="hero-ctas">
        <button class="btn btn-primary btn-lg" onclick="showPage('donate')">🎁 Donate Clothes</button>
        <button class="btn btn-outline-orange btn-lg" onclick="showPage('wardrobe')">👕 Track My Wardrobe</button>
      </div>
      <div class="hero-trust">
        <div class="hero-trust-avatars">
          <span>P</span><span>R</span><span>S</span><span>A</span><span>+</span>
        </div>
        <div class="hero-trust-text"><strong>12,400+</strong> people tracking clothes across India</div>
      </div>
    </div>
    <div class="hero-visual" style="flex:1;min-width:280px">
      <div style="position:relative;display:inline-block">
        <div class="hero-float-badge badge-tl fade-up"><span>🤖</span> AI Matched</div>
        <div class="hero-float-badge badge-tr fade-up fade-up-delay-2"><span>📍</span> 2.1 km away</div>
        <div class="hero-float-badge badge-br fade-up fade-up-delay-3"><span>🌱</span> 8.5kg CO₂ saved</div>
        <div class="phone-mockup">
          <div class="phone-screen">
            <div class="phone-notch"></div>
            <div class="phone-app">
              <div class="phone-app-header">
                <span class="phone-app-title">My Wardrobe</span>
                <div class="phone-add-btn">+</div>
              </div>
              <div class="phone-clothes-card">
                <div class="phone-card-row">
                  <div class="phone-card-icon">🧥</div>
                  <div class="phone-card-info">
                    <div class="phone-card-name">Blue Denim Jacket</div>
                    <div class="phone-card-sub">Levi's · Worn 47×</div>
                  </div>
                  <div class="phone-card-score">68%</div>
                </div>
                <div class="phone-health-label"><span>Fabric Health</span><span>68%</span></div>
                <div class="phone-health-bar"><div class="phone-health-fill yellow" style="width:68%"></div></div>
                <div class="phone-donate-tag">🔔 Donate Soon</div>
              </div>
              <div class="phone-clothes-card">
                <div class="phone-card-row">
                  <div class="phone-card-icon" style="background:linear-gradient(135deg,#E65100,#FF7043)">👔</div>
                  <div class="phone-card-info">
                    <div class="phone-card-name">White Formal Shirt</div>
                    <div class="phone-card-sub">Arrow · Worn 12×</div>
                  </div>
                  <div class="phone-card-score" style="color:#4ADE80">91%</div>
                </div>
                <div class="phone-health-label"><span>Fabric Health</span><span>91%</span></div>
                <div class="phone-health-bar"><div class="phone-health-fill" style="width:91%"></div></div>
              </div>
              <div class="phone-clothes-card">
                <div class="phone-card-row">
                  <div class="phone-card-icon" style="background:linear-gradient(135deg,#6A1B9A,#9C27B0)">👟</div>
                  <div class="phone-card-info">
                    <div class="phone-card-name">Running Shoes</div>
                    <div class="phone-card-sub">Nike · Worn 89×</div>
                  </div>
                  <div class="phone-card-score" style="color:#F87171">32%</div>
                </div>
                <div class="phone-health-label"><span>Fabric Health</span><span>32%</span></div>
                <div class="phone-health-bar"><div class="phone-health-fill red" style="width:32%"></div></div>
                <div class="phone-donate-tag" style="background:rgba(239,68,68,0.2);color:#F87171">♻️ Ready to Recycle</div>
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
    <div class="stats-grid">
      <div class="stat-item fade-up">
        <div class="stat-number"><span class="counter" data-target="12400">0</span><span>+</span></div>
        <div class="stat-label">Clothes Tracked</div>
      </div>
      <div class="stat-item fade-up fade-up-delay-2">
        <div class="stat-number"><span class="counter" data-target="340">0</span><span>+</span></div>
        <div class="stat-label">Active Volunteers</div>
      </div>
      <div class="stat-item fade-up fade-up-delay-3">
        <div class="stat-number"><span class="counter" data-target="89">0</span></div>
        <div class="stat-label">NGOs Connected</div>
      </div>
      <div class="stat-item fade-up fade-up-delay-4">
        <div class="stat-number"><span class="counter" data-target="90">0</span><span>%</span></div>
        <div class="stat-label">Shipping Cost Saved</div>
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
          ${['Digital Clothing Passport (QR)','Wear Count Tracker','Fabric Health Score (0–100)','Wash & Repair History','Smart Donation Alerts','End-to-End Journey Tracking','Recycling Router'].map(f=>`
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
            <button class="passport-action-btn donate" onclick="showPage('donate')">Donate</button>
            <button class="passport-action-btn sell" onclick="showPage('marketplace')">Sell</button>
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
      ${['DONATION RECEIVED','AI READS TYPE + CONDITION','CHECKS ZONE DEMAND MAP','MATCHES NEAREST NGO NEED','BUNDLES WITH NEARBY DONATIONS','ASSIGNS BEST VOLUNTEER','DELIVERED SAME DAY'].map((s,i)=>`
      <div class="flow-step">
        <div class="flow-box ${i===0?'active-flow':i===6?'active-flow-orange':''} fade-up" style="transition-delay:${i*0.1}s">${s}</div>
        ${i<6?'<div class="flow-arrow"></div>':''}
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
        <svg class="india-map-svg" viewBox="0 0 400 450" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M160,30 L180,25 L220,35 L250,60 L260,90 L255,110 L275,130 L280,160 L270,185 L290,210 L285,240 L265,270 L250,300 L230,330 L210,360 L200,400 L190,360 L170,325 L150,295 L135,265 L120,240 L110,210 L105,180 L120,155 L115,125 L130,100 L140,70 L150,45 Z" fill="#E8F5E9" stroke="#1B6B3A" stroke-width="2"/>
          <path d="M160,30 L180,25 L220,35 L250,60 L200,50 Z" fill="#E53935" opacity="0.7"/>
          <path d="M250,60 L260,90 L255,110 L275,130 L240,120 L220,90 Z" fill="#E53935" opacity="0.7"/>
          <path d="M105,180 L120,155 L115,125 L130,100 L150,130 L155,165 L130,190 Z" fill="#FB8C00" opacity="0.7"/>
          <path d="M120,240 L135,265 L150,295 L130,285 L110,260 L110,230 Z" fill="#1B6B3A" opacity="0.7"/>
          <path d="M265,270 L280,240 L260,230 L245,255 L250,280 Z" fill="#E53935" opacity="0.7"/>
          <path d="M195,200 L215,195 L225,215 L210,230 L190,225 Z" fill="#FB8C00" opacity="0.7"/>
          <!-- Map pins -->
          <circle cx="195" cy="215" r="6" fill="#E53935"/>
          <circle cx="175" cy="100" r="7" fill="#E53935"/>
          <circle cx="240" cy="80" r="6" fill="#E53935"/>
          <circle cx="130" cy="175" r="6" fill="#FB8C00"/>
          <circle cx="130" cy="275" r="7" fill="#1B6B3A"/>
          <circle cx="265" cy="255" r="6" fill="#E53935"/>
          <!-- Labels -->
          <text x="135" y="85" font-size="9" fill="#0D1B2A" font-weight="600">Delhi</text>
          <text x="235" y="68" font-size="9" fill="#0D1B2A" font-weight="600">Kolkata</text>
          <text x="90" y="168" font-size="9" fill="#0D1B2A" font-weight="600">Mumbai</text>
          <text x="90" y="268" font-size="9" fill="#0D1B2A" font-weight="600">Bengaluru</text>
          <text x="203" y="212" font-size="9" fill="#0D1B2A" font-weight="600">Hyderabad</text>
          <text x="270" y="258" font-size="9" fill="#0D1B2A" font-weight="600">Chennai</text>
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
        ['🏪','Kirana Stores','2,400 hubs'],
        ['🏢','Apartment Gates','1,800 hubs'],
        ['⛽','Petrol Pumps','900 hubs'],
        ['🏫','Schools & Colleges','650 hubs'],
        ['🕌','Religious Places','480 hubs'],
        ['📮','Post Offices','3,200 hubs']
      ].map(([e,t,c])=>`
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
      ${['📦 Flipkart','🛵 Zomato','🛒 Swiggy','✉️ India Post','🚚 Porter','🏃 Dunzo','📬 Delhivery','🛺 Rapido'].map(p=>`
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
          <span class="footer-link" onclick="showPage('ngo')">→ NGO Partner</span>
          <span class="footer-link" onclick="showPage('marketplace')">→ Marketplace</span>
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
