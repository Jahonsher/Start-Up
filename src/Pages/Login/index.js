// ======================= JS =======================
// Tab logic + 3D flip + focus management + UX niceties.
const card = document.querySelector('.card3d');
const tabs = document.querySelectorAll('.tab');
const loginTab = document.getElementById('tab-login');
const signupTab = document.getElementById('tab-signup');
const loginPanel = document.getElementById('login');
const signupPanel = document.getElementById('signup');

// Switch helper
function activate(which){
  const isSignup = which === 'signup';
  card.classList.toggle('is-signup', isSignup);

  // Update aria
  loginTab.classList.toggle('is-active', !isSignup);
  signupTab.classList.toggle('is-active', isSignup);
  loginTab.setAttribute('aria-selected', String(!isSignup));
  signupTab.setAttribute('aria-selected', String(isSignup));
  loginPanel.setAttribute('aria-hidden', String(isSignup));
  signupPanel.setAttribute('aria-hidden', String(!isSignup));

  // Auto-focus first input of target form after flip transition
  const targetForm = isSignup ? signupPanel : loginPanel;
  const firstInput = targetForm.querySelector('input');
  // Wait for the flip to complete a bit, then focus
  setTimeout(() => firstInput && firstInput.focus(), 320);
}

tabs.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    activate(btn.id === 'tab-signup' ? 'signup' : 'login');
  });
});

// Inline text links that switch panels
document.querySelectorAll('[data-switch]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    e.preventDefault();
    activate(a.dataset.switch);
    // Also sync the tab highlight
    (a.dataset.switch === 'signup' ? signupTab : loginTab).focus();
  });
});

// Optional: Enter key on tabs toggles panel
tabs.forEach(t=>{
  t.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter' || e.key === ' '){
      e.preventDefault();
      t.click();
    }
    if(e.key === 'ArrowLeft' || e.key === 'ArrowRight'){
      e.preventDefault();
      const next = t === loginTab ? signupTab : loginTab;
      next.focus();
    }
  });
});

// Simple demo submit handlers (prevent page reload)
document.querySelectorAll('form').forEach(f=>{
  f.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = Object.fromEntries(new FormData(f).entries());
    console.log('Submitted', f.closest('.face').id, data);
    // Tiny feedback
    const btn = f.querySelector('.btn');
    const txt = btn.textContent;
    btn.disabled = true; btn.textContent = 'Done ✓';
    setTimeout(()=>{ btn.disabled=false; btn.textContent = txt; }, 1000);
  });
});

// Default: start on Login; to start on Sign Up, call activate('signup')
activate('login');
