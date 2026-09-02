// ===== DEFAULT PLANS (synced to index.html via localStorage) =====
const DEFAULT_PLANS = [
  {
    id: 'starter', name: 'Starter', icon: 'fa-seedling', badge: '',
    desc: 'Perfect for personal projects and testing.',
    monthly: 25, annual: 20, status: 'active',
    cpu: '1', ram: '1 GB', storage: '25 GB NVMe SSD',
    bandwidth: '1 TB', ipv4: '1',
    features: [
      { label: '1 vCPU Core', included: true },
      { label: '1 GB RAM', included: true },
      { label: '25 GB NVMe SSD', included: true },
      { label: '1 TB Bandwidth', included: true },
      { label: '1 IPv4 Address', included: true },
      { label: 'DDoS Protection', included: true },
      { label: 'Daily Backups', included: true },
      { label: 'Priority Support', included: true },
    ]
  },
  {
    id: 'pro', name: 'Pro', icon: 'fa-rocket', badge: 'popular',
    desc: 'Ideal for growing apps and businesses.',
    monthly: 35, annual: 28, status: 'active',
    cpu: '4', ram: '8 GB', storage: '160 GB NVMe SSD',
    bandwidth: '4 TB', ipv4: '2',
    features: [
      { label: '4 vCPU Cores', included: true },
      { label: '8 GB RAM', included: true },
      { label: '160 GB NVMe SSD', included: true },
      { label: '4 TB Bandwidth', included: true },
      { label: '2 IPv4 Addresses', included: true },
      { label: 'DDoS Protection', included: true },
      { label: 'Daily Backups', included: true },
      { label: 'Priority Support', included: true },
    ]
  },
  {
    id: 'business', name: 'Business', icon: 'fa-crown', badge: '',
    desc: 'For high-traffic production workloads.',
    monthly: 40, annual: 32, status: 'active',
    cpu: '8', ram: '32 GB', storage: '400 GB NVMe SSD',
    bandwidth: '8 TB', ipv4: '4',
    features: [
      { label: '8 vCPU Cores', included: true },
      { label: '32 GB RAM', included: true },
      { label: '400 GB NVMe SSD', included: true },
      { label: '8 TB Bandwidth', included: true },
      { label: '4 IPv4 Addresses', included: true },
      { label: 'DDoS Protection', included: true },
      { label: 'Daily Backups', included: true },
      { label: 'Priority Support', included: true },
    ]
  },
  {
    id: 'enterprise', name: 'Enterprise', icon: 'fa-building', badge: 'enterprise',
    desc: 'Custom infrastructure for large-scale needs.',
    monthly: 0, annual: 0, status: 'active',
    cpu: 'Custom', ram: 'Up to 256 GB', storage: 'Custom NVMe Storage',
    bandwidth: 'Unmetered', ipv4: 'Multiple',
    features: [
      { label: 'Dedicated vCPUs', included: true },
      { label: 'Up to 256 GB RAM', included: true },
      { label: 'Custom NVMe Storage', included: true },
      { label: 'Unmetered Bandwidth', included: true },
      { label: 'Multiple IPs', included: true },
      { label: 'Advanced DDoS', included: true },
      { label: 'Custom Backups', included: true },
      { label: 'Dedicated Manager', included: true },
    ]
  }
];

// ===== LOAD / SAVE PLANS =====
function loadPlans() {
  try {
    const stored = localStorage.getItem('dscvps_plans');
    return stored ? JSON.parse(stored) : DEFAULT_PLANS;
  } catch { return DEFAULT_PLANS; }
}
function savePlans(plans) {
  localStorage.setItem('dscvps_plans', JSON.stringify(plans));
}

// ===== SAMPLE DATA =====
const USERS = [
  { id: 1,  name: 'James Rodriguez', email: 'james@techflow.com',  plan: 'Pro',        servers: 3, joined: '2025-03-12', status: 'active' },
  { id: 2,  name: 'Sarah Ahmed',     email: 'sarah@cloudapp.io',   plan: 'Business',   servers: 7, joined: '2025-05-20', status: 'active' },
  { id: 3,  name: 'Marcus Kim',      email: 'marcus@scalenet.com', plan: 'Enterprise', servers:12, joined: '2024-11-08', status: 'active' },
  { id: 4,  name: 'Lena Fischer',    email: 'lena@devstack.de',    plan: 'Pro',        servers: 2, joined: '2025-07-01', status: 'active' },
  { id: 5,  name: 'Carlos Mendez',   email: 'carlos@hostlab.mx',   plan: 'Starter',    servers: 1, joined: '2026-01-15', status: 'suspended' },
  { id: 6,  name: 'Yuki Tanaka',     email: 'yuki@vpslab.jp',      plan: 'Pro',        servers: 4, joined: '2025-09-30', status: 'active' },
  { id: 7,  name: 'Ali Hassan',      email: 'ali@cloudme.ae',      plan: 'Business',   servers: 5, joined: '2025-12-02', status: 'active' },
  { id: 8,  name: 'Nina Petrova',    email: 'nina@webhost.ru',     plan: 'Starter',    servers: 1, joined: '2026-03-18', status: 'banned' },
  { id: 9,  name: 'Tom Baker',       email: 'tom@devops.uk',       plan: 'Pro',        servers: 6, joined: '2025-06-14', status: 'active' },
  { id: 10, name: 'Priya Sharma',    email: 'priya@techpulse.in',  plan: 'Business',   servers: 9, joined: '2025-08-22', status: 'active' },
  { id: 11, name: 'Jake Wilson',     email: 'jake@noderun.com',    plan: 'Starter',    servers: 1, joined: '2026-05-05', status: 'active' },
  { id: 12, name: 'Fatima Al-Zahra', email: 'fatima@hostpro.sa',   plan: 'Enterprise', servers:15, joined: '2024-09-11', status: 'active' },
];

