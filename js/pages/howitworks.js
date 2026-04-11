// ════════════════════════════════════════
// HOW IT WORKS PAGE
// ════════════════════════════════════════

function renderHowItWorks() {
    return `
<div id="howitworks-page">
  <div class="page-header">
    <div class="container">
      <span class="section-label">Under the Hood</span>
      <h1 class="section-title">How ReThread Works</h1>
      <p class="section-subtitle">A seamless, AI-powered journey from your wardrobe to someone who truly needs it.</p>
    </div>
  </div>

  <div class="container section">
    
    <div class="hiw-stepper">
      <!-- Step 1 -->
      <div class="hiw-step fade-up">
        <div class="hiw-step-icon">📸</div>
        <div class="hiw-step-content">
          <div class="hiw-step-num">Step 1</div>
          <h3 class="hiw-step-title">Upload a Photo</h3>
          <p class="hiw-step-desc">Simply snap a picture of the clothing item you no longer need. No manual category sorting required.</p>
        </div>
      </div>

      <!-- Step 2 -->
      <div class="hiw-step fade-up fade-up-delay-1">
        <div class="hiw-step-icon">🤖</div>
        <div class="hiw-step-content">
          <div class="hiw-step-num">Step 2</div>
          <h3 class="hiw-step-title">AI Analysis</h3>
          <p class="hiw-step-desc">Our Claude Vision AI instantly analyzes the condition, fabric, and optimal category for your item.</p>
        </div>
      </div>

      <!-- Step 3 -->
      <div class="hiw-step fade-up fade-up-delay-2">
        <div class="hiw-step-icon">📍</div>
        <div class="hiw-step-content">
          <div class="hiw-step-num">Step 3</div>
          <h3 class="hiw-step-title">Smart NGO Match</h3>
          <p class="hiw-step-desc">We match your item specifically to an NGO in your city that actively needs that exact category.</p>
        </div>
      </div>

      <!-- Step 4 -->
      <div class="hiw-step fade-up fade-up-delay-3">
        <div class="hiw-step-icon">🚗</div>
        <div class="hiw-step-content">
          <div class="hiw-step-num">Step 4</div>
          <h3 class="hiw-step-title">Doorstep Pickup & Tracking</h3>
          <p class="hiw-step-desc">A volunteer picks it up. Scan your QR code and track the delivery until it reaches the beneficiary.</p>
        </div>
      </div>
    </div>
    
  </div>
</div>

<style>
.hiw-stepper {
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 800px;
  margin: 0 auto;
}
.hiw-step {
  display: flex;
  background: var(--card-bg);
  border-radius: 16px;
  padding: 32px;
  border: 1.5px solid var(--border-color);
  gap: 32px;
  align-items: center;
  transition: transform 0.3s ease;
}
.hiw-step:hover {
  transform: translateY(-4px);
}
.hiw-step-icon {
  font-size: 64px;
  min-width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--light-green);
  border-radius: 50%;
}
.hiw-step-num {
  font-size: 14px;
  font-weight: 800;
  color: var(--primary-green);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
}
.hiw-step-title {
  font-size: 24px;
  font-weight: 800;
  color: var(--dark-navy);
  margin-bottom: 8px;
}
.hiw-step-desc {
  font-size: 16px;
  color: var(--muted-gray);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .hiw-step {
    flex-direction: column;
    text-align: center;
    padding: 24px;
    gap: 16px;
  }
}
</style>
`;
}
