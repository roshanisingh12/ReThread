// ════════════════════════════════════════
// DONATE PAGE & AI ENGINE
// ════════════════════════════════════════

let donateState = { base64: null, analysis: null, ngo: null, id: null };
let ngoMap = null;

const hardcodedNgOs = [
    { name: "Aasra Relief Camp", lat: 18.5204, lng: 73.8567, dist: "1.8 km", need: "Adult Winter Wear", badge: "🔴 Urgent" },
    { name: "Pune Orphanage Hub", lat: 18.5300, lng: 73.8400, dist: "3.2 km", need: "Children's Clothing", badge: "🟡 Medium Needs" },
    { name: "Smile Foundation Drop", lat: 18.5100, lng: 73.8650, dist: "4.5 km", need: "Footwear", badge: "🟢 Normal" }
];

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

      <!-- AI LOADING -->
      <div id="ai-loading" style="display:none; text-align:center; padding:30px;">
        <div style="font-size:30px; animation:spin 2s linear infinite; display:inline-block;">🤖</div>
        <div style="margin-top:12px; font-weight:600; color:var(--primary-green);">Anthropic Claude AI is analyzing your item...</div>
      </div>

      <!-- AI RESULT CARD -->
      <div id="ai-result-card" style="display:none; background:var(--card-bg); border-radius:12px; border:1.5px solid var(--border-color); padding:20px; margin-top:20px;">
        <div style="font-size:14px; font-weight:700; color:var(--primary-green); margin-bottom:12px;">✅ AI Analysis Complete</div>
        <div class="grid-2" style="gap:16px;">
          <div><span style="font-size:12px; color:var(--muted-gray);">Detected Item</span><div style="font-weight:700;" id="ai-res-type">...</div></div>
          <div><span style="font-size:12px; color:var(--muted-gray);">Condition</span><div style="font-weight:700;" id="ai-res-cond">...</div></div>
          <div><span style="font-size:12px; color:var(--muted-gray);">Best-Fit Category</span><div style="font-weight:700;" id="ai-res-cat">...</div></div>
          <div><span style="font-size:12px; color:var(--muted-gray);">Recommended Match</span><div style="font-weight:700; color:var(--primary-green);" id="ai-res-ngo">...</div></div>
        </div>
        <button class="btn btn-primary" style="margin-top:24px; width:100%; justify-content:center;" onclick="goDonateStep(2); initDonateMap();">Continue to Nearest NGOs →</button>
      </div>
    </div>

    <!-- STEP 2: MAP & NGOS -->
    <div class="form-section" id="fStep2">
      <h2 style="font-size:20px; font-weight:700; color:var(--dark-navy); margin-bottom:16px;">Step 2 — Nearest NGOs in Need</h2>
      <div id="donate-map" style="height:250px; border-radius:12px; margin-bottom:24px; background:#e0e0e0; z-index:1;"></div>
      
      <div style="display:flex; flex-direction:column; gap:12px;">
        ${hardcodedNgOs.map((n, i) => `
        <div style="background:var(--card-bg); border:1px solid var(--border-color); border-radius:10px; padding:16px; display:flex; align-items:center; gap:16px; transition:0.3s; flex-wrap:wrap">
          <div style="font-size:24px;">🏥</div>
          <div style="flex:1; min-width:200px">
            <div style="font-weight:700; color:var(--dark-navy);">${n.name}</div>
            <div style="font-size:13px; color:var(--muted-gray); margin-top:4px;">${n.dist} away · <strong>Needs: ${n.need}</strong></div>
          </div>
          <div style="text-align:right;">
            <div style="font-size:12px; font-weight:700; margin-bottom:8px;">${n.badge}</div>
            <button class="btn btn-outline-green btn-sm" onclick="selectNGOForDonation(${i})">Donate Here</button>
          </div>
        </div>
        `).join('')}
      </div>
      <div class="form-nav-btns" style="margin-top:24px;">
        <button class="btn btn-outline-green" onclick="goDonateStep(1)">← Back</button>
      </div>
    </div>

    <!-- STEP 3: CONFIRM & QR -->
    <div class="form-section" id="fStep3">
      <h2 style="font-size:20px; font-weight:700; color:var(--dark-navy); margin-bottom:16px;">Step 3 — Confirm & Attach QR</h2>
      <div style="background:var(--card-bg); border-radius:12px; border:1.5px solid var(--border-color); padding:20px; text-align:center;">
        <div style="color:var(--muted-gray); margin-bottom:12px;">Your Donation ID</div>
        <div style="font-size:24px; font-weight:800; color:var(--dark-navy); letter-spacing:1px;" id="conf-don-id">RT-2024-XXXXX</div>
        
        <div id="qr-code-container" style="display:flex; justify-content:center; margin:24px 0;"></div>
        
        <div style="background:var(--light-green); color:var(--primary-green); padding:12px; border-radius:8px; font-size:14px; font-weight:600; margin-bottom:24px;">
          Attach this QR to your donation bag. When the NGO receives it, you'll be notified via My Donations.
        </div>

        <div style="text-align:left; border-top:1px solid var(--border-color); padding-top:16px; margin-bottom:24px;">
          <div style="display:flex; justify-content:space-between; margin-bottom:8px;"><span style="color:var(--muted-gray);">Item</span><span id="c-item" style="font-weight:600; color:var(--dark-navy);">...</span></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--muted-gray);">Destination</span><span id="c-ngo" style="font-weight:600; color:var(--primary-green);">...</span></div>
        </div>

        <button class="btn btn-primary btn-lg" style="width:100%; justify-content:center;" onclick="finishDonationFlow()">✓ Complete & Track Donation</button>
      </div>
      <div class="form-nav-btns" style="margin-top:12px;">
        <button class="btn btn-outline-green btn-sm" onclick="goDonateStep(2)">← Back</button>
      </div>
    </div>

  </div>