const SERVERS = [
  { id: 'VPS-PRO-2341',  owner: 'james@techflow.com',  plan: 'Pro',      location: 'Frankfurt',  ip: '185.23.41.12',  cpu: 72, ram: 45, status: 'running' },
  { id: 'VPS-BIZ-0091',  owner: 'sarah@cloudapp.io',   plan: 'Business', location: 'New York',   ip: '45.82.130.5',   cpu: 55, ram: 62, status: 'running' },
  { id: 'VPS-ENT-0012',  owner: 'marcus@scalenet.com', plan: 'Enterprise',location:'Singapore',  ip: '103.44.88.201', cpu: 88, ram: 74, status: 'running' },
  { id: 'VPS-STR-0892',  owner: 'carlos@hostlab.mx',   plan: 'Starter',  location: 'London',     ip: '91.108.4.22',   cpu: 12, ram: 30, status: 'suspended' },
  { id: 'VPS-PRO-1104',  owner: 'yuki@vpslab.jp',      plan: 'Pro',      location: 'Tokyo',      ip: '139.180.12.44', cpu: 61, ram: 50, status: 'running' },
  { id: 'VPS-BIZ-0445',  owner: 'ali@cloudme.ae',      plan: 'Business', location: 'Frankfurt',  ip: '185.23.41.98',  cpu: 44, ram: 38, status: 'running' },
  { id: 'VPS-PRO-3310',  owner: 'tom@devops.uk',       plan: 'Pro',      location: 'London',     ip: '91.108.4.77',   cpu: 95, ram: 81, status: 'running' },
  { id: 'VPS-STR-0203',  owner: 'jake@noderun.com',    plan: 'Starter',  location: 'New York',   ip: '45.82.130.88',  cpu: 20, ram: 22, status: 'running' },
  { id: 'VPS-BIZ-0102',  owner: 'priya@techpulse.in',  plan: 'Business', location: 'Singapore',  ip: '103.44.88.9',   cpu: 67, ram: 70, status: 'offline' },
  { id: 'VPS-ENT-0007',  owner: 'fatima@hostpro.sa',   plan: 'Enterprise',location:'Frankfurt',  ip: '185.23.41.55',  cpu: 82, ram: 65, status: 'running' },
];

const INVOICES = [
  { id: 'INV-2341', user: 'james@techflow.com',  plan: 'Pro',        amount: '$35.00',  date: '2026-09-01', status: 'paid' },
  { id: 'INV-2340', user: 'sarah@cloudapp.io',   plan: 'Business',   amount: '$40.00',  date: '2026-09-01', status: 'paid' },
  { id: 'INV-2339', user: 'marcus@scalenet.com', plan: 'Enterprise', amount: 'Custom',  date: '2026-09-01', status: 'paid' },
  { id: 'INV-2338', user: 'carlos@hostlab.mx',   plan: 'Starter',    amount: '$25.00',  date: '2026-08-31', status: 'pending' },
  { id: 'INV-2337', user: 'yuki@vpslab.jp',      plan: 'Pro',        amount: '$35.00',  date: '2026-08-30', status: 'paid' },
  { id: 'INV-2336', user: 'ali@cloudme.ae',      plan: 'Business',   amount: '$40.00',  date: '2026-08-29', status: 'paid' },
  { id: 'INV-2335', user: 'nina@webhost.ru',      plan: 'Starter',    amount: '$25.00',  date: '2026-08-28', status: 'overdue' },
  { id: 'INV-2334', user: 'tom@devops.uk',        plan: 'Pro',        amount: '$35.00',  date: '2026-08-27', status: 'paid' },
];

const ORDERS = [
  { id: 'ORD-1001', customer: 'james@techflow.com',  plan: 'Pro',        amount: '$35.00',  billing: 'Monthly', date: '2026-09-01', status: 'active' },
  { id: 'ORD-1002', customer: 'sarah@cloudapp.io',   plan: 'Business',   amount: '$40.00',  billing: 'Monthly', date: '2026-09-01', status: 'active' },
  { id: 'ORD-1003', customer: 'lena@devstack.de',    plan: 'Pro',        amount: '$28.00',  billing: 'Annual',  date: '2026-08-30', status: 'active' },
  { id: 'ORD-1004', customer: 'carlos@hostlab.mx',   plan: 'Starter',    amount: '$25.00',  billing: 'Monthly', date: '2026-08-29', status: 'pending' },
  { id: 'ORD-1005', customer: 'yuki@vpslab.jp',      plan: 'Pro',        amount: '$35.00',  billing: 'Monthly', date: '2026-08-28', status: 'active' },
  { id: 'ORD-1006', customer: 'ali@cloudme.ae',      plan: 'Business',   amount: '$32.00',  billing: 'Annual',  date: '2026-08-27', status: 'active' },
  { id: 'ORD-1007', customer: 'nina@webhost.ru',     plan: 'Starter',    amount: '$25.00',  billing: 'Monthly', date: '2026-08-26', status: 'cancelled' },
  { id: 'ORD-1008', customer: 'jake@noderun.com',    plan: 'Starter',    amount: '$20.00',  billing: 'Annual',  date: '2026-08-25', status: 'pending' },
  { id: 'ORD-1009', customer: 'priya@techpulse.in',  plan: 'Business',   amount: '$40.00',  billing: 'Monthly', date: '2026-08-24', status: 'active' },
  { id: 'ORD-1010', customer: 'fatima@hostpro.sa',   plan: 'Enterprise', amount: 'Custom',  billing: 'Annual',  date: '2026-08-22', status: 'active' },
  { id: 'ORD-1011', customer: 'tom@devops.uk',       plan: 'Pro',        amount: '$35.00',  billing: 'Monthly', date: '2026-08-20', status: 'active' },
  { id: 'ORD-1012', customer: 'marcus@scalenet.com', plan: 'Enterprise', amount: 'Custom',  billing: 'Annual',  date: '2026-08-18', status: 'active' },
];

