// ════════════════════════════════════════
// DONATE PAGE & AI ENGINE
// ════════════════════════════════════════

let donateState = { base64: null, analysis: null, ngo: null, id: null };
let ngoMap = null;

const hardcodedNgOs = [
    { name: "Aasra Relief Camp", lat: 18.5204, lng: 73.8567, category: "Adult Winter Wear", badge: "🔴 Urgent" },
    { name: "Pune Orphanage Hub", lat: 18.5304, lng: 73.8667, category: "Children's Clothing", badge: "🟡 Medium Needs" },
    { name: "Smile Foundation Drop", lat: 18.5404, lng: 73.8767, category: "Footwear", badge: "🟢 Normal" },
    { name: "Robin Hood Army Point", lat: 12.9716, lng: 77.5946, category: "Footwear & More", badge: "🟡 Medium Needs" },
    { name: "Kolkata Relief Fund", lat: 22.5726, lng: 88.3639, category: "Winter Wear", badge: "🔴 Urgent" },
    { name: "Chennai Care Point", lat: 13.0827, lng: 80.2707, category: "Summer Essentials", badge: "🟢 Normal" },
    { name: "Hyderabad Hope", lat: 17.3850, lng: 78.4867, category: "School Uniforms", badge: "🟡 Medium Needs" },
    { name: "Jaipur Heritage Aid", lat: 26.9124, lng: 75.7873, category: "Traditional Wear", badge: "🟢 Normal" },
    { name: "Ahmedabad Uplift", lat: 23.0225, lng: 72.5714, category: "Blankets & Linens", badge: "🔴 Urgent" },
    // PAN-INDIA BACKUPS (Always Shown)
    { name: "ReThread Global Hub", lat: 20.5937, lng: 78.9629, category: "Universal Aid", badge: "🚀 Pan-India Support", isBackup: true },
    { name: "Smile Foundation (Backup)", lat: 28.5355, lng: 77.3910, category: "Child Support", badge: "🏢 Official Partner", isBackup: true },
    { name: "Goonj Main Center", lat: 28.5276, lng: 77.2623, category: "Disaster Relief", badge: "📦 Global Reach", isBackup: true }
];

function calculateDistance(lat1, lon1, lat2, lon2) {
    try {
        const R = 6371; // Radius of the earth in km
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const finalDist = R * c;
        if (isNaN(finalDist)) return 9999;
        return Number(finalDist.toFixed(1));
    } catch (e) {
        return 9999; // Safe fallback if math fails
    }
}

