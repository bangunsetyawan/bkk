// ============================================================
// INITIALIZATION SUPABASE CLIENT
// ============================================================
const SUPABASE_URL = "https://ilnfzebpoczlwocpzlop.supabase.co";
const SUPABASE_KEY = "sb_publishable_75Y_xJl_9ntQt3R2TnkSUw_pktf_FbV";
const supabase = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY) : null;

document.addEventListener('DOMContentLoaded', function () {


    // ============================================================
    // SIDEBAR TOGGLE — Minimize Panel
    // ============================================================
    var sidebar     = document.getElementById('sidebar');
    var mainContent = document.querySelector('.main-content');
    var toggleBtn   = document.getElementById('sidebarToggle');

    function setSidebarState(collapsed) {
        if (!sidebar) return;
        if (collapsed) {
            sidebar.classList.add('collapsed');
            if (mainContent) mainContent.classList.add('expanded');
        } else {
            sidebar.classList.remove('collapsed');
            if (mainContent) mainContent.classList.remove('expanded');
        }
        var minIcon = document.getElementById('minimizeBtnIcon');
        var minText = document.getElementById('minimizeBtnText');
        if (minIcon) minIcon.className = collapsed ? 'fas fa-angle-double-right' : 'fas fa-angle-double-left';
        if (minText) minText.style.display = collapsed ? 'none' : 'inline';
        sessionStorage.setItem('sidebarCollapsed', collapsed ? '1' : '0');
    }

    function toggleSidebar() {
        if (!sidebar) return;
        var isNowCollapsed = !sidebar.classList.contains('collapsed');
        setSidebarState(isNowCollapsed);
    }

    // Tombol hamburger di header
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function (e) {
            e.preventDefault();
            toggleSidebar();
        });
    }

    // Tombol Minimize di sidebar-footer — dibuat secara dinamis
    var sidebarFooter = document.querySelector('.sidebar-footer');
    if (sidebarFooter && sidebar && !document.getElementById('sidebarMinimizeBtn')) {
        var minimizeBtn = document.createElement('a');
        minimizeBtn.id = 'sidebarMinimizeBtn';
        minimizeBtn.href = '#';
        minimizeBtn.className = 'nav-item sidebar-minimize-btn';
        minimizeBtn.innerHTML = '<i id="minimizeBtnIcon" class="fas fa-angle-double-left"></i><span id="minimizeBtnText"> Minimize Panel</span>';
        minimizeBtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            toggleSidebar();
        });
        sidebarFooter.insertBefore(minimizeBtn, sidebarFooter.firstChild);
    }

    // Restore state sidebar dari sessionStorage
    var savedState = sessionStorage.getItem('sidebarCollapsed');
    if (savedState === '1') {
        setSidebarState(true);
    }

    // ============================================================
    // AUTH GUARD — Redirect ke login jika belum login
    // ============================================================
    var userRole    = sessionStorage.getItem('role');
    var currentPage = window.location.pathname.split('/').pop();
    var publicPages = ['index.html', '', '/'];

    if (!userRole && publicPages.indexOf(currentPage) === -1) {
        window.location.href = 'index.html';
        return;
    }

    // ============================================================
    // NAMA ADMIN — Tampilkan dari localStorage (diset saat login)
    // ============================================================
    var adminName   = localStorage.getItem('adminName') || 'Admin BKK SMK NU Darussalam';
    var displayObj  = document.getElementById('displayAdminName');
    var initialObj  = document.getElementById('displayAdminInitials');
    if (displayObj)  displayObj.innerText = adminName;
    if (initialObj)  initialObj.innerText = adminName.charAt(0).toUpperCase();

    // ============================================================
    // LOGOUT
    // ============================================================
    var logoutBtn = document.querySelector('.sidebar-footer a[href="index.html"]');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function (e) {
            e.preventDefault();
            sessionStorage.removeItem('role');
            localStorage.removeItem('adminName');
            window.location.href = 'index.html';
        });
    }
});