const TICKETS = [
  { id: 1047, user: 'carlos@hostlab.mx',   subject: 'Connection issue — server unreachable',      priority: 'urgent',  status: 'open',    time: '31m ago' },
  { id: 1046, user: 'jake@noderun.com',     subject: 'How to install cPanel on Starter plan?',     priority: 'low',     status: 'open',    time: '1h ago' },
  { id: 1045, user: 'lena@devstack.de',     subject: 'Billing cycle mismatch on invoice INV-2337', priority: 'medium',  status: 'pending', time: '3h ago' },
  { id: 1044, user: 'priya@techpulse.in',   subject: 'Request to upgrade from Business to Enterprise', priority: 'medium', status: 'open',   time: '5h ago' },
  { id: 1043, user: 'yuki@vpslab.jp',       subject: 'High CPU usage on VPS-PRO-1104',             priority: 'urgent',  status: 'pending', time: '8h ago' },
  { id: 1042, user: 'ali@cloudme.ae',       subject: 'Need PTR record set for mail server',        priority: 'low',     status: 'closed',  time: '1d ago' },
  { id: 1041, user: 'tom@devops.uk',        subject: 'SSH key rotation request',                   priority: 'low',     status: 'closed',  time: '2d ago' },
];

const ANNOUNCEMENTS_DEFAULT = [
  { id: 1, title: 'Network Maintenance — Frankfurt Node', type: 'warning', message: 'Scheduled maintenance on FRA-01 node on Sep 5, 2026 from 02:00–04:00 UTC. Brief packet loss may occur.', time: '2 hours ago' },
  { id: 2, title: 'New Location: Tokyo Available', type: 'success', message: 'Our Tokyo datacenter is now live! Deploy VPS instances in Japan with sub-5ms latency to Asia-Pacific.', time: '1 day ago' },
  { id: 3, title: 'Scheduled Billing System Upgrade', type: 'info', message: 'Our billing platform will undergo upgrades on Sep 10. No service interruptions expected.', time: '3 days ago' },
];

// ===== STATE =====
let currentSection = 'overview';
let userPage = 1; const USER_PER_PAGE = 8;
let serverPage = 1; const SERVER_PER_PAGE = 8;
let orderPage = 1; const ORDER_PER_PAGE = 10;
let userFilter = { search: '', status: '', plan: '' };
let serverFilter = { search: '', status: '', location: '' };
let orderFilter = { search: '', plan: '', status: 'all' };
let ticketFilter = 'all';
let announcements = [...ANNOUNCEMENTS_DEFAULT];
let plans = loadPlans();
let editingPlanId = null;

// ===== TOAST =====
function toast(msg, type = 'info') {
  const icons = { success: 'fa-check-circle', error: 'fa-exclamation-circle', info: 'fa-info-circle' };
  const container = document.getElementById('toastContainer');
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerHTML = `<i class="fas ${icons[type] || icons.info}"></i> ${msg}`;
  container.appendChild(t);
  setTimeout(() => t.remove(), 3500);
}

// ===== NAVIGATION =====
document.querySelectorAll('.nav-item[data-section]').forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    const sec = item.dataset.section;
    switchSection(sec);
    if (window.innerWidth <= 768) {
      document.getElementById('sidebar').classList.remove('open');
    }
  });
});

function switchSection(sec) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const el = document.getElementById(`section-${sec}`);
  if (el) el.classList.add('active');
  const navEl = document.querySelector(`.nav-item[data-section="${sec}"]`);
  if (navEl) navEl.classList.add('active');
  document.getElementById('breadcrumbCurrent').textContent =
    sec.charAt(0).toUpperCase() + sec.slice(1).replace('-', ' ');
  currentSection = sec;

  if (sec === 'users')         renderUsers();
  if (sec === 'servers')       renderServers();
  if (sec === 'billing')       renderInvoices();
  if (sec === 'tickets')       renderTickets();
  if (sec === 'announcements') renderAnnouncements();
  if (sec === 'orders')        renderOrders();
  if (sec === 'settings')      renderPlansTable();
}

// ===== MOBILE SIDEBAR =====
document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('open');
});
document.getElementById('sidebarClose').addEventListener('click', () => {
  document.getElementById('sidebar').classList.remove('open');
});

// ===== COUNTERS =====
function animateCounter(el) {
  const target = +el.dataset.target;
  const isCurrency = el.classList.contains('currency-num');
  const duration = 1600;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = isCurrency
      ? '$' + Math.floor(current).toLocaleString()
      : Math.floor(current).toLocaleString();
  }, 16);
}
document.querySelectorAll('.stat-card-num[data-target]').forEach(animateCounter);

// ===== TIMESTAMP =====
document.getElementById('lastUpdated').textContent =
  'Last updated: ' + new Date().toLocaleTimeString();

// ===== REFRESH BUTTON =====
document.getElementById('refreshBtn').addEventListener('click', () => {
  const btn = document.getElementById('refreshBtn');
  btn.querySelector('i').classList.add('fa-spin');
  setTimeout(() => {
    btn.querySelector('i').classList.remove('fa-spin');
    document.getElementById('lastUpdated').textContent =
      'Last updated: ' + new Date().toLocaleTimeString();
    toast('Dashboard refreshed', 'success');
  }, 800);
});

// ===== CHARTS (pure canvas, no lib needed) =====
function drawRevenueChart() {
  const canvas = document.getElementById('revenueChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.parentElement.clientWidth - 40;
  canvas.height = 200;
  const data = [3200, 4100, 3800, 5200, 4700, 6100, 5800];
  const labels = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  const max = Math.max(...data) * 1.2;
  const W = canvas.width, H = canvas.height;
  const padL = 44, padR = 16, padT = 16, padB = 28;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;

  ctx.clearRect(0, 0, W, H);

  // grid lines
  ctx.strokeStyle = 'rgba(255,255,255,0.05)';
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = padT + (chartH / 4) * i;
    ctx.beginPath(); ctx.moveTo(padL, y); ctx.lineTo(W - padR, y); ctx.stroke();
    ctx.fillStyle = '#64748b';
    ctx.font = '10px Inter';
    ctx.textAlign = 'right';
    ctx.fillText('$' + Math.round(max - (max / 4) * i).toLocaleString(), padL - 6, y + 4);
  }

  const pts = data.map((v, i) => ({
    x: padL + (chartW / (data.length - 1)) * i,
    y: padT + chartH - (v / max) * chartH
  }));

  // gradient fill
  const grad = ctx.createLinearGradient(0, padT, 0, padT + chartH);
  grad.addColorStop(0, 'rgba(99,102,241,0.3)');
  grad.addColorStop(1, 'rgba(99,102,241,0)');
  ctx.beginPath();
  ctx.moveTo(pts[0].x, padT + chartH);
  pts.forEach(p => ctx.lineTo(p.x, p.y));
  ctx.lineTo(pts[pts.length - 1].x, padT + chartH);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();

  // line
  ctx.beginPath();
  ctx.strokeStyle = '#6366f1';
  ctx.lineWidth = 2.5;
  ctx.lineJoin = 'round';
  pts.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
  ctx.stroke();

  // dots + labels
  pts.forEach((p, i) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#818cf8';
    ctx.fill();
    ctx.strokeStyle = '#0a0a0f';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = '#94a3b8';
    ctx.font = '10px Inter';
    ctx.textAlign = 'center';
    ctx.fillText(labels[i], p.x, H - 6);
  });
}