function renderDonate() {
    return `
<div id="donate-page">
  <div class="page-header">
    <div class="container">
      <span class="section-label">Smart Donation</span>
      <h1 class="section-title">Schedule a Donation</h1>
      <p class="section-subtitle">AI directly matches your clothes to the NGO that needs it most, right in your city.</p>
    </div>
  </div>
  <div class="container section" style="max-width:800px; margin:0 auto;">
    
    <!-- STEP PROGRESS -->
    <div class="step-progress" style="margin-bottom:40px;">
      <div class="step-prog-line" id="prog-line" style="width:0%"></div>
      <div class="step-prog-item active" id="spItem1">
        <div class="step-prog-circle">1</div>
        <div class="step-prog-label">Photo Upload</div>
      </div>
      <div class="step-prog-item" id="spItem2">
        <div class="step-prog-circle">2</div>
        <div class="step-prog-label">Map & NGO</div>
      </div>
      <div class="step-prog-item" id="spItem3">
        <div class="step-prog-circle">3</div>
        <div class="step-prog-label">Confirm</div>
      </div>
    </div>

    <!-- STEP 1: PHOTO & AI -->
    <div class="form-section active" id="fStep1">
      <h2 style="font-size:20px; font-weight:700; color:var(--dark-navy); margin-bottom:16px;">Step 1 — Upload Clothing Photo</h2>
      <div class="photo-drop" style="cursor:pointer; position:relative;">
        <input type="file" accept="image/*" id="clothingPhotoInput" onchange="handlePhotoUpload(event)" style="opacity:0; position:absolute; top:0; left:0; width:100%; height:100%; cursor:pointer;" title="Upload photo" aria-label="Upload clothing photo" />
        <div class="photo-drop-icon">📸</div>
        <div class="photo-drop-text"><strong>Take a picture</strong> or upload from gallery</div>
      </div>

      <!-- AI ANALYSIS MODAL -->
      <div class="modal-overlay" id="ai-modal">
        <div class="modal" style="padding:0; overflow:hidden; max-width:400px; width:100%; position:relative;">
          <!-- Close Button -->
          <button style="position:absolute; top:12px; right:12px; background:none; border:none; font-size:20px; cursor:pointer; color:var(--muted-gray); z-index:10;" onclick="closeAiModal()">✖</button>
          
          <!-- AI LOADING -->
          <div id="ai-loading" style="display:none; text-align:center; padding:40px 20px;">
            <div class="scanner-container" style="position:relative; width:100px; height:100px; margin:0 auto 24px; background:rgba(27, 107, 58, 0.05); border-radius:16px; display:flex; align-items:center; justify-content:center; overflow:hidden; border:2px solid var(--primary-green);">
                <div style="font-size:40px; z-index:2; filter: drop-shadow(0 0 8px rgba(27, 107, 58, 0.3));">🧥</div>
                <div class="scanner-line" style="position:absolute; top:0; left:0; width:100%; height:4px; background:linear-gradient(to right, transparent, var(--primary-green), transparent); box-shadow:0 0 15px var(--primary-green); z-index:3; animation:scan 2s ease-in-out infinite;"></div>
                <div class="scanner-pulse" style="position:absolute; width:100%; height:100%; background:radial-gradient(circle, var(--primary-green) 0%, transparent 70%); opacity:0; animation:pulse-ai 2s infinite;"></div>
            </div>
            <div style="font-weight:700; font-size:18px; color:var(--dark-navy);">Gemini 2.5 Flash</div>
            <div style="margin-top:8px; font-size:14px; font-weight:600; color:var(--primary-green); text-transform:uppercase; letter-spacing:1px;">Intelligent Scan in Progress...</div>
          </div>

          <!-- AI RESULT CARD -->
          <div id="ai-result-card" style="display:none; background:var(--card-bg);">
            <div style="background:var(--primary-green); color:white; padding:20px; text-align:center;">
                <div style="font-size:32px; margin-bottom:8px;">✅</div>
                <div style="font-size:18px; font-weight:700;">AI Analysis Complete</div>
            </div>
            <div style="padding:24px;">
                <div class="grid-2" style="gap:16px;">
                  <div><span style="font-size:12px; color:var(--muted-gray);">Detected Item</span><div style="font-weight:700;" id="ai-res-type">...</div></div>
                  <div><span style="font-size:12px; color:var(--muted-gray);">Condition</span><div style="font-weight:700;" id="ai-res-cond">...</div></div>
                  <div><span style="font-size:12px; color:var(--muted-gray);">Best-Fit Category</span><div style="font-weight:700;" id="ai-res-cat">...</div></div>
                  <div><span style="font-size:12px; color:var(--muted-gray);">Recommended Match</span><div style="font-weight:700; color:var(--primary-green);" id="ai-res-ngo">...</div></div>
                </div>
                <button class="btn btn-primary" style="margin-top:24px; width:100%; justify-content:center;" onclick="closeAiModal(); goDonateStep(2); initDonateMap();">Continue to Nearest NGOs →</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- STEP 2: MAP & NGOS -->
    <div class="form-section" id="fStep2">
      <h2 style="font-size:20px; font-weight:700; color:var(--dark-navy); margin-bottom:16px;">Step 2 — Nearest NGOs in Need</h2>
      <div id="donate-map" style="height:250px; border-radius:12px; margin-bottom:24px; background:#e0e0e0; z-index:1;"></div>
      
      <div id="ngo-list-container" style="display:flex; flex-direction:column; gap:12px; min-height:100px;">
        <!-- Dynamically populated -->
        <div style="text-align:center; padding:20px; color:var(--muted-gray);">
            Finding nearest NGOs...
            <br/><br/>
            <button class="btn btn-outline-green btn-sm" onclick="initDonateMap()">Retry Finding NGOs 🔄</button>
        </div>
      </div>
      <div class="form-nav-btns" style="margin-top:24px;">
        <button class="btn btn-outline-green" onclick="goDonateStep(1)">← Back</button>
        <button class="btn btn-outline-green" style="font-size:12px; opacity:0.6" onclick="initDonateMap()">Refetch Location 📍</button>
      </div>
    </div>

    <!-- STEP 3: CONFIRM & QR -->
    <div class="form-section" id="fStep3">
      <h2 style="font-size:20px; font-weight:700; color:var(--dark-navy); margin-bottom:24px;">Step 3 — Confirm & Attach QR</h2>
      
      <div style="background:#fff; border-radius:16px; border:1px solid var(--border-color); padding:32px; box-shadow:var(--shadow); max-width:600px; margin:0 auto; text-align:center;">
        <div style="color:var(--muted-gray); font-size:14px; margin-bottom:8px;">Your Donation ID</div>
        <div style="font-size:28px; font-weight:800; color:var(--dark-navy); letter-spacing:1px; margin-bottom:24px;" id="conf-don-id">RT-2024-XXXXX</div>
        
        <div id="qr-code-container" style="display:flex; justify-content:center; margin-bottom:24px; padding:16px; background:#f9f9f9; border-radius:12px; width:fit-content; margin-left:auto; margin-right:auto;"></div>
        
        <div style="background:var(--light-green); color:var(--primary-green); padding:16px 24px; border-radius:12px; font-size:14px; font-weight:600; margin-bottom:32px; border:1px solid rgba(27,107,58,0.1);">
          Attach this QR to your donation bag. When the NGO receives it, you'll be notified via My Donations.
        </div>

        <div style="border-top:1px solid var(--border-color); padding-top:24px; margin-bottom:32px; text-align:left;">
          <div style="display:flex; justify-content:space-between; margin-bottom:12px;">
            <span style="color:var(--muted-gray); font-size:15px;">Item</span>
            <span id="c-item" style="font-weight:700; color:var(--dark-navy); font-size:15px;">Men's Winter Jacket</span>
          </div>
          <div style="display:flex; justify-content:space-between;">
            <span style="color:var(--muted-gray); font-size:15px;">Destination</span>
            <span id="c-ngo" style="font-weight:700; color:var(--primary-green); font-size:15px;">Aasra Relief Camp</span>
          </div>
        </div>

        <button class="btn btn-primary btn-lg" style="width:100%; justify-content:center; padding:18px; font-size:16px; border-radius:12px;" onclick="finishDonationFlow()">✓ Complete & Track Donation</button>
      </div>

      <div class="form-nav-btns" style="margin-top:20px; justify-content:center;">
        <button class="btn btn-outline-green btn-sm" onclick="goDonateStep(2)" style="border-radius:12px;">← Back</button>
      </div>
    </div>

  </div>
</div>
<!-- scan animations -->
<style>
@keyframes scan {
    0%, 100% { top: 0; }
    50% { top: 100%; }
}
@keyframes pulse-ai {
    0% { transform: scale(0.8); opacity: 0; }
    50% { opacity: 0.15; }
    100% { transform: scale(1.2); opacity: 0; }
}
</style>
`;
}

