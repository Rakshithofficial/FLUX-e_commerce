document.addEventListener("DOMContentLoaded", () => {
  const authActions = document.getElementById("authActions");
  const profileWrapper = document.getElementById("profileWrapper");

  const profileBtn = document.getElementById("profileBtn");
  const profileMenu = document.getElementById("profileMenu");

  const navName = document.getElementById("navName");
  const navAvatar = document.getElementById("navAvatar");
  const logoutBtn = document.getElementById("logoutBtn");

  const user = JSON.parse(localStorage.getItem("flux_user"));

  /* =====================
     AUTH VISIBILITY
  ===================== */
  if (!user) {
    if (authActions) authActions.style.display = "flex";
    if (profileWrapper) profileWrapper.style.display = "none";
    return;
  }

  if (authActions) authActions.style.display = "none";
  if (profileWrapper) profileWrapper.style.display = "flex";

  navName.textContent = user.name || "User";

  // ✅ FIXED AVATAR PATH (was ../assets/...)
  navAvatar.src =
    localStorage.getItem("flux_avatar") ||
    "/static/images/placeholder.png";

  /* =====================
     DROPDOWN TOGGLE
  ===================== */
  if (profileBtn && profileMenu) {
    profileBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      profileMenu.classList.toggle("open");
    });

    // close when clicking outside
    document.addEventListener("click", () => {
      profileMenu.classList.remove("open");
    });
  }

  /* =====================
     LOGOUT
  ===================== */
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("flux_user");

      // ✅ FIXED PATH (was ../index.html)
      window.location.href = "/";
    });
  }
});