function drawDonutChart() {
  const canvas = document.getElementById('serverChart');
  if (!canvas) return;
  canvas.width = 130; canvas.height = 130;
  const ctx = canvas.getContext('2d');
  const data = [3847, 124, 31];
  const colors = ['#22c55e', '#f97316', '#ef4444'];
  const total = data.reduce((a, b) => a + b, 0);
  let start = -Math.PI / 2;
  const cx = 65, cy = 65, r = 52, inner = 34;

  data.forEach((val, i) => {
    const angle = (val / total) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, start, start + angle);
    ctx.closePath();
    ctx.fillStyle = colors[i];
    ctx.fill();
    start += angle;
  });

  ctx.beginPath();
  ctx.arc(cx, cy, inner, 0, Math.PI * 2);
  ctx.fillStyle = '#13131e';
  ctx.fill();

  ctx.fillStyle = '#fff';
  ctx.font = 'bold 14px Inter';
  ctx.textAlign = 'center';
  ctx.fillText(total.toLocaleString(), cx, cy + 5);
}

drawRevenueChart();
drawDonutChart();
window.addEventListener('resize', drawRevenueChart);

// ===== STATUS BADGE HTML =====
function statusBadge(status) {
  const icons = { active: 'fa-circle', running: 'fa-circle', paid: 'fa-check', pending: 'fa-clock', suspended: 'fa-pause', banned: 'fa-ban', offline: 'fa-times-circle', overdue: 'fa-exclamation-circle', cancelled: 'fa-times', closed: 'fa-lock-open', open: 'fa-envelope-open' };
  const icon = icons[status] || 'fa-circle';
  return `<span class="badge-status ${status}"><i class="fas ${icon}"></i> ${status.charAt(0).toUpperCase() + status.slice(1)}</span>`;
}

// ===== USERS =====
function getFilteredUsers() {
  return USERS.filter(u => {
    const q = userFilter.search.toLowerCase();
    const matchSearch = !q || u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q);
    const matchStatus = !userFilter.status || u.status === userFilter.status;
    const matchPlan   = !userFilter.plan   || u.plan.toLowerCase() === userFilter.plan;
    return matchSearch && matchStatus && matchPlan;
  });
}

function renderUsers() {
  const filtered = getFilteredUsers();
  const total = filtered.length;
  const pages = Math.ceil(total / USER_PER_PAGE);
  if (userPage > pages) userPage = 1;
  const slice = filtered.slice((userPage - 1) * USER_PER_PAGE, userPage * USER_PER_PAGE);

  document.getElementById('userCount').textContent =
    `Showing ${slice.length} of ${total} users`;

  const tbody = document.getElementById('usersTableBody');
  tbody.innerHTML = slice.map(u => `
    <tr>
      <td><input type="checkbox" /></td>
      <td>
        <div style="display:flex;align-items:center;gap:10px">
          <div class="avatar sm" style="width:32px;height:32px;font-size:0.65rem">${u.name.split(' ').map(n=>n[0]).join('')}</div>
          <div><div style="font-weight:600;color:#fff">${u.name}</div><div style="font-size:0.75rem;color:var(--text-dim)">${u.email}</div></div>
        </div>
      </td>
      <td><span style="color:var(--primary-light);font-weight:600">${u.plan}</span></td>
      <td>${u.servers}</td>
      <td style="color:var(--text-dim)">${u.joined}</td>
      <td>${statusBadge(u.status)}</td>
      <td>
        <div class="action-btns">
          <button class="action-btn" title="View" onclick="viewUser(${u.id})"><i class="fas fa-eye"></i></button>
          <button class="action-btn warning" title="Suspend" onclick="toast('User ${u.name} suspended','info')"><i class="fas fa-pause"></i></button>
          <button class="action-btn danger" title="Ban" onclick="toast('User ${u.name} banned','error')"><i class="fas fa-ban"></i></button>
        </div>
      </td>
    </tr>
  `).join('');

  renderPagination('userPagination', userPage, pages, p => { userPage = p; renderUsers(); });
}

function viewUser(id) {
  const u = USERS.find(x => x.id === id);
  if (!u) return;
  document.getElementById('userModalTitle').textContent = u.name;
  document.getElementById('userModalBody').innerHTML = `
    <div class="user-detail-header">
      <div class="avatar lg">${u.name.split(' ').map(n=>n[0]).join('')}</div>
      <div><h3>${u.name}</h3><span>${u.email}</span></div>
      ${statusBadge(u.status)}
    </div>
    <div class="detail-grid">
      <div class="detail-item"><label>Plan</label><span>${u.plan}</span></div>
      <div class="detail-item"><label>Servers</label><span>${u.servers}</span></div>
      <div class="detail-item"><label>Joined</label><span>${u.joined}</span></div>
      <div class="detail-item"><label>Status</label><span>${u.status}</span></div>
      <div class="detail-item"><label>User ID</label><span>#${u.id}</span></div>
      <div class="detail-item"><label>Email</label><span>${u.email}</span></div>
    </div>
    <div class="modal-actions">
      <button class="btn btn-outline btn-sm" onclick="toast('Email sent to ${u.email}','success')"><i class="fas fa-envelope"></i> Send Email</button>
      <button class="btn btn-outline btn-sm" onclick="toast('User reset link sent','info')"><i class="fas fa-key"></i> Reset Password</button>
      <button class="btn btn-sm" style="background:rgba(239,68,68,0.1);color:var(--red);border:1px solid rgba(239,68,68,0.3)" onclick="toast('${u.name} banned','error')"><i class="fas fa-ban"></i> Ban User</button>
    </div>
  `;
  document.getElementById('userModal').style.display = 'flex';
}

