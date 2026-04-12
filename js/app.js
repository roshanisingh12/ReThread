// ════════════════════════════════════════
// APP.JS — Main Router & Global Logic
// ════════════════════════════════════════

// ── FIREBASE INITIALIZATION ───────────────
window.envConfig = {};

async function loadEnv() {
    // 1. Try Vercel Serverless Bridge (Proper Vercel Path)
    try {
        const resp = await fetch('/api/config');
        if (resp.ok) {
            window.envConfig = await resp.json();
            console.log("Environment loaded via Vercel Bridge");
            return;
        }
    } catch (e) {
        console.warn("Vercel Bridge not available, checking local sources...");
    }

    // 2. Try URL Fetch (Local Dev Fallback)
    const sources = ['/env.example', '/.env.example', '/.env'];
    for (const source of sources) {
        try {
            const resp = await fetch(source);
            if (resp.ok) {
                const text = await resp.text();
                text.split('\n').forEach(line => {
                    const trimmedLine = line.trim();
                    if (!trimmedLine || trimmedLine.startsWith('#')) return;
                    
                    const parts = trimmedLine.split('=');
                    if (parts.length >= 2) {
                        const key = parts[0].trim();
                        const value = parts.slice(1).join('=').trim().replace(/['"]/g, '');
                        window.envConfig[key] = value;
                    }
                });
                console.log(`Environment loaded from ${source}`);
                return; 
            }
        } catch (e) {
            console.warn(`Could not load from ${source}:`, e);
        }
    }
}

async function initApp() {
    // Show splash/loading
    const appEl = document.getElementById('app');
    if (appEl) appEl.innerHTML = '<div style="height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;color:var(--dark-navy)"><div style="font-size:40px;animation:spin 2s linear infinite">🔄</div><div style="font-weight:600">Initializing ReThread...</div></div>';

    await loadEnv();

    const firebaseConfig = {
        apiKey: window.envConfig.FIREBASE_API_KEY,
        authDomain: window.envConfig.FIREBASE_AUTH_DOMAIN || "rethread-e7afe.firebaseapp.com",
        projectId: window.envConfig.FIREBASE_PROJECT_ID || "rethread-e7afe",
        storageBucket: window.envConfig.FIREBASE_STORAGE_BUCKET || "rethread-e7afe.firebasestorage.app",
        messagingSenderId: window.envConfig.FIREBASE_MESSAGING_SENDER_ID || "1089027360405",
        appId: window.envConfig.FIREBASE_APP_ID || "1:1089027360405:web:fb93dea92ed00b57217d9c",
        measurementId: window.envConfig.FIREBASE_MEASUREMENT_ID || "G-HKXHS3NSFG"
    };

    if (typeof window.firebase !== 'undefined' && !firebase.apps.length && firebaseConfig.apiKey) {
        firebase.initializeApp(firebaseConfig);
        setupAuthListener();
    }

    showPage('home');
}



function setupAuthListener() {
    if (typeof window.firebase === 'undefined') return;
    
    firebase.auth().onAuthStateChanged((user) => {
        const navLoginBtn = document.getElementById('nav-login-btn');
        const mobileLoginBtn = document.getElementById('mobile-login-btn');
        
        if (user) {
            if (navLoginBtn) {
                navLoginBtn.textContent = 'Sign Out';
                navLoginBtn.onclick = handleSignOut;
            }
            if (mobileLoginBtn) {
                mobileLoginBtn.textContent = 'Sign Out';
                mobileLoginBtn.onclick = handleSignOut;
            }
        } else {
            if (navLoginBtn) {
                navLoginBtn.textContent = 'Login';
                navLoginBtn.onclick = () => showPage('login');
            }
            if (mobileLoginBtn) {
                mobileLoginBtn.textContent = 'Login';
                mobileLoginBtn.onclick = () => showPage('login');
            }
        }
    });
}

function getAuthUser() {
    if (typeof window.firebase === 'undefined' || firebase.apps.length === 0) {
        return null;
    }
    try {
        return firebase.auth().currentUser;
    } catch (e) {
        console.warn("Firebase Auth not ready:", e);
        return null;
    }
}

let currentPage = 'home';
let donateStep = 1;
let donateCondition = 'Good';
let donatePickup = 'home';

// ── PAGE ROUTER ───────────────────────────
const pageRenderers = {
    home: renderHome,
    donate: renderDonate,
    wardrobe: renderWardrobe,
    volunteer: renderVolunteer,
    ngo: renderNGO,
    howitworks: renderHowItWorks,
    profile: typeof renderProfile !== 'undefined' ? renderProfile : () => '<h2>Profile missing</h2>',
    login: typeof renderLogin !== 'undefined' ? renderLogin : () => '<h2>Login missing</h2>',
};

function showPage(page) {
    currentPage = page;
    const app = document.getElementById('app');
    app.innerHTML = pageRenderers[page]?.() || '<div style="height:100vh;display:flex;align-items:center;justify-content:center"><h2>Coming Soon</h2></div>';

    // Update active nav links
    document.querySelectorAll('.nav-link').forEach(l => {
        l.classList.toggle('active', l.textContent.trim().toLowerCase().includes(
            page === 'howitworks' ? 'how' :
                page === 'wardrobe' ? 'donations' :
                    page === 'volunteer' ? 'volunteer' :
                        page === 'ngo' ? 'ngo' :
                            page
        ));
    });

    // Mobile bottom nav
    document.querySelectorAll('.mobile-bottom-nav .nav-item').forEach(n => n.classList.remove('active'));

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Trigger page-specific init
    setTimeout(() => {
        initScrollAnimations();
        if (page === 'home') {
            initCounters();
            animatePassportHealthBar();
            triggerImpactBar();
        }
        if (page === 'volunteer') initCounters();
        if (page === 'donate') { donateStep = 1; updateProgLine(); }
        if (page === 'wardrobe') initCounters();
    }, 100);
}

// ── SCROLL ANIMATIONS ─────────────────────
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Trigger impact bar animation when in view
                const fill = entry.target.querySelector('#impact-prog');
                if (fill) setTimeout(() => { fill.style.width = '67.4%'; }, 300);
                // Trigger passport health bar
                const hBar = entry.target.querySelector('#passport-health-bar');
                if (hBar) setTimeout(() => { hBar.style.width = '68%'; }, 300);
                // Counters inside this element
                entry.target.querySelectorAll('.counter[data-target]').forEach(el => {
                    if (!el.dataset.animated) animateCounter(el);
                });
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.fade-up').forEach(el => {
        if (!el.classList.contains('visible')) {
            observer.observe(el);
        }
    });
}

