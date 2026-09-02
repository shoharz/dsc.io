// ===== LOAD USER FROM localStorage =====
const user = JSON.parse(localStorage.getItem('dscvps_user') || '{}');
const firstName = user.firstName || 'John';
const lastName  = user.lastName  || 'Doe';
const email     = user.email     || 'john@example.com';
const plan      = user.plan      || 'Pro Plan';
const initials  = (firstName[0] + lastName[0]).toUpperCase();

// ===== SET USER INFO =====
function setUserInfo() {
  const fullName = firstName + ' ' + lastName;
  document.getElementById('sidebarAvatar').textContent  = initials;
  document.getElementById('sidebarName').textContent    = fullName;
  document.getElementById('sidebarPlan').textContent    = plan;
  document.getElementById('topbarAvatar').textContent   = initials;
  document.getElementById('topbarName').textContent     = firstName;
  document.getElementById('welcomeName').textContent    = firstName;
  document.getElementById('profileAvatar').textContent  = initials;
  document.getElementById('profileFullName').textContent = fullName;
  document.getElementById('profileEmail').textContent   = email;
  document.getElementById('profileFirstName').value     = firstName;
  document.getElementById('profileLastName').value      = lastName;
  document.getElementById('profileEmailInput').value    = email;
  document.getElementById('dashPlanName').textContent   = plan;
}
setUserInfo();

// ===== TOAST =====
function showToast(msg, type = 'info') {
  const icons = { success: 'fa-check-circle', error: 'fa-exclamation-circle', info: 'fa-info-circle' };
  const container = document.getElementById('dashToastContainer');
  const t = document.createElement('div');
  t.className = `dash-toast ${type}`;
  t.innerHTML = `<i class="fas ${icons[type] || icons.info}"></i> ${msg}`;
  container.appendChild(t);
  setTimeout(() => t.remove(), 3500);
}

// ===== NAVIGATION =====
function switchPanel(name) {
  document.querySelectorAll('.dash-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.dash-nav-item').forEach(n => n.classList.remove('active'));
  const panel = document.getElementById('panel-' + name);
  if (panel) panel.classList.add('active');
  const navEl = document.querySelector(`.dash-nav-item[data-panel="${name}"]`);
  if (navEl) navEl.classList.add('active');
  document.getElementById('dashBreadcrumb').textContent =
    name.charAt(0).toUpperCase() + name.slice(1);
  if (window.innerWidth <= 768) {
    document.getElementById('dashSidebar').classList.remove('open');
  }
  if (name === 'billing') renderInvoices();
  if (name === 'support') renderTickets();
  if (name === 'servers') renderServers();
}

document.querySelectorAll('.dash-nav-item[data-panel]').forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    switchPanel(item.dataset.panel);
  });
});

// ===== MOBILE SIDEBAR =====
document.getElementById('dashMenuToggle').addEventListener('click', () => {
  document.getElementById('dashSidebar').classList.toggle('open');
});
document.getElementById('dashSidebarClose').addEventListener('click', () => {
  document.getElementById('dashSidebar').classList.remove('open');
});

// ===== SERVERS DATA =====
const MY_SERVERS = [
  {
    id: 'VPS-PRO-001', location: 'Frankfurt, DE', ip: '185.23.41.12',
    os: 'Ubuntu 22.04', plan: 'Pro', cpu: 72, ram: 45, disk: 55,
    status: 'running', uptime: '99.99%', created: '2026-06-01'
  },
  {
    id: 'VPS-PRO-002', location: 'New York, US', ip: '45.82.130.5',
    os: 'Debian 12', plan: 'Pro', cpu: 38, ram: 60, disk: 30,
    status: 'running', uptime: '99.95%', created: '2026-08-28'
  }
];