// ── PHOTO & AI LOGIC ──────────────────────
async function handlePhotoUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    // Convert to base64
    const reader = new FileReader();
    reader.onload = async (ev) => {
        donateState.base64 = ev.target.result;

        // Show modal & loading state
        const modal = document.getElementById('ai-modal');
        if (modal) modal.classList.add('open');
        document.getElementById('ai-loading').style.display = 'block';
        document.getElementById('ai-result-card').style.display = 'none';

        try {
            // Call the AI
            const analysis = await callGeminiVisionAPI(donateState.base64);
            donateState.analysis = analysis;

            // Populate Card
            document.getElementById('ai-res-type').textContent = analysis.item_type;
            document.getElementById('ai-res-cond').textContent = analysis.condition;
            document.getElementById('ai-res-cat').textContent = analysis.category;
            document.getElementById('ai-res-ngo').textContent = analysis.suggested_use;

            document.getElementById('ai-loading').style.display = 'none';
            document.getElementById('ai-result-card').style.display = 'block';
        } catch (error) {
            console.error("Analysis failed:", error);
            showToast('orange', 'Analysis Failed', 'Something went wrong. Please try again.');
            if (modal) modal.classList.remove('open');
        }
    };
    reader.readAsDataURL(file);
}

function closeAiModal() {
    const modal = document.getElementById('ai-modal');
    if (modal) modal.classList.remove('open');
}

