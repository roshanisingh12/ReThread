// ════════════════════════════════════════
// LOGIN PAGE & AUTHENTICATION
// ════════════════════════════════════════

let isRegisterMode = false;

function renderLogin() {
    return `
<div id="login-page" style="min-height: calc(100vh - 70px); display: flex; align-items: center; justify-content: center; padding: 40px 20px; background: var(--bg-light);">
    <div class="card fade-up" style="max-width: 450px; width: 100%; border-radius: 24px; box-shadow: 0 10px 40px rgba(0,0,0,0.08); overflow: hidden;">
        <!-- Header -->
        <div style="background: var(--primary-green); color: white; padding: 32px 24px; text-align: center;">
            <div style="display:flex; justify-content:center; margin-bottom: 16px;">
                <svg fill="currentColor" viewBox="0 0 24 24" style="width:48px;height:48px;color: white;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
            </div>
            <h2 id="login-title" style="font-size: 24px; font-weight: 800; margin: 0;">Welcome back</h2>
            <p id="login-subtitle" style="font-size: 14px; opacity: 0.9; margin-top: 8px;">Login to track your impact!</p>
        </div>

        <div style="padding: 32px 24px;">
            <!-- Google Login -->
            <button class="btn btn-outline-green" style="width: 100%; justify-content: center; margin-bottom: 24px; gap: 8px; font-weight: 600;" onclick="loginWithGoogle()">
                <svg viewBox="0 0 24 24" style="width:20px;height:20px;"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                Continue with Google
            </button>

            <!-- Divider -->
            <div style="display: flex; align-items: center; text-align: center; color: var(--muted-gray); font-size: 13px; margin: 20px 0;">
                <div style="flex: 1; height: 1px; background: #e5e7eb;"></div>
                <span style="padding: 0 10px;">or</span>
                <div style="flex: 1; height: 1px; background: #e5e7eb;"></div>
            </div>

            <!-- Email Form -->
            <form id="login-form" onsubmit="handleEmailAuth(event)">
                <div id="name-field-container" style="display: none; margin-bottom: 16px;">
                    <label class="form-label" for="auth-name">Full Name</label>
                    <input type="text" id="auth-name" class="form-control" placeholder="John Doe">
                </div>
                <div class="form-group" style="margin-bottom: 16px;">
                    <label class="form-label" for="auth-email">Email Address</label>
                    <input type="email" id="auth-email" class="form-control" placeholder="john@example.com" required>
                </div>
                <div class="form-group" style="margin-bottom: 24px;">
                    <label class="form-label" for="auth-password">Password</label>
                    <input type="password" id="auth-password" class="form-control" placeholder="••••••••" required>
                </div>
                
                <button type="submit" id="auth-submit-btn" class="btn btn-primary" style="width: 100%; justify-content: center;">Login</button>
            </form>

            <div style="text-align: center; margin-top: 24px; font-size: 14px; color: var(--muted-gray);">
                <span id="auth-toggle-text">Don't have an account?</span> 
                <a href="#" style="color: var(--primary-green); font-weight: 600; text-decoration: none;" onclick="toggleAuthMode(event)">
                    <span id="auth-toggle-action">Sign up</span>
                </a>
            </div>
        </div>
    </div>
</div>
    `;
}

function toggleAuthMode(event) {
    if (event) event.preventDefault();
    isRegisterMode = !isRegisterMode;
    
    document.getElementById('name-field-container').style.display = isRegisterMode ? 'block' : 'none';
    document.getElementById('auth-name').required = isRegisterMode;
    
    document.getElementById('login-title').textContent = isRegisterMode ? 'Create Account' : 'Welcome back';
    document.getElementById('login-subtitle').textContent = isRegisterMode ? 'Join our community of donors.' : 'Login to track your impact!';
    
    document.getElementById('auth-submit-btn').textContent = isRegisterMode ? 'Sign Up' : 'Login';
    document.getElementById('auth-toggle-text').textContent = isRegisterMode ? 'Already have an account?' : 'Don\'t have an account?';
    document.getElementById('auth-toggle-action').textContent = isRegisterMode ? 'Login' : 'Sign up';
}

function handleEmailAuth(event) {
    event.preventDefault();
    const email = document.getElementById('auth-email').value;
    const password = document.getElementById('auth-password').value;
    const btn = document.getElementById('auth-submit-btn');

    // Make sure Firebase is initialized
    if (!window.firebase || !firebase.apps.length) {
        showToast('orange', 'Configuration Required', 'Firebase is not initialized yet. Check your config.');
        return;
    }

    const auth = firebase.auth();
    btn.disabled = true;
    const originalText = btn.textContent;
    btn.textContent = 'Please wait...';

    if (isRegisterMode) {
        const name = document.getElementById('auth-name').value;
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // Update profile with name
                return user.updateProfile({ displayName: name }).then(() => {
                    handleAuthSuccess(user, name);
                });
            })
            .catch((error) => {
                btn.disabled = false;
                btn.textContent = originalText;
                showToast('orange', 'Sign Up Error', error.message);
            });
    } else {
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                handleAuthSuccess(user, user.displayName);
            })
            .catch((error) => {
                btn.disabled = false;
                btn.textContent = originalText;
                showToast('orange', 'Login Error', error.message);
            });
    }
}

function loginWithGoogle() {
    if (!window.firebase || !firebase.apps.length) {
        showToast('orange', 'Configuration Required', 'Firebase is not initialized yet. Check your config.');
        return;
    }

    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            const user = result.user;
            handleAuthSuccess(user, user.displayName);
        }).catch((error) => {
            showToast('orange', 'Google Login Error', error.message);
        });
}

function handleAuthSuccess(user, name) {
    showToast('green', 'Success!', 'You are now authenticated.');
    
    // Store user data in Firestore safely
    const db = firebase.firestore();
    db.collection('users').doc(user.uid).set({
        name: name || user.displayName || 'Donor',
        email: user.email,
        lastLogin: firebase.firestore.FieldValue.serverTimestamp(),
        role: 'user'
    }, { merge: true }).then(() => {
        // Redirect to wardrobe (My Donations)
        setTimeout(() => {
            showPage('wardrobe');
        }, 1000);
    }).catch(err => {
        console.error("Error writing user to Firestore", err);
        // Redirect anyway
        setTimeout(() => {
            showPage('wardrobe');
        }, 1000);
    });
}

function handleSignOut() {
    if(firebase.auth()) {
        firebase.auth().signOut().then(() => {
            showToast('blue', 'Signed Out', 'You have been safely signed out.');
            showPage('home');
        });
    }
}
