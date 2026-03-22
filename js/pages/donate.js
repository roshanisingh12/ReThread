// ════════════════════════════════════════
// DONATE PAGE
// ════════════════════════════════════════
function renderDonate() {
    return `
<div id="donate-page">
  <div class="page-header">
    <div class="container">
      <span class="section-label">Smart Donation</span>
      <h1 class="section-title">Schedule a Donation</h1>
      <p class="section-subtitle">AI instantly matches your clothes with the right NGO, closest to you.</p>
    </div>
  </div>
  <div class="container section">
    <div class="donate-grid">
      <!-- FORM -->
      <div>
        <div class="donation-form-wrap">
          <div class="step-progress">
            <div class="step-prog-line" id="prog-line" style="width:0%"></div>
            <div class="step-prog-item active" id="spItem1">
              <div class="step-prog-circle">1</div>
              <div class="step-prog-label">Clothes Details</div>
            </div>
            <div class="step-prog-item" id="spItem2">
              <div class="step-prog-circle">2</div>
              <div class="step-prog-label">Pickup Info</div>
            </div>
            <div class="step-prog-item" id="spItem3">
              <div class="step-prog-circle">3</div>
              <div class="step-prog-label">Confirm</div>
            </div>
          </div>

          <!-- STEP 1 -->
          <div class="form-section active" id="fStep1">
            <div class="form-section-title">Step 1 — Clothes Details</div>
            <div class="form-group" style="margin-bottom:20px">
              <label class="form-label">Clothing Type</label>
              <select class="form-control" id="clothType" onchange="updateAIPreview()">
                <option value="">Select type...</option>
                <option value="winter">Winter Wear</option>
                <option value="kids">Children's Clothes</option>
                <option value="formal">Formal Wear</option>
                <option value="casual">Casual Wear</option>
                <option value="footwear">Footwear</option>
                <option value="blankets">Blankets</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div class="form-group" style="margin-bottom:20px">
              <label class="form-label">Condition</label>
              <div class="radio-card-group">
                <label class="radio-card" onclick="selectCondition(this,'New')">
                  <input type="radio" name="condition" value="New"/>
                  <div class="radio-card-icon">✨</div>
                  <div class="radio-card-label">New</div>
                </label>
                <label class="radio-card" onclick="selectCondition(this,'Good')">
                  <input type="radio" name="condition" value="Good"/>
                  <div class="radio-card-icon">👍</div>
                  <div class="radio-card-label">Good</div>
                </label>
                <label class="radio-card" onclick="selectCondition(this,'Usable')">
                  <input type="radio" name="condition" value="Usable"/>
                  <div class="radio-card-icon">👌</div>
                  <div class="radio-card-label">Usable</div>
                </label>
              </div>
            </div>
            <div class="form-group" style="margin-bottom:20px">
              <label class="form-label">Quantity</label>
              <div class="qty-spinner">
                <button class="qty-btn" onclick="changeQty(-1)">−</button>
                <input class="qty-value" type="number" id="qtyVal" value="1" min="1" onchange="updateAIPreview()"/>
                <button class="qty-btn" onclick="changeQty(1)">+</button>
              </div>
            </div>
            <div class="form-group" style="margin-bottom:20px">
              <label class="form-label">Photos (optional)</label>
              <div class="photo-drop" onclick="showToast('blue','📷 Upload feature','Photo upload is available on the mobile app!')">
                <div class="photo-drop-icon">📸</div>
                <div class="photo-drop-text"><strong>Drag photos here</strong> or click to upload</div>
              </div>
            </div>
            <div class="form-group" style="margin-bottom:28px">
              <label class="form-label">Fabric Material (optional)</label>
              <select class="form-control">
                <option value="">Select material...</option>
                <option>Cotton</option><option>Polyester</option><option>Wool</option>
                <option>Silk</option><option>Blend</option><option>Unknown</option>
              </select>
            </div>
            <div class="form-nav-btns">
              <div></div>
              <button class="btn btn-primary" onclick="goDonateStep(2)">Next: Pickup Info →</button>
            </div>
          </div>

          <!-- STEP 2 -->
          <div class="form-section" id="fStep2">
            <div class="form-section-title">Step 2 — Pickup Info</div>
            <div class="form-group" style="margin-bottom:20px">
              <label class="form-label">Pickup Preference</label>
              <div class="radio-card-group">
                <label class="radio-card" onclick="selectPickup(this,'home')">
                  <input type="radio" name="pickup" value="home"/>
                  <div class="radio-card-icon">🏠</div>
                  <div class="radio-card-label">Home Pickup</div>
                </label>
                <label class="radio-card" onclick="selectPickup(this,'hub')">
                  <input type="radio" name="pickup" value="hub"/>
                  <div class="radio-card-icon">📍</div>
                  <div class="radio-card-label">Drop at Hub</div>
                </label>
              </div>
            </div>
            <div id="homePickupFields">
              <div class="form-group" style="margin-bottom:16px">
                <label class="form-label">Address</label>
                <textarea class="form-control" rows="3" placeholder="Your pickup address..."></textarea>
              </div>
              <div class="form-group" style="margin-bottom:16px">
                <label class="form-label">Preferred Date</label>
                <input class="form-control" type="date"/>
              </div>
              <div class="form-group" style="margin-bottom:24px">
                <label class="form-label">Time Slot</label>
                <select class="form-control">
                  <option>Morning 8–11 AM</option>
                  <option>Afternoon 12–3 PM</option>
                  <option>Evening 4–7 PM</option>
                </select>
              </div>
            </div>
            <div id="hubPickupFields" style="display:none">
              <label class="form-label" style="display:block;margin-bottom:12px">Nearest Micro-Hubs</label>
              <div class="hub-select-cards">
                ${[['Ramesh General Store', 'Kirana Store', '0.4 km'], ['Green Apartments Gate', 'Apartment', '0.7 km'], ['HP Petrol Pump', 'Fuel Station', '1.1 km'], ['St. Mary School', 'School', '1.4 km'], ['India Post Office', 'Post Office', '1.8 km']]
            .map(([n, t, d]) => `
                <div class="hub-select-card" onclick="selectHub(this)">
                  <div><div class="hub-select-name">${n}</div><div class="hub-select-type">${t}</div></div>
                  <div class="hub-select-dist">${d}</div>
                </div>`).join('')}
              </div>
            </div>
            <div class="form-nav-btns">
              <button class="btn btn-outline-green" onclick="goDonateStep(1)">← Back</button>
              <button class="btn btn-primary" onclick="goDonateStep(3)">Next: Confirm →</button>
            </div>
          </div>

          <!-- STEP 3 -->
          <div class="form-section" id="fStep3">
            <div class="form-section-title">Step 3 — Confirm Donation</div>
            <div style="margin-bottom:24px">
              <div class="confirm-row"><span class="confirm-label">Clothing Type</span><span class="confirm-value" id="conf-type">Winter Wear</span></div>
              <div class="confirm-row"><span class="confirm-label">Condition</span><span class="confirm-value" id="conf-cond">Good</span></div>
              <div class="confirm-row"><span class="confirm-label">Quantity</span><span class="confirm-value" id="conf-qty">3 items</span></div>
              <div class="confirm-row"><span class="confirm-label">Pickup Type</span><span class="confirm-value">Home Pickup</span></div>
              <div class="confirm-row"><span class="confirm-label">AI Match</span><span class="confirm-value" style="color:var(--primary-green)">✓ Shimla Relief Camp</span></div>
              <div class="confirm-row"><span class="confirm-label">Volunteer</span><span class="confirm-value">Rahul K.</span></div>
              <div class="confirm-row"><span class="confirm-label">Donor Cost</span><span class="confirm-value" style="color:var(--primary-green)">₹0 (Free)</span></div>
            </div>
            <button class="btn btn-primary btn-lg" style="width:100%;justify-content:center" onclick="confirmDonation()">✓ Confirm &amp; Schedule Pickup</button>
            <div class="form-nav-btns" style="margin-top:12px">
              <button class="btn btn-outline-green" onclick="goDonateStep(2)">← Back</button>
            </div>
          </div>
        </div>
      </div>

      <!-- AI PREVIEW -->
      <div>
        <div class="ai-preview-card">
          <div class="ai-preview-title">🤖 AI Match Preview</div>
          <div class="ai-preview-section">
            <div class="ai-preview-section-title">Your Donation</div>
            <div class="ai-donation-item">
              <div class="ai-donation-icon" id="ai-icon">🧥</div>
              <div>
                <div class="ai-donation-name" id="ai-type">Select clothing type</div>
                <div class="ai-donation-sub" id="ai-sub">Condition & quantity will appear here</div>
              </div>
            </div>
          </div>
          <div class="ai-preview-section">
            <div class="ai-preview-section-title">AI Match Found</div>
            <div class="ai-match-item">
              <div class="ai-match-ngo">📍 Shimla Relief Camp</div>
              <div class="ai-match-detail">Distance: 340 km · Urgency: HIGH</div>
              <div class="ai-match-detail" style="margin-top:4px">Needs: 50 winter items</div>
            </div>
          </div>
          <div class="ai-preview-section">
            <div class="ai-preview-section-title">Distribution Route</div>
            <div class="route-steps">
              <div class="route-step"><div class="route-dot"></div>Donor (Mumbai)</div>
              <div class="route-step"><div class="route-dot"></div>Volunteer pickup (2 km)</div>
              <div class="route-step"><div class="route-dot orange"></div>Pune Regional Hub</div>
              <div class="route-step"><div class="route-dot orange"></div>India Post surface mail</div>
              <div class="route-step"><div class="route-dot"></div>Shimla Micro-Hub</div>
              <div class="route-step"><div class="route-dot"></div>NGO Delivery</div>
            </div>
            <div style="margin-top:12px;font-size:12px;color:rgba(255,255,255,0.5)">Total cost to donor: <strong style="color:#4ADE80">₹0</strong></div>
          </div>
          <div class="ai-preview-section">
            <div class="ai-preview-section-title">Volunteer Assigned</div>
            <div class="volunteer-row">
              <div class="volunteer-avatar">R</div>
              <div>
                <div class="volunteer-name">Rahul K.</div>
                <div class="volunteer-meta">SUV · Pickup ETA: Tomorrow 10am</div>
              </div>
            </div>
          </div>
          <div class="ai-perfect-match">✅ Perfect Match Found · 🌱 12.4 kg CO₂ saved</div>
        </div>
      </div>
    </div>
  </div>
</div>`;
}