// Fake/Real Gemini API call
async function callGeminiVisionAPI(base64Image) {
    let apiKey = window.envConfig.GEMINI_API_KEY || localStorage.getItem('gemini_key');

    // Config is now centrally managed in app.js via loadEnv()

    // If no key, throw error instead of using hardcoded mock to prevent confusion
    if (!apiKey || apiKey.includes('PASTE_YOUR')) {
        throw new Error("Missing or invalid GEMINI_API_KEY. Please update your env.example file.");
    }

    try {
        // base64Image comes in as 'data:image/jpeg;base64,...'
        const match = base64Image.match(/^data:(image\/[a-zA-Z]*);base64,([^"]*)$/);
        const mimeType = match ? match[1] : "image/jpeg";
        const b64Data = match ? match[2] : base64Image;

        const payload = {
            contents: [{
                parts: [
                    { text: "Analyze this image. If it is NOT a clothing item (e.g., a nature photo, animal, random object), return exactly this JSON: { 'item_type': 'Not a clothing item', 'condition': 'N/A', 'category': 'Invalid API Input', 'suggested_use': 'N/A' }. If it IS a clothing item, return ONLY valid JSON with exactly these keys: 'item_type' (e.g. Men's Winter Jacket, Silk Saree), 'condition' (Good/Fair/Worn), 'category' (e.g. Adult Winter Wear, Women's Clothing), 'suggested_use' (closest matching ngo need category)." },
                    { inlineData: { mimeType: mimeType, data: b64Data } }
                ]
            }]
        };

        const apiUrl = `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
        console.log("Calling Gemini 2.5 Flash:", apiUrl);

        const res = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        const data = await res.json();

        if (!res.ok) {
            console.error("Gemini 2.5 Flash Error Body:", data);
            throw new Error(data.error?.message || "Gemini 2.5 API request failed with status " + res.status);
        }

        if (!data.candidates || !data.candidates[0].content) {
            console.error("Gemini 2.5 Flash Unexpected structure:", data);
            throw new Error("Invalid response structure from Gemini 2.5 AI.");
        }

        let jsonStr = data.candidates[0].content.parts[0].text;
        // Clean markdown backticks if Gemini returns them
        jsonStr = jsonStr.replace(/```json/g, '').replace(/```/g, '').trim();
        return JSON.parse(jsonStr);
    } catch (err) {
        console.warn("RETHREAD_DIAGNOSTIC: Analysis Logic Failed:", err);
        throw err; // Re-throw to show in UI
    }
}

// ── LEAFLET MAP & GEOLOCATION LOGIC ──────
function initDonateMap() {
    if (ngoMap) {
        ngoMap.invalidateSize();
    }

    // Default Pune position as fallback
    let userLat = 18.5204;
    let userLng = 73.8567;

    const startLocFetch = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    userLat = pos.coords.latitude;
                    userLng = pos.coords.longitude;
                    setupMap(userLat, userLng);
                    updateNgoList(userLat, userLng);
                },
                (err) => {
                    console.warn("Geolocation failed, using default:", err);
                    setupMap(userLat, userLng);
                    updateNgoList(userLat, userLng);
                    showToast('orange', 'Location Access Denied', 'Showing default locations near Pune.');
                }
            );
        } else {
            setupMap(userLat, userLng);
            updateNgoList(userLat, userLng);
        }
    };

    const setupMap = (lat, lng) => {
        try {
            if (ngoMap) {
                ngoMap.setView([lat, lng], 12);
            } else {
                ngoMap = L.map('donate-map').setView([lat, lng], 12);
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '© OpenStreetMap'
                }).addTo(ngoMap);
            }

            // Clear existing markers
            ngoMap.eachLayer((layer) => {
                if (layer instanceof L.Marker) ngoMap.removeLayer(layer);
            });

            // User Pin
            const userIcon = L.divIcon({ html: '<div style="background:var(--primary-green); width:12px; height:12px; border-radius:50%; border:2px solid #fff; box-shadow:0 0 10px var(--primary-green);"></div>', className: 'map-icon' });
            L.marker([lat, lng], { icon: userIcon }).addTo(ngoMap).bindPopup("<b>You are here</b>").openPopup();

            // NGO Pins
            const ngoIcon = L.divIcon({ html: '<span style="font-size:20px">🏥</span>', className: 'ngo-map-marker' });
            hardcodedNgOs.forEach(n => {
                try {
                    L.marker([n.lat, n.lng], { icon: ngoIcon }).addTo(ngoMap).bindPopup(`<b>${n.name}</b><br/>Category: ${n.category}`);
                } catch (e) { console.warn("Marker skip:", n.name); }
            });

            setTimeout(() => ngoMap.invalidateSize(), 400);
        } catch (e) {
            console.error("Map Setup Crash:", e);
        }
    };

    const updateNgoList = (uLat, uLng) => {
        const listContainer = document.getElementById('ngo-list-container');
        if (!listContainer) return;

        try {
            // Validation
            const lat = Number(uLat) || 18.5204;
            const lng = Number(uLng) || 73.8567;

            // 1. Calculate distances safely
            const annotated = hardcodedNgOs.map(n => {
                try {
                    const dist = calculateDistance(lat, lng, n.lat, n.lng);
                    return { ...n, realDist: dist };
                } catch (e) {
                    return { ...n, realDist: 9999 };
                }
            });

            // 2. Filter: within 600km OR marked as Pan-India backup
            let filtered = annotated.filter(n => n.realDist <= 600 || n.isBackup);

            // 3. Smart Match Demo: Always inject a matching NGO if analysis exists
            if (donateState.analysis && donateState.analysis.item_type !== 'Not a clothing item') {
                const demoNgo = {
                    name: `NGO: ${donateState.analysis.suggested_use || 'Aasra Relief Camp'}`,
                    lat: lat + 0.005, 
                    lng: lng + 0.005,
                    realDist: 0.8,
                    category: donateState.analysis.category || 'Clothing Needs',
                    badge: "✨ Perfect Match",
                    isDemo: true
                };
                filtered.unshift(demoNgo);

                // Add star marker to map for demo
                if (ngoMap) {
                    const demoIcon = L.divIcon({ 
                        html: '<span style="font-size:24px; filter: drop-shadow(0 0 5px var(--primary-green));">⭐</span>', 
                        className: 'map-icon' 
                    });
                    L.marker([demoNgo.lat, demoNgo.lng], { icon: demoIcon })
                        .addTo(ngoMap)
                        .bindPopup(`<b>${demoNgo.name}</b><br/>Category: ${demoNgo.category}<br/><b>(Perfect AI Match)</b>`)
                        .openPopup();
                }
            }

            // 4. Fallback: if somehow list is still empty, show all backups
            if (filtered.length === 0) {
                filtered = annotated.filter(n => n.isBackup);
            }

            // 5. Sort by distance
            filtered.sort((a, b) => (Number(a.realDist) || 0) - (Number(b.realDist) || 0));

            // 6. Final Render
            if (filtered.length === 0) {
                listContainer.innerHTML = `<div style="text-align:center; padding:20px; color:var(--muted-gray);">No NGOs found in your immediate area. Please try a major city.</div>`;
            } else {
                listContainer.innerHTML = filtered.map((n, i) => `
                <div class="fade-up" style="background:var(--card-bg); border:1px solid ${n.isDemo ? 'var(--primary-green)' : 'var(--border-color)'}; border-radius:12px; padding:16px; display:flex; align-items:center; gap:16px; transition:0.3s; flex-wrap:wrap; animation-delay: ${i * 0.1}s; ${n.isDemo ? 'box-shadow: 0 4px 12px rgba(27, 107, 58, 0.1);' : ''}">
                <div style="font-size:24px; background:white; width:48px; height:48px; display:flex; align-items:center; justify-content:center; border-radius:10px; border:1px solid ${n.isDemo ? 'var(--primary-green)' : 'var(--border-color)'}; flex-shrink:0;">${n.isDemo ? '⭐' : (n.isBackup ? '🚀' : '🏥')}</div>
                <div style="flex:1; min-width:min(200px, 100vw)">
                    <div style="font-weight:700; color:var(--dark-navy);">${n.name} ${n.isDemo ? '<span style="font-size:10px; background:var(--primary-green); color:white; padding:2px 6px; border-radius:4px; margin-left:8px;">AI RECOMMENDED</span>' : ''}</div>
                    <div style="font-size:13px; color:var(--muted-gray); margin-top:4px;">${n.realDist > 1000 ? 'Regional Hub' : n.realDist + ' km away'} · <strong>Needs: ${n.category}</strong></div>
                </div>
                <div style="text-align:right;">
                    <div style="font-size:11px; font-weight:700; margin-bottom:8px; padding:4px 8px; background:${n.isDemo ? 'var(--light-green)' : 'white'}; color:${n.isDemo ? 'var(--primary-green)' : 'inherit'}; border-radius:4px; display:inline-block; border:1px solid ${n.isDemo ? 'var(--primary-green)' : 'var(--border-color)'};">${n.badge}</div>
                    <br/>
                    <button class="btn ${n.isDemo ? 'btn-primary' : 'btn-outline-green'} btn-sm" style="border-radius:10px;" onclick="selectNGOFromList('${n.name.replace(/'/g, "\\'")}')">Donate Here</button>
                </div>
                </div>
                `).join('');

                // CRITICAL: Re-trigger scroll animations for dynamic content
                if (typeof initScrollAnimations === 'function') {
                    setTimeout(initScrollAnimations, 100);
                }
            }
        } catch (e) {
            console.error("NGO List Logic Crash:", e);
            listContainer.innerHTML = `<div style="text-align:center; padding:20px; color:red">Error rendering NGOs. <button onclick="initDonateMap()">Retry</button></div>`;
        }
    };

    startLocFetch();
}

function selectNGOFromList(name) {
    const ngo = hardcodedNgOs.find(n => n.name === name) || { name: name };
    donateState.ngo = ngo;
    
    // Demo logic for specific screenshot match
    if (name.includes("Aasra")) {
        donateState.id = "RT-2024-62527";
        if (!donateState.analysis) donateState.analysis = { item_type: "Men's Winter Jacket" };
    } else {
        donateState.id = "RT-2024-" + Math.floor(10000 + Math.random() * 90000);
    }
    
    goDonateStep(3);

    // Generate QR
    document.getElementById('conf-don-id').textContent = donateState.id;
    document.getElementById('c-item').textContent = donateState.analysis?.item_type || "Clothing Item";
    document.getElementById('c-ngo').textContent = donateState.ngo.name;

    const qrContainer = document.getElementById('qr-code-container');
    qrContainer.innerHTML = '';
    if (typeof QRCode !== 'undefined') {
        new QRCode(qrContainer, {
            text: donateState.id,
            width: 150,
            height: 150
        });
    } else {
        qrContainer.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?data=${donateState.id}&size=150x150" alt="QR Code"/>`;
    }
}

function goDonateStep(step) {
    document.querySelectorAll('#donate-page .form-section').forEach(s => s.classList.remove('active'));
    const sec = document.getElementById(`fStep${step}`);
    if (sec) sec.classList.add('active');

    // Update step indicators
    [1, 2, 3].forEach(i => {
        const item = document.getElementById(`spItem${i}`);
        if (!item) return;
        item.classList.remove('active', 'done');
        if (i === step) item.classList.add('active');
        else if (i < step) item.classList.add('done');
    });

    const widths = { 1: '0%', 2: '50%', 3: '100%' };
    document.getElementById('prog-line').style.width = widths[step] || '0%';
    donateStep = step;

    if (step === 2) {
        setTimeout(initDonateMap, 100);
    }
}

function finishDonationFlow() {
    showToast('green', '🎉 Donation Confirmed!', 'Attach the QR code to your bag.');
    if (typeof addNewDonation === 'function') addNewDonation(donateState);
    setTimeout(() => showPage('wardrobe'), 1500);
}
