// ════════════════════════════════════════
// VOLUNTEER DASHBOARD
// ════════════════════════════════════════
function renderVolunteer() {
    return `
<div id="volunteer-page">
  <div class="dashboard-layout">
    <!-- SIDEBAR -->
    <aside class="sidebar">
      <div class="sidebar-header">
        <div class="sidebar-avatar">R</div>
        <div class="sidebar-user-name">Rahul Kumar</div>
        <div class="sidebar-user-role">Volunteer · Pune</div>
      </div>
      <nav class="sidebar-nav">
        <div class="sidebar-link active"><span class="sidebar-link-icon">🏠</span>Dashboard</div>
        <div class="sidebar-link" onclick="showVolSection('assignments')"><span class="sidebar-link-icon">🚗</span>My Assignments</div>
        <div class="sidebar-link" onclick="showVolSection('map')"><span class="sidebar-link-icon">🗺️</span>Route Map</div>
        <div class="sidebar-link" onclick="showVolSection('impact')"><span class="sidebar-link-icon">⭐</span>My Impact</div>
        <div class="sidebar-link" onclick="showToast('blue','💰 Earnings','You have earned 1,240 Green Credits this month!')"><span class="sidebar-link-icon">💰</span>Earnings</div>
        <div class="sidebar-link" onclick="showToast('blue','⚙️ Settings','Settings panel coming soon')"><span class="sidebar-link-icon">⚙️</span>Settings</div>
      </nav>
    </aside>
    <!-- MAIN -->
    <main class="dashboard-main">
      <div class="welcome-bar fade-up">
        <div>
          <div class="welcome-greeting">Good Afternoon, Rahul! 👋</div>
          <div class="welcome-sub">3 new assignments near you. Your route is optimized for max efficiency.</div>
        </div>
        <button class="btn btn-outline-white btn-sm" onclick="showToast('green','🗺️ Route Ready','Optimized route loaded for today\'s pickups!')">View Today's Route →</button>
      </div>
      <!-- STATS -->
      <div class="vol-stats-row">
        <div class="vol-stat-card fade-up"><div class="vol-stat-icon">📦</div><div class="vol-stat-num counter" data-target="24">0</div><div class="vol-stat-label">Pickups Done</div></div>
        <div class="vol-stat-card fade-up fade-up-delay-1"><div class="vol-stat-icon">👨‍👩‍👧</div><div class="vol-stat-num counter" data-target="67">0</div><div class="vol-stat-label">Families Helped</div></div>
        <div class="vol-stat-card fade-up fade-up-delay-2"><div class="vol-stat-icon">🛣️</div><div class="vol-stat-num counter" data-target="340">0</div><div class="vol-stat-label">km Covered</div></div>
        <div class="vol-stat-card fade-up fade-up-delay-3"><div class="vol-stat-icon">🌱</div><div class="vol-stat-num counter" data-target="1240">0</div><div class="vol-stat-label">Green Credits</div></div>
      </div>
      <!-- AVAILABLE PICKUPS -->
      <div id="vol-assignments">
        <h2 style="font-size:18px;font-weight:700;color:var(--dark-navy);margin-bottom:16px">🚗 Available Pickups Near Me</h2>
        ${[
            { from: 'Kothrud, Pune', dist: '2.1 km', items: '1× Mens Winter Jacket', drop: 'Aasra Relief Camp', mapLink: 'https://maps.google.com/?q=Kothrud+Pune' },
            { from: 'Viman Nagar, Pune', dist: '5.4 km', items: '3× Children\'s Clothes', drop: 'Pune Orphanage Hub', mapLink: 'https://maps.google.com/?q=Viman+Nagar+Pune' },
            { from: 'Baner, Pune', dist: '8.2 km', items: '2× Blankets', drop: 'Smile Foundation', mapLink: 'https://maps.google.com/?q=Baner+Pune' },
        ].map(a => `
        <div class="assignment-card fade-up">
          <div class="assignment-header">
            <div>
              <div class="assignment-from">📍 Area: ${a.from}</div>
              <div class="assignment-dist" style="color:var(--accent-orange);font-weight:600;">${a.dist} away</div>
            </div>
            <span class="badge badge-green">New</span>
          </div>
          <div class="assignment-items" style="margin-top:12px; font-weight:700;">📦 Items: ${a.items}</div>
          <div class="assignment-drop" style="color:var(--muted-gray); margin-bottom:16px; font-size:13px;">🏥 Destination: ${a.drop}</div>
          
          <div class="assignment-actions" style="display:flex; gap:12px;">
            <button class="btn btn-primary" style="flex:1; justify-content:center;" onclick="showToast('green','✅ Pickup Accepted!','Donation assigned to you. Donor has been notified.')">Accept Pickup</button>
            <a class="btn btn-outline-green" style="display:flex; justify-content:center; text-decoration:none;" href="${a.mapLink}" target="_blank">View on Google Maps ↗</a>
          </div>
        </div>`).join('')}
      </div>
      <!-- MAP -->
      <div>
        <h2 style="font-size:18px;font-weight:700;color:var(--dark-navy);margin:24px 0 16px">🗺️ Route Map</h2>
        <div class="map-placeholder fade-up">
          <svg width="100%" height="300" viewBox="0 0 700 300">
            <!-- Grid lines -->
            ${Array.from({ length: 7 }, (_, i) => `<line x1="${i * 100}" y1="0" x2="${i * 100}" y2="300" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>`).join('')}
            ${Array.from({ length: 4 }, (_, i) => `<line x1="0" y1="${i * 75}" x2="700" y2="${i * 75}" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>`).join('')}
            <!-- Route line -->
            <polyline points="100,220 200,180 350,150 480,120 580,90" fill="none" stroke="#4ADE80" stroke-width="3" stroke-dasharray="8,4" stroke-linecap="round"/>
            <!-- Location dots -->
            <circle cx="100" cy="220" r="12" fill="#60A5FA"/><text x="100" y="224" text-anchor="middle" font-size="10" fill="white">📍</text>
            <text x="100" y="250" font-size="10" fill="rgba(255,255,255,0.7)" text-anchor="middle">You</text>
            <circle cx="200" cy="180" r="12" fill="#FB923C"/><text x="200" y="184" text-anchor="middle" font-size="10" fill="white">📦</text>
            <text x="200" y="206" font-size="10" fill="rgba(255,255,255,0.7)" text-anchor="middle">Priya S.</text>
            <circle cx="350" cy="150" r="12" fill="#FB923C"/><text x="350" y="154" text-anchor="middle" font-size="10" fill="white">📦</text>
            <text x="350" y="176" font-size="10" fill="rgba(255,255,255,0.7)" text-anchor="middle">Meera T.</text>
            <circle cx="480" cy="120" r="12" fill="#FB923C"/><text x="480" y="124" text-anchor="middle" font-size="10" fill="white">📦</text>
            <text x="480" y="146" font-size="10" fill="rgba(255,255,255,0.7)" text-anchor="middle">Arun V.</text>
            <circle cx="580" cy="90" r="14" fill="#4ADE80"/><text x="580" y="94" text-anchor="middle" font-size="12" fill="white">🏥</text>
            <text x="580" y="116" font-size="10" fill="rgba(255,255,255,0.7)" text-anchor="middle">NGO Drop</text>
          </svg>
        </div>
      </div>
      <!-- IMPACT & BADGES -->
      <div>
        <h2 style="font-size:18px;font-weight:700;color:var(--dark-navy);margin:24px 0 16px">⭐ Badges Earned</h2>
        <div class="badges-row">
          ${[['🦸', 'Community Hero', '50+ donations delivered'], ['🏆', '50 Deliveries Club', 'Milestone achieved!'], ['🌱', 'Carbon Saver', '2.4T CO₂ offset']].map(([e, n, d]) => `
          <div class="achievement-badge fade-up">
            <span class="badge-emoji">${e}</span>
            <div><div class="badge-badge-name">${n}</div><div class="badge-badge-desc">${d}</div></div>
          </div>`).join('')}
        </div>
      </div>
    </main>
  </div>
</div>`;
}

function showVolSection(s) {
    document.getElementById('vol-assignments').scrollIntoView({ behavior: 'smooth' });
}