function renderServers() {
  const grid = document.getElementById('dashServersGrid');
  if (!grid) return;
  grid.innerHTML = MY_SERVERS.map(s => {
    const cpuColor  = s.cpu  >= 90 ? '#ef4444' : s.cpu  >= 70 ? '#f97316' : 'var(--primary-light)';
    const ramColor  = s.ram  >= 90 ? '#ef4444' : s.ram  >= 70 ? '#f97316' : '#c084fc';
    const diskColor = s.disk >= 90 ? '#ef4444' : s.disk >= 70 ? '#f97316' : 'var(--cyan)';
    return `
      <div class="dash-server-card">
        <div class="dash-server-card-header">
          <span class="dash-status-dot ${s.status === 'running' ? 'green' : 'red'}"></span>
          <strong>${s.id}</strong>
          <span class="dash-badge-status ${s.status}">${s.status.charAt(0).toUpperCase()+s.status.slice(1)}</span>
        </div>
        <div class="dash-server-card-body">
          <div style="display:flex;gap:20px;flex-wrap:wrap;font-size:0.8rem;color:var(--text-dim);margin-bottom:6px">
            <span><i class="fas fa-map-marker-alt" style="margin-right:5px;color:var(--primary-light)"></i>${s.location}</span>
            <span><i class="fas fa-network-wired" style="margin-right:5px;color:var(--primary-light)"></i>${s.ip}</span>
            <span><i class="fab fa-linux" style="margin-right:5px;color:var(--primary-light)"></i>${s.os}</span>
          </div>
          <div class="dash-server-metric">
            <span>CPU</span>
            <div class="dash-server-metric-bar"><div class="dash-server-metric-fill" style="width:${s.cpu}%;background:${cpuColor}"></div></div>
            <span>${s.cpu}%</span>
          </div>
          <div class="dash-server-metric">
            <span>RAM</span>
            <div class="dash-server-metric-bar"><div class="dash-server-metric-fill ram" style="width:${s.ram}%;background:${ramColor}"></div></div>
            <span>${s.ram}%</span>
          </div>
          <div class="dash-server-metric">
            <span>DISK</span>
            <div class="dash-server-metric-bar"><div class="dash-server-metric-fill disk" style="width:${s.disk}%;background:${diskColor}"></div></div>
            <span>${s.disk}%</span>
          </div>
        </div>
        <div class="dash-server-card-footer">
          <span><i class="fas fa-clock" style="margin-right:4px"></i>Uptime: ${s.uptime}</span>
          <div class="dash-server-btns">
            <button class="dash-server-btn success" title="Start/Resume" onclick="showToast('${s.id} started','success')"><i class="fas fa-play"></i></button>
            <button class="dash-server-btn warning" title="Restart" onclick="showToast('${s.id} restarting...','info')"><i class="fas fa-redo"></i></button>
            <button class="dash-server-btn danger" title="Stop" onclick="showToast('${s.id} stopped','error')"><i class="fas fa-stop"></i></button>
            <button class="dash-server-btn" title="Console" onclick="showToast('Opening console...','info')"><i class="fas fa-terminal"></i></button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}
renderServers();

// ===== INVOICES =====
const MY_INVOICES = [
  { id: 'INV-0007', plan: 'Pro', amount: '$35.00', date: '2026-09-01', status: 'paid' },
  { id: 'INV-0006', plan: 'Pro', amount: '$35.00', date: '2026-08-01', status: 'paid' },
  { id: 'INV-0005', plan: 'Pro', amount: '$35.00', date: '2026-07-01', status: 'paid' },
  { id: 'INV-0004', plan: 'Pro', amount: '$35.00', date: '2026-06-01', status: 'paid' },
  { id: 'INV-0003', plan: 'Pro', amount: '$35.00', date: '2026-05-01', status: 'paid' },
  { id: 'INV-0002', plan: 'Pro', amount: '$35.00', date: '2026-04-01', status: 'paid' },
  { id: 'INV-0001', plan: 'Pro', amount: '$35.00', date: '2026-03-01', status: 'paid' },
];

function renderInvoices() {
  const tbody = document.getElementById('dashInvoicesBody');
  if (!tbody) return;
  tbody.innerHTML = MY_INVOICES.map(inv => `
    <tr>
      <td><code style="color:var(--primary-light);font-size:0.8rem">${inv.id}</code></td>
      <td>${inv.plan}</td>
      <td style="font-weight:700;color:#fff">${inv.amount}</td>
      <td style="color:var(--text-dim)">${inv.date}</td>
      <td><span class="dash-badge-status ${inv.status}">${inv.status.charAt(0).toUpperCase()+inv.status.slice(1)}</span></td>
      <td>
        <button class="dash-server-btn" title="Download" onclick="showToast('${inv.id} downloaded','success')" style="width:auto;padding:0 10px">
          <i class="fas fa-download"></i>
        </button>
      </td>
    </tr>
  `).join('');
}

// ===== TICKETS =====
let myTickets = JSON.parse(localStorage.getItem('dscvps_tickets') || '[]');

function renderTickets() {
  const list = document.getElementById('dashTicketsList');
  if (!list) return;
  if (myTickets.length === 0) {
    list.innerHTML = `<div class="dash-empty"><i class="fas fa-headset"></i>No tickets yet. We're here if you need help!</div>`;
    return;
  }
  list.innerHTML = myTickets.map((t, i) => `
    <div class="dash-ticket-item">
      <div class="dash-ticket-item-info">
        <strong>#${1000 + i} — ${t.subject}</strong>
        <span>Priority: ${t.priority} · ${t.date}</span>
      </div>
      <span class="dash-badge-status ${t.status}">${t.status.charAt(0).toUpperCase()+t.status.slice(1)}</span>
    </div>
  `).join('');
}

// NEW TICKET
document.getElementById('openTicketBtn').addEventListener('click', () => {
  document.getElementById('newTicketForm').style.display = 'block';
});
document.getElementById('closeTicketForm').addEventListener('click', () => {
  document.getElementById('newTicketForm').style.display = 'none';
});
document.getElementById('submitTicketBtn').addEventListener('click', () => {
  const subject  = document.getElementById('ticketSubject').value.trim();
  const priority = document.getElementById('ticketPriority').value;
  const message  = document.getElementById('ticketMessage').value.trim();
  if (!subject || !message) { showToast('Please fill in subject and message', 'error'); return; }
  const ticket = {
    subject, priority, message,
    status: 'open',
    date: new Date().toLocaleDateString('en-US', { year:'numeric', month:'short', day:'numeric' })
  };
  myTickets.unshift(ticket);
  localStorage.setItem('dscvps_tickets', JSON.stringify(myTickets));
  document.getElementById('newTicketForm').style.display = 'none';
  document.getElementById('ticketSubject').value  = '';
  document.getElementById('ticketMessage').value  = '';
  renderTickets();
  showToast('Ticket submitted! We\'ll reply within 24h', 'success');
});

// ===== SAVE PROFILE =====
document.getElementById('saveProfileBtn').addEventListener('click', () => {
  const fn = document.getElementById('profileFirstName').value.trim();
  const ln = document.getElementById('profileLastName').value.trim();
  const em = document.getElementById('profileEmailInput').value.trim();
  if (!fn || !ln || !em) { showToast('Please fill in all fields', 'error'); return; }
  const updated = { ...user, firstName: fn, lastName: ln, email: em };
  localStorage.setItem('dscvps_user', JSON.stringify(updated));
  const ini = (fn[0] + ln[0]).toUpperCase();
  document.getElementById('sidebarAvatar').textContent  = ini;
  document.getElementById('topbarAvatar').textContent   = ini;
  document.getElementById('profileAvatar').textContent  = ini;
  document.getElementById('sidebarName').textContent    = fn + ' ' + ln;
  document.getElementById('profileFullName').textContent = fn + ' ' + ln;
  document.getElementById('profileEmail').textContent   = em;
  document.getElementById('topbarName').textContent     = fn;
  document.getElementById('welcomeName').textContent    = fn;
  showToast('Profile updated successfully', 'success');
});

// ===== COPY API KEY =====
function copyUserKey() {
  const input = document.getElementById('userApiKey');
  input.type = 'text';
  input.select();
  document.execCommand('copy');
  input.type = 'password';
  showToast('API key copied', 'success');
}

// ===== NOTIFICATIONS =====
document.getElementById('dashNotifBtn').addEventListener('click', () => {
  showToast('No new notifications', 'info');
});
