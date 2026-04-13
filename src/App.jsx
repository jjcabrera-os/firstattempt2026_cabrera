import { Router, Route, useNavigate } from "@solidjs/router";
import { createSignal, For, Show } from "solid-js";
import "./App.css";

/* ===== SIDEBAR COMPONENT (ALUMNI) ===== */
function Sidebar(props) {
  const navigate = useNavigate();
  return (
    <aside class="sidebar">
      <div class="sidebar-brand">
        <svg width="36" height="36" viewBox="0 0 36 36"><circle cx="18" cy="18" r="16" fill="rgba(255,255,255,0.1)" stroke="#D4A843" stroke-width="1.5"/><text x="18" y="22" text-anchor="middle" fill="#D4A843" font-size="9" font-weight="bold">AdDU</text></svg>
        <div class="sidebar-brand-name">Alumni <span>Hub</span></div>
      </div>
      <p class="sidebar-subtitle">Knights' Portal</p>
      <ul class="sidebar-nav">
        <li class={props.active === "home" ? "active" : ""}><span onClick={() => navigate("/home")}><div class="sidebar-nav-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>Home</span></li>
        <li class={props.active === "profile" ? "active" : ""}><span onClick={() => navigate("/profile")}><div class="sidebar-nav-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>My Profile</span></li>
        <li class={props.active === "request" ? "active" : ""}><span onClick={() => navigate("/request")}><div class="sidebar-nav-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>Request Documents</span></li>
        <li class={props.active === "process" ? "active" : ""}><span onClick={() => navigate("/process")}><div class="sidebar-nav-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg></div>Process Documents</span></li>
        <li class={props.active === "settings" ? "active" : ""}><span><div class="sidebar-nav-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg></div>Settings</span></li>
      </ul>
      <div class="sidebar-footer">
        <div class="sidebar-user"><div class="sidebar-avatar"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4A843" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div><div class="sidebar-user-info"><div class="sidebar-user-name">Juan Dela Cruz</div><div class="sidebar-user-id">ID: 20180234</div></div></div>
      </div>
    </aside>
  );
}

/* ===== STAFF SIDEBAR ===== */
function StaffSidebar(props) {
  const navigate = useNavigate();
  return (
    <aside class="sidebar staff-sidebar">
      <div class="sidebar-brand">
        <svg width="36" height="36" viewBox="0 0 36 36"><circle cx="18" cy="18" r="16" fill="rgba(255,255,255,0.1)" stroke="#D4A843" stroke-width="1.5"/><text x="18" y="22" text-anchor="middle" fill="#D4A843" font-size="9" font-weight="bold">AdDU</text></svg>
        <div class="sidebar-brand-name">Alumni <span>Hub</span></div>
      </div>
      <p class="sidebar-subtitle">Staff Portal</p>
      <ul class="sidebar-nav">
        <li class={props.active === "staff-home" ? "active" : ""}><span onClick={() => navigate("/staff")}><div class="sidebar-nav-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>Home</span></li>
        <li class={props.active === "staff-profile" ? "active" : ""}><span onClick={() => navigate("/staff/profile-mgmt")}><div class="sidebar-nav-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>Profile Management</span></li>
        <li class={props.active === "staff-doclog" ? "active" : ""}><span onClick={() => navigate("/staff/doc-log")}><div class="sidebar-nav-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></div>Document Log</span></li>
        <li class={props.active === "staff-inventory" ? "active" : ""}><span onClick={() => navigate("/staff/inventory")}><div class="sidebar-nav-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div>Inventory Alerts</span></li>
        <li class={props.active === "staff-payment" ? "active" : ""}><span onClick={() => navigate("/staff/payment")}><div class="sidebar-nav-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg></div>Payment Verification</span></li>
      </ul>
      <div class="sidebar-footer">
        <div class="sidebar-user"><div class="sidebar-avatar"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4A843" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div><div class="sidebar-user-info"><div class="sidebar-user-name">Staff Admin</div><div class="sidebar-user-id">Employee No. 20270152</div></div></div>
      </div>
    </aside>
  );
}

/* ===== LOGIN PAGE ===== */
function Login() {
  const navigate = useNavigate();
  const [studentNum, setStudentNum] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [showPassword, setShowPassword] = createSignal(false);
  return (
    <div class="login-wrapper">
      <div class="bg-decor bg-decor-1"/><div class="bg-decor bg-decor-2"/><div class="bg-decor bg-decor-3"/><div class="bg-decor bg-decor-4"/>
      <div class="side-branding-left"><svg width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="none" stroke="rgba(212,168,67,0.4)" stroke-width="1.5"/><text x="16" y="20" text-anchor="middle" fill="rgba(212,168,67,0.5)" font-size="8" font-weight="bold">AdDU</text></svg><span class="side-branding-text">Ateneo de Davao University</span></div>
      <div class="side-branding-right"><ul class="side-features"><li>Request documents digitally<div class="side-feature-dot"/></li><li>Verified academic credentials<div class="side-feature-dot"/></li><li>Real-time status tracking<div class="side-feature-dot"/></li><li>Secure payment processing<div class="side-feature-dot"/></li></ul></div>
      <div class="login-center">
        <div class="login-logo"><svg width="90" height="90" viewBox="0 0 90 90"><circle cx="45" cy="45" r="40" fill="var(--navy)" stroke="#D4A843" stroke-width="2"/><text x="45" y="52" text-anchor="middle" fill="#D4A843" font-size="22" font-weight="bold">AdDU</text></svg></div>
        <h1 class="login-welcome">Welcome, <span>Blue Knight</span></h1>
        <p class="login-hub-text">Alumni Knights' Hub</p>
        <div class="login-divider-line"/>
        <div class="login-form">
          <div class="input-row">
            <div class="input-col">
              <label class="input-label">Student Number</label>
              <div class="input-group"><div class="input-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div><input type="text" placeholder="e.g. 20210001" value={studentNum()} onInput={(e) => setStudentNum(e.target.value)}/></div>
            </div>
            <div class="input-col">
              <label class="input-label">Password</label>
              <div class="input-group"><div class="input-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div><input type={showPassword()?"text":"password"} placeholder="Enter your password" value={password()} onInput={(e) => setPassword(e.target.value)}/><div class="eye-toggle" onClick={() => setShowPassword(!showPassword())}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></div></div>
            </div>
          </div>
          <p class="forgot-password" onClick={() => navigate("/biometric")}>Forgot password?</p>
          <button class="btn-signin" onClick={() => navigate("/home")}>Sign In</button>
          <div class="or-divider"><div class="line"/><span>OR</span><div class="line"/></div>
          <button class="btn-google"><svg width="18" height="18" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>Sign in using university email</button>
          <button class="btn-google" onClick={() => navigate("/staff")} style={{ "margin-bottom": "16px" }}>🏛️ Sign in as Staff</button>
          <p class="register-text">Don't have an account? <span>Register</span></p>
          <div class="login-footer"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>All credentials are cryptographically secured and verified by the AdDU Registrar's Office</div>
        </div>
      </div>
    </div>
  );
}