// ── COUNTERS ──────────────────────────────
function initCounters() {
    document.querySelectorAll('.counter[data-target]').forEach(el => {
        if (!el.dataset.animated) animateCounter(el);
    });
}

function animateCounter(el) {
    el.dataset.animated = '1';
    const target = parseInt(el.dataset.target, 10);
    const duration = 1800;
    const start = performance.now();
    function tick(now) {
        const pct = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - pct, 3);
        el.textContent = Math.floor(ease * target).toLocaleString('en-IN');
        if (pct < 1) requestAnimationFrame(tick);
        else el.textContent = target.toLocaleString('en-IN');
    }
    requestAnimationFrame(tick);
}

function animatePassportHealthBar() {
    const bar = document.getElementById('passport-health-bar');
    if (bar) setTimeout(() => { bar.style.width = '68%'; }, 600);
}

function triggerImpactBar() {
    const bar = document.getElementById('impact-prog');
    if (bar) setTimeout(() => { bar.style.width = '67.4%'; }, 800);
}

// ── NAVBAR SCROLL ─────────────────────────
window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
});

// ── TOAST SYSTEM ──────────────────────────
function showToast(type, title, message) {
    const icons = { green: '✅', orange: '🔔', blue: '💡' };
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span class="toast-icon">${icons[type] || 'ℹ️'}</span>
    <div class="toast-content"><strong>${title}</strong><p>${message}</p></div>`;
    container.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
        toast.classList.add('hide');
        setTimeout(() => toast.remove(), 400);
    }, 4000);
}

// ── HAMBURGER ─────────────────────────────
function toggleMobile() {
    const menu = document.getElementById('mobileMenu');
    const burger = document.getElementById('hamburger');
    menu.classList.toggle('open');
    burger.classList.toggle('open');
}

// ── ONBOARDING / LOCATION MODAL ─────────
function openOnboarding() {
    document.getElementById('onboarding-modal').classList.add('open');
}
function closeOnboarding() {
    document.getElementById('onboarding-modal').classList.remove('open');
}
document.getElementById('onboarding-modal').addEventListener('click', function (e) {
    if (e.target === this) closeOnboarding();
});

// Mock setup route after location given
function doDonateMapSetup() {
    // We will initialize the donate map if on donate page
    if(currentPage === 'donate' && typeof initDonateMap === 'function') {
        setTimeout(initDonateMap, 500);
    }
}

// ── DONATE FORM LOGIC ─────────────────────
function goDonateStep(step) {
    donateStep = step;
    document.querySelectorAll('.form-section').forEach(s => s.classList.remove('active'));
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
    updateProgLine();
    // Update confirmation screen
    if (step === 3) populateConfirm();
}

function updateProgLine() {
    const line = document.getElementById('prog-line');
    if (!line) return;
    const widths = { 1: '0%', 2: '50%', 3: '100%' };
    line.style.width = widths[donateStep] || '0%';
}

function populateConfirm() {
    const typeEl = document.getElementById('clothType');
    const type = typeEl ? typeEl.options[typeEl.selectedIndex]?.text || 'N/A' : 'N/A';
    const qty = document.getElementById('qtyVal')?.value || '1';
    const confType = document.getElementById('conf-type');
    const confCond = document.getElementById('conf-cond');
    const confQty = document.getElementById('conf-qty');
    if (confType) confType.textContent = type;
    if (confCond) confCond.textContent = donateCondition;
    if (confQty) confQty.textContent = `${qty} item${qty > 1 ? 's' : ''}`;
}

function selectCondition(el, cond) {
    donateCondition = cond;
    document.querySelectorAll('.radio-card').forEach(c => c.classList.remove('selected'));
    el.classList.add('selected');
    updateAIPreview();
}

function selectPickup(el, type) {
    donatePickup = type;
    document.querySelectorAll('.radio-card').forEach(c => c.classList.remove('selected'));
    el.classList.add('selected');
    const home = document.getElementById('homePickupFields');
    const hub = document.getElementById('hubPickupFields');
    if (home) home.style.display = type === 'home' ? 'block' : 'none';
    if (hub) hub.style.display = type === 'hub' ? 'block' : 'none';
}

function selectHub(el) {
    document.querySelectorAll('.hub-select-card').forEach(c => c.classList.remove('selected'));
    el.classList.add('selected');
}

function changeQty(delta) {
    const el = document.getElementById('qtyVal');
    if (!el) return;
    el.value = Math.max(1, parseInt(el.value) + delta);
    updateAIPreview();
}

function updateAIPreview() {
    const icons = { winter: '🧥', kids: '👶', formal: '👔', casual: '👕', footwear: '👟', blankets: '🛏️', other: '📦' };
    const names = { winter: 'Winter Jacket', kids: "Children's Clothes", formal: 'Formal Wear', casual: 'Casual Wear', footwear: 'Footwear', blankets: 'Blankets', other: 'Clothing' };
    const typeEl = document.getElementById('clothType');
    const val = typeEl?.value || '';
    const qty = document.getElementById('qtyVal')?.value || '1';
    const iconEl = document.getElementById('ai-icon');
    const typeLabel = document.getElementById('ai-type');
    const sub = document.getElementById('ai-sub');
    if (iconEl) iconEl.textContent = icons[val] || '📦';
    if (typeLabel) typeLabel.textContent = names[val] || 'Select clothing type';
    if (sub) sub.textContent = val ? `${donateCondition} · ${qty} item${qty > 1 ? 's' : ''}` : 'Condition & quantity will appear here';
}

function confirmDonation() {
    // Generate QR ID and go to tracking
    showToast('green', '🎉 Pickup Scheduled!', 'Volunteer will arrive tomorrow. Track in My Donations!');
    setTimeout(() => showToast('orange', '📍 Match Confirmed', 'Your clothes matched to nearby NGO.'), 1500);
    
    // Auto-spawn a new donation object in wardrobe array
    if(typeof addNewDonation === 'function') {
        addNewDonation();
    }
    
    setTimeout(() => showPage('wardrobe'), 3000);
}

// ── ZONE MAP ──────────────────────────────
function updateZonePopup(el, zone, urgency, w, c, b) {
    const popup = el.closest('.india-map-container')?.querySelector('.zone-popup');
    if (!popup) return;
    popup.querySelector('.zone-popup-title').textContent = `📍 ${zone}`;
    const bars = popup.querySelectorAll('.zone-need-row');
    if (bars[0]) {
        bars[0].querySelector('.progress-bar-fill').style.width = w;
        bars[0].querySelector('.zone-need-pct').textContent = w;
    }
    if (bars[1]) {
        bars[1].querySelector('.progress-bar-fill').style.width = c;
        bars[1].querySelector('.zone-need-pct').textContent = c + (parseFloat(c) > 60 ? ' ⚠️' : '');
    }
    if (bars[2]) {
        bars[2].querySelector('.progress-bar-fill').style.width = b;
        bars[2].querySelector('.zone-need-pct').textContent = b;
    }
}

// Removed inline auth listener as it moved to setupAuthListener()


// ── INIT ──────────────────────────────────
initApp();
