// ════════════════════════════════════════
// PROFILE PAGE
// ════════════════════════════════════════

function renderProfile() {
    const user = getAuthUser();
    
    if (user) {
        const name = user.displayName || user.email.split('@')[0];
        const email = user.email;
        const initial = name.charAt(0).toUpperCase();
        
        return `
<div id="profile-page" style="min-height: 100vh; padding-top: 20px;">
  <div class="container section" style="max-width:600px; margin:0 auto; text-align:center;">
    <div style="width:80px; height:80px; border-radius:50%; background:var(--primary-green); color:#fff; display:flex; align-items:center; justify-content:center; font-size:32px; font-weight:700; margin:0 auto 20px;">${initial}</div>
    <h1 style="font-size:28px; font-weight:800; color:var(--dark-navy); margin-bottom:8px;">${name}</h1>
    <div style="font-size:16px; color:var(--muted-gray); margin-bottom:32px;">${email}</div>
    
    <div style="text-align:left; background:var(--card-bg); border:1px solid var(--border-color); border-radius:12px; padding:24px; margin-bottom:24px;">
      <h3 style="font-weight:700; margin-bottom:16px;">Account Settings</h3>
      <div style="display:flex; justify-content:space-between; padding:12px 0; border-bottom:1px solid var(--border-color);">
        <span style="font-weight:600;">Donation Notifications</span>
        <span><input type="checkbox" checked /></span>
      </div>
      <div style="display:flex; justify-content:space-between; padding:12px 0;">
        <span style="font-weight:600;">Volunteer Assignments</span>
        <span><input type="checkbox" checked /></span>
      </div>
    </div>
    
    <button class="btn btn-outline-green" style="width:100%; justify-content:center;" onclick="firebase.auth().signOut()">Sign Out</button>
  </div>
</div>`;
    } else {
        return `
<div id="profile-page" style="min-height: 100vh; padding-top: 20px;">
  <div class="container section" style="max-width:600px; margin:0 auto; text-align:center;">
    <div style="font-size:64px; margin-bottom:24px;">👤</div>
    <h1 style="font-size:28px; font-weight:800; color:var(--dark-navy); margin-bottom:16px;">Access Your Profile</h1>
    <p style="font-size:16px; color:var(--muted-gray); margin-bottom:32px; line-height:1.6;">Sign in to track your donations, accept volunteer pickups, and manage your green credits securely.</p>
    <button class="btn btn-primary btn-lg" style="width:100%; justify-content:center;" onclick="showPage('login')">Go to Login</button>
  </div>
</div>`;
    }
}