document.getElementById('userModalClose').addEventListener('click', () => {
  document.getElementById('userModal').style.display = 'none';
});
document.getElementById('userModal').addEventListener('click', e => {
  if (e.target === document.getElementById('userModal'))
    document.getElementById('userModal').style.display = 'none';
});

document.getElementById('userSearch').addEventListener('input', function() {
  userFilter.search = this.value; userPage = 1; renderUsers();
});
document.getElementById('userStatusFilter').addEventListener('change', function() {
  userFilter.status = this.value; userPage = 1; renderUsers();
});
document.getElementById('userPlanFilter').addEventListener('change', function() {
  userFilter.plan = this.value; userPage = 1; renderUsers();
});
document.getElementById('exportUsersBtn').addEventListener('click', () => {
  toast('Users exported to CSV', 'success');
});
document.getElementById('addUserBtn').addEventListener('click', () => {
  toast('Add user form coming soon', 'info');
});

// ===== SERVERS =====
function getFilteredServers() {
  return SERVERS.filter(s => {
    const q = serverFilter.search.toLowerCase();
    const matchSearch   = !q || s.id.toLowerCase().includes(q) || s.owner.toLowerCase().includes(q);
    const matchStatus   = !serverFilter.status   || s.status === serverFilter.status;
    const matchLocation = !serverFilter.location || s.location === serverFilter.location;
    return matchSearch && matchStatus && matchLocation;
  });
}

function renderServers() {
  const filtered = getFilteredServers();
  const running   = filtered.filter(s => s.status === 'running').length;
  const suspended = filtered.filter(s => s.status === 'suspended').length;
  const offline   = filtered.filter(s => s.status === 'offline').length;

  document.getElementById('srvRunning').textContent   = SERVERS.filter(s=>s.status==='running').length;
  document.getElementById('srvSuspended').textContent = SERVERS.filter(s=>s.status==='suspended').length;
  document.getElementById('srvOffline').textContent   = SERVERS.filter(s=>s.status==='offline').length;
  document.getElementById('srvTotal').textContent     = SERVERS.length;

  const total = filtered.length;
  const pages = Math.ceil(total / SERVER_PER_PAGE);
  if (serverPage > pages) serverPage = 1;
  const slice = filtered.slice((serverPage - 1) * SERVER_PER_PAGE, serverPage * SERVER_PER_PAGE);
  document.getElementById('serverCount').textContent = `Showing ${slice.length} of ${total} servers`;

  const cpuColor = v => v >= 90 ? 'crit' : v >= 70 ? 'warn' : '';

  document.getElementById('serversTableBody').innerHTML = slice.map(s => `
    <tr>
      <td><input type="checkbox" /></td>
      <td><code style="color:var(--primary-light);font-size:0.8rem">${s.id}</code></td>
      <td style="font-size:0.82rem;color:var(--text-dim)">${s.owner}</td>
      <td><span style="color:var(--text);font-weight:600">${s.plan}</span></td>
      <td><i class="fas fa-map-marker-alt" style="color:var(--text-dim);margin-right:5px;font-size:0.75rem"></i>${s.location}</td>
      <td><code style="font-size:0.78rem;color:var(--text-muted)">${s.ip}</code></td>
      <td>
        <div class="usage-bar-wrap">
          <div class="usage-bar-bg"><div class="usage-bar ${cpuColor(s.cpu)}" style="width:${s.cpu}%"></div></div>
          <span class="usage-pct">${s.cpu}%</span>
        </div>
      </td>
      <td>
        <div class="usage-bar-wrap">
          <div class="usage-bar-bg"><div class="usage-bar ${cpuColor(s.ram)}" style="width:${s.ram}%"></div></div>
          <span class="usage-pct">${s.ram}%</span>
        </div>
      </td>
      <td>${statusBadge(s.status)}</td>
      <td>
        <div class="action-btns">
          <button class="action-btn success" title="Start" onclick="toast('${s.id} started','success')"><i class="fas fa-play"></i></button>
          <button class="action-btn warning" title="Restart" onclick="toast('${s.id} restarting...','info')"><i class="fas fa-redo"></i></button>
          <button class="action-btn danger" title="Stop" onclick="toast('${s.id} stopped','error')"><i class="fas fa-stop"></i></button>
        </div>
      </td>
    </tr>
  `).join('');

  renderPagination('serverPagination', serverPage, pages, p => { serverPage = p; renderServers(); });
}

document.getElementById('serverSearch').addEventListener('input', function() {
  serverFilter.search = this.value; serverPage = 1; renderServers();
});
document.getElementById('serverStatusFilter').addEventListener('change', function() {
  serverFilter.status = this.value; serverPage = 1; renderServers();
});
document.getElementById('serverLocationFilter').addEventListener('change', function() {
  serverFilter.location = this.value; serverPage = 1; renderServers();
});

// ===== INVOICES =====
function renderInvoices() {
  document.getElementById('invoicesTableBody').innerHTML = INVOICES.map(inv => `
    <tr>
      <td><code style="color:var(--primary-light);font-size:0.8rem">${inv.id}</code></td>
      <td style="font-size:0.82rem;color:var(--text-dim)">${inv.user}</td>
      <td>${inv.plan}</td>
      <td style="font-weight:700;color:#fff">${inv.amount}</td>
      <td style="color:var(--text-dim)">${inv.date}</td>
      <td>${statusBadge(inv.status)}</td>
      <td>
        <div class="action-btns">
          <button class="action-btn" title="View" onclick="toast('Viewing ${inv.id}','info')"><i class="fas fa-eye"></i></button>
          <button class="action-btn" title="Download" onclick="toast('${inv.id} downloaded','success')"><i class="fas fa-download"></i></button>
          <button class="action-btn danger" title="Void" onclick="toast('${inv.id} voided','error')"><i class="fas fa-times"></i></button>
        </div>
      </td>
    </tr>
  `).join('');
}

