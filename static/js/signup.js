document.addEventListener("DOMContentLoaded", () => {
  let isLogin = false;

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmInput = document.getElementById("confirmPassword");

  const submitBtn = document.getElementById("submitBtn");
  const switchMode = document.getElementById("switchMode");
  const switchText = document.getElementById("switchText");
  const formTitle = document.getElementById("formTitle");
  const successMsg = document.getElementById("successMsg");

  const googleBtn = document.getElementById("googleBtn");
  const appleBtn = document.getElementById("appleBtn");

  const oauthModal = document.getElementById("oauthModal");
  const oauthLogo = document.getElementById("oauthLogo");
  const oauthText = document.getElementById("oauthText");

  const users = JSON.parse(localStorage.getItem("flux_users")) || [];

  function showMsg(msg, error = false) {
    successMsg.textContent = msg;
    successMsg.style.display = "block";
    successMsg.style.color = error ? "red" : "green";
  }

  /* =====================
     TOGGLE SIGNUP / SIGNIN
  ===================== */
  switchMode.addEventListener("click", (e) => {
    e.preventDefault();
    isLogin = !isLogin;

    if (isLogin) {
      nameInput.style.display = "none";
      confirmInput.style.display = "none";
      submitBtn.textContent = "Sign In";
      formTitle.textContent = "Welcome back";
      switchText.textContent = "New user?";
      switchMode.textContent = "Create account";
    } else {
      nameInput.style.display = "block";
      confirmInput.style.display = "block";
      submitBtn.textContent = "Create Account";
      formTitle.textContent = "Create your account";
      switchText.textContent = "Already a user?";
      switchMode.textContent = "Sign in";
    }

    successMsg.style.display = "none";
  });

  /* =====================
     EMAIL AUTH
  ===================== */
  submitBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirm = confirmInput.value;

    if (!email || !password) {
      showMsg("Please fill all required fields", true);
      return;
    }

    if (!isLogin) {
      if (!name) {
        showMsg("Enter your name", true);
        return;
      }

      if (password !== confirm) {
        showMsg("Passwords do not match", true);
        return;
      }

      if (users.find(u => u.email === email)) {
        showMsg("Account already exists", true);
        return;
      }

      const user = { name, email, password, authType: "email" };
      users.push(user);

      localStorage.setItem("flux_users", JSON.stringify(users));
      localStorage.setItem("flux_user", JSON.stringify(user));

      showMsg("Account created ✓ Redirecting...");
    } else {
      const user = users.find(u => u.email === email);
      if (!user) {
        showMsg("User not found", true);
        return;
      }

      if (user.password !== password) {
        showMsg("Wrong password", true);
        return;
      }

      localStorage.setItem("flux_user", JSON.stringify(user));
      showMsg("Signed in ✓ Redirecting...");
    }

    setTimeout(() => {
      window.location.href = "/home/";
    }, 1200);
  });

  /* =====================
     GOOGLE / APPLE (DUMMY)
  ===================== */
  function oauthLogin(type) {
    oauthModal.style.display = "flex";

    if (type === "google") {
      oauthLogo.textContent = "G";
      oauthText.textContent = "Signing in with Google…";
    } else {
      oauthLogo.textContent = "";
      oauthText.textContent = "Signing in with Apple…";
    }

    setTimeout(() => {
      const user = {
        name: type === "google" ? "Google User" : "Apple User",
        email: `${type}@flux.dev`,
        authType: type
      };

      localStorage.setItem("flux_user", JSON.stringify(user));
      window.location.href = "/home/";
    }, 1500);
  }

  googleBtn.addEventListener("click", () => oauthLogin("google"));
  appleBtn.addEventListener("click", () => oauthLogin("apple"));
});