/* ===== BIOMETRIC PAGE ===== */
function Biometric() {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = createSignal(false);
  const handleAuth = () => { setAuthenticated(true); setTimeout(() => navigate("/home"), 1500); };
  return (
    <div class="bio-wrapper">
      <div class="bg-decor bg-decor-1"/><div class="bg-decor bg-decor-2"/><div class="bg-decor bg-decor-3"/><div class="bg-decor bg-decor-4"/>
      <div class="bio-card">
        <div class="bio-logo"><svg width="70" height="70" viewBox="0 0 70 70"><circle cx="35" cy="35" r="30" fill="var(--navy)" stroke="#D4A843" stroke-width="2"/><text x="35" y="42" text-anchor="middle" fill="#D4A843" font-size="16" font-weight="bold">AdDU</text></svg></div>
        <h1 class="bio-title">Welcome Back, <span>Blue Knight</span></h1>
        <p class="bio-subtitle">Alumni Knights' Hub</p>
        <div class="bio-divider"/>
        <Show when={!authenticated()} fallback={
          <><div class="bio-success-icon"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div><p class="bio-status success">Authentication Successful!</p><p style={{"font-size":"13px",color:"var(--gray-text)"}}>Redirecting to dashboard...</p></>
        }>
          <p class="bio-description">Forgot your student ID from years ago? No problem! Use biometric authentication to securely link to your alumni record.</p>
          <div class="bio-fingerprint"><svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" stroke-width="1.2"><path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4"/><path d="M5 19.5C5.5 18 6 15 6 12c0-3.5 2.5-6 6-6s6 2.5 6 6c0 1-.1 2-.3 3"/><path d="M12 12c0 4-1 8-4 10"/><path d="M12 12c0 2.5.5 5 2 7"/><path d="M9 12c0-1.7 1.3-3 3-3s3 1.3 3 3"/></svg></div>
          <p class="bio-status">Ready to authenticate</p>
          <button class="btn-bio" onClick={handleAuth}>👆 Authenticate with Biometrics</button>
          <button class="btn-face" onClick={handleAuth}>👤 Use Face ID</button>
        </Show>
        <p class="bio-link">Remember your details? <span onClick={() => navigate("/")}>Sign in with ID</span></p>
      </div>
    </div>
  );
}

/* ===== HOME PAGE ===== */
function Home() {
  const navigate = useNavigate();
  return (
    <div class="home-wrapper">
      <Sidebar active="home"/>
      <main class="main-content">
        <div class="topbar"><div class="topbar-welcome"><h1>Welcome, <span>Blue Knight</span></h1><p>Your verified academic records</p></div><div class="topbar-actions"><div class="topbar-btn"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1B2A4A" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg></div><div class="topbar-btn"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1B2A4A" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4"/></svg></div></div></div>
        <h2 class="section-title">Quick Actions</h2>
        <div class="quick-actions">
          <div class="action-card" onClick={() => navigate("/profile")}><div class="action-icon blue"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2C3E6B" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div><div class="action-card-text"><h3>View Profile</h3><p>Access verified academic records</p></div><div class="action-arrow">→</div></div>
          <div class="action-card" onClick={() => navigate("/request")}><div class="action-icon gold"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4A843" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg></div><div class="action-card-text"><h3>Request Document</h3><p>Order transcripts & certifications</p></div><div class="action-arrow">→</div></div>
        </div>
        <h2 class="section-title">What You Can Do</h2>
        <div class="feature-cards">
          <div class="feature-card" onClick={() => navigate("/request")}><div class="feature-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2C3E6B" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><h3>Request Documents</h3><p>Order transcripts</p></div>
          <div class="feature-card" onClick={() => navigate("/process")}><div class="feature-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2C3E6B" stroke-width="2"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg></div><h3>Process Documents</h3><p>Pending requests</p></div>
          <div class="feature-card"><div class="feature-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2C3E6B" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><h3>Verify Credentials</h3><p>Authentication</p></div>
          <div class="feature-card"><div class="feature-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2C3E6B" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div><h3>Help Center</h3><p>Get support</p></div>
        </div>
        <div class="bottom-row">
          <div class="help-card"><div class="help-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div><div class="help-card-text"><h3>Need Help?</h3><p>Chat with our support team</p></div><div class="help-arrow">→</div></div>
          <div class="notification-card"><h3>Latest Notifications</h3><div class="notif-item"><div class="notif-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div><div class="notif-text"><h4>Transcript Request Approved</h4><p>Your Official Transcript of Records is ready for download.</p><div class="notif-time">2 hours ago</div></div></div></div>
        </div>
        <div class="security-footer"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>All credentials are cryptographically secured and verified by the AdDU Registrar's Office</div>
      </main>
    </div>
  );
}