// ===== TICKETS =====
document.querySelectorAll('.filter-btn[data-filter]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn[data-filter]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    ticketFilter = btn.dataset.filter;
    renderTickets();
  });
});

function renderTickets() {
  const filtered = ticketFilter === 'all'
    ? TICKETS
    : TICKETS.filter(t => t.status === ticketFilter);

  document.getElementById('ticketsGrid').innerHTML = filtered.length === 0
    ? `<div style="color:var(--text-dim);padding:20px;text-align:center">No tickets found.</div>`
    : filtered.map(t => `
      <div class="ticket-card ${t.priority}" onclick="viewTicket(${t.id})">
        <div class="ticket-info">
          <h4>#${t.id} — ${t.subject}</h4>
          <p><i class="fas fa-user" style="margin-right:5px"></i>${t.user}</p>
        </div>
        <div class="ticket-meta">
          ${statusBadge(t.status)}
          <span class="badge-status ${t.priority === 'urgent' ? 'banned' : t.priority === 'medium' ? 'suspended' : 'active'}" style="font-size:0.72rem">${t.priority}</span>
          <span style="font-size:0.75rem;color:var(--text-dim)">${t.time}</span>
        </div>
      </div>
    `).join('');
}

function viewTicket(id) {
  const t = TICKETS.find(x => x.id === id);
  if (!t) return;
  document.getElementById('ticketModalTitle').textContent = `Ticket #${t.id}`;
  document.getElementById('ticketModalBody').innerHTML = `
    <div style="margin-bottom:16px">
      <h4 style="color:#fff;margin-bottom:6px">${t.subject}</h4>
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        ${statusBadge(t.status)}
        <span style="font-size:0.8rem;color:var(--text-dim)"><i class="fas fa-user" style="margin-right:4px"></i>${t.user}</span>
        <span style="font-size:0.8rem;color:var(--text-dim)"><i class="fas fa-clock" style="margin-right:4px"></i>${t.time}</span>
      </div>
    </div>
    <div style="background:var(--bg3);border-radius:10px;padding:16px;margin-bottom:16px">
      <p style="color:var(--text-muted);font-size:0.875rem;line-height:1.7">Customer reported: "${t.subject}". Please investigate and respond promptly.</p>
    </div>
    <div class="form-group" style="margin-bottom:12px">
      <label style="font-size:0.82rem;font-weight:600;color:var(--text);display:block;margin-bottom:6px">Reply</label>
      <textarea class="admin-textarea" rows="3" placeholder="Type your reply..."></textarea>
    </div>
    <div class="modal-actions">
      <button class="btn btn-primary btn-sm" onclick="toast('Reply sent for ticket #${t.id}','success');document.getElementById('ticketModal').style.display='none'"><i class="fas fa-reply"></i> Send Reply</button>
      <button class="btn btn-outline btn-sm" onclick="toast('Ticket #${t.id} closed','info');document.getElementById('ticketModal').style.display='none'"><i class="fas fa-check"></i> Close Ticket</button>
    </div>
  `;
  document.getElementById('ticketModal').style.display = 'flex';
}

document.getElementById('ticketModalClose').addEventListener('click', () => {
  document.getElementById('ticketModal').style.display = 'none';
});
document.getElementById('ticketModal').addEventListener('click', e => {
  if (e.target === document.getElementById('ticketModal'))
    document.getElementById('ticketModal').style.display = 'none';
});

// ===== ANNOUNCEMENTS =====
document.getElementById('newAnnouncementBtn').addEventListener('click', () => {
  document.getElementById('announcementForm').style.display = 'block';
  document.getElementById('annTitle').value = '';
  document.getElementById('annMessage').value = '';
});
document.getElementById('cancelAnnBtn').addEventListener('click', () => {
  document.getElementById('announcementForm').style.display = 'none';
});
document.getElementById('publishAnnBtn').addEventListener('click', () => {
  const title = document.getElementById('annTitle').value.trim();
  const msg   = document.getElementById('annMessage').value.trim();
  const type  = document.getElementById('annType').value;
  if (!title || !msg) { toast('Please fill in title and message', 'error'); return; }
  announcements.unshift({ id: Date.now(), title, type, message: msg, time: 'Just now' });
  document.getElementById('announcementForm').style.display = 'none';
  renderAnnouncements();
  toast('Announcement published', 'success');
});

function renderAnnouncements() {
  const icons = { info: 'fa-info-circle', warning: 'fa-exclamation-triangle', success: 'fa-check-circle', danger: 'fa-skull-crossbones' };
  document.getElementById('announcementsList').innerHTML = announcements.map(a => `
    <div class="announcement-card ${a.type}">
      <div class="ann-icon ${a.type}"><i class="fas ${icons[a.type] || 'fa-info-circle'}"></i></div>
      <div class="ann-body">
        <h4>${a.title}</h4>
        <p>${a.message}</p>
        <div class="ann-footer">
          <span class="ann-time"><i class="fas fa-clock" style="margin-right:4px"></i>${a.time}</span>
        </div>
      </div>
      <div class="ann-actions">
        <button class="action-btn danger" title="Delete" onclick="deleteAnnouncement(${a.id})"><i class="fas fa-trash"></i></button>
      </div>
    </div>
  `).join('');
}

function deleteAnnouncement(id) {
  announcements = announcements.filter(a => a.id !== id);
  renderAnnouncements();
  toast('Announcement deleted', 'info');
}