</div>
<!-- spin keyframes -->
<style>@keyframes spin { 100% { transform: rotate(360deg); } }</style>
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
        document.getElementById('ai-loading').style.display = 'block';
        document.getElementById('ai-result-card').style.display = 'none';

        // Call the AI
        const analysis = await callAnthropicVisionAPI(donateState.base64);
        donateState.analysis = analysis;

        // Populate Card
        document.getElementById('ai-res-type').textContent = analysis.item_type;
        document.getElementById('ai-res-cond').textContent = analysis.condition;
        document.getElementById('ai-res-cat').textContent = analysis.category;
        document.getElementById('ai-res-ngo').textContent = analysis.suggested_use;

        document.getElementById('ai-loading').style.display = 'none';
        document.getElementById('ai-result-card').style.display = 'block';
    };
    reader.readAsDataURL(file);
}

// Fake/Real Anthropic API call
async function callAnthropicVisionAPI(base64Image) {
    const apiKey = localStorage.getItem('anthropic_key');
    // If no key or demo mode, provide a realistic hardcoded mock result after 1.5s
    if (!apiKey) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    item_type: "Men's Winter Jacket",
                    condition: "Good",
                    category: "Adult Winter Wear",
                    suggested_use: "Aasra Relief Camp (1.8 km)"
                });
            }, 1500);
        });
    }

    try {
        const payload = {
            model: "claude-3-sonnet-20240229", // Fallback to standard Claude version string
            max_tokens: 300,
            messages: [{
                role: "user",
                content: [
                    { type: "image", source: { type: "base64", media_type: "image/jpeg", data: base64Image.split(',')[1] } },
                    { type: "text", text: "Analyze this clothing item. Return ONLY valid JSON with keys: 'item_type' (e.g. Men's Winter Jacket), 'condition' (Good/Fair/Worn), 'category' (e.g. Adult Winter Wear), 'suggested_use' (closest matching ngo need category)." }
                ]
            }]
        };

        const res = await fetch("https://api.anthropic.com/v1/messages", {
            method: "POST",
            headers: {
                "x-api-key": apiKey,
                "anthropic-version": "2023-06-01",
                "content-type": "application/json",
                "anthropic-dangerously-allow-custom-urls": "true" 
            },
            body: JSON.stringify(payload)
        });
        const data = await res.json();
        const jsonStr = data.content[0].text;
        const parsed = JSON.parse(jsonStr.substring(jsonStr.indexOf('{'), jsonStr.lastIndexOf('}') + 1));
        return parsed;
    } catch(err) {
        console.warn("API failed, using fallback:", err);
        return {
            item_type: "Men's Winter Jacket", condition: "Good", category: "Adult Winter Wear", suggested_use: "Aasra Relief Camp"
        };
    }
}

// ── LEAFLET MAP LOGIC ─────────────────────
function initDonateMap() {
    if (ngoMap) {
        ngoMap.invalidateSize();
        return; 
    }
    try {
        // Center around Pune assuming user is there
        ngoMap = L.map('donate-map').setView([18.5204, 73.8567], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap'
        }).addTo(ngoMap);

        // User Pin
        const userIcon = L.divIcon({ html: '🔵', className: 'map-icon', iconSize: [24,24] });
        L.marker([18.5204, 73.8567], {icon: userIcon}).addTo(ngoMap).bindPopup("You are here");

        // NGO Pins
        const ngoIcon = L.divIcon({ html: '🏥', className: 'map-icon', iconSize: [24,24] });
        hardcodedNgOs.forEach(n => {
            L.marker([n.lat, n.lng], {icon: ngoIcon}).addTo(ngoMap).bindPopup(`<b>${n.name}</b><br/>Needs: ${n.need}`);
        });
        setTimeout(() => ngoMap.invalidateSize(), 300);
    } catch(e) {
        console.warn("Map init failed", e);
    }
}

// ── NAVIGATION LOGIC ──────────────────────
function selectNGOForDonation(index) {
    donateState.ngo = hardcodedNgOs[index];
    donateState.id = "RT-2024-" + Math.floor(10000 + Math.random() * 90000);
    goDonateStep(3);
    
    // Generate QR
    document.getElementById('conf-don-id').textContent = donateState.id;
    document.getElementById('c-item').textContent = donateState.analysis?.item_type || "Clothing Item";
    document.getElementById('c-ngo').textContent = donateState.ngo.name;
    
    const qrContainer = document.getElementById('qr-code-container');
    qrContainer.innerHTML = ''; // clear
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
    if(typeof addNewDonation === 'function') addNewDonation(donateState);
    setTimeout(() => showPage('wardrobe'), 1500); 
}