/* ===== PROFILE PAGE ===== */
function Profile() {
  const navigate = useNavigate();
  return (
    <div class="home-wrapper">
      <Sidebar active="profile"/>
      <main class="main-content profile-content">
        <div class="page-header"><div class="back-btn" onClick={() => navigate("/home")}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1B2A4A" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg></div></div>
        <div class="passport-card">
          <div class="passport-header"><div class="passport-header-logo"><svg width="60" height="60" viewBox="0 0 60 60"><circle cx="30" cy="30" r="26" fill="rgba(255,255,255,0.1)" stroke="#D4A843" stroke-width="1.5"/><text x="30" y="36" text-anchor="middle" fill="#D4A843" font-size="14" font-weight="bold">AdDU</text></svg></div><h1 class="passport-title">My <span>Academic Passport</span></h1><p class="passport-badge">Verified Digital Credential</p></div>
          <div class="passport-body">
            <div class="profile-avatar-section" style={{"margin-bottom":"28px"}}><div class="profile-avatar"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div><div class="profile-name-block"><h2>Maria Clara Santos</h2><p class="profile-student-id">Student No. 20180234</p><div class="verified-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>Verified by Registrar</div></div></div>
            <div class="academic-grid">
              <div class="academic-item"><div class="academic-item-label"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4A843" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 6 3 6 3s6-1 6-3v-5"/></svg>Degree</div><div class="academic-item-value">Bachelor of Science in Computer Science</div></div>
              <div class="academic-item"><div class="academic-item-label"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4A843" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>Graduated</div><div class="academic-item-value">March 2022</div></div>
              <div class="academic-item"><div class="academic-item-label"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4A843" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>Honors</div><div class="academic-item-value">Cum Laude</div></div>
            </div>
          </div>
        </div>
        <div class="contact-section"><h3>Contact Information</h3><div class="contact-grid"><div class="contact-item"><div class="contact-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2C3E6B" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div><div><div class="contact-item-label">Email</div><div class="contact-item-value">maria.santos@addu.edu.ph</div></div></div><div class="contact-item"><div class="contact-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2C3E6B" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72"/></svg></div><div><div class="contact-item-label">Phone</div><div class="contact-item-value">+63 912 345 6789</div></div></div><div class="contact-item"><div class="contact-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2C3E6B" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div><div><div class="contact-item-label">Location</div><div class="contact-item-value">Davao City, Philippines</div></div></div></div></div>
        <div class="credential-banner"><div class="credential-banner-icon"><svg width="44" height="44" viewBox="0 0 44 44"><circle cx="22" cy="22" r="20" fill="var(--navy)" stroke="#D4A843" stroke-width="1"/><text x="22" y="26" text-anchor="middle" fill="#D4A843" font-size="10" font-weight="bold">AdDU</text></svg></div><div class="credential-banner-text"><h4>Ateneo de Davao University</h4><p>This credential is cryptographically secured and synced with the AdDU Registrar's Office. Share it instantly with employers for verification.</p></div></div>
        <div class="biometric-card"><div class="biometric-info"><div class="biometric-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2C3E6B" stroke-width="2"><path d="M12 11c0 1.66-1.34 3-3 3"/><path d="M17 11a5 5 0 0 1-10 0"/><path d="M12 11V3"/><path d="M20 11a8 8 0 0 1-16 0"/><path d="M12 22v-3"/></svg></div><div class="biometric-text"><h4>Biometric Login</h4><p>Enable biometric authentication for faster login</p></div></div><button class="btn-enable">Enable</button></div>
        <div class="profile-actions"><button class="btn-primary"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>Share Credential</button><button class="btn-outline"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1B2A4A" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>Download PDF</button></div>
        <button class="btn-signout" onClick={() => navigate("/")}>Sign Out</button>
      </main>
    </div>
  );
}