// ===== VPS OFFERS / PLANS ADMIN =====
function renderPlansAdmin() {
  plans = loadPlans();
  document.getElementById('plansAdminGrid').innerHTML = plans.map(p => `
    <div class="plan-admin-card ${p.badge === 'popular' ? 'popular' : ''} ${p.status === 'hidden' ? 'hidden-plan' : ''}">
      <div class="pac-header">
        <div class="pac-header-left">
          <div class="pac-icon"><i class="fas ${p.icon}"></i></div>
          <div>
            <h4>${p.name}</h4>
            <p>${p.desc}</p>
          </div>
        </div>
        ${p.badge === 'popular' ? '<span class="badge-status active" style="font-size:0.7rem">Popular</span>' : ''}
        ${p.status === 'hidden' ? '<span class="badge-status suspended" style="font-size:0.7rem">Hidden</span>' : ''}
      </div>
      <div class="pac-price">
        ${p.monthly > 0
          ? `<span class="currency">$</span><span class="amount">${p.monthly}</span><span class="period">/mo</span>
             <div class="annual-note">Annual: $${p.annual}/mo</div>`
          : `<span class="amount" style="color:var(--accent)">Custom</span>`
        }
      </div>
      <ul class="pac-features">
        ${p.features.slice(0,5).map(f =>
          `<li class="${f.included?'':'excl'}"><i class="fas ${f.included?'fa-check':'fa-times'}"></i>${f.label}</li>`
        ).join('')}
        ${p.features.length > 5 ? `<li style="color:var(--text-dim);font-size:0.75rem">+${p.features.length-5} more</li>` : ''}
      </ul>
      <div class="pac-actions">
        <button class="btn btn-outline btn-sm" style="flex:1" onclick="editPlan('${p.id}')"><i class="fas fa-edit"></i> Edit</button>
        <button class="action-btn ${p.status==='active'?'warning':'success'}" title="${p.status==='active'?'Hide':'Show'}"
          onclick="togglePlanStatus('${p.id}')">
          <i class="fas ${p.status==='active'?'fa-eye-slash':'fa-eye'}"></i>
        </button>
      </div>
    </div>
  `).join('');
}

function editPlan(id) {
  const p = plans.find(x => x.id === id);
  if (!p) return;
  editingPlanId = id;
  document.getElementById('planEditorTitle').textContent = `Edit Plan — ${p.name}`;
  document.getElementById('editPlanId').value       = p.id;
  document.getElementById('editPlanName').value     = p.name;
  document.getElementById('editPlanIcon').value     = p.icon;
  document.getElementById('editPlanDesc').value     = p.desc;
  document.getElementById('editPlanMonthly').value  = p.monthly;
  document.getElementById('editPlanAnnual').value   = p.annual;
  document.getElementById('editPlanBadge').value    = p.badge;
  document.getElementById('editPlanCpu').value      = p.cpu;
  document.getElementById('editPlanRam').value      = p.ram;
  document.getElementById('editPlanStorage').value  = p.storage;
  document.getElementById('editPlanBandwidth').value= p.bandwidth;
  document.getElementById('editPlanIpv4').value     = p.ipv4;
  document.getElementById('editPlanStatus').value   = p.status;
  document.getElementById('editPlanFeatures').value =
    p.features.map(f => (f.included ? '+ ' : '- ') + f.label).join('\n');
  document.getElementById('planEditorForm').style.display = 'block';
  document.getElementById('planEditorForm').scrollIntoView({ behavior: 'smooth' });
}

function togglePlanStatus(id) {
  const p = plans.find(x => x.id === id);
  if (!p) return;
  p.status = p.status === 'active' ? 'hidden' : 'active';
  savePlans(plans);
  renderPlansAdmin();
  toast(`Plan "${p.name}" is now ${p.status}`, 'info');
}

