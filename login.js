// ===== PARTICLES =====
(function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  for (let i = 0; i < 35; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 3 + 1;
    const colors = ['#6366f1','#818cf8','#06b6d4','#a855f7'];
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random() * 100}%;
      animation-delay:${Math.random() * 12}s;
      animation-duration:${Math.random() * 10 + 8}s;
      background:${colors[Math.floor(Math.random() * colors.length)]};
    `;
    container.appendChild(p);
  }
})();

// ===== PASSWORD TOGGLE =====
const togglePw = document.getElementById('togglePw');
const passwordInput = document.getElementById('password');
const eyeIcon = document.getElementById('eyeIcon');

togglePw.addEventListener('click', () => {
  const isHidden = passwordInput.type === 'password';
  passwordInput.type = isHidden ? 'text' : 'password';
  eyeIcon.className = isHidden ? 'fas fa-eye-slash' : 'fas fa-eye';
});

// ===== FIELD VALIDATION =====
function validateEmail(val) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
}

function setError(inputId, errorId, msg) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);
  input.classList.add('error');
  error.textContent = msg;
}

function clearError(inputId, errorId) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);
  input.classList.remove('error');
  error.textContent = '';
}

document.getElementById('email').addEventListener('input', function () {
  if (this.value && !validateEmail(this.value)) {
    setError('email', 'emailError', 'Enter a valid email address.');
  } else {
    clearError('email', 'emailError');
  }
});

document.getElementById('password').addEventListener('input', function () {
  if (this.value && this.value.length < 6) {
    setError('password', 'passwordError', 'Password must be at least 6 characters.');
  } else {
    clearError('password', 'passwordError');
  }
});

// ===== LOGIN FORM SUBMIT =====
const loginForm = document.getElementById('loginForm');
const loginBtn = document.getElementById('loginBtn');
const loginBtnText = document.getElementById('loginBtnText');
const loginBtnLoader = document.getElementById('loginBtnLoader');
const loginError = document.getElementById('loginError');
const loginErrorMsg = document.getElementById('loginErrorMsg');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  loginError.style.display = 'none';

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  let valid = true;

  if (!email || !validateEmail(email)) {
    setError('email', 'emailError', 'Enter a valid email address.');
    valid = false;
  }
  if (!password || password.length < 6) {
    setError('password', 'passwordError', 'Password must be at least 6 characters.');
    valid = false;
  }
  if (!valid) return;

  loginBtnText.style.display = 'none';
  loginBtnLoader.style.display = 'inline-flex';
  loginBtn.disabled = true;

  setTimeout(() => {
    loginBtnText.style.display = 'inline-flex';
    loginBtnLoader.style.display = 'none';
    loginBtn.disabled = false;

    loginErrorMsg.textContent = 'Invalid email or password. Please try again.';
    loginError.style.display = 'flex';
  }, 1800);
});

// ===== SOCIAL BUTTONS =====
document.getElementById('googleBtn').addEventListener('click', () => {
  showSocialToast('Google');
});
document.getElementById('githubBtn').addEventListener('click', () => {
  showSocialToast('GitHub');
});

function showSocialToast(provider) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fas fa-info-circle"></i> ${provider} OAuth is not connected yet.`;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('toast-show'));
  setTimeout(() => {
    toast.classList.remove('toast-show');
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}