/* ===== REQUEST DOCUMENTS PAGE ===== */
function RequestDocuments() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = createSignal("new");
  const [showConfirm, setShowConfirm] = createSignal(false);
  const [showPurpose, setShowPurpose] = createSignal(false);
  const [showVerify, setShowVerify] = createSignal(false);
  const [selectedDoc, setSelectedDoc] = createSignal(null);
  const [verifyMethod, setVerifyMethod] = createSignal("password");
  const [successMsg, setSuccessMsg] = createSignal(false);
  const documents = [
    { name:"Transcript of Records", desc:"Official academic transcript with all courses and grades", price:"₱150", days:"5-7 business days", color:"purple", icon:"📄" },
    { name:"Certified True Copy of Diploma", desc:"Authenticated copy of your diploma", price:"₱200", days:"3-5 business days", color:"blue", icon:"🎓" },
    { name:"Certificate of Graduation", desc:"Official certificate confirming degree completion", price:"₱100", days:"2-3 business days", color:"green", icon:"✅" },
    { name:"Certificate of Enrollment", desc:"Proof of current or past enrollment", price:"₱80", days:"1-2 business days", color:"orange", icon:"📋" },
    { name:"Certificate of General Weighted Average", desc:"Official GWA certification", price:"₱80", days:"2-3 business days", color:"teal", icon:"📊" },
    { name:"Honorable Dismissal", desc:"Certificate of good standing for transfer", price:"₱100", days:"3-5 business days", color:"red", icon:"📝" },
    { name:"Document Authentication", desc:"Red ribbon authentication service", price:"₱250", days:"7-10 business days", color:"gold", icon:"🔒" },
    { name:"Certification, Authentication & Verification (CAV)", desc:"Complete document verification package", price:"₱300", days:"10-14 business days", color:"navy", icon:"✔️" },
  ];
  const history = [
    { name:"Transcript of Records", date:"Feb 10, 2026", status:"verified", id:"TOR-2024-0342" },
    { name:"Certificate of Graduation", date:"Jan 22, 2026", status:"verified", id:"COG-2024-0521" },
    { name:"Certified True Copy of Diploma", date:"Dec 15, 2025", status:"processing", id:"DIP-2024-0198" },
  ];
  const handleDocClick = (doc) => { setSelectedDoc(doc); setShowConfirm(true); };
  const handleConfirm = () => { setShowConfirm(false); setShowPurpose(true); };
  const handlePurpose = () => { setShowPurpose(false); setShowVerify(true); };
  const handleVerify = () => { setShowVerify(false); setSuccessMsg(true); setTimeout(() => setSuccessMsg(false), 3000); };
  return (
    <div class="home-wrapper">
      <Sidebar active="request"/>
      <main class="main-content request-content">
        <div class="page-header"><div class="back-btn" onClick={() => navigate("/home")}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1B2A4A" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg></div><div><h1 style={{"font-size":"24px","font-weight":"700",color:"var(--navy)",margin:"0"}}>Request <span style={{color:"var(--gold)"}}>Documents</span></h1></div></div>
        <div class="tabs"><button class={`tab ${activeTab()==="new"?"active":""}`} onClick={() => setActiveTab("new")}>New Request</button><button class={`tab ${activeTab()==="history"?"active":""}`} onClick={() => setActiveTab("history")}>Request History</button></div>
        {successMsg() && <div style={{background:"rgba(46,204,113,0.1)",border:"1px solid rgba(46,204,113,0.3)","border-radius":"12px",padding:"16px 24px","margin-bottom":"20px",display:"flex","align-items":"center",gap:"12px",color:"#2ecc71","font-weight":"600","font-size":"14px"}}>✓ Request submitted successfully!</div>}
        <Show when={activeTab()==="new"}>
          <p style={{"font-size":"14px",color:"var(--gray-text)","margin-bottom":"20px"}}>Select a document type to request</p>
          <div class="doc-list"><For each={documents}>{(doc) => <div class="doc-item" onClick={() => handleDocClick(doc)}><div class={`doc-item-icon ${doc.color}`}><span style={{"font-size":"22px"}}>{doc.icon}</span></div><div class="doc-item-info"><h3>{doc.name}</h3><p>{doc.desc}</p></div><div class="doc-item-meta"><div class="doc-price">{doc.price}</div><div class="doc-days"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>{doc.days}</div></div><div class="doc-arrow">→</div></div>}</For></div>
        </Show>
        <Show when={activeTab()==="history"}>
          <div class="history-list"><For each={history}>{(item) => <div class="history-item"><div class="history-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div><div class="history-info"><h3>{item.name}</h3><p>Request ID: {item.id}</p></div><div class="history-meta"><div class="history-date">{item.date}</div><div class={`status-badge ${item.status}`}>{item.status.charAt(0).toUpperCase()+item.status.slice(1)}</div></div></div>}</For></div>
        </Show>
        {showConfirm() && <div class="modal-overlay" onClick={() => setShowConfirm(false)}><div class="modal" onClick={(e) => e.stopPropagation()}><div class="modal-header"><h2>Confirm Request</h2></div><div class="modal-body"><div class="modal-doc-info"><div class={`doc-item-icon ${selectedDoc().color}`} style={{width:"40px",height:"40px","border-radius":"10px"}}><span style={{"font-size":"18px"}}>{selectedDoc().icon}</span></div><div><h4>{selectedDoc().name}</h4><p>{selectedDoc().desc}</p></div></div><div class="modal-detail-row"><span class="modal-detail-label">Processing Fee:</span><span class="modal-detail-value">{selectedDoc().price}</span></div><div class="modal-detail-row"><span class="modal-detail-label">Processing Time:</span><span class="modal-detail-value">{selectedDoc().days}</span></div><div class="modal-note">You will be directed to payment after confirming this request.</div></div><div class="modal-footer"><button class="btn-cancel" onClick={() => setShowConfirm(false)}>Cancel</button><button class="btn-continue" onClick={handleConfirm}>Continue</button></div></div></div>}
        {showPurpose() && <div class="modal-overlay" onClick={() => setShowPurpose(false)}><div class="modal purpose-modal" onClick={(e) => e.stopPropagation()}><div class="purpose-header"><h2>What do you need this for?</h2><p>Please select the purpose for requesting this document</p></div><div class="purpose-list"><For each={[{title:"Employment / Work",desc:"Documents for job applications",icon:"💼"},{title:"Working / Studying Abroad",desc:"Documents for international opportunities",icon:"🌍"},{title:"Board Exam / Licensure",desc:"Requirements for board examinations",icon:"📝"},{title:"Graduate School",desc:"Application to master's or doctoral programs",icon:"🎓"},{title:"Other Purpose",desc:"Browse all available documents",icon:"📄"}]}>{(p) => <div class="purpose-item" onClick={handlePurpose}><div class="purpose-icon"><span style={{"font-size":"20px"}}>{p.icon}</span></div><div class="purpose-item-info"><h4>{p.title}</h4><p>{p.desc}</p></div><div class="purpose-arrow">→</div></div>}</For></div><div class="purpose-cancel"><button onClick={() => setShowPurpose(false)}>Cancel</button></div></div></div>}
        {showVerify() && <div class="modal-overlay" onClick={() => setShowVerify(false)}><div class="modal verify-modal" onClick={(e) => e.stopPropagation()}><div class="verify-header"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1B2A4A" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg><h2>Verify Your Identity</h2></div><div class="verify-body"><p class="verify-subtitle">For security purposes, please authenticate before proceeding.</p><div class="verify-tabs"><button class={`verify-tab ${verifyMethod()==="password"?"active":""}`} onClick={() => setVerifyMethod("password")}>🔒 Password</button><button class={`verify-tab ${verifyMethod()==="biometric"?"active":""}`} onClick={() => setVerifyMethod("biometric")}>👆 Biometric</button></div><Show when={verifyMethod()==="password"}><label class="input-label">Enter Password</label><div class="input-group"><input type="password" placeholder="Enter your password"/></div></Show><Show when={verifyMethod()==="biometric"}><div style={{"text-align":"center",padding:"20px 0"}}><svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" stroke-width="1.5"><path d="M12 11c0 1.66-1.34 3-3 3"/><path d="M17 11a5 5 0 0 1-10 0"/><path d="M12 11V3"/><path d="M20 11a8 8 0 0 1-16 0"/></svg><p style={{"margin-top":"12px",color:"var(--gray-text)","font-size":"14px"}}>Ready to authenticate</p></div></Show></div><div class="verify-footer"><button class="btn-cancel" onClick={() => setShowVerify(false)}>Cancel</button><button class="btn-continue" onClick={handleVerify}>Verify</button></div></div></div>}
      </main>
    </div>
  );
}