document.getElementById('addPlanBtn').addEventListener('click', () => {
  editingPlanId = null;
  document.getElementById('planEditorTitle').textContent = 'New Plan';
  ['editPlanName','editPlanIcon','editPlanDesc','editPlanMonthly','editPlanAnnual',
   'editPlanCpu','editPlanRam','editPlanStorage','editPlanBandwidth','editPlanIpv4','editPlanFeatures']
    .forEach(id => document.getElementById(id).value = '');
  document.getElementById('editPlanBadge').value  = '';
  document.getElementById('editPlanStatus').value = 'active';
  document.getElementById('planEditorForm').style.display = 'block';
  document.getElementById('planEditorForm').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('closePlanEditor').addEventListener('click', () => {
  document.getElementById('planEditorForm').style.display = 'none';
});
document.getElementById('cancelPlanBtn').addEventListener('click', () => {
  document.getElementById('planEditorForm').style.display = 'none';
});

document.getElementById('savePlanBtn').addEventListener('click', () => {
  const name = document.getElementById('editPlanName').value.trim();
  if (!name) { toast('Plan name is required', 'error'); return; }

  const featuresRaw = document.getElementById('editPlanFeatures').value.trim().split('\n').filter(Boolean);
  const features = featuresRaw.map(line => {
    const included = line.startsWith('+');
    return { label: line.replace(/^[+\-]\s*/, ''), included };
  });

  const monthly = parseFloat(document.getElementById('editPlanMonthly').value) || 0;
  const annual  = parseFloat(document.getElementById('editPlanAnnual').value)  || 0;

  if (editingPlanId) {
    const idx = plans.findIndex(p => p.id === editingPlanId);
    if (idx !== -1) {
      plans[idx] = {
        ...plans[idx],
        name,
        icon:      document.getElementById('editPlanIcon').value.trim() || 'fa-server',
        desc:      document.getElementById('editPlanDesc').value.trim(),
        monthly, annual,
        badge:     document.getElementById('editPlanBadge').value,
        cpu:       document.getElementById('editPlanCpu').value.trim(),
        ram:       document.getElementById('editPlanRam').value.trim(),
        storage:   document.getElementById('editPlanStorage').value.trim(),
        bandwidth: document.getElementById('editPlanBandwidth').value.trim(),
        ipv4:      document.getElementById('editPlanIpv4').value.trim(),
        status:    document.getElementById('editPlanStatus').value,
        features
      };
    }
  } else {
    const newId = name.toLowerCase().replace(/\s+/g, '-') + '-' + Date.now();
    plans.push({
      id: newId, name,
      icon:      document.getElementById('editPlanIcon').value.trim() || 'fa-server',
      desc:      document.getElementById('editPlanDesc').value.trim(),
      monthly, annual,
      badge:     document.getElementById('editPlanBadge').value,
      cpu:       document.getElementById('editPlanCpu').value.trim(),
      ram:       document.getElementById('editPlanRam').value.trim(),
      storage:   document.getElementById('editPlanStorage').value.trim(),
      bandwidth: document.getElementById('editPlanBandwidth').value.trim(),
      ipv4:      document.getElementById('editPlanIpv4').value.trim(),
      status:    document.getElementById('editPlanStatus').value,
      features
    });
  }

  savePlans(plans);
  renderPlansAdmin();
  document.getElementById('planEditorForm').style.display = 'none';
  toast(`Plan "${name}" saved & published to website`, 'success');
});

// ===== ORDERS =====
function getFilteredOrders() {
  return ORDERS.filter(o => {
    const q = orderFilter.search.toLowerCase();
    const matchSearch = !q || o.id.toLowerCase().includes(q) || o.customer.toLowerCase().includes(q);
    const matchPlan   = !orderFilter.plan || o.plan === orderFilter.plan;
    const matchStatus = orderFilter.status === 'all' || o.status === orderFilter.status;
    return matchSearch && matchPlan && matchStatus;
  });
}

function renderOrders() {
  const filtered = getFilteredOrders();
  document.getElementById('ordTotal').textContent     = ORDERS.length;
  document.getElementById('ordPending').textContent   = ORDERS.filter(o=>o.status==='pending').length;
  document.getElementById('ordActive').textContent    = ORDERS.filter(o=>o.status==='active').length;
  document.getElementById('ordCancelled').textContent = ORDERS.filter(o=>o.status==='cancelled').length;

  // update sidebar badge
  document.getElementById('pendingOrdersBadge').textContent =
    ORDERS.filter(o => o.status === 'pending').length;

  const total = filtered.length;
  const pages = Math.ceil(total / ORDER_PER_PAGE);
  if (orderPage > pages) orderPage = 1;
  const slice = filtered.slice((orderPage - 1) * ORDER_PER_PAGE, orderPage * ORDER_PER_PAGE);
  document.getElementById('orderCount').textContent = `Showing ${slice.length} of ${total} orders`;

  document.getElementById('ordersTableBody').innerHTML = slice.map(o => `
    <tr>
      <td><code style="color:var(--primary-light);font-size:0.8rem">${o.id}</code></td>
      <td style="font-size:0.82rem;color:var(--text-dim)">${o.customer}</td>
      <td><span style="color:var(--text);font-weight:600">${o.plan}</span></td>
      <td style="font-weight:700;color:#fff">${o.amount}</td>
      <td><span style="font-size:0.8rem;color:var(--text-dim)">${o.billing}</span></td>
      <td style="color:var(--text-dim)">${o.date}</td>
      <td>${statusBadge(o.status)}</td>
      <td>
        <div class="action-btns">
          <button class="action-btn" title="View" onclick="toast('Viewing order ${o.id}','info')"><i class="fas fa-eye"></i></button>
          ${o.status === 'pending'
            ? `<button class="action-btn success" title="Approve" onclick="toast('Order ${o.id} approved','success')"><i class="fas fa-check"></i></button>`
            : ''}
          <button class="action-btn danger" title="Cancel" onclick="toast('Order ${o.id} cancelled','error')"><i class="fas fa-times"></i></button>
        </div>
      </td>
    </tr>
  `).join('');

  renderPagination('orderPagination', orderPage, pages, p => { orderPage = p; renderOrders(); });
}

document.getElementById('orderSearch').addEventListener('input', function() {
  orderFilter.search = this.value; orderPage = 1; renderOrders();
});
document.getElementById('orderPlanFilter').addEventListener('change', function() {
  orderFilter.plan = this.value; orderPage = 1; renderOrders();
});
document.querySelectorAll('.filter-btn[data-ofilter]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn[data-ofilter]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    orderFilter.status = btn.dataset.ofilter;
    orderPage = 1;
    renderOrders();
  });
});
document.getElementById('exportOrdersBtn').addEventListener('click', () => {
  toast('Orders exported to CSV', 'success');
});

// ===== PAGINATION =====
function renderPagination(containerId, current, total, onPage) {
  const container = document.getElementById(containerId);
  if (!container) return;
  if (total <= 1) { container.innerHTML = ''; return; }
  let html = '';
  html += `<button class="page-btn" ${current===1?'disabled':''} onclick="(${onPage})(${current-1})"><i class="fas fa-chevron-left"></i></button>`;
  for (let i = 1; i <= total; i++) {
    html += `<button class="page-btn ${i===current?'active':''}" onclick="(${onPage})(${i})">${i}</button>`;
  }
  html += `<button class="page-btn" ${current===total?'disabled':''} onclick="(${onPage})(${current+1})"><i class="fas fa-chevron-right"></i></button>`;
  container.innerHTML = html;
}

// ===== COPY API KEY =====
function copyKey(id) {
  const input = document.getElementById(id);
  const prev = input.type;
  input.type = 'text';
  input.select();
  document.execCommand('copy');
  input.type = prev;
  toast('Copied to clipboard', 'success');
}

// ===== GLOBAL SEARCH =====
document.getElementById('globalSearch').addEventListener('input', function() {
  const q = this.value.trim().toLowerCase();
  if (!q) return;
  const userMatch   = USERS.find(u => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q));
  const serverMatch = SERVERS.find(s => s.id.toLowerCase().includes(q));
  const orderMatch  = ORDERS.find(o => o.id.toLowerCase().includes(q));
  if (userMatch)   { switchSection('users');   userFilter.search = q; renderUsers(); }
  else if (serverMatch) { switchSection('servers'); serverFilter.search = q; renderServers(); }
  else if (orderMatch)  { switchSection('orders');  orderFilter.search = q; renderOrders(); }
});

// ===== NOTIFICATIONS =====
document.getElementById('notifBtn').addEventListener('click', () => {
  toast('7 open tickets, 2 pending orders', 'info');
});

// ===== INIT =====
renderOrders();
document.getElementById('pendingOrdersBadge').textContent =
  ORDERS.filter(o => o.status === 'pending').length;
