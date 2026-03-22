// ════════════════════════════════════════
// MARKETPLACE PAGE
// ════════════════════════════════════════
const marketItems = [
    { icon: '👖', name: 'Blue Denim Jacket', brand: "Levi's", price: 599, orig: 2499, health: 68, worn: 47, carbon: '8.5 kg' },
    { icon: '👔', name: 'White Formal Shirt', brand: 'Arrow', price: 199, orig: 999, health: 82, worn: 12, carbon: '3.2 kg' },
    { icon: '👗', name: 'Floral Summer Dress', brand: 'Zara', price: 449, orig: 3499, health: 74, worn: 18, carbon: '5.1 kg' },
    { icon: '🧥', name: 'Leather Jacket', brand: 'Roadster', price: 899, orig: 4999, health: 91, worn: 8, carbon: '12.4 kg' },
    { icon: '👟', name: 'Casual Sneakers', brand: 'Campus', price: 349, orig: 1499, health: 61, worn: 30, carbon: '4.8 kg' },
    { icon: '🩱', name: 'Yoga Top', brand: 'Jockey', price: 149, orig: 699, health: 88, worn: 22, carbon: '2.9 kg' },
    { icon: '🧣', name: 'Woolen Scarf', brand: 'Monte Carlo', price: 249, orig: 899, health: 77, worn: 15, carbon: '3.6 kg' },
    { icon: '🎩', name: 'Panama Hat', brand: 'Max', price: 199, orig: 799, health: 95, worn: 5, carbon: '1.8 kg' },
];

function renderMarketplace() {
    return `
<div id="marketplace-page">
  <div class="page-header">
    <div class="container">
      <span class="section-label">Circular Fashion</span>
      <h1 class="section-title">Second Life Marketplace</h1>
      <p class="section-subtitle">Pre-loved. Verified. History included. Every item comes with a full ClothID passport.</p>
    </div>
  </div>
  <div class="container section">
    <div class="marketplace-toolbar">
      <div class="marketplace-filter">
        <div class="chip active" onclick="chipActivate(this)">All</div>
        <div class="chip" onclick="chipActivate(this)">Jackets</div>
        <div class="chip" onclick="chipActivate(this)">Shirts</div>
        <div class="chip" onclick="chipActivate(this)">Dresses</div>
        <div class="chip" onclick="chipActivate(this)">Footwear</div>
        <div class="chip" onclick="chipActivate(this)">Accessories</div>
      </div>
      <select class="form-control market-sort" style="max-width:180px">
        <option>Sort: Best Match</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
        <option>Health Score</option>
        <option>Newest First</option>
      </select>
    </div>
    <div class="grid-4" id="market-grid">
      ${marketItems.map(item => renderProductCard(item)).join('')}
    </div>
  </div>
</div>`;
}

function renderProductCard(item) {
    const discount = Math.round((1 - item.price / item.orig) * 100);
    const hColor = item.health >= 70 ? 'var(--primary-green)' : item.health >= 50 ? 'var(--warning-yellow)' : '#C62828';
    return `
  <div class="product-card fade-up" onclick="openProductDetail(this, '${item.name}', '${item.brand}', ${item.price}, ${item.orig}, ${item.health}, ${item.worn}, '${item.carbon}', '${item.icon}')">
    <div class="product-img">
      <span>${item.icon}</span>
      <div class="product-verified-badge">✓ Verified</div>
      <div class="product-health-badge" style="color:${hColor}">🌿 ${item.health}%</div>
      <div class="product-worn-badge">Worn ${item.worn}×</div>
    </div>
    <div class="product-body">
      <div class="product-name">${item.name}</div>
      <div class="product-brand">${item.brand}</div>
      <div class="product-price-row">
        <span class="product-price-current">₹${item.price}</span>
        <span class="product-price-original">₹${item.orig}</span>
        <span class="badge badge-green" style="font-size:10px">${discount}% off</span>
      </div>
      <div class="product-carbon">🌱 ${item.carbon} CO₂ saved vs buying new</div>
      <button class="btn btn-primary btn-sm" style="width:100%;justify-content:center"
        onclick="event.stopPropagation();showToast('green','🛒 Added to Cart!','${item.name} added. Checkout to complete purchase.')">Buy Now</button>
    </div>
  </div>`;
}

function openProductDetail(card, name, brand, price, orig, health, worn, carbon, icon) {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay open';
    overlay.innerHTML = `
    <div class="modal" style="max-width:600px;padding:0;overflow:hidden;border-radius:20px">
      <div style="background:linear-gradient(135deg,var(--dark-navy),#1a3a52);padding:28px;display:flex;gap:20px;align-items:center">
        <div style="width:72px;height:72px;border-radius:14px;background:var(--light-green);display:flex;align-items:center;justify-content:center;font-size:36px;flex-shrink:0">${icon}</div>
        <div style="flex:1"><div style="font-size:22px;font-weight:800;color:#fff">${name}</div><div style="color:rgba(255,255,255,0.6);font-size:14px;margin-top:4px">${brand}</div></div>
        <button onclick="this.closest('.modal-overlay').remove()" style="background:rgba(255,255,255,0.1);border:none;color:white;width:36px;height:36px;border-radius:50%;font-size:18px;cursor:pointer">✕</button>
      </div>
      <div style="padding:28px">
        <div style="display:flex;gap:12px;align-items:baseline;margin-bottom:16px">
          <span style="font-size:32px;font-weight:900;color:var(--dark-navy)">₹${price}</span>
          <span style="font-size:16px;color:var(--muted-gray);text-decoration:line-through">₹${orig}</span>
          <span class="badge badge-green">${Math.round((1 - price / orig) * 100)}% off</span>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:20px">
          <div style="background:var(--card-bg);border-radius:10px;padding:14px;text-align:center"><div style="font-size:22px;font-weight:800;color:var(--primary-green)">${health}%</div><div style="font-size:11px;color:var(--muted-gray)">Health Score</div></div>
          <div style="background:var(--card-bg);border-radius:10px;padding:14px;text-align:center"><div style="font-size:22px;font-weight:800;color:var(--dark-navy)">${worn}×</div><div style="font-size:11px;color:var(--muted-gray)">Times Worn</div></div>
          <div style="background:var(--light-green);border-radius:10px;padding:14px;text-align:center"><div style="font-size:18px;font-weight:800;color:var(--primary-green)">${carbon}</div><div style="font-size:11px;color:var(--muted-gray)">CO₂ Saved</div></div>
        </div>
        <div style="background:var(--card-bg);border-radius:10px;padding:16px;margin-bottom:20px;font-size:13px;color:var(--muted-gray);line-height:1.7">
          <strong style="color:var(--dark-navy)">ClothID Passport:</strong> Full wear history, wash log, repair records, and CO₂ footprint are verified and attached to this listing. Original purchase price: ₹${orig}.
        </div>
        <div style="display:flex;gap:10px">
          <button class="btn btn-primary" style="flex:1;justify-content:center" onclick="showToast('green','🛒 Added!','${name} added to cart.');this.closest('.modal-overlay').remove()">Add to Cart</button>
          <button class="btn btn-outline-orange" onclick="showToast('blue','💬 Offer Sent!','Your offer has been sent to the seller.')">Make Offer</button>
          <button class="btn btn-outline-green" onclick="showToast('blue','💬 Chat','Opening seller chat...')">Ask Seller</button>
        </div>
      </div>
    </div>`;
    document.body.appendChild(overlay);
}

function chipActivate(el) {
    document.querySelectorAll('.filter-chips .chip, .marketplace-filter .chip').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
}