/* ===== PROCESS DOCUMENTS PAGE ===== */
function ProcessDocuments() {
  const navigate = useNavigate();
  const [expandedCard, setExpandedCard] = createSignal(null);
  const [showPdf, setShowPdf] = createSignal(false);
  const [showRush, setShowRush] = createSignal(null);
  const [chatMsg, setChatMsg] = createSignal("");
  const [chatMessages, setChatMessages] = createSignal([{text:"We are currently processing your diploma request.",from:"Registrar Office",time:"Yesterday"}]);
  const requests = [
    {id:"TOR-2024-0342",name:"Official Transcript of Records",icon:"📄",color:"blue",status:"pending",statusLabel:"Pending Upload",requirements:"2/3",rushPrice:"₱200",rushDays:"1-2 days",steps:["done","done","active","upcoming"],timeline:[{title:"Request Submitted",desc:"Submitted with reference #TOR-2024-0342",date:"Feb 10, 2026",dot:"green"},{title:"Documents Verified",desc:"All documents and payment verified.",date:"Feb 11, 2026",dot:"green"},{title:"Document Processing",desc:"Being processed and digitally signed.",date:"Feb 14, 2026",dot:"blue"}],checklist:[{text:"Valid Government ID",done:true},{text:"Payment Receipt (₱200)",done:true},{text:"Authorization Letter",done:false}]},
    {id:"DIP-2024-0198",name:"Certified Diploma Copy",icon:"🎓",color:"purple",status:"processing",statusLabel:"Processing",eta:"ETA: 3-5 days",rushPrice:"₱300",rushDays:"1-2 days",steps:["done","done","active","upcoming"],timeline:[{title:"Request Submitted",desc:"Diploma copy request submitted.",date:"Feb 8, 2026",dot:"green"},{title:"Documents Verified",desc:"Payment and ID verified.",date:"Feb 9, 2026",dot:"green"},{title:"Document Processing",desc:"Currently being processed.",date:"Feb 12, 2026",dot:"blue"}],checklist:[{text:"Valid Government ID",done:true},{text:"Payment Receipt (₱200)",done:true}]},
    {id:"COG-2024-0521",name:"Certificate of Graduation",icon:"✅",color:"green",status:"ready",statusLabel:"Ready",note:"Ready to download",expires:"Expires in 11 days 8 hours",steps:["done","done","done","done"],timeline:[{title:"Request Submitted",desc:"Certificate request submitted.",date:"Feb 10, 2026",dot:"green"},{title:"Documents Verified",desc:"All documents verified.",date:"Feb 11, 2026",dot:"green"},{title:"Document Processed",desc:"Certificate processed and digitally signed.",date:"Feb 14, 2026",dot:"green"},{title:"Ready for Download",desc:"Valid until March 1, 2026.",date:"Feb 15, 2026",dot:"green"}],checklist:[{text:"All requirements submitted",done:true}]}
  ];
  const stepLabels = ["Submitted","Verified","Processed","Ready"];
  const sendChat = () => { if(chatMsg().trim()){ setChatMessages([...chatMessages(),{text:chatMsg(),from:"You",time:"Just now"}]); setChatMsg(""); }};
  return (
    <div class="home-wrapper">
      <Sidebar active="process"/>
      <main class="main-content process-content">
        <div class="page-header"><div class="back-btn" onClick={() => navigate("/home")}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1B2A4A" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg></div><div><h1 style={{"font-size":"24px","font-weight":"700",color:"var(--navy)",margin:"0"}}>Process <span style={{color:"var(--gold)"}}>Documents</span></h1><p style={{"font-size":"14px",color:"var(--gray-text)",margin:"0"}}>Track your document requests</p></div></div>
        <div class="status-summary">
          <div class="summary-card"><div class="summary-icon orange"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f39c12" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><div class="summary-info"><h3>3</h3><p>Pending</p></div></div>
          <div class="summary-card"><div class="summary-icon red"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div><div class="summary-info"><h3>2</h3><p>Attention</p></div></div>
          <div class="summary-card"><div class="summary-icon green"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div><div class="summary-info"><h3>1</h3><p>Ready</p></div></div>
        </div>
        <h2 class="section-title">Your Document Requests</h2>
        <div class="request-cards">
          <For each={requests}>{(req) =>
            <div class="request-card">
              <div class="request-card-main" onClick={() => setExpandedCard(expandedCard()===req.id?null:req.id)}><div class={`request-card-icon doc-item-icon ${req.color}`}>{req.icon}</div><div class="request-card-info"><h3>{req.name}</h3><div class="request-card-id">Request ID: {req.id}</div><div class="request-card-tags"><div class={`tag ${req.status}`}>{req.statusLabel}</div>{req.requirements && <span class="tag-text">• {req.requirements} requirements submitted</span>}{req.eta && <span class="tag-text">• {req.eta}</span>}{req.note && <span class="tag-text">• {req.note}</span>}</div></div><div class="request-card-arrow">{expandedCard()===req.id?"↑":"→"}</div></div>
              {req.status!=="ready" && <button class="rush-btn" onClick={(e) => {e.stopPropagation();setShowRush(req);}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e67e22" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>Rush Processing (+{req.rushPrice})</button>}
              {req.status==="ready" && <><div class="expiry-warning"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e67e22" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>{req.expires}</div><div class="download-warning">⚠ Download before expiration. Auto-deleted after 14 days.</div></>}
              {expandedCard()===req.id && <div class="request-detail">
                <div class="status-tracker"><div class="status-tracker-title">Request Status</div><div class="tracker-steps"><For each={req.steps}>{(step,i) => <><div class="tracker-step"><div class={`tracker-circle ${step}`}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5">{step==="done"||step==="active"?<polyline points="20 6 9 17 4 12"/>:<circle cx="12" cy="12" r="4" fill="none"/>}</svg></div><div class={`tracker-label ${step}`}>{stepLabels[i()]}</div></div>{i()<3 && <div class={`tracker-line ${step}`}/>}</>}</For></div><div class="timeline"><For each={req.timeline}>{(t) => <div class="timeline-item"><div class={`timeline-dot ${t.dot}`}/><div class="timeline-info"><h4>{t.title}</h4><p>{t.desc}</p></div><div class="timeline-date">{t.date}</div></div>}</For></div></div>
                <div class="checklist"><div class="checklist-title">Required Documents</div><For each={req.checklist}>{(item) => <div class="checklist-item"><div class={`check-icon ${item.done?"done":"pending"}`}>{item.done?<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>:<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#bbb" stroke-width="2"><circle cx="12" cy="12" r="6"/></svg>}</div><span>{item.text}</span></div>}</For></div>
                {req.status==="ready" && <button class="btn-download" onClick={() => setShowPdf(true)}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>Download Document</button>}
                <div class="chat-section"><div class="chat-title">Office-Alumni Chat</div><div class="chat-box"><For each={chatMessages()}>{(msg) => <div class="chat-message"><p>{msg.text}</p><div class="chat-message-meta">{msg.from} • {msg.time}</div></div>}</For></div><div class="chat-input"><input type="text" placeholder="Type a message..." value={chatMsg()} onInput={(e) => setChatMsg(e.target.value)} onKeyPress={(e) => e.key==="Enter"&&sendChat()}/><button class="chat-send-btn" onClick={sendChat}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></button></div></div>
              </div>}
            </div>
          }</For>
        </div>
        {showPdf() && <div class="modal-overlay" onClick={() => setShowPdf(false)}><div class="modal pdf-modal" onClick={(e) => e.stopPropagation()}><div class="pdf-modal-header"><div><h3>Document Preview</h3><p>Certificate of Graduation</p></div><button class="pdf-close" onClick={() => setShowPdf(false)}>✕</button></div><div class="pdf-preview"><div class="pdf-page"><div class="pdf-page-logo"><svg width="50" height="50" viewBox="0 0 50 50"><circle cx="25" cy="25" r="22" fill="var(--navy)" stroke="#D4A843" stroke-width="1"/><text x="25" y="29" text-anchor="middle" fill="#D4A843" font-size="11" font-weight="bold">AdDU</text></svg></div><h2>ATENEO DE DAVAO UNIVERSITY</h2><p class="pdf-address">E. JACINTO STREET, DAVAO CITY 8000, PHILIPPINES</p><p class="pdf-office">OFFICE OF THE UNIVERSITY REGISTRAR</p><div style={{width:"60%",height:"2px",background:"var(--navy)",margin:"0 auto 16px"}}/><p class="pdf-doc-title">CERTIFICATE OF GRADUATION</p><p class="pdf-detail">Document No.: CERT-2024-8012</p><p class="pdf-detail">Date Issued: February 15, 2026</p><p class="pdf-body">This is to certify that the records of this University show that</p><p class="pdf-name">JUAN DELA CRUZ</p><p class="pdf-body">has completed all requirements for the degree of Bachelor of Science in Computer Science.</p></div></div><div class="pdf-modal-footer"><button class="btn-cancel" onClick={() => setShowPdf(false)}>Close</button><button class="btn-download" style={{flex:"1","margin-bottom":"0"}}>Download PDF</button></div></div></div>}
        {showRush() && <div class="modal-overlay" onClick={() => setShowRush(null)}><div class="modal rush-modal" onClick={(e) => e.stopPropagation()}><div class="rush-modal-body"><h3>Confirm Rush Processing</h3><p>Additional fee of {showRush().rushPrice} will be added. Processing time will be reduced to {showRush().rushDays}.</p></div><div class="rush-modal-footer"><button class="btn-cancel" onClick={() => setShowRush(null)}>Cancel</button><button class="btn-continue" onClick={() => setShowRush(null)}>Confirm</button></div></div></div>}
      </main>
    </div>
  );
}

/* ===== STAFF HOME ===== */
function StaffHome() {
  const navigate = useNavigate();
  return (
    <div class="home-wrapper">
      <StaffSidebar active="staff-home"/>
      <main class="main-content">
        <div class="topbar"><div class="topbar-welcome"><h1>Welcome, <span>Blue Knight</span></h1><p>Ateneo's Unified academic records</p></div></div>
        <h2 class="section-title">Quick Actions</h2>
        <div class="quick-actions">
          <div class="action-card" onClick={() => navigate("/staff/profile-mgmt")}><div class="action-icon blue"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2C3E6B" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div><div class="action-card-text"><h3>View Profile</h3><p>Employee's Information</p></div><div class="action-arrow">→</div></div>
          <div class="action-card"><div class="action-icon gold"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4A843" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div><div class="action-card-text"><h3>Verify Request</h3><p>Validate pending student requests</p></div><div class="action-arrow">→</div></div>
        </div>
        <h2 class="section-title">What You Can Do</h2>
        <div class="feature-cards">
          <div class="feature-card" onClick={() => navigate("/staff/profile-mgmt")}><div class="feature-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2C3E6B" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></div><h3>Profile Management</h3><p>Validate Request</p></div>
          <div class="feature-card" onClick={() => navigate("/staff/doc-log")}><div class="feature-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2C3E6B" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><h3>Document Log</h3><p>System activity history</p></div>
          <div class="feature-card" onClick={() => navigate("/staff/inventory")}><div class="feature-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2C3E6B" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div><h3>Inventory Alerts</h3><p>Stock level status</p></div>
          <div class="feature-card" onClick={() => navigate("/staff/payment")}><div class="feature-card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2C3E6B" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg></div><h3>Payment Verification</h3><p>Audit finance records</p></div>
        </div>
        <div class="help-card"><div class="help-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div><div class="help-card-text"><h3>Need Help?</h3><p>Chat with our support team</p></div><div class="help-arrow">→</div></div>
        <div class="security-footer"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>All credentials are cryptographically secured and verified by the AdDU Registrar's Office</div>
      </main>
    </div>
  );
}

/* ===== STAFF: PROFILE MANAGEMENT ===== */
function StaffProfileMgmt() {
  const navigate = useNavigate();
  const [filter, setFilter] = createSignal("all");
  const [selectedProfile, setSelectedProfile] = createSignal(null);

  const alumni = [
    {id: "2020-1042", name:"Juan Dela Cruz",program:"BS Computer Science • Batch 2020",status:"Pending",urgency:"urgent",date:"Feb 27, 2026", docs: ["Transcript of Records"]},
    {id: "2018-0921", name:"Maria Clara Santos",program:"AB Psychology • Batch 2018",status:"Processed",urgency:"normal",date:"Feb 26, 2026", docs: ["Certified True Copy of Diploma"]},
    {id: "2015-3012", name:"Roberto Gomez",program:"BS Architecture • Batch 2015",status:"Verified",urgency:"low",date:"Feb 25, 2026", docs: ["Certificate of Graduation"]},
    {id: "2022-5519", name:"Anna Patricia Lim",program:"BS Accountancy • Batch 2022",status:"Pending",urgency:"normal",date:"Feb 25, 2026", docs: ["Transcript of Records"]},
  ];
  const filtered = () => filter()==="all" ? alumni : alumni.filter(a => a.urgency===filter());

  return (
    <div class="home-wrapper">
      <StaffSidebar active="staff-profile"/>
      <main class="main-content">
        <div class="page-header"><div class="back-btn" onClick={() => navigate("/staff")}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1B2A4A" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg></div><div><h1 style={{"font-size":"24px","font-weight":"700",color:"var(--navy)",margin:"0"}}>Profile Management</h1></div></div>
        <div class="search-bar"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg><input type="text" placeholder="Search by name, degree, or Request ID..."/></div>
        <div class="filter-bar"><button class={`filter-btn urgent ${filter()==="urgent"?"active":""}`} onClick={() => setFilter(filter()==="urgent"?"all":"urgent")}>‼ Urgent</button><button class={`filter-btn ${filter()==="normal"?"active":""}`} onClick={() => setFilter(filter()==="normal"?"all":"normal")}>◎ Normal</button><button class={`filter-btn ${filter()==="low"?"active":""}`} onClick={() => setFilter(filter()==="low"?"all":"low")}>⇐ Low</button></div>
        
        <div class="alumni-list">
          <For each={filtered()}>{(a) => 
            <div class="alumni-card">
              <div class="alumni-avatar"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
              <div class="alumni-info">
                <h3>{a.name}</h3><p>{a.program}</p>
                <div style={{display:"flex",gap:"8px","margin-top":"6px","align-items":"center"}}>
                  <div class={`tag ${a.status.toLowerCase()}`}>{a.status}</div>
                  <span class="view-details-link" onClick={() => setSelectedProfile(a)}>View Details</span>
                </div>
              </div>
              <div class="alumni-meta"><div class="alumni-date">{a.date}</div><div class={`urgency-badge ${a.urgency}`}>{a.urgency.toUpperCase()}</div></div>
            </div>
          }</For>
        </div>

        {/* Profile Details Modal */}
        {selectedProfile() && (
          <div class="modal-overlay" onClick={() => setSelectedProfile(null)}>
            <div class="modal" onClick={(e) => e.stopPropagation()}>
              <div class="modal-header">
                <h2>{selectedProfile().name}</h2>
                <p style={{"font-size":"13px", color:"var(--gray-text)"}}>{selectedProfile().program}</p>
              </div>
              <div class="modal-body">
                <div style={{display:"flex", "justify-content":"space-between", "margin-bottom":"20px"}}>
                   <div class={`tag ${selectedProfile().status.toLowerCase()}`}>{selectedProfile().status}</div>
                   <div class={`urgency-badge ${selectedProfile().urgency}`}>{selectedProfile().urgency.toUpperCase()}</div>
                </div>
                <h4 style={{"font-size":"14px", color:"var(--navy)", "margin-bottom":"12px"}}>Documents Requested</h4>
                <div class="doc-list">
                  <For each={selectedProfile().docs}>{(doc) => (
                    <div class="modal-doc-info">
                      <div class="doc-item-icon blue" style={{width:"36px",height:"36px","border-radius":"8px"}}><span style={{"font-size":"16px"}}>📄</span></div>
                      <div><h4 style={{"margin-bottom":"2px"}}>{doc}</h4><p>Request ID: #{selectedProfile().id}</p></div>
                    </div>
                  )}</For>
                </div>
              </div>
              <div class="modal-footer">
                <button class="btn-cancel" onClick={() => setSelectedProfile(null)}>Close</button>
                <button class="btn-continue">Process Request</button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

/* ===== STAFF: DOCUMENT LOG ===== */
function StaffDocLog() {
  const navigate = useNavigate();
  const [logFilter, setLogFilter] = createSignal("all");
  const logs = [
    {id:"#LOG-882910",type:"Transcript of Records",name:"De Los Reyes, Juan A.",studentId:"ID: 19-4502 | BS CS",time:"Today, 10:45 AM",barcode:"BC-990-TR",status:"urgent"},
    {id:"#LOG-882908",type:"Diploma",name:"Santos, Maria Clara",studentId:"ID: 20-1192 | AB POS",time:"Today, 09:12 AM",barcode:"BC-412-DP",status:"logged"},
    {id:"#LOG-882901",type:"Certificate of Enrollment",name:"Aguinaldo, Emilio Q.",studentId:"Q: 21-8083 | BS MGT",time:"Yesterday, 04:30 PM",barcode:"BC-446-GB",status:"released"},
  ];
  return (
    <div class="home-wrapper">
      <StaffSidebar active="staff-doclog"/>
      <main class="main-content">
        <div class="page-header"><div class="back-btn" onClick={() => navigate("/staff")}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1B2A4A" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg></div><div><h1 style={{"font-size":"24px","font-weight":"700",color:"var(--navy)",margin:"0"}}>Document Log</h1></div></div>
        <div class="search-bar"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg><input type="text" placeholder="Search by name, degree, or Request ID..."/></div>
        <div class="filter-bar"><button class={`filter-btn ${logFilter()==="all"?"active":""}`} onClick={() => setLogFilter("all")}>All Logs</button><button class={`filter-btn ${logFilter()==="pending"?"active":""}`} onClick={() => setLogFilter("pending")}>Pending Release</button><button class={`filter-btn ${logFilter()==="released"?"active":""}`} onClick={() => setLogFilter("released")}>Released</button></div>
        <button class="btn-scan"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>Scan Barcode / QR Code</button>
        <h2 class="section-title">Recent Activity</h2>
        <div class="log-list"><For each={logs}>{(log) => <div class="log-item"><div class={`doc-item-icon ${log.status==="urgent"?"red":log.status==="logged"?"blue":"green"}`} style={{width:"44px",height:"44px","border-radius":"12px",display:"flex","align-items":"center","justify-content":"center"}}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={log.status==="urgent"?"#e74c3c":log.status==="logged"?"#3498db":"#2ecc71"} stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><div class="log-info"><div class="log-id">{log.id}</div><h3>{log.type}</h3><div class="log-person"><div class="log-person-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div><span>{log.name}</span></div><p class="log-person-detail">{log.studentId}</p></div><div class="log-meta"><div class={`log-status ${log.status}`}>{log.status.toUpperCase()}</div><div class="log-time"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>{log.time}</div><div class="barcode-tag">▮▮▮ {log.barcode}</div></div></div>}</For></div>
        <div class="log-footer">End of document log for March 1, 2026</div>
      </main>
    </div>
  );
}

/* ===== STAFF: INVENTORY ALERTS ===== */
function StaffInventory() {
  const navigate = useNavigate();
  const [orderQty, setOrderQty] = createSignal(500);
  const [showOrderConfirm, setShowOrderConfirm] = createSignal(false);
  return (
    <div class="home-wrapper">
      <StaffSidebar active="staff-inventory"/>
      <main class="main-content">
        <div class="page-header"><div class="back-btn" onClick={() => navigate("/staff")}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1B2A4A" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg></div><div><h1 style={{"font-size":"24px","font-weight":"700",color:"var(--navy)",margin:"0"}}>Inventory Alerts</h1></div></div>
        <div class="alert-banner"><div class="alert-banner-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div><div class="alert-banner-text"><h3>Critical Alert: Stock Low</h3><p>Diploma Paper stock is below the 20% safety threshold. Immediate replenishment required.</p></div><div class="alert-banner-tag">ITEM #DP-2024</div></div>
        <div class="inventory-card">
          <div class="inventory-header"><div><h3>Diploma Paper</h3><p>Official Parchment • A4 120gsm</p></div><div class="inventory-count"><div class="number">150</div><div class="label">Sheets Left</div></div></div>
          <div class="inventory-progress"><div class="inventory-progress-fill critical" style={{width:"15%"}}/></div>
          <div class="inventory-progress-labels"><span>CURRENT LEVEL</span><span>REORDER POINT: 500</span></div>
          <div class="inventory-threshold">⚠ Threshold reached 2 hours ago</div>
          <div class="inventory-stats">
            <div class="inventory-stat"><div class="stat-label">Min. Required</div><div class="stat-value">↓ 500</div></div>
            <div class="inventory-stat"><div class="stat-label">Est. Days Left</div><div class="stat-value">📅 ~ 4 Days</div></div>
            <div class="inventory-stat"><div class="stat-label">Daily Usage</div><div class="stat-value">↗ 35/avg</div></div>
            <div class="inventory-stat"><div class="stat-label">Last Order</div><div class="stat-value">📋 Jan 12</div></div>
          </div>
          <div class="inventory-updated"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>Last updated 5 mins ago</div>
          <div class="order-section">
            <h4>ORDERS</h4>
            <div class="order-options"><For each={[250,500,750,1000]}>{(qty) => <button class={`order-option ${orderQty()===qty?"active":""}`} onClick={() => setOrderQty(qty)}>{qty}</button>}</For></div>
            <button class="btn-order" onClick={() => setShowOrderConfirm(true)}>🛒 Place Order</button>
          </div>
        </div>
        {showOrderConfirm() && <div class="modal-overlay" onClick={() => setShowOrderConfirm(false)}><div class="modal rush-modal" onClick={(e) => e.stopPropagation()}><div class="rush-modal-body"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg><h3>Verify Payment</h3><p>For security purposes, please authenticate before proceeding with the staff request.</p><div style={{"font-size":"48px","font-weight":"700",color:"var(--navy)",margin:"16px 0"}}>{orderQty()} Papers</div><p style={{"font-size":"14px",color:"var(--gray-text)"}}>Santos, Maria Clara</p><p style={{"font-size":"11px",color:"var(--gray-text)","text-transform":"uppercase"}}>INVENTORY ORDER</p></div><div class="rush-modal-footer"><button class="btn-cancel" onClick={() => setShowOrderConfirm(false)}>Cancel</button><button class="btn-continue" onClick={() => setShowOrderConfirm(false)}>Verify Order</button></div></div></div>}
      </main>
    </div>
  );
}

/* ===== STAFF: PAYMENT VERIFICATION ===== */
function StaffPayment() {
  const navigate = useNavigate();
  const [authModal, setAuthModal] = createSignal(null);
  const [payments, setPayments] = createSignal([
    {name:"Santos, Maria Clara",type:"TUITION FEE",date:"Feb 28, 11:02 AM",method:"GCash",code:"ATN-112-M202",amount:"₱45,200.50",verified:false},
    {name:"De Los Reyes, Juan A.",type:"DOCUMENT FEE",date:"Feb 28, 10:30 AM",method:"BPI",code:"ATN-113-J403",amount:"₱350.00",verified:false},
    {name:"Aguinaldo, Emilio Q.",type:"DOCUMENT FEE",date:"Feb 27, 03:15 PM",method:"GCash",code:"ATN-114-E501",amount:"₱150.00",verified:true},
  ]);

  const handleVerifyClick = (code) => {
    setAuthModal(code);
  };

  const confirmPayment = () => {
    setPayments(payments().map(p => p.code === authModal() ? {...p, verified:true} : p));
    setAuthModal(null);
  };

  return (
    <div class="home-wrapper">
      <StaffSidebar active="staff-payment"/>
      <main class="main-content">
        <div class="page-header"><div class="back-btn" onClick={() => navigate("/staff")}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1B2A4A" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg></div><div><h1 style={{"font-size":"24px","font-weight":"700",color:"var(--navy)",margin:"0"}}>Payment Verification</h1></div></div>
        <div class="search-bar"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg><input type="text" placeholder="Search Unique Payment Code (e.g. ATN-9XX-2023)"/></div>
        <div class="filter-bar"><button class="filter-btn active">All Transactions</button><button class="filter-btn">Pending</button><button class="filter-btn">Flagged 🔴</button></div>
        <div class="payment-stats">
          <div class="payment-stat-card"><h3>Pending Verification</h3><div class="payment-stat-number">42</div><div class="payment-stat-tag high">High Priority</div></div>
          <div class="payment-stat-card"><h3>Verified Today</h3><div class="payment-stat-number">128</div><div class="payment-stat-tag up">+12% vs yesterday</div></div>
        </div>
        <div class="payment-list">
          <For each={payments()}>{(p) => 
            <div class="payment-item">
              <div class="alumni-avatar"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
              <div class="payment-info">
                <h3>{p.name} <span style={{"font-size":"11px",color:"var(--gray-text)","font-weight":"400","text-transform":"uppercase","margin-left":"8px"}}>{p.type}</span></h3>
                <div class="payment-info-row"><span>📅 {p.date}</span><span>💳 {p.method}</span></div>
                <div class="payment-code">{p.code}</div>
              </div>
              <div style={{display:"flex","align-items":"center",gap:"12px"}}>
                <span class="payment-amount">{p.amount}</span>
                <Show when={!p.verified} fallback={<button class="btn-verified">✓ Verified</button>}>
                  <button class="btn-verify-payment" onClick={() => handleVerifyClick(p.code)}>Verify Payment</button>
                </Show>
              </div>
            </div>
          }</For>
        </div>

        {/* Payment Biometric Verification Modal */}
        {authModal() && (
          <div class="modal-overlay" onClick={() => setAuthModal(null)}>
            <div class="modal verify-modal" onClick={(e) => e.stopPropagation()}>
              <div class="verify-header">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                <h2>Verify Payment</h2>
              </div>
              <div class="verify-body" style={{"text-align":"center", padding:"20px 32px"}}>
                <p style={{"font-size":"13px", color:"var(--gray-text)", "margin-bottom":"20px"}}>For security purposes, please authenticate before proceeding with the student's request.</p>
                <div class="bio-fingerprint" style={{margin:"0 auto", cursor:"pointer"}} onClick={confirmPayment}>
                   <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" stroke-width="1.2"><path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4"/><path d="M5 19.5C5.5 18 6 15 6 12c0-3.5 2.5-6 6-6s6 2.5 6 6c0 1-.1 2-.3 3"/><path d="M12 12c0 4-1 8-4 10"/><path d="M12 12c0 2.5.5 5 2 7"/><path d="M9 12c0-1.7 1.3-3 3-3s3 1.3 3 3"/></svg>
                </div>
                <p style={{"margin-top":"16px", "font-weight":"600", color:"var(--navy)"}}>Ready to authenticate</p>
                <p style={{"font-size":"11px", color:"var(--gray-text)", "margin-top":"4px"}}>Click fingerprint to simulate auth</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

/* ===== APP ===== */
function App() {
  return (
    <Router>
      <Route path="/" component={Login}/>
      <Route path="/home" component={Home}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/request" component={RequestDocuments}/>
      <Route path="/process" component={ProcessDocuments}/>
      <Route path="/biometric" component={Biometric}/>
      <Route path="/staff" component={StaffHome}/>
      <Route path="/staff/profile-mgmt" component={StaffProfileMgmt}/>
      <Route path="/staff/doc-log" component={StaffDocLog}/>
      <Route path="/staff/inventory" component={StaffInventory}/>
      <Route path="/staff/payment" component={StaffPayment}/>
    </Router>
  );
}

export default